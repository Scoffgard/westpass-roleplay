import * as alt from 'alt-client';
import * as native from 'natives';
let hidden = false;

alt.on('callback:chooseChar', (id, char) => {
    alt.emit('view:accessProperties', id, true, 'isVisible', false);
    alt.emit('view:useMethod', id, 'unfocus');
    alt.showCursor(false);
    alt.toggleGameControls(true);
    alt.Player.local.setMeta('characterID', char);
    alt.emit('hideHUD');
});