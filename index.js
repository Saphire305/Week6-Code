/**
 * class Deck
 *  -build a deck of 52 cards
 *  -randomly assign half the deck to player 1
 *  -assign the other half to player 2
 * 
 * class Player
 *  -has an array property with a random assortment of cards
 *  -plays a card and removes it from their hand
 *  -has a points property to keep track of score
 * 
 * class Game
 *  -initializes Deck and Player objects
 *  -compares cards to assign winning points
 *  -logs out each step
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
} //This function is to get a random num
  

class Deck{
    constructor(){
        this.deck = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13];
        this.hand1 = [];
        this.hand2 = [];
    } //In the constructor class we create the deck and two players hands

    split(){
        for(let i = 0; i < 26; i++){
            let rand = getRandomInt(this.deck.length);
            this.hand1.push(this.deck[rand]);
            this.deck.splice(rand, 1);
        }
        for(let i = 0; i < 26; i++){
            this.hand2.push(this.deck[i]);
        }
    } //This method will select 26 random cards and give them to hand 1, then it will give the remainder to hand 2.
}


class Player{
    constructor(hand){
        this.hand = hand;
        this.score = 0;
    } //In the constructor, each player will be passed in one of the hands from the Deck. It will also start their score at 0

    point(){
        this.score += 1;
    } //This method will add a point to the player's score

    playCard(){
        return this.hand.pop();
    } //This method will simultaneously play a card from the players hand and remove it from their hand to prevent double play.
}


class Game{
    constructor(){
        this.deck = new Deck;
        this.player1 = new Player(this.deck.hand1);
        this.player2 = new Player(this.deck.hand2);
    } //In the constructor, we initialize the game, creating the deck, empty hands and giving each hand to each player.

    start(){
        this.deck.split(); //Here we fill each players hands with a random set of cards

        while(this.player1.hand.length != 0 && this.player2.hand.length != 0){
            this.play();
        }

        if(this.player1.score > this.player2.score){
            console.log(`Player 1 won with a score of ${this.player1.score}!`);
        }else if(this.player2.score > this.player1.score){
            console.log(`Player 2 won with a score of ${this.player2.score}!`);
        }else{
            console.log(`The Game was a tie with a score of ${this.player1.score}!`);
        }
    } //In this method, we fill each players hands, then run a loop playing the game until there are no cards left to play.

    play(){
        let p1 = this.player1.playCard();
        let p2 = this.player2.playCard();

        if(p1 > p2){
            this.player1.point();
            console.log(`Player 1 played ${p1} and Player 2 played ${p2}
            Point Player 1`)
        }else if (p2 > p1){
            this.player2.point();
            console.log(`Player 1 played ${p1} and Player 2 played ${p2}
            Point Player 2`);
        }else{
            console.log(`Player 1 played ${p1} and Player 2 played ${p2}
            No Points Awarded`)
        }
        console.log(`
        Score:
        Player 1 - ${this.player1.score}
        Player 2 - ${this.player2.score}
        `)
    } //In this method, each player plays their card. We then compare cards and give a point to the player with the higher card.
}

const game = new Game;
game.start(); //This starts the game.