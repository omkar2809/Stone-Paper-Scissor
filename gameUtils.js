exports.initScoreboard = (no_of_players, score) => {
    for(i = 0; i < no_of_players; i++) 
        score[`player_${i}`] = Array(no_of_players).fill(0);
}

whoWin = (p1, p2) => {
    if((p1 === 'Rock' && p2 === 'Scissor') || (p1 === 'Paper' && p2 === 'Rock') || (p1 === 'Scissor' && p2 === 'Paper')) return true;
    else false;
}

exports.solve = (choices, score) => {
    choices.map((p1, i) => choices.map((p2, j) => {
        if(i == j) score[`player_${i}`][j] = '-';
        else if(whoWin(p1, p2)) score[`player_${i}`][j] += 1;
    }));
}