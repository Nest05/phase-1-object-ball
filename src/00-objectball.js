function gameObject(){

    const game = {
        home: {},
        away: {}
    };
    // Home team data
    game.home.teamName = 'Brooklyn Nets';
    game.home.colors = ['Black', 'White'];
    game.home.players = {};

    // Away team data
    game.away.teamName = 'Charlotte Hornets';
    game.away.colors = ['Turquoise', 'Purple'];
    game.away.players = {};


    // Player data for home team
    game.home.players['Alan Anderson'] = {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
    }; 
    game.home.players['Reggie Evans'] = {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7
    }; 
     game.home.players['Brook Lopez'] = {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15
    }; 
     game.home.players['Mason Plumlee'] = {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5
    }; 
     game.home.players['Jason Terry'] = {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1
    }; 
    // Player data for away team
    
     game.away.players['Jeff Adrien'] = {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2
    };   
     game.away.players['Bismak Biyombo']= {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10
    };    
     game.away.players['DeSagna Diop']= {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5
    };   
     game.away.players['Ben Gordon'] = {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
    };
     game.away.players['Brendan Haywood'] = {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12
    };
    // Function to get the number of poinst scored by player
    function numPointsScored(playerName){
        // Check if player is in home team
        if (game.home.players[playerName]) {
            return game.home.players[playerName].points;
        }

        // check if player is in away team
        if (game.away.players[playerName]){
            return game.away.players[playerName].points;
        }

        // If player is not found in any team
        return "Player not found"

    }
    // Function to get shoe size of player
    function shoeSize(playerName){
        // Check if player is in home team
        if (game.home.players[playerName]) {
            return game.home.players[playerName].shoe;
        }

        // check if player is in away team
        if (game.away.players[playerName]){
            return game.away.players[playerName].shoe;
        }

        // If player is not found in any team
        return "Player not found"

    }
   
   return { 
    gameData: game,
    numPointsScored: numPointsScored,
    shoeSize: shoeSize,
    
   };
}

const data = gameObject();
const gameData = data.gameData;
const pointsScored = data.numPointsScored;
const playerShoeSize = data.shoeSize;


 console.log(pointsScored('Alan Anderson'));
 console.log(playerShoeSize('Alan Anderson'));

 // Function to show team colors
 function teamColors(teamName) {
    if (teamName === gameData.home.teamName) {
      return gameData.home.colors;
    } else if (teamName === gameData.away.teamName) {
      return gameData.away.colors;
    } else {
      return 'Team not found';
    }
  }
  console.log(teamColors('Brooklyn Nets'));

  // Function to show team names
  function teamNames(game) {
    // Access the team names from the game object
    const homeTeamName = game.home.teamName;
    const awayTeamName = game.away.teamName;

    // Return an array containing the team names
    return [homeTeamName, awayTeamName];
}

// Call the teamNames function with the gameData object
const teamNamesArray = teamNames(gameData);
console.log(teamNamesArray);

// function to get player numbers of each team
function playerNumbers(game, teamName) {
    // Check if the team name exists in the game object
    if (game.home.teamName === teamName) {
        return Object.values(game.home.players).map(player => player.number);
    } else if (game.away.teamName === teamName) {
        return Object.values(game.away.players).map(player => player.number);
    } else {
        return [];
    }
}

// Call the playerNumbers function with the gameData object and 'Brooklyn Nets' team name
const brooklynNetsJerseyNumbers = playerNumbers(gameData, 'Brooklyn Nets');
console.log(brooklynNetsJerseyNumbers); 

// Call the playerNumbers function with the gameData object and 'Charlotte Hornets' team name
const charlotteHornetsJerseyNumbers = playerNumbers(gameData, 'Charlotte Hornets');
console.log(charlotteHornetsJerseyNumbers);

// Function for all of a players stats
function playerStats(playerName) {
    // Search for the player's stats in both the home and away teams
    const homePlayerStats = gameData.home.players[playerName];
    const awayPlayerStats = gameData.away.players[playerName];

    // Return the player's stats if found, or null if not found
    return homePlayerStats || awayPlayerStats || null;
}

// Call the playerStats function with the player name 'Alan Anderson'
console.log(playerStats("Ben Gordon")); 

// Function for player with largest shoe size and most rebounds
function bigShoeRebounds(game) {
    // Initialize variables for tracking the player with the largest shoe size and their rebounds
    let playerWithLargestShoe = null;
    let largestShoeSize = 0;

    // Iterate through the players in both the home and away teams
    for (const player of Object.values(game.home.players)) {
        if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoe = player;
        }
    }
    for (const player of Object.values(game.away.players)) {
        if (player.shoe > largestShoeSize) {
            largestShoeSize = player.shoe;
            playerWithLargestShoe = player;
        }
    }

    // Return the number of rebounds associated with the player with the largest shoe size
    return playerWithLargestShoe.rebounds || null;
}

// Call the bigShoeRebounds function with the gameData object
const bigShoeReboundsCount = bigShoeRebounds(gameData);
console.log(bigShoeReboundsCount);

function mostPointsScored() {
    let maxPoints = 0;
    let playerWithMaxPoints = '';
  
    for (const team in gameData) {
      for (const player in gameData[team].players) {
        const points = gameData[team].players[player].points;
  
        if (points > maxPoints) {
          maxPoints = points;
          playerWithMaxPoints = player;
        }
      }
    }
  
    return playerWithMaxPoints;
  }

  function winningTeam() {
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (const player in gameData.home.players) {
      homeTeamPoints += gameData.home.players[player].points;
    }
  
    for (const player in gameData.away.players) {
      awayTeamPoints += gameData.away.players[player].points;
    }
  
    if (homeTeamPoints > awayTeamPoints) {
      return gameData.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
      return gameData.away.teamName;
    } else {
      return 'Both teams have the same number of points';
    }
  }

  function playerWithLongestName() {
    let longestName = '';
  
    for (const team in gameData) {
      for (const player in gameData[team].players) {
        const playerName = player;
  
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
  
    return longestName;
  }
console.log(mostPointsScored());      
console.log(winningTeam());           
console.log(playerWithLongestName());

function doesLongNameStealATon() {
    let longestName = '';
    let playerWithMostSteals = '';
  
    for (const team in gameData) {
      for (const player in gameData[team].players) {
        const playerName = player;
        const steals = gameData[team].players[player].steals;
  
        if (playerName.length > longestName.length) {
          longestName = playerName;
          playerWithMostSteals = playerName;
        } else if (playerName.length === longestName.length && steals > gameData[team].players[playerWithMostSteals].steals) {
          playerWithMostSteals = playerName;
        }
      }
    }
  
    return playerWithMostSteals === longestName;
}
console.log(doesLongNameStealATon());