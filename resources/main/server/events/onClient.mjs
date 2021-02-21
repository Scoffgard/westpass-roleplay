import * as alt from 'alt-server';

alt.onClient('time:setDateTime', (player, args) => {
    player.setDateTime(parseInt(args[2]), parseInt(args[1])-1, parseInt(args[0]), parseInt(args[3]), parseInt(args[4]), parseInt(args[5])-1);
})