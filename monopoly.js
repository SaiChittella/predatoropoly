
const board = [
    "Go", "Mediteranean-Avenue", "communityChest1", "Baltic-Avenue", "Income-Tax", "Reading-Railroad", "Oriental-Avenue", "Chance-row-1", "Vermont-Avenue", 
    "Fat-Connecticut-Avenue", "Jail-Visit", "St-Charles-Place", "Electric-Company", "States-Avenue", "Virgina-Avenue", "Pennsylvania-Railroad", "St-James-Place", "Community-chest-row-2",
    "TennesseAvenue", "New-York-Avenue", "Free-Parking", "Kentucky-Avenue", "Chance-row-3", "Indiana-Avenue", "Illinois-Avenue", "B-O-Railroad", "Atlantic-Avenue",
    "Ventnor-Avenue", "Water-Works", "Marvin-Gardens", "Go-To-Jail", "Pacific-Avenue", "North-Carolina-Avenue", "Community-chest-row-4", "Pennsylvania-Avenue", "Short-Line", 
    "Chance-row-4", "Park-Place", "Luxury-Tax", "Boardwalk"
]

cardEnforcement= {
    'Advance To Boardwalk': {'currPosition': (board.length - 1)}, 
    'Adance to Go (Collect $200)': {'currPosition': 0, 'money': 200},
    'Advance To Illinois Avenue. If you pass Go, collect $200': {'currPosition': 24, 'money': 200},
    'Advance to St. Charles Place. If you pass Go, collect $200': {'currPosition': 11, 'money': 200},
    'Advance to the nearest Railroad. If unowned, you buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled': {'currPosition': [5, 15, 25, 35]},
    'Advance piece to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown.': {'currPosition': [12, 28]},
    'Bank pays you divident of $50': {'money': 50},
    'Get Out Of Jail Free': {'getOutOfJailFree': true},
    'Go Back Three Spaces': {'curPosition': -3},
    'Go To Jail. Go directly to Jail, do not pass Go, do not collect $200': {'currPosition': 10},
    'Make general repairs on all your property. For each house pay $25. For each hotel pay $100': 'specialCase1',
    'Speeding fine $15': {'money': -15},
    'Take a trip to Reading Railroad. If you pass Go, collect $200': {'currPosition': 5},
    'You have been elected Chairman of the Board. Pay each player $50': {'money': -50},
    'Your building loan matures. Collect $150': {'money': 150},
    'Bank error in your favor. Collect $200': {'money': 200},
    'From sale of stock you get $50': {'money': 50},
    'Holiday fund matures. Receive $100': {'money': 100},
    'Income tax refund': {'money': 20},
    'It is your birthday. Collect $10 from every player': {'money': 10},
    'Life insurance matures': {'money': 100},
    'Pay hospital fees of $100': {'money': -100},
    'Pay school fees of $50': {'money': -50},
    'Receive $25 consultancy fee': {'money': 25},
    'You are assessed for street repair. $40 per house. $115 per hotel': 'specialCase2',
    'You have won second prize in a beauty contest. Collect $10': {'money': 10},
    'You inherit $100': {'money': 100},
}

monopolyPieces = {
    "battleship": "battleship.png",
    "boot": "boot.png",
    "car": "car.png",
    "cat": "cat.png",
    "dog": "dog.jpg",
    "hat": "hat.png",
    "thimble": "thimble.png",
    "wheelbarrow": "wheelbarrow.png",
}

avenueStats = {
    "Mediteranean-Avenue": {"price": 60, "pricePerHouse": 50, "rent":{'0': 2, '1': 10, '2': 30, '3': 90, '4': 160, 'hotel': 250}},
    "Baltic-Avenue": {"price": 60, "pricePerHouse": 50, "rent": {'0': 4, '1':20, '2': 60, '3': 180, '4': 320, 'hotel': 450}},
    "Oriental-Avenue": {"price": 100, "pricePerHouse": 50, "rent": {'0': 6, '1': 30, '2': 90, '3': 270, '4': 400, 'hotel': 550}},
    "Vermont-Avenue": {'price': 100, 'pricePerHouse': 50, 'rent': {'0': 6, '1': 30, '2': 90, '3': 270, '4': 400, 'hotel': 550}},
    "Fat-Connecticut-Avenue": {'price': 120, 'pricePerHouse': 50, 'rent': {'0': 8, '1': 40, '2': 100, '3': 300, '4': 450, 'hotel': 600}},
    "St-Charles-Place": {'price': 140, 'pricePerHouse': 100, 'rent': {'0': 10, '1': 50, '2': 150, '3': 450, '4': 625, 'hotel': 750}},
    "States-Avenue": {'price': 140, 'pricePerHouse': 100, 'rent': {'0': 10, '1': 50, '2': 150, '3': 450, '4': 625, 'hotel': 750}},
    "Virgina-Avenue": {'price': 160, 'pricePerHouse': 100, 'rent': {'0': 12, '1': 60, '2': 180, '3': 500, '4': 700, 'hotel': 900}},
    "St-James-Place": {'price': 180, 'pricePerHouse': 100, 'rent': {'0': 14, '1': 70, '2': 200, '3': 550, '4': 750, 'hotel': 950}},
    "TennesseAvenue": {'price': 180, 'pricePerHouse': 100, 'rent': {'0': 14, '1': 70, '2': 200, '3': 550, '4': 750, 'hotel': 950}},
    "New-York-Avenue": {'price': 200, 'pricePerHouse': 100, 'rent': {'0': 16, '1': 80, '2': 220, '3': 600, '4': 800, 'hotel': 1000}},
    "Kentucky-Avenue": {'price': 220, 'pricePerHouse': 150, 'rent': {'0': 18, '1': 90, '2': 250, '3': 700, '4': 875, 'hotel': 1050}},
    "Indiana-Avenue": {'price': 220, 'pricePerHouse': 150, 'rent': {'0': 18, '1': 90, '2': 250, '3': 700, '4': 875, 'hotel': 1050}},
    "Illinois-Avenue": {'price': 240, 'pricePerHouse': 150, 'rent': {'0': 20, '1': 100, '2': 300, '3': 750, '4': 925, 'hotel': 1100}},
    "Atlantic-Avenue": {'price': 260, 'pricePerHouse': 150, 'rent': {'0': 22, '1': 110, '2': 330, '3': 800, '4': 975, 'hotel': 1150}},
    "Ventnor-Avenue": {'price': 260, 'pricePerHouse': 150, 'rent': {'0': 22, '1': 110, '2': 330, '3': 800, '4': 975, 'hotel': 1150}},
    "Marvin-Gardens": {'price': 280, 'pricePerHouse': 150, 'rent': {'0': 24, '1': 120, '2': 360, '3': 850, '4': 1025, 'hotel': 1200}},
    "Pacific-Avenue": {'price': 300, 'pricePerHouse': 200, 'rent': {'0': 26, '1': 130, '2': 390, '3': 900, '4': 1100, 'hotel': 1275}},
    "North-Carolina-Avenue": {'price': 300, 'pricePerHouse': 200, 'rent': {'0': 26, '1': 130, '2': 390, '3': 900, '4': 1100, 'hotel': 1275}},
    "Pennsylvania-Avenue": {'price': 320, 'pricePerHouse': 200, 'rent': {'0': 28, '1': 150, '2': 450, '3': 1000, '4': 1200, 'hotel': 1400}},
    "Park-Place": {'price': 350, 'pricePerHouse': 200, 'rent': {'0': 35, '1': 175, '2': 500, '3': 50, '4': 1100, 'hotel': 1300}},
    "Boardwalk": {'price': 400, 'pricePerHouse': 200, 'rent': {'0': 50, '1': 200, '2': 600, '3': 1400, '4': 1700, 'hotel': 2000}},
    "Railroads": {'price': 200, 'rent': {'1': 25, '2': 50, '3': 100, '4': 200}},
    "Utilities": {"price": 150, 'rent': {'1': 4, '2': 10}},
    "Income-Tax": {'price': 200},
    "Luxury-Tax": {'price': 100}
}

