import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers: FirebaseListObservable<any[]>

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.teamMembers = this.af.database.list('/teamMembers');
  }

}
