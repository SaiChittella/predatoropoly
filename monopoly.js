//fake// the array of community and chance cards
// helloo Session chat isn't working for some reas 

chanceCards = [
    "Advance To Boardwalk", "Advance to Go (Collect 200)", "Advance to Illinois Avenue. If you pass Go, collect $200", 
    "Advance to St. Charles Place. If you pass Go, collect $200", "Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled",
    "Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown.", 
    "Bank pays you dividend of $50", "Get Out of Jail Free", "Go Back 3 Spaces", "Go to Jail. Go directly to Jail, do not pass Go, do not collect $200", "Make general repairs on all your property. For each house pay $25. For each hotel pay $100",
    "Speeding fine $15", "Take a trip to Reading Railroad. If you pass Go, collect $200", "You have been elected Chairman of the Board. Pay each player $50", "Your building loan matures. Collect $150"
]

communityChestCards = [
    "Advance to Go (Collect $200)", "Bank error in your favor. Collect $200", "Bank error in your favor. Collect $200", "From sale of stock you get $50", "Get Out of Jail Free", "Go to Jail. Go directly to jail, do not pass Go, do not collect $200",
    "Holiday fund matures. Receive $100", "Income tax refund. Collect $20", "It is your birthday. Collect $10 from every player", "Life insurance matures. Collect $100", "Pay hospital fees of $100", "Pay school fees of $50", 
    "Receive $25 consultancy fee", "You are assessed for street repair. $40 per house. $115 per hotel", "You have won second prize in a beauty contest. Collect $10", "You inherit $100"
]



monopolyPieces = {
    "battleship": "battleship.png",
    "boot": "boot.png",
    "car": "car.png",
    "cat": "cat.png",
    "dog": "dog.png",
    "hat": "hat.png",
    "thimble": "thimble.png",
    "wheelbarrow": "wheelbarrow.png",
}

const piecesToChooseFrom = ["battleship", "boot", "car", "cat", "dog", "hat", "thimble", "wheelbarrow"]