// put the pieces on the board, and display the amount of money each person has on the bottom. 

const piecesToChooseFrom = ["battleship", "boot", "car", "cat", "dog", "hat", "thimble", "wheelbarrow"]


playerDict = {
    
}

playerStats = {

}

let playerCount = 0;
askForPlayerCount();

function askForPlayerCount() {
    playerCount = parseInt(prompt("how many players are there?"));
}

while(playerCount > piecesToChooseFrom.length || playerCount <= 1){
    if(playerCount > piecesToChooseFrom.length) {
        alert("You have too many players, kill some of them.");//very good
    } else {
        alert("Get some friends.");
    }
    askForPlayerCount();
}

for(let i=1; i<=playerCount; i++){
    let playerName = prompt("What is player " + i + "'s name?");   
    let newStr = displayOptions(piecesToChooseFrom.length);
    let token = prompt("Choose your token from the following options: " + newStr);
    token = token.toLowerCase();
    while(!piecesToChooseFrom.includes(token)){
        token = prompt("Choose From The Options: " + newStr);
        token = token.toLowerCase();
    } 
    playerDict[playerName] = token;
    removeSelectedPiece(token);
}


function removeSelectedPiece(piece) {
    for(let i=0; i<piecesToChooseFrom.length; i++){
        if(piecesToChooseFrom[i] === piece) {
            piecesToChooseFrom.splice(i,1);
            break;
        }
    }
}

function displayOptions(numberOfOptionsRemaining){
    str = "";
    for(let i=0; i<numberOfOptionsRemaining; i++){
        if(i === numberOfOptionsRemaining - 1) {
            str += piecesToChooseFrom[i];
            continue;
        }
        str += piecesToChooseFrom[i] + ", ";
    }
    return str;
}



const arr = Object.keys(playerDict);
for(let i=0; i<arr.length; i++) {
    playerStats[arr[i]] = {"money": 1500, "properties": [], "getOutOfJailCard": false, "diceSum": 0,  "currPosition": 0, "place": 0, "propertyHouses": {}, 'inJail': false};
}

const playerStatsArr = Object.keys(playerStats);

let dice1;
let dice2;
let firstPlay = true;

const playerOrder = []


let count = 0;
let sum;
function diceRoll() {
    let jailCount = 0;
    if(firstPlay){
        determineWhoGoesFirst();
    } else {    
        alert("DiceRolll")
        sum = sumDice();
        // let sum = 12;
        if(count === playerCount) {
            count = 0;
        } 
        if(playerStats[playerOrder[count]]['inJail']) {
            jailCount++;
            if(jailCount === 3) {
                playerStats[playerOrder[count]['inJail']] = false;
            }
        }
        alert('New Sum: ' + (playerStats[playerOrder[count]]["currPosition"] + sum))
        if((playerStats[playerOrder[count]]["currPosition"] + sum) > (board.length - 1)) {
            alert('Sum is greater than board length...')
            alert('Previous SUm: ' + sum);
            sum -= ((board.length - 1) - playerStats[playerOrder[count]]["currPosition"]);
            alert('Sum after advanced equation: ' + sum)
            playerStats[playerOrder[count]]["currPosition"] = 0;
            playerStats[playerOrder[count]]["currPosition"] += sum;
            alert(playerStats[playerOrder[count]]["currPosition"]); 
            putOnGo(playerOrder[count]);
            distributeGoMoney(playerOrder[count]);
        } else if (playerStats[playerOrder[count]['currPosition']] + sum === 'Go') {
            playerStats[playerOrder[count]]["currPosition"] += sum; 
            distributeGoMoney(playerOrder[count]);
        }
        // alert('board length: ' + board.length);
        playerStats[playerOrder[count]]["currPosition"] += sum; 
        // alert('Type is: ' + typeof(playerStats[playerOrder[count]]["currPosition"]));
        alert(playerOrder[count] + ' rolled: ' + sum);
        move(playerOrder[count]);
    }
}

function putOnGo(player) {
    moveToken(player);
}


function distributeGoMoney(player) {
    alert('Player that has passed go: ' + player);
    playerStats[player]["money"] += 200;
    alert('They have recieved $200');
}


