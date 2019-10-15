import {Component, OnInit} from '@angular/core';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-deck-component',
  templateUrl: './deck-component.component.html',
  styleUrls: ['./deck-component.component.css']
})
export class DeckComponentComponent implements OnInit {
  private suits = ['spades', 'diamonds', 'clubs', 'hearts'];
  private values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


  constructor() {
  }

  ngOnInit() {
  }

  getDeck() {
    const deck = new Array();
    this.suits.forEach(function (suit) {
      this.values.forEach(function (value) {
        const card = {Value: value, Suit: suit};
        deck.push(card);
      });
    });
    return deck;
  }

  shuffle(deck) {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++) {
      const location1 = Math.floor((Math.random() * deck.length));
      const location2 = Math.floor((Math.random() * deck.length));
      const tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  }

  fetchCardFromDeck(deck) {
    const loc = Math.floor((Math.random() * deck.length));
    return loc;
  }


}
