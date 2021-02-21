import * as alt from 'alt-client';
import * as native from 'natives';

alt.onServer('anim:launchCharCreation', () => {
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

alt.onServer('anim:stopCharCreation', () => {
    alt.toggleGameControls(true);

    native.setEntityCoords(alt.Player.local.scriptID, -1037.82861328125, -2737.97802734375, 19.1640625, 0, 0, 0, true);

    native.renderScriptCams(false, false, 0, true, false);
});

alt.onServer('anim:playCutscene', cutscene => {
    native.requestCutscene(cutscene, 8);
    native.startCutscene(0);
});

alt.onServer('anim:stopCutscene', () => {
    native.stopCutsceneImmediately();
});