function moveToken(player) {
    const colors = ["orange", "red", 'yellow', "blue", "green", "purple", "brown", "black"];
    for(let i=0; i<pieceArr.length; i++) {
        let left = -3900;
        let top = 50;
        if(pieceArr[i].src === ("file:///C:/Monopoly/" + monopolyPieces[playerDict[player]])) {
            alert("You are going to: " + board[playerStats[player]["currPosition"]]);
            if(playerStats[player]["currPosition"] > 10 && playerStats[player]["currPosition"] < 20) {
                    left = -100;
            }
            document.querySelector("#" + board[playerStats[player]["currPosition"]]).appendChild(pieceArr[i]);
            pieceArr[i].style.top = top + "%";
            pieceArr[i].style.left = left + "%";
            pieceArr[i].style.border = "5px solid " + colors[i];
        } 
    } 
    let yourProperty = false;
    // alert('Position number: ' + playerStats[player]['currPosition']);
    let position = board[playerStats[player]["currPosition"]];
    // alert('Position: ' + position);
    let nonBuying = false;

    

    if(position === 'Go-To-Jail') {
        nonBuying = true;
        jail();
    }
    if(position === "Chance-row-1" || position === "Chance-row-3" || position === "Chance-row-4") {
        displayChance();
        nonBuying = true;
    } else if(position === "Community-chest-row-1" || position === "Community-chest-row-2" || position === "Community-chest-row-4") {
        displayCommunityChest();
        nonBuying = true;
    } else if(position === 'Income-Tax' || position === "Luxury-Tax" || position === "Jail-Visit" || position === "Free-Parking" || position === "Go-To-Jail" || position === "Go" || position === 'Electric-Company' || position === 'Water-Works') {
        // taxes 
        nonBuying = true;
        if(position === "Income-Tax" || position === 'Luxury-Tax') {
            payTaxes(player);
        } else if(position === 'Electric-Company' || position === 'Water-Works') {
            // write logic for utilities
            // nonBuying = true;
            if(!checkIfOwned(player)) {
                displayOptionsToBuyUtilities(player);
            } else {
                let costOfProperty;
                let owner = findWhoOwns(board[playerStats[player]['currPosition']]);
                let numOwned = propertiesOwned(owner, board[playerStats[player]['currPosition']]);
                if(numOwned == 1) {
                    costOfProperty = playerStats[player]['diceSum'] * 4;
                } else if(numOwned == 2){
                    costOfProerty = playerStats[player]['diceSum'] * 10; 
                }
                alert("You Have to Pay: " + costOfProperty);
                if(canPayRent(player, costOfProperty)) {
                    payRent(player, costOfProperty);
                } else {
                    if(!displayOptionsToSell(player)) {
                        displayLoss(player);
                    } else {
                        while(!canAfford(playerStats[player]["money"], player)) { 
                            if(!displayOptionsToSell(player)) {
                                displayLoss(player);
                            }
                        }
                    }
                }
            }        
        } 
        
    } else if(position === "Reading-Railroad" || position === "Pennsylvania-Railroad" || position === "B-O-Railroad" || position === "Short-Line") {
        nonBuying = true;
        
        if(!checkIfOwned(player)) {
            displayOptionsToBuyRailroad(player);
        } else {
            let costOfProperty;
            let owner = findWhoOwns(board[playerStats[player]['currPosition']]);
            let numOwned = propertiesOwned(owner, board[playerStats[player]['currPosition']]);
    
            if(numOwned === 1) {
                costOfProperty = 25;
            } else if(numOwned === 2) {
                costOfProperty = 50;
            } else if(numOwned === 3) {
                costOfProperty = 100;
            } else {
                costOfProperty = 200;
            }

            alert("You Have to Pay: " + costOfProperty);
            if(canPayRent(player, costOfProperty)) {
                payRent(player, costOfProperty);
            } else {
                if(!displayOptionsToSell(player)) {
                    displayLoss(player);
                } else {
                    while(!canAfford(playerStats[player]["money"], player)) { 
                        if(!displayOptionsToSell(player)) {
                            displayLoss(player);
                        }
                    }
                }
            }
        }
        
    }

    // check if its your property
    if(isYourProperty(player)) {
        yourProperty = true;
        displayOptionsToImprove(player);
    } else {
        if(!nonBuying) {
            if(!checkIfOwned(player)) {
                displayOptionsToBuy(player, 'normal');
            } else{ 
                let costOfProperty = calculateCost(player);
                alert("You Have to Pay: " + costOfProperty)
                
                if(canPayRent(player, costOfProperty)) {
                    payRent(player, costOfProperty);
                } else {
                    if(!displayOptionsToSell(player)) {
                        displayLoss(player);
                    } else {
                        while(!canAfford(playerStats[player]["money"], player)) {
                            if(!displayOptionsToSell(player)) {
                                displayLoss(player); 
                            }
                        }
                    }
                }
            }
        }
    }


    displayPersonStats(player); 
}

function displayOptionsToImprove(player) {
    let choice = prompt(player + ': Do you wish to improve your property?')
    if(choice.toLowerCase() === 'yes') {
        alert('You have chosen Yes');
        expandProperty(); 
    } else {
        alert('You have Chosen No.')
    }
}

function expandProperty() {
    let number = prompt('How many more houses do you want on your property? If you want a hotel, say "hotel"');
    let player = playerOrder[count-1];
    if(numebr === 'hotel') {
        let price = avenueStats[board[playerStats[player]['currPosition']]]['hotel'];
        playerStats[player]['money'] -= price;
        playerStats[player]['propertyHouses'][board[playerStats[player]['currPosition']]] = 'hotel';
    } else {
        let numOfHousesAlready = findNumberOfHouses();
        let price = avenueStats[board[playerStats[player]['currPosition']]][numOfHousesAlready + number];
        playerStats[player]['money'] -= price;
        playerStats[player]['propertyHouses'][board[playerStats[player]['currPosition']]] = numOfHousesAlready + number;
        alert('You now have: '  + (number + numOfHousesAlready));
    }

}
function findNumberOfHouses(player) {
    const keys = Object.keys(playerStats[player]['propertyHouses']);
    let houseCouter = 0;
    for(let i=0; i<keys.length; i++) {
        if(keys[i] === board[playerStats[player]['currPosition']]) {
            houseCounter = playerStats[player]['propertyHouses'][keys[i]];
        }
    }
    return houseCouter;
}

function isYourProperty(player) {
    for(let i=0; i<playerStats[player]['properties'].length; i++) {
        if(playerStats[player]['currPosition'] === playerStats[player]['properties'][i]) {
            return true;
        }
    } 
    return false;
}

function propertiesOwned(owner, property) {
    let num;
    let type;
    if(property === 'Reading-Railroad' || property === 'Pennsylvania-Railroad' || property === 'B-O-Railroad' || property === 'Short-Line') {
        type = 'Railroad';
    } else {
        type = 'Utility';
    }
    
    for(let i=0; i<playerStats[owner]['properties'].length; i++) {
        if(type === 'Railroad') {
            if(playerStats[owner]['property'][i] === 'Reading-Railroad' || playerStats[owner]['property'][i] === 'Pennsylvania-Railroad' || playerStats[owner]['property'][i] === 'B-O-Railroad' || playerStats[owner]['property'][i] === 'Short-Line') {
                num++;
            } 
        } else {
            if(playerStats[owner]['property'][i] === 'Electric-Company' || playerStats[owner]['property'][i] === 'Water-Works'){
                num++;
            }
        }
    }

    return num;
}

function findWhoOwns(position) { 
    let players = Object.keys(playerStats); 
    for(let i=0; players.length; i++) {
        for(let j=0; j<players[i]['properties'].length; j++) {
            if(position === players[i]['properties'][i]) {
                return players[i];
            }
        }        
    }
}

