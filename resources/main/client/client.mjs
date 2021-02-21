import * as alt from 'alt-client';
import * as native from 'natives';

import './blips';
import './interiors';

import './events/onClient';
import './events/onServer';

import './views/viewsLoader';

alt.setMsPerGameMinute(60000);

alt.emitServer('time:setDateTime', native.getUtcTime().toString().replace(',', '').split(","));
alt.setInterval(() => {
    alt.emitServer('time:setDateTime', native.getUtcTime().toString().replace(',', '').split(","));
    alt.emitServer('save:pos');
}, 60000);

alt.everyTick(() => {
    native.hideHudComponentThisFrame(7); //area name
    native.hideHudComponentThisFrame(8); //vehicle class
    native.hideHudComponentThisFrame(6); //vehicle name
    native.hideHudComponentThisFrame(9); //street name
    native.disableControlAction(0, 37, true);

    native.invalidateIdleCam();
});