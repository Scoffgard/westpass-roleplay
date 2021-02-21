import * as alt from 'alt-client';
import {special, blips} from './data/blips';

for(const [key, value] of Object.entries(blips)) {
    for(const blip of value.blips) {
        placeBlip(blip.x, blip.y, blip.z, value.sprite, value.color, value.name);
    }
}

for(const blip of special) {
    placeBlip(blip.x, blip.y, blip.z, blip.sprite, blip.color, blip.name);
}

function placeBlip(x, y, z, sprite, color, name) {
    let blip = new alt.PointBlip(x, y, z);
    blip.sprite = sprite;
    blip.shortRange = true;
    blip.color = color;
    blip.flashes = false;
    blip.pulse = false;
    blip.name = name;
}