utilities = {
    'Electric-Company': "C:\Monopoly\ElectricCompany.jpg",
    'Water-Works': "C:\Monopoly\WaterWorks.jpg" 
}

function displayOptionsToBuyUtilities (player) {
    displayOptionsToBuy(player, 'utility');
}

function buyUtility() {
    let player = playerOrder[count-1];

    alert('Player is: ' + player); 
    alert('Player money: ' + playerStats[player]['money']);
    
    if(playerStats[player]['money'] >= 150) {
        playerStats[player]['money'] -= 150;
        playerStats[player]['properties'].push(board[playerStats[player]['currPosition']]);
    } else {
        notEnoughMoney();
    }

    displayPersonStats(player);
}

function noBuyUtility() {
    youDidNotBuy();
}

function displayOptionsToBuyRailroad(player) {
    displayOptionsToBuy(player, 'railroad');
}

function buyRailroad() {
    alert("Player is: " + playerOrder[count - 1])

    if(playerStats[playerOrder[count - 1]]['money'] > 200) {
        playerStats[playerOrder[count - 1]]['money'] -= 200;
        playerStats[playerOrder[count - 1]]['properties'].push(board[playerStats[playerOrder[count - 1]]['currPosition']]);
        displayPersonStats(playerOrder[count-1]);
    } else {
        notEnoughMoney();
    }

    document.querySelector('#rectangle').innerHTML = ' ';
}

function notEnoughMoney() {
    alert("Not enough money loser.")
}

function noBuyRailroad() {
    document.querySelector('#rectangle').innerHTML = ' ';
    youDidNotBuy();
}

function youDidNotBuy() {
    alert("You didn't buy: " + board[playerStats[playerOrder[count-1]]['currPosition']]);
}

function calculateCost(player) {
    let players = Object.keys(playerStats);
    let playerOwned;
    let propertyOwned;
    for(let i=0; i<players.length; i++) {
        for(let j=0; j<playerStats[players[i]]['properties'].length; j++) {
            if(playerStats[players[i]]['properties'][j] === board[playerStats[player]['currPosition']]) {
                playerOwned = players[i];
                propertyOwned = playerStats[players[i]]['properties'][j];
                break;
            }
        }
    }
    return avenueStats[board[playerStats[player]["currPosition"]]]["rent"][playerStats[playerOwned]['propertyHouses'][propertyOwned]];
}
function canPayRent(player, cost) { 
    if(playerStats[player]["money"] > cost){
        return true;
    } else {
        return false;
    }
}
function payRent(player, cost) {
    let players = Object.keys(playerStats);
    for(let i=0; i<players.length; i++) {
        for(let j=0; j<playerStats[players[i]]["properties"].length; j++) {
            if(board[playerStats[player]["currPosition"]] === playerStats[players[i]]["properties"][j]) {
                playerStats[player]["money"] -= cost;
                playerStats[players[i]]["money"] += cost; 
                break;
            }
        }
    }
}

function displayPersonStats(player) {
    let statsBox = document.querySelector("#personStats");
    statsBox.style.border = "3px solid black";
    statsBox.style.width = "1000px";
    statsBox.style.height = "auto";
    statsBox.style.position = "absolute";
    statsBox.style.top = "100%";
    statsBox.style.color = "black";
    statsBox.innerHTML = "";

    for(let i=0; i<playerOrder.length; i++) {
        statsBox.innerHTML  += "Player: " + playerOrder[i] + " {Money: " + playerStats[playerOrder[i]]["money"] + ", Properties Owned: [" + playerStats[playerOrder[i]]['properties'] + "], Current Position: " + board[playerStats[playerOrder[i]]["currPosition"]] + "} <br />";  
    }
}

function payTaxes(player) {
    if(!canAfford(playerStats[player]["money"], player)) {
        if(!displayOptionsToSell(player)) {
            displayLoss(player);
        } else {
            while(!canAfford(playerStats[player]["money"], player)) {
                if(!displayOptionsToSell(player)) {
                    displayLoss(player);
                }
            }
        }
    } else {
        playerStats[player]["money"] -= avenueStats[board[playerStats[player]['currPosition']]]["price"];
        alert("You have paid " + avenueStats[board[playerStats[player]['currPosition']]]["price"] + "!");
    }
}

function displayOptionsToSell(player) { 
    if(playerStats[player]['properties'].length === 0) {
        return false;
    } 
    
    alert(player + " YOU ARE SOON GOING TO GO BANKRUPT, YOU HAVE THESE OPTIONS TO SELL NOTICE IF YOU SELL A PROPERTY, ALL THE HOUSES GOOOO WITH ITTT: ");
    let options = ''
    
    for(let i=0; i<playerStats[player]['properties'].length; i++) {
        options += playerStats[player]['properties'][i] + " ";
    }

    let option = prompt("OPTIONS: " + options.toUpperCase());
    while(!playerStats[player]['properties'].includes(option)) {
        prompt("OPTIONS: " + options.toUpperCase());
    }
    if(playerStats['propertyHouses'][option] === 'hotel') {
        playerStats[player]['money'] += (avenueStats[option]['pricePerHouse'] * 5);
    } else {
        playerStats[player]['money'] += (avenueStats[option]['pricePerHouse'] * (playerStats['propertyHouses'][option]))
    }
}

function displayLoss(player) {
    alert(player + " has LOST! LOSER");
    for(let i=0; i<playerOrder.length; i++) {
        if(playerOrder[i] === player) {
            playerOrder[i].splice(i, 1);
        }
    }

    alert("WE HAVE KICKED: " + player + " FOR BEING A LOSER.")
}

function canAfford(money, player) {
    if(money > avenueStats[board[playerStats[player]["currPosition"]]]["price"]) {
        return true;
    } else {
        return false;
    }
}

function displayCommunityChest () {
    let randomCard = Math.floor(Math.random() * communityChestCards.length) + 1;

    alert(communityChestCards[randomCard]);
    //enforcing the cards
    enforecement(chanceCards[randomCard]);

    communityChestCards.splice(randomCard, 1);
}
function displayChance() {
    let randomCard = Math.floor(Math.random() * chanceCards.length) + 1;
    alert(chanceCards[randomCard]);
    // enforcing the cards
    enforecement(chanceCards[randomCard]);

    chanceCards.splice(randomCard, 1);

}


