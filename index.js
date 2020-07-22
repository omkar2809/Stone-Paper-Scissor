const iterations = 50;
const no_of_players = 4;

const score = {};
const choices = ['Rock', 'Paper', 'Scissor'];

const gameUtils = require('./gameUtils');

play = () => {
    gameUtils.initScoreboard(no_of_players, score);

    for(k = 0; k < iterations; k++) {
        console.log(`Iteration ${k + 1}`);

        let userChoices = [...Array(no_of_players)].map(() => choices[Math.floor(Math.random() * choices.length)]);
        
        console.table(userChoices);
        gameUtils.solve(userChoices, score);
        
        console.log('Result');
        console.table(score);
    }
}

play();
