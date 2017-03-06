import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: FirebaseListObservable<any[]>;

  constructor(fb: AngularFire){
    this.books = fb.database.list('/Books');
  }

}