chanceCards = [
    "Advance To Boardwalk", "Advance to Go (Collect 200)", "Advance to Illinois Avenue. If you pass Go, collect $200", 
    "Advance to St. Charles Place. If you pass Go, collect $200", "Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled",
    "Advance piece to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown.", 
    "Bank pays you dividend of $50", "Get Out of Jail Free", "Go Back 3 Spaces", "Go to Jail. Go directly to Jail, do not pass Go, do not collect $200", "Make general repairs on all your property. For each house pay $25. For each hotel pay $100",
    "Speeding fine $15", "Take a trip to Reading Railroad. If you pass Go, collect $200", "You have been elected Chairman of the Board. Pay each player $50", "Your building loan matures. Collect $150"
]

communityChestCards = [
    "Advance to Go (Collect $200)", "Bank error in your favor. Collect $200", "Bank error in your favor. Collect $200", "From sale of stock you get $50", "Get Out of Jail Free", "Go to Jail. Go directly to jail, do not pass Go, do not collect $200",
    "Holiday fund matures. Receive $100", "Income tax refund. Collect $20", "It is your birthday. Collect $10 from every player", "Life insurance matures. Collect $100", "Pay hospital fees of $100", "Pay school fees of $50", 
    "Receive $25 consultancy fee", "You are assessed for street repair. $40 per house. $115 per hotel", "You have won second prize in a beauty contest. Collect $10", "You inherit $100"
]

let inJail = false;

function enforecement(THECARDBOI) {
    alert('The Card is: ' + THECARDBOI);
    if(cardEnforcement[THECARDBOI] === 'specialCase1' || cardEnforcement[THECARDBOI] === 'specialCase2') {
        if(cardEnforcement[THECARDBOI] === 'specialCase1') {
            // 100 per hotel pay for each property loser 
            // 25 per house 
            let player = playerOrder[count];
            alert('Player is: " + player')
            let propertyNames = Object.keys(playerStats[player]['propertyHouses']);
            for(let i=0; i<propertyNames.length; i++) {
                if(playerStats[player]['propertyHouses'][propertyNames[i]] === 'hotel') {
                    totalCost += 100;
                } else {
                    totalCost += 25;
                }
            }
        } else {
            // 115 per hotel
            //  40 dollariodos per house

            let player = playerOrder[count-1];
            let propertyNames = Object.keys(playerStats[player]['propertyHouses']);
            for(let i=0; i<propertyNames.length; i++) {
                if(playerStats[player]['propertyHouses'][propertyNames[i]] === 'hotel') {
                    totalCost += 115;
                } else {
                    totalCost += 40;
                }
            }
        }

    } else {
        alert('Checking.....');
        let player = playerOrder[count];
        if(THECARDBOI === 'Advance To Boardwalk') {
            alert('Calling Move To Boardwalk.')
            moveTokenToPlace('Boardwalk');
        } else if(THECARDBOI === 'Advance to Go (Collect 200)') {
            // move piece to Go. Add 200
            alert('Calling Move To Go.')
            moveTokenToPlace('Go');
            receiveMoney(200);
        } else if(THECARDBOI === 'Advance to Illinois Avenue. If you pass Go, collect $200') {
            // moveToken
            alert('Calling Move To Illinois Avenue.')

            moveTokenToPlace('Illinois-Avenue');
        } else if(THECARDBOI ===  'Advance to St. Charles Place. If you pass Go, collect $200'){
            // move 
            alert('Calling Move To St. Charles Place.')

            moveTokenToPlace('St-Charles-Place');
        } else if(THECARDBOI === 'Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled') {
            alert('Calling Move To nearest Railroad.')
            let nearestRailroad = findNearestRailroad();
            alert('Nearest railroad is: ' + nearestRailroad); 
            moveTokenToPlace(nearestRailroad);
        } else if(THECARDBOI === 'Bank pays you dividend of $50') {
            alert('Calling Pay Divident of 50.');
            receiveMoney(50);
        } else if(THECARDBOI === 'Get Out of Jail Free') {
            alert('Get Out Of Jail Free.')
            playerStats[player]['getOutOfJailCard'] = true;
        } else if(THECARDBOI === 'Go Back 3 Spaces') {
            alert('Go Back Three Spaces called.')
            moveTokenToPlace(board[playerStats[player]['currPosition'] - 3]);
        } else if(THECARDBOI === 'Go to Jail. Go directly to Jail, do not pass Go, do not collect $200') {
            inJail = true;
            moveTokenToPlace('Jail-Visit');
        } else if(THECARDBOI === 'Speeding fine $15') {
            receiveMoney(-15);
        } else if(THECARDBOI === 'Take a trip to Reading Railroad. If you pass Go, collect $200') {
            moveTokenToPlace('Reading-Railroad');
        } else if(THECARDBOI === 'You have been elected Chairman of the Board. Pay each player $50') {
            receiveMoney(-50*playerCount);
            payEveryone(50);
        } else if(THECARDBOI === 'Your building loan matures. Collect $150') {
            receiveMoney(150);
        } else if(THECARDBOI === 'Bank error in your favor. Collect $200') {
            receiveMoney(200);
        } else if(THECARDBOI === 'From sale of stock you get $50') {
            receiveMoney(50);
        } else if(THECARDBOI === 'Holiday fund matures. Receive $100') {
            receiveMoney(100);
        } else if(THECARDBOI === 'Income tax refund. Collect $20') {
            receiveMoney(100);
        } else if(THECARDBOI === 'It is your birthday. Collect $10 from every player') {
            receiveMoney(10 * playerCount);
            deductMoneyFromEVERYLOSER(10);
        } else if(THECARDBOI === 'Life insurance matures. Collect $100'){
            receiveMoney(100);
        } else if(THECARDBOI === 'Pay hospital fees of $100'){
            receiveMoney(-100);
        } else if(THECARDBOI === 'Pay school fees of $50'){
            receiveMoney(-50);
        } else if(THECARDBOI === 'Receive $25 consultancy fee'){
            receiveMoney(25);
        } else if(THECARDBOI === 'You have won second prize in a beauty contest. Collect $10') {
            receiveMoney(10);
        } else if(THECARDBOI === 'You inherit $100') {
            receiveMoney(100);
        }
    }
}

function payEveryone(moneyToPay) {
    for(let i=0; i<playerOrder.length; i++) {
        playerStats[playerOrder[i]]['money'] += moneyToPay;
    }
}

function deductMoneyFromEVERYLOSER(moneyDeduct) {
    for(let i=0; i<playerOrder.length; i++){
        playerStats[playerOrder[i]]['money'] -= moneyDeduct;
    }
} 
function receiveMoney(moneyRecieved) {
    alert('Player recieving: ' + playerOrder[count]);
    alert('Amount recieved: ' + moneyRecieved);
    playerStats[playerOrder[count]]['money'] += moneyRecieved;

}

