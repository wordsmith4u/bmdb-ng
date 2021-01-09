import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmdb-ng';
  movies = ["Star Wars", "Sixteen Candles", "Fifth Element", "Better Off Dead", "Blazing Saddles", "Dr. Strangelove", "Monty Python & The Holy Grail", "Animal House", "This Is Spinal Tap", "Blues Brothers", "The Outlaw Josey Wales"];
}
