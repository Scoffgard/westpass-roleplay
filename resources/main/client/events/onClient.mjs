import * as alt from 'alt-client';
import * as native from 'natives';
let hidden = false;

alt.on('anim:launchCharCreation', () => {
    alt.toggleGameControls(false);

    native.setEntityCoords(alt.Player.local.scriptID, 402.83, -996.53, -99.02, 0.0, 0.0, 0.0, true)
    native.setEntityHeading(alt.Player.local.scriptID, 180.00);

    const cam = native.createCam("DEFAULT_SCRIPTED_CAMERA", 1);
    native.setCamCoord(cam, 402.81, -998.1, -98.5);
	native.setCamRot(cam, 0, 0, 0);
    native.setCamFov(cam, 50);
    native.setCamActive(cam, true);
    native.renderScriptCams(true, false, 0, true, false);
});

alt.on('anim:stopCharCreation', () => {
    alt.toggleGameControls(true);

    native.setEntityCoords(alt.Player.local.scriptID, -1037.82861328125, -2737.97802734375, 19.1640625, 0, 0, 0, true);

    native.renderScriptCams(false, false, 0, true, false);
});

alt.on('callback:chooseChar', (id, char) => {
    alt.emit('view:accessProperties', id, true, 'isVisible', false);
    alt.emit('view:useMethod', id, 'unfocus');

    if (char == 'new') return alt.emit('anim:launchCharCreation');

    alt.showCursor(false);
    alt.toggleGameControls(true);
    alt.Player.local.setMeta('characterID', char);
    alt.emit('hideHUD');
});