function moveTokenToPlace(place) {
    // get player piece    
    let player = playerOrder[count];
    let playerPiece;
    let placeNum;
    alert('Player: ' + player)      
    
    for(let i=0; i<pieceArr.length; i++){
        if(pieceArr[i].src === ("file:///C:/Monopoly/" + monopolyPieces[playerDict[player]])) {
            playerPiece = pieceArr[i];
            break;
        }
    } 
    // playerPiece = ("file:///C:/Monopoly/" + monopolyPieces[playerDict[player]]);
    
    alert('Player piece: ' + playerPiece)
    for(let i=0; i<board.length; i++) {
        let left = -3900;
        let top = 50;
        
        if(board[i] === place){
            alert('Player is: ' + player);
            alert('Current Position number: ' + playerStats[player]['currPosition']);
            alert("You are going to: " + board[i]);
            if(board[i] > 10 && board[i] < 20) {
                left = -100;
                top = -10;
            }
            placeNum = i;
            document.querySelector('#' + board[i]).appendChild(playerPiece);
            playerPiece.style.top = top + "%";
            playerPiece.style.left = left + "%"; 
            playerStats[player]['currPosition'] = i;
            break;
        }
    } 
    if(playerStats[player]['currPosition'] > placeNum && !inJail) {
        distributeGoMoney();
    }
    if(inJail){ 
        jail(player);
    }
} 

function jail(player) {
    putTokenOnJail(player);
    const arr = ['Pay $50', 'Wait three turns', 'Get Out of Jail Free Card'];
    let row = 0;
    let choice = prompt('To Get Out Of Jail, you have three options: Pay $50. Wait three turns, or use a Get Out of Jail Free Card.');
    while(!arr.includes(choice)) {
        choice = prompt('To Get Out Of Jail, you have three options: Pay $50. Wait three turns, or use a Get Out of Jail Free Card.');
        if(row === 3){
            alert("STOP BEING DYSLEXIC LOSER");
        }
        row++;
    }

    if(choice === 'Get Out Of Jail Free Card' && playerStats[playerOrder[count-1]]['getOutOfJailCard']) {
        playerStats[playerOrder[count-1]]['getOutOfJailCard'] = false;
    } else if(choice === 'Pay $50') {
        receiveMoney(-50);
    } else {
        playerStats[playerOrder[count-1]]['inJail'] = true;
        for(let i=0; i<playerOrder.length; i++) {
            if(playerOrder[i] === playerOrder[count-1]) {
                playerOrder.splice(i,1);
            }
        }
    }
}

function putTokenOnJail(player) {
    alert("PLAYER IN JAIL IS: " + player);
    
    for(let i=0; i<pieceArr.length; i++){
        if(pieceArr[i].src === ("file:///C:/Monopoly/" + monopolyPieces[playerDict[player]])) {
            document.querySelector('#Jail-Visit').appendChild(pieceArr[i]);
            break;
        }
    } 
    displayPersonStats(player);
}

function findNearestRailroad() {
    let player = playerOrder[count];
    let position = playerStats[player]['currPosition'];
    let distance = 1000;
    
    for(let i=0; i<board.length; i++){
        if(board[i] === 'Reading-Railroad' || board[i] === 'Pennsylvania-Railroad' || board[i] === 'B-O-Railroad' || board[i] === 'Short-Line') {
            if(Math.abs(board[i] - position) < distance){
                distance = Math.abs(board[i] - position);
            }
        }
    }

    return board[position + distance];
}

function checkIfOwned(player) {
    let curr = playerStats[player]["currPosition"];

    for(let i=0; i<playerStatsArr.length; i++) {
        for(let j=0; j<playerStats[playerStatsArr[i]]["properties"].length; j++) {
            if(board[curr] === playerStats[playerStatsArr[i]]["properties"][j]) {
                return true;
            }
        }
    }

    return false;
}

avenueColor = {
    'Mediteranean-Avenue': "brown",
    "Baltic-Avenue": "brown",
    "Oriental-Avenue": "skyblue",
    "Vermont-Avenue": "skyblue",
    "Fat-Connecticut-Avenue": "skyblue",
    "St-Charles-Place": "pink",
    "States-Avenue": "pink",
    "Virgina-Avenue": "pink",
    "St-James-Place": "orange",
    "TennesseAvenue": "orange",
    "New-York-Avenue": "orange",
    "Kentucky-Avenue": "red",
    "Indiana-Avenue": "red",
    "Illinois-Avenue": "red",
    "Atlantic-Avenue": "yellow",
    "Ventnor-Avenue": "yellow",
    "Marvin-Gardens": "yellow",
    "Pacific-Avenue": "green",
    "North-Carolina-Avenue": "green",
    "Pennsylvania-Avenue": "green",
    "Park-Place": "darkblue",
    "Boardwalk": "darkblue",
    'Reading-Railroad': 'white',
    'Pennsylvania-Railroad': 'white',
    'B-O-Railroad': 'white',
    'Short-Line': 'white',
}

let btn = document.createElement("button");
let no = document.createElement("button");
let rectangle = document.querySelector("#rectangle");
let color = document.querySelector("#color");
let moreStats = document.querySelector("#moreStats");


