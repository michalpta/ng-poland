import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Buddy } from './buddy';

@Component({
  selector: 'app-buddy',
  templateUrl: './buddy.component.html',
  styleUrls: ['./buddy.component.css']
})
export class BuddyComponent implements OnInit {

  @Input() buddy: Buddy = new Buddy();
  @Input() teamMembers: FirebaseListObservable<any[]>

  @Input() createMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  saveBuddy() {
    console.log(this.buddy)
    if (this.createMode) {
      this.teamMembers.push(this.buddy);
    }
    else {
      this.teamMembers.update(this.buddy.$key, { name: this.buddy.name });
    }
  }

}
