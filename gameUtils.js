exports.initScoreboard = (no_of_players, score) => {
    for(i = 0; i < no_of_players; i++) {
        score[`player_${i}`] = [];
        for(j = 0; j < no_of_players; j++) {
            if(i == j) {
                score[`player_${i}`].push('-');
            }
            else score[`player_${i}`].push(0);
        }
    }
}

exports.displayChoices = arr => {
    let choices = {}
    for(i = 0; i < arr.length; i++) {
        if(arr[i] == 0) choices[`player_${i}`] = 'Rock';
        else if(arr[i] == 1) choices[`player_${i}`] = 'Paper';
        else choices[`player_${i}`] = 'Scissor';
    }
    console.table(choices);
}

whoWin = (p1, p2) => {
    // if(p1 == 0 && p2 == 1) return 'player 2';
    // else if(p1 == 0 && p2 == 2) return 'player 1';
    // else if(p1 == 1 && p2 == 0) return 'player 1';
    // else if(p1 == 1 && p2 == 2) return 'player 2';
    // else if(p1 == 2 && p2 == 0) return 'player 2';
    // else if(p1 == 2 && p2 == 1) return 'player 1';
    // else return 'tie'
    if((p1 == 0 && p2 == 2) || (p1 == 1 && p2 == 0) || (p1 == 2 && p2 == 1)) {
        return true;
    }
    else false;
}

exports.solve = (choices, score) => {
    for(i = 0; i < choices.length; i++) {
        for(j = 0; j < choices.length; j++) {
            if(i !=j && whoWin(choices[i], choices[j])) {
                score[`player_${i}`][j] += 1 
            }
        }
    }
}