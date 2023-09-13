class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
     if (this.cards) {
       for (let i = this.cards.length - 1; i >= 1; i--) {
         const randomNumber = Math.floor(Math.random() * i);
         const firstElement = this.cards[i];
         const secondElement = this.cards[randomNumber];
         this.cards[i] = secondElement;
         this.cards[randomNumber] = firstElement;
       }
       return this.cards;
     } else {
       return undefined;
     }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1 === card2){
      this.pairsGuessed++;
      return true
    }else{
      return false;
    }
  }

  checkIfFinished() {
    const totalPairs = this.cards.length / 2;
    return this.pairsGuessed === totalPairs;
  }
}
