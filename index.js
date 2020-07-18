// let rock 0
// let paper 1
// let scissor 2

const iterations = 50;
const no_of_players = 4;

const score = {};

const gameUtils = require('./gameUtils');

play = () => {
    gameUtils.initScoreboard(no_of_players, score);

    for(k = 0; k < iterations; k++) {
        console.log(`Iteration ${k + 1}`);

        let choices = [];
        for(i = 0; i < no_of_players; i++)
            choices.push(Math.floor(Math.random() * 3));
        
        gameUtils.displayChoices(choices);
        gameUtils.solve(choices, score);
        
        console.log('Result');
        console.table(score);
    }
}

play();