playerDict = {
    
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
// put the pieces on the board, and display the amount of money each person has on the bottom. 
const board = [
    "Go", "Mediteranean-Avenue", "communityChest1", "Baltic-Avenue", "Income-Tax", "Reading-Railroad", "Oriental-Avenue", "Chance-row-1", "Vermont-Avenue", 
    "Fat-Connecticut-Avenue", "Jail-Visit", "St-Charles-Place", "Electric-Company", "States-Avenue", "Virgina-Avenue", "Pennsylvania-Railroad", "St-James-Place", "Community-Chest-row-2",
    "TenneseAvenue", "New-York-Avenue", "Free-Parking", "Kentucky-Avenue", "Chance-row-2", "Indiana-Avenue", "Illinois-Avenue", "B-O-Railroad", "Atlantic-Avenue",
    "Vetnor-Avenue", "Water-Works", "Marvin-Gardens", "Go-To-Jail", "Pacific-Avenue", "North-Carolina-Avenue", "Community-Chest-row-3", "Pennsylvania-Avenue", "Short-Line", 
    "Chance-row-4", "Park-Place", "Luxury-Tax", "Boardwalk"
]

playerStats = {
    
}

const arr = Object.keys(playerDict);

for(let i=0; i<arr.length; i++) {
    playerStats[arr[i]] = {"money": 1500, "properties": [], "getOutOfJailCard": false, "diceSum": 0, "place": 0, "currPosition": 0};
}

const playerStatsArr = Object.keys(playerStats);

let dice1;
let dice2;
let firstPlay = true;

const playerOrder = []


let count = 0;

function diceRoll() {
    if(firstPlay){
        determineWhoGoesFirst();
        firstPlay = false;
    } else {    
        alert("DiceRolll")
        let sum = sumDice();
        if(count === playerCount) {
            count = 0;
        } 
        if(playerStats[playerOrder[count]]["currPosition"] + sum > board.length) {
            sum -= (board.length - playerStats[playerOrder[count]]["currPosition"]);
            playerStats[playerOrder[count]]["currPosition"] = 0;
            putOnGo();
            distributeGoMoney(playerOrder[count]);
        }

        playerStats[playerOrder[count]]["currPosition"] += sum;


        alert(playerOrder[count] + ' rolled: ' + sum);
        move(playerOrder[count]);

        // alert(playerStats[playerOrder[count]]["currPosition"]);
    }
}


function putOnGo(player) {
    moveToken(player);
}


function distributeGoMoney(player) {
    playerStats[player]["money"] += 200;
}


function moveToken(player) {
    const colors = ["orange", "red", 'yellow', "blue", "green", "purple", "brown", "black"]
    for(let i=0; i<pieceArr.length; i++) {
        if(pieceArr[i].src === ("file:///C:/Monopoly/" + monopolyPieces[playerDict[player]])) {
            document.querySelector("#" + board[playerStats[player]["currPosition"]]).appendChild(pieceArr[i]);
            pieceArr[i].style.top = "50%";
            pieceArr[i].style.left = "-3900%";
            pieceArr[i].style.border = "5px solid " + colors[i];
        }
    }
    let position = board[playerStats[player]["currPosition"]];
    let nonBuying = false;

    if(position === "Chance-row-1" || position === "Chance-row-3" || position === "Chance-row-4") {
        displayChance();
        nonBuying = true;
    } else if(position === "Community-chest-row-1" || position === "Community-Chest-row-2" || position === "Community-chest-row-4") {
        displayCommunityChest();
        nonBuying = true;
    }
    else if(position == "Reading-Railroad" || position === "Pennsylvania-Railroad" || position === "B-O-Railroad" || position === "Short-Line" || position === 'Income-Tax' || position === "Luxury-Tax" || position === "Jail-Visit") {
        // taxes 
        if(position === "Income-Tax" || position === 'Luxury-Tax') {
            payTaxes(player);
        }
        nonBuying = true;
    }

    if(!nonBuying) {
        if(!checkIfOwned(player)) {
            displayOptionsToBuy(player);
        } else{
            // calculateCost();
            // canPayRent();
            // payRent();
        }
    }

    displayPersonStats(player); 
}

function displayPersonStats(player) {
    let statsBox = document.querySelector("#personStats");
    statsBox.style.border = "3px solid black";
    statsBox.style.width = "800px";
    statsBox.style.height = "auto";
    statsBox.style.position = "absolute";
    statsBox.style.top = "100%";
    statsBox.style.color = "black";
    for(let i=0; i<playerOrder.length; i++) {
        statsBox.innerHTML  += "Player: " + playerOrder[i] + " {Money: " + playerStats[playerOrder[i]]["money"] + ", Properties Owned: [" + playerStats[playerOrder[i]]['properties'] + "], Current Position: " + board[playerStats[playerOrder[i]]["currPosition"]] + "} <br />";  
    }
}

function payTaxes(player) {
    if(!canAfford(playerStats[player]["money"], player)) {
        // displayOptionsToSell();
        // displayLoss();
    }
    playerStats[player]["money"] -= avenueStats[board[playerStats[player]['currPosition']]];
    alert("You have paid " + avenueStats[board[playerStats[player]['currPosition']]] + "!");
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
    alert(communityChestCard[randomCard]);
    communityChestCard.splice(randomCard, 1);

    // enforce
}
function displayChance() {
    let randomCard = Math.floor(Math.random() * chanceCards.length) + 1;
    alert(chanceCards[randomCard]);
    chanceCards.splice(randomCard, 1);
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
    "Boardwalk": "darkblue"
}

let rectangle = document.querySelector("#rectangle");

function displayOptionsToBuy(player) {
    let color = document.querySelector("#color");
    let stats = document.querySelector("#stats");
    let moreStats = document.querySelector("#moreStats");
    let avenue = board[playerStats[player]["currPosition"]];
    
    rectangle.style.width = "400px";
    rectangle.style.height = "500px";
    rectangle.style.position = "absolute";
    rectangle.style.left = "50%";
    rectangle.style.top = "45%";
    rectangle.style.border = "2px solid orange";
    rectangle.style.backgroundColor = "black";
    rectangle.style.opacity = 1;

    color.style.backgroundColor = avenueColor[avenue];
    color.style.height = "100px";
    color.style.width = "400px";
    color.style.position = "absolute";
    color.style.top =  "0%";
    color.style.color = "white";
    color.innerHTML += avenue;
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

    let btn = document.createElement("button");
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

    let no = document.createElement("button");
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
}


function buy() {
    let numberHouses = prompt("How many houses do you wish to put. If you want a hotel, type 'hotel'");
    if(parseInt(numberHouses) > 4) {
        alert("Try again!")
    } else {
        let player = playerOrder[playerCount - 1];

        if(affordable(player, playerStats[player]["money"], board[playerStats[player]["currPosition"]], numberHouses)) { 
            alert("Bought with " + numberHouses + " houses/hotels");
            playerStats[player]["properties"].push(board[playerStats[player]["currPosition"]]);
            alert("Owned: " + playerStats[player]["properties"])
        } else {
            alert("Not enough money loser");
        }
    }
}

function affordable(player, money, avenue, numberOfHouses) { 
    if(money === 0) {
        // youLose();
    }
    if(numberOfHouses.toLowerCase() === "hotel") {
        if(money > (avenueStats[avenue]["pricePerHouse"] * 4) + avenueStats[avenue]["pricePerHouse"]) {
            return true;
        } else {
            return false;
        }
    }
    if (money > ((avenueStats[avenue]["pricePerHouse"]) * parseInt(numberOfHouses))) {
        return true;
    } else {
        return false;
    }  
}

function noBuy() {
    rectangle.remove();
}

function move(player) { 
    moveToken(player);
    count++;
}
function sumDice() {
    let counter = 0;
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    if(counter === 3) {
        // goToJail();
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
    for(let i=0; i<playerCount; i++){
        let sum = sumDice();
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
    "Tennesse-Avenue": {'price': 180, 'pricePerHouse': 100, 'rent': {'0': 14, '1': 70, '2': 200, '3': 550, '4': 750, 'hotel': 950}},
    "New-York-Avenue": {'price': 200, 'pricePerHouse': 100, 'rent': {'0': 16, '1': 80, '2': 220, '3': 600, '4': 800, 'hotel': 1000}},
    "Kentucky-Avenue": {'price': 220, 'pricePerHouse': 150, 'rent': {'0': 18, '1': 90, '2': 250, '3': 700, '4': 875, 'hotel': 1050}},
    "Indiana-Avenue": {'price': 220, 'pricePerHouse': 150, 'rent': {'0': 18, '1': 90, '2': 250, '3': 700, '4': 875, 'hotel': 1050}},
    "Illinois-Avenue": {'price': 240, 'pricePerHouse': 150, 'rent': {'0': 20, '1': 100, '2': 300, '3': 750, '4': 925, 'hotel': 1100}},
    "Atlantic-Avenue": {'price': 260, 'pricePerHouse': 150, 'rent': {'0': 22, '1': 110, '2': 330, '3': 800, '4': 975, 'hotel': 1150}},
    "Vetnor-Avenue": {'price': 260, 'pricePerHouse': 150, 'rent': {'0': 22, '1': 110, '2': 330, '3': 800, '4': 975, 'hotel': 1150}},
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

document.querySelector("#rollDice").addEventListener("click", diceRoll);


const test = Object.keys(playerStats);

function checkPlace() {
    alert("Order: " + playerOrder);
}

// alert(playerStats[newArr[0]]["money"]);

// alert(monopolyPieces[playerDict["Sai"]]);

// alert(communityChestCards[Math.floor(Math.random() * communityChestCards.length)]);
