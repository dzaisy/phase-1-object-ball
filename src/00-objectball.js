function gameObject() {

    return {
        home: [
            {
            teamName: 'Brooklyn Nets',
            colours: ['Black', 'White'],
            players: [
                    {
                        'Alan Anderson': {
                            'number': 0,
                            'shoe': 16,
                            'points': 22,
                            'rebounds': 12,
                            'assists': 12,
                            'steals': 3,
                            'blocks': 1,
                            'slamDunks': 1,
                        },
                    },
                    {
                        'Reggie Evans': {
                            'number': 30,
                            'shoe': 14,
                            'points': 12,
                            'rebounds': 12,
                            'assists': 12,
                            'steals': 12,
                            'blocks': 12,
                            'slamDunks': 7,
                        },
                    },
                    {
                        'Brook Lopez': {
                            'number': 11,
                            'shoe': 17,
                            'points': 17,
                            'rebounds': 19,
                            'assists': 10,
                            'steals': 3,
                            'blocks': 1,
                            'slamDunks': 15,
                        },
                    },
                    {
                        'Mason Plumlee': {
                            'number': 1,
                            'shoe': 19,
                            'points': 26,
                            'rebounds': 12,
                            'assists': 6,
                            'steals': 3,
                            'blocks': 8,
                            'slamDunks': 5,
                        },
                    },
                    {
                        'Jason Terry': {
                            'number': 31,
                            'shoe': 15,
                            'points': 19,
                            'rebounds': 2,
                            'assists': 2,
                            'steals': 4,
                            'blocks': 11,
                            'slamDunks': 1,
                        },
                    },
            ]
            }
        
        ],

        away: [
            {
                teamName: 'Charlotte Hornets',
                colours: ['Turquoise', 'Purple'],
                players: [
                    {
                        'Jeff Adrien': {
                            'number': 4,
                            'shoe': 18, 
                            'points': 10, 
                            'rebounds': 1,
                            'assists': 1,
                            'steals': 2,
                            'blocks': 7,
                            'slamDunks': 2,
                        },
                    },
                    {
                        'Bismak Biyombo': {
                            'number': 0,
                            'shoe': 16,
                            'points': 12,
                            'rebounds': 4,
                            'assists': 7,
                            'steals': 7,
                            'blocks': 15,
                            'slamDunks': 10,
                        },
                    },
                    {
                        'DeSagna Diop': {
                            'number': 2,
                            'shoe': 14,
                            'points': 24,
                            'rebounds': 12,
                            'assists': 12,
                            'steals': 4,
                            'blocks': 5,
                            'slamDunks': 5,
                        },
                    },
                    {
                        'Ben Gordon': {
                            'number': 8,
                            'shoe': 15,
                            'points': 33,
                            'rebounds': 3,
                            'assists': 2,
                            'steals': 1,
                            'blocks': 1,
                            'slamDunks': 0,
                        },
                    },
                    {
                        'Brendan Haywood': {
                            'number': 33,
                            'shoe': 15,
                            'points': 6,
                            'rebounds': 12,
                            'assists': 12,
                            'steals': 22,
                            'blocks': 5,
                            'slamDunks': 12,
                        },
                    },
            ],
            }
            
        ],
    }; 
}
console.log(gameObject());

function homeTeamName() {
    let object = gameObject();
    return object['home']['teamName'];
}
console.log(homeTeamName());

function awayTeamName() {
    let object = gameObject();
    return object['away']['teamName'];
}
console.log(awayTeamName()); 

function numPointsScored(name, points) {
    if (points.hasOwn(name)) { //hasOwn checks to see if property exists
        return points[name];
    }
    else {
        return 'player not found'
    }
}

function shoeSize(name, shoe) {
    if (shoe.hasOwn(name)) {
        return shoe[name];
    }
    else {
        return 'player not found'
    }
}

function teamColours(teamName) {
    if (game['home']['teamName'] === teamName) { // game calls to the property names as opposed to their values. this allows us to access the player data for each team dynamically, without explicitly knowing the team names in advance.
        return game['home']['colours'];
    } 
    else if (game['away']['teamName'] === teamName) {
        return game['away']['colours'];
    } 
    else {
        return 'team not found';
    }
}

function teamNames() {
    return [game['home']['teamName'], game['away']['teamName']];
}

function playerNumbers(teamName) {
    if (game['home']['teamName'] === teamName) {
        teamPlayers = game['home']['players'];
    }
    else if (game['away']['teamName'] === teamName) {
        teamPlayers = game['away']['players'];
    } 
    else {
        return 'team not found';
    }
    // checks for matches and acts accordingly
    return Object.values(teamPlayers).map(player => player['number']); // returns values of the array of jersey numbers

}

function playerStats(name) {
    for (const team in game) {
        const players = game[team]['players']; // game[team] is used to access the names in the onject as opposed to the actual values
        if (players.hasOwn(name)) {
            return players[name];
        }
    }
    return 'player not found';
}

function bigShoeRebounds() {
    let largestShoeSize = 0; // initialises and creates a starting point
    let playerWithLargestShoe = null; // initialises
    for (const team in game) { // loop for team specifically
        const players = game[team]['players'];
        for (const name in players) { // loop for players
            const player = players[name];
            if (player['shoe'] > largestShoeSize) {
                largestShoeSize = player['shoe'];
                playerWithLargestShoe = player;
            } // the 2 loops allow computer to look at players from both the away and home teams
        }
    }
    if (playerWithLargestShoe) {
        return playerWithLargestShoe['rebounds']; // returns num of rebounds
    } 
    else {
        return 'no player found'; 
    }
}

// BONUS Q

// #1
function mostPointsScored() {
    let pmostPoints = null;
    let maxPoints = 0;

    for (const team in game) {
        const players = game[team]['players'];
        for (const playerName in players) {
            const player = players[playerName];
            if (player['points'] > maxPoints) {
                maxPoints = player['points'];
                pmostPoints = playerName;
            }
        }
    }
    return pmostPoints;
}

// #2
function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;

    for (const team in game) {
        const players = game[team]['players'];
        for (const playerName in players) {
            const player = players[playerName];
            if (team === 'home') {
                homePoints = homePoints + player['points'];
            } 
            else if (team === 'away') {
                awayPoints = awayPoints +  player['points']; 
            }
        }
    }

    if (homePoints > awayPoints) {
        return game['home']['teamName'];
    } 
    else if (awayPoints > homePoints) {
        return game['away']['teamName']; 
    } 
    else {
        return 'both teams have tied';
    }
}

// #3
function playerWithLongestName() {
    let longestName = null;
    let maxLength = 0;

    for (const team in game) {
        const players = game[team]['players']; 
        for (const playerName in players) {
            if (playerName.length > maxLength) {
                maxLength = playerName.length;
                longestName = playerName;
            }
        }
    }
    return longestNamePlayer;
}

// SUPER BONUS
function doesLongNameStealATon() {
    const longestName = playerWithLongestName(); 
    if (!longestName) { 
        return false
    }
    else {
        let mostSteals = null;
        let maxSteals = 0;
        for (const team in game) {
            const players = game[team]['players'];
            for (const playerName in players) {
                const player = players[playerName];
                if (player['steals'] > maxSteals) {
                    maxSteals = player['steals'];
                    mostSteals = player;
                }
            }
        }
        return longestName === mostSteals ;
    }
}