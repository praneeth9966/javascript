class Deck {
    constructor() {
      this.deck = [];
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
  
    shuffle(){
      const { deck } = this;
      //console.log(deck.length);
     let m = deck.length, i;
       // let m=9,i;
      while(m<43){
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
        
        
      }
  
      return this;
    }
  
    deal(){
      return this.deck.pop();
    }
  }
  
  const deck1 = new Deck();
  deck1.shuffle()
  console.log(deck1.deck);
  deck1.deal()
  console.log(deck1.deck);

  const deck2 = new Deck();
  deck1.shuffle()
  console.log(deck2.deck);
  deck1.deal()
  console.log(deck2.deck);
  
  
  