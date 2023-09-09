let expect = chai.expect;

describe('Split the deck', () => {
    it('Should give each hand 26 cards', () => {
        let deck = new Deck;
        deck.split();
        expect(deck.hand1.length).to.equal(26);
        expect(deck.hand2.length).to.equal(26);
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