function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

describe('Split the deck', () => {
    it('#Should split the deck evenly in 2', () => {
        let deck = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13];
        let hand1 = [];
        let hand2 = [];

        const split = () => {
            for(let i = 0; i < 26; i++){
                let rand = getRandomInt(this.deck.length);
                hand1.push(this.deck[rand]);
                deck.splice(rand, 1);
            }
            for(let i = 0; i < 26; i++){
                hand2.push(this.deck[i]);
            }
        }
    })
})




/**
 * split(){
        for(let i = 0; i < 26; i++){
            let rand = getRandomInt(this.deck.length);
            this.hand1.push(this.deck[rand]);
            this.deck.splice(rand, 1);
        }
        for(let i = 0; i < 26; i++){
            this.hand2.push(this.deck[i]);
        }
    }
 */