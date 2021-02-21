import * as alt from 'alt-server';
import chat from 'chat';

import Database from './database';
const db = new Database();


chat.registerCmd('veh', (player, args) => {
    if (player.getMeta('rank') >= 4) {
        new alt.Vehicle(args[0], player.pos.x, player.pos.y+1, player.pos.z, 0, 0, 0);
    } else {
        chat.send(player, "{FF0000}Vous n'avez pas la permission d'éxécuter cette commande !");
    }
});

chat.registerCmd('animCreateChar', (player, args) => {
    alt.emitClient(player, 'anim:launchCharCreation');
});

chat.registerCmd('stopAnimCreateChar', (player, args) => {
    alt.emitClient(player, 'anim:stopCharCreation');
});

chat.registerCmd('pos', (player, args) => {
    chat.send(player, JSON.stringify(player.pos));
    if (player.getMeta('rank') >= 4) {
        alt.log(JSON.stringify(player.pos));
    }
});

chat.registerCmd('register', async (player, args) => {
    let results = await db.query(`SELECT * FROM users WHERE socialid="${player.socialId}"`);
    if (results[0]) return chat.send(player, '{FF0000}Erreur, vous avez déjà un compte. Impossible d\'en créer un nouveau.');

    await db.query(`INSERT INTO users (socialid, ban) VALUES ("${player.socialId}", "{}")`);

    results = await db.query(`SELECT * FROM users WHERE socialid="${player.socialId}"`);
    if (!results[0]) return chat.send(player, '{FF0000}Erreur inconnue lors de la création de votre compte. Veuillez contacter un administrateur !');

    chat.send(player, '{00FF00} Compte créer avec succès !');

    player.setMeta('id', results[0].id);
    player.setMeta('rank', results[0].rank);

    chat.send(player, `Votre id est : ${results[0].id}`);
});


chat.registerCmd('createChar', async (player, args) => {
    let name = args.join(' ');

    db.query(`INSERT INTO characters (ownerID, name, infos, inventory, properties, vehicles) VALUES ("${player.getMeta('id')}", "${name}", "{}", "[]", "[]", "[]")`);

    chat.send(player, `Personnage nommé ${name} crée avec succès !`);
});

chat.registerCmd('cut', (player, args) => {
    if(!args[0]) return chat.send(player, 'Mauvaise scène !');

    alt.emitClient(player, 'anim:playCutscene', args[0]);
});

chat.registerCmd('ncut', (player, args) => {
    alt.emitClient(player, 'anim:stopCutscene');
});