function displayOptionsToBuy(player, type) {
    let avenue = board[playerStats[player]["currPosition"]];

    // let rectange = document.createElement("div");
    // let rectangle = document.querySelector("#rectangle");
    // rectangle.id = "rectangle";ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh         m    ,,,,,,
    if(type === 'railroad') {
        rectangle.innerHTML = "";
        rectangle.style.width = "400px";
        rectangle.style.height = "500px";
        rectangle.style.position = "absolute";
        rectangle.style.left = "50%";
        rectangle.style.top = "45%";
        rectangle.style.opacity = 1;
        rectangle.style.border = '3px solid white';
        rectangle.style.backgroundColor = 'white';

        let image = document.createElement("img");
        image.src = "https://images-na.ssl-images-amazon.com/images/I/31wkcwha%2BxL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg";
        image.style.width = "200px";
        image.style.position = "absolute";
        image.style.top = 0;
        image.style.left = "0%";

        rectangle.appendChild(image);


        let name = document.createElement("div");
        name.style.width = "auto";
        name.style.height = 'auto';
        name.innerHTML = board[playerStats[player]['currPosition']] + "<br />";
        name.innerHTML += "Rent:  $25 <br  />"; 
        name.innerHTML += "If 2 Railroads are owned: 50 <br />";
        name.innerHTML += "If 3 Railroads are owned: 100 <br />";
        name.innerHTML += "If 4 Railroads are owned: 200 <br />";
        name.style.position = 'absolute';
        name.style.top = '50%';
        name.style.color = 'black';
        rectangle.appendChild(name);

        let buyButton = document.createElement("btn");
        buyButton.id = "buyButton";
        buyButton.style.height = '100px';
        buyButton.style.width = "150px";
        buyButton.style.border = '3px solid white';
        buyButton.innerHTML = "BUY";
        buyButton.style.position = "absolute";
        buyButton.style.top = "70%";
        buyButton.style.left = "10%";
        buyButton.style.backgroundColor = "green";
        buyButton.style.color = "black";
        rectangle.appendChild(buyButton);

        let noButton = document.createElement("btn");
        noButton.id = "noButton";
        noButton.style.height = '100px';
        noButton.style.width = "150px";
        noButton.style.border = '3px solid white';
        noButton.innerHTML = "NO";
        noButton.style.position = "absolute";
        noButton.style.top = "70%";
        noButton.style.left = "50%";
        noButton.style.backgroundColor = "red";
        noButton.style.color = "black";
        rectangle.appendChild(noButton);
    
        document.querySelector("#buyButton").addEventListener("click", buyRailroad);
        document.querySelector("#noButton").addEventListener("click", noBuyRailroad);
    } else if(type === 'normal') {
        // let color = document.querySelector("#color");
        let stats = document.querySelector("#stats");


        rectangle.style.width = "400px";
        rectangle.style.height = "500px";
        rectangle.style.position = "absolute";
        rectangle.style.left = "50%";
        rectangle.style.top = "45%";
        rectangle.style.border = "2px solid " + avenueColor[avenue];
        rectangle.style.backgroundColor = "black";
        rectangle.style.opacity = 1;
    
        // alert("Avenue For Color: " + avenue);
        color.style.backgroundColor = avenueColor[avenue];
        color.style.height = "100px";
        color.style.width = "400px";
        color.style.position = "absolute";
        color.style.top =  "0%";
        color.style.color = "white";
        color.innerHTML = avenue;
        color.style.fontSize = "20px";
        rectangle.appendChild(color);
        
    
        stats.style.color = "white";
        stats.style.position = "absolute";
        stats.style.top = "20%";
        
    
        stats.innerHTML = "Rent  $" + avenueStats[avenue]['rent']["0"];
        stats.style.left = "35%";
        stats.style.fontSize = "30px";
        
        rectangle.appendChild(stats);
        
        moreStats.style.color = "white";
        moreStats.style.position = "absolute"; 
        moreStats.style.marginTop = "100px";
        moreStats.style.left = "25%";
        moreStats.style.top = "20%";
        moreStats.innerHTML = "";    
    
        for(let i=1; i<=5; i++) {
            if(i === 5) {
                moreStats.innerHTML += "With Hotel: " + avenueStats[avenue]["rent"]["hotel"] + " <br  />";
                continue;
            }
            moreStats.innerHTML += 'With ' + i + " Houses: " + avenueStats[avenue]["rent"][i] + " <br  />";
        }
    
        moreStats.style.fontSize = "20px";
         
        moreStats.innerHTML += "Price per house/hotel " + avenueStats[avenue]["pricePerHouse"];
    
        rectangle.appendChild(moreStats);   
    
        btn.id = "buyButton";
        btn.style.height = '100px';
        btn.style.width = "150px";
        btn.style.border = '3px solid white';
        btn.innerHTML = "BUY";
        btn.style.position = "absolute";
        btn.style.top = "70%";
        btn.style.left = "10%";
        btn.style.backgroundColor = "green";
        btn.style.color = "black";
        rectangle.appendChild(btn);
    
        no.id = "noButton";
        no.style.height = '100px';
        no.style.width = "150px";
        no.style.border = '3px solid white';
        no.innerHTML = "NO";
        no.style.position = "absolute";
        no.style.top = "70%";
        no.style.left = "50%";
        no.style.backgroundColor = "red";
        no.style.color = "black";
        rectangle.appendChild(no);
    
    
        document.querySelector("#buyButton").addEventListener("click", buy);
        document.querySelector("#noButton").addEventListener("click", noBuy);
    } else {
        let stats = document.querySelector("#stats");
        let img = document.createElement('img');

        rectangle.style.width = "400px";
        rectangle.style.height = "500px";
        rectangle.style.position = "absolute";
        rectangle.style.left = "50%";
        rectangle.style.top = "45%";
        rectangle.style.border = "2px solid " + avenueColor[avenue];
        rectangle.style.backgroundColor = "black";
        rectangle.style.opacity = 1;


        if(board[playerStats[player]['currPosition']] === 'Electric-Company') {
            img.src = 'ElectricCompanyImage.jpg';
        } else {
            img.src = 'WaterWorksImage.png';
        }

        img.style.position = 'absolute';
        img.style.left = '20%';
        img.style.top = '-55%';
        // biryani too spicy it isn't kid
        img.style.width = '100px';
        img.style.height = '100px';

        
        stats.style.color = "white";
        stats.style.position = "absolute";
        stats.style.top = "20%";

        stats.innerHTML = 'If one Utility is owned, <br  />';
        stats.innerHTML += 'rent is 4 times amount <br  />';
        stats.innerHTML += 'shown on dice. <br  /><br  />';

        stats.innerHTML += 'If both Utilities are owned, <br  />';
        stats.innerHTML += 'rent is 10 times amount <br  />';
        stats.innerHTML += 'shown on dice.';

        stats.style.left = "30%";
        stats.style.fontSize = "20px";
        stats.style.border = '3px solid blue';
        stats.style.width = '200px';
        stats.style.height = '200px';
        stats.appendChild(img);

        rectangle.appendChild(stats);
        

        let buyButton = document.createElement("btn");
        buyButton.id = "buyButton";
        buyButton.style.height = '100px';
        buyButton.style.width = "150px";
        buyButton.style.border = '3px solid white';
        buyButton.innerHTML = "BUY";
        buyButton.style.position = "absolute";
        buyButton.style.top = "70%";
        buyButton.style.left = "20%";
        buyButton.style.backgroundColor = "green";
        buyButton.style.color = "black";
        rectangle.appendChild(buyButton);
    
        let noButton = document.createElement("btn");
        noButton.id = "noButton";
        noButton.style.height = '100px';
        noButton.style.width = "150px";
        noButton.style.border = '3px solid white';
        noButton.innerHTML = "NO";
        noButton.style.position = "absolute";
        noButton.style.top = "70%";
        noButton.style.left = "60%";
        noButton.style.backgroundColor = "red";
        noButton.style.color = "black";
        rectangle.appendChild(noButton);
     
        document.querySelector("#buyButton").addEventListener("click", buyUtility);
        document.querySelector("#noButton").addEventListener("click", noBuyUtility);
    }
}


