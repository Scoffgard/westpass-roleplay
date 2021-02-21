import * as alt from 'alt-server';

import chat from 'chat';

const playerSpawn = {
    x: -1037.82861328125,
    y: -2737.97802734375,
    z: 19.1640625
};

import Database from './../database';
const db = new Database();

alt.on('playerConnect', async player => {
    const results = await db.query(`SELECT * FROM users WHERE socialid="${player.socialId}"`);

    player.spawn(playerSpawn.x, playerSpawn.y, playerSpawn.z, 0);
    player.model = 'mp_m_freemode_01';

    alt.log(`[CONNECT] ${player.ip} (${player.name} | ${player.socialId})`);

    if (!results[0]) return chat.send(player, '{FF0000}Vous n\'avez pas de compte. Pour en créer un, éxécuter la commande {FFAAAA}/register{FF0000}.');

    player.setMeta('id', results[0].id);
    player.setMeta('rank', results[0].rank);

    chat.send(player, `Votre id est : ${results[0].id}`);

    const chars = await db.query(`SELECT * FROM characters WHERE ownerID="${results[0].id}"`);

    if (!chars[0]) return chat.send(player, '{FF0000}Vous n\'avez pas de personnages, faites {FFAAAA}/createChar {FF0000}pour en creer un.');

    chat.send(player, 'Liste de vos personnages :');
    for (let char of chars) {
        chat.send(player, `${char.characterID} - ${char.name}`);
    }
    chat.send(player, 'Exécutez la commande /choiceChar <id> pour choisir votre personnage.');
});