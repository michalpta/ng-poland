import { Component, OnInit, Input } from '@angular/core';

import { Buddy } from './buddy';

@Component({
  selector: 'app-buddy',
  templateUrl: './buddy.component.html',
  styleUrls: ['./buddy.component.css']
})
export class BuddyComponent implements OnInit {

  @Input() buddy: Buddy;

  constructor() { }

  ngOnInit() {
  }

}
