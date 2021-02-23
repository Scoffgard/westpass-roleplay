import * as alt from 'alt-client';
import * as native from 'natives';

alt.onServer('anim:launchCharCreation', () => {alt.emit('anim:launchCharCreation')});

alt.onServer('anim:stopCharCreation', () => {alt.emit('anim:stopCharCreation')});

alt.onServer('anim:playCutscene', cutscene => {
    native.requestCutscene(cutscene, 8);
    native.startCutscene(0);
});

alt.onServer('anim:stopCutscene', () => {
    native.stopCutsceneImmediately();
});

alt.onServer('view:serverLaunch', (id, data, needCallback, emitName) => {
    alt.emit('view:load', id, `${needCallback ? `callback:${id}` : undefined}`);
    alt.emit('hideHUD');
    if (!needCallback) return;
    alt.on(`callback:${id}`, () => {
        alt.emit('view:useMethod', id, 'emit', emitName, data);
        alt.emit('view:useMethod', id, 'focus', true);
        alt.showCursor(true);
        alt.toggleGameControls(false);
        alt.emit('view:on', id, 'validate', 'callback:chooseChar');
    });
});