function buy() {
    let numberHouses = prompt("How many houses do you wish to put. If you want a hotel, type 'hotel'");
    if(parseInt(numberHouses) > 4) {
        alert("Try again!")
    } else if(numberHouses === 'hotel') {
        // check if all of that color is owned.
        let color = avenueColor[board[playerStats[playerOrder[count-1]]['currPosition']]];

        if(ownAllColors(color, playerOrder[count-1])) {
            playerStats[player]["money"] -= (avenueStats[board[playerStats[player]["currPosition"]]]['pricePerHouse'] * 5) + avenueStats[board[playerStats[player]["currPosition"]]]["price"];
        } else {
            alert('YOU NEED TO OWN ALL THE COLORS LOSER. CHOSE ONE OF THE PEASANT OPTIONS.');
        }
    } else {
        let player = playerOrder[count-1];
        // alert("Count: " + count )
        if(affordable(playerStats[player]["money"], board[playerStats[player]["currPosition"]], numberHouses)) { 
            alert("Bought with " + numberHouses + " houses/hotels");
            playerStats[player]["properties"].push(board[playerStats[player]["currPosition"]]);
            playerStats[player]["propertyHouses"][board[playerStats[player]["currPosition"]]] = numberHouses;

            playerStats[player]["money"] -= (avenueStats[board[playerStats[player]["currPosition"]]]['pricePerHouse'] * parseInt(numberHouses)) + avenueStats[board[playerStats[player]["currPosition"]]]["price"];
            
            alert("Owned: " + playerStats[player]["properties"]);
            displayPersonStats(player); 
        } else {
            notEnoughMoney();
            // alert("Not enough money loser"); 
        }

        // rectangle.innerHTML = ""; 
    }
}

eachColorAvenue = {
    'brown': ['Mediteranean-Avenue', 'Baltic-Avenue'],
    'skyblue': ['Oriental-Avenue', 'Vermont-Avenue', 'Fat-Connecticut-Avenue'],
    'pink': ['St-Charles-Place', 'States-Avenue', 'Virgina-Avenue'],
    'orange': ['St-James-Place', 'TennesseAvenue', 'New-York-Avenue'],
    'red': ['Kentucky-Avenue', 'Indiana-Avenue', 'Illinois-Avenue'], 
    'yellow': ['Atlantic-Avenue', 'Ventnor-Avenue', 'Marvin-Gardens'],
    'green': ['Pacific-Avenue', 'North-Carolina-Avenue'], 
    'darkblue': ['Park-Place', 'Boardwalk']
}

function ownAllColors(color, player) {
    let numOwned = 0;
    for(let i=0; i<eachColorAvenue[color].length; i++) {
        for(let j=0; j<playerStats[player]['properties'].length; j++) {
            if(playerStats[player]['properties'][j] === eachColorAvenue[color][i]) {
                numOwned++;
                break;
            }
        }
    }

    if(numOwned === eachColorAvenue[color].length) {
        return true;
    } else {
        return false;
    }
}

function affordable(money, avenue, numberOfHouses) { 
    if(money === 0) {
        // youLose();
    }
    if(numberOfHouses.toLowerCase() === "hotel") {
        if(money > ((avenueStats[avenue]["pricePerHouse"] * 5) + avenueStats[avenue]["price"])) {
            return true;
        } else {
            return false;
        }
    } else {
        if (money > ((avenueStats[avenue]["pricePerHouse"]) * parseInt(numberOfHouses) + (avenueStats[avenue]['price']))) {
            return true;
        } else {
            return false;
        }  
    }
}

function noBuy() {
    youDidNotBuy();
    // alert("You didn't buy: " + board[playerStats[playerOrder[count-1]]["currPosition"]]);
    // rectangle.innerHTML = 'G';
    // rectangle.color = 'black';
}

function move(player) { 
    moveToken(player);
    count++;
}
let counter = 0;

function sumDice() {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    if(counter === 3) {
        moveTokenToPlace('#Jail-Visit');
    }
    if(dice1 === dice2 && counter != 3) {
        sumDice();
        counter++;
    }
    
    let sum = dice1 + dice2;
    return sum;  
    
}

const diceRollArr = [];

function determineWhoGoesFirst(){
    firstPlay = false;

    for(let i=0; i<playerCount; i++){
        let sum = sumDice();
        // let sum = 
        alert("Player " + (i+1) + " Sum: " + sum);
        // alert("You rolled a: " + sum);
        playerStats[playerStatsArr[i]]["diceSum"] = sum;
        if(diceRollArr.includes(sum)) {
            alert("Rolled the same, redo.");
            determineWhoGoesFirst();
        }
        diceRollArr.push(sum);
    }

    bubbleSort(diceRollArr, diceRollArr.length);
    
    let place = 1;

    for(let i=diceRollArr.length - 1; i>=0; i--) {
        for(let j=0; j<playerStatsArr.length; j++){
            if(playerStats[playerStatsArr[j]]["diceSum"] === diceRollArr[i]) {
                playerStats[playerStatsArr[j]]["place"] = place;
                playerOrder.push(playerStatsArr[j]);
                place++;
                break;
            } 
        }
    }

    checkPlace();
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function bubbleSort(arr, length) {
    for (let i = 0; i < length-1; i++) {
        for (let j = 0; j < length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr,j,j+1);
            }
        }
    }
}

const pieceArr = []

putPiecesOnBoard();

function putPiecesOnBoard() {
    let movement = 90;
    let movementLeft = 0;

    for(let i=0; i<playerStatsArr.length; i++){ 
        let  img = document.createElement("img");
        img.src = monopolyPieces[playerDict[playerStatsArr[i]]];
        img.style.height = "40px";
        img.style.wdith = "40px"; 
        img.style.position = "absolute";
        img.style.top = movement + "%"; 
        img.style.left = movementLeft + "%";
        img.style.zIndex = "500px";

        if(playerDict[playerStatsArr[i]] === 'car') {
            img.style.transform = "scaleX(-1)";
        }
        document.querySelector("#passGo").appendChild(img);
        movement += 60;
        movementLeft += 40;
        pieceArr.push(img); 
    }
}

document.querySelector("#rollDice").addEventListener("click", diceRoll);

const test = Object.keys(playerStats);

function checkPlace() {
    for(let i=0; i<playerOrder.length; i++) {
        for(let j=i+1; j<playerOrder.length; j++) {
            if(playerOrder[i] === playerOrder[j]) {
                playerOrder.splice(i, 1);
            }
        }
    }
    alert("Order: " + playerOrder);
}