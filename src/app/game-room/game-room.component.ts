import { Component, OnInit } from '@angular/core';
import { GameRoomService } from './game-room.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.css'],
  providers: [GameRoomService]
})
export class GameRoomComponent implements OnInit {
  private suits = ['S', 'D', 'C', 'H'];
  private ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  private listPlayerCards: Array<Card>;
  private southPlayerCard:Card;
  private northPlayerCard:Card;
  private eastPlayerCard:Card;
  private westPlayerCard:Card;
  private deck: any[];
  mySeat: any;

  constructor(private _gameRoomService: GameRoomService) { }

  ngOnInit() {
    this.listPlayerCards = this._gameRoomService.getPlayerCards();
    this.deck = this.getDeck();
  }

  clickedCard(card: Card) {
    this._gameRoomService.clickedCard(card);
    this.southPlayerCard = card;
    this.listPlayerCards.splice(this.listPlayerCards.indexOf(card), 1);
  }

  getSeat() {
    const loc = Math.floor((Math.random() * this.deck.length));
    this.mySeat = this.deck[loc];
  }

  getDeck() {
    const deck = new Array();
    this.suits.forEach((suit) => {
      this.ranks.forEach((rank) => {
        const card = new Card(rank, suit);
        deck.push(card);
      });
    });
    return deck;
  }

}
