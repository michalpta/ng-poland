import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers: any[] = [
    { name: 'Michal Ptaszek', description: 'Development Lead' },
    { name: 'Przemyslaw Zapala', description: 'Development Lead' },
    { name: 'Marcin Marczak', description: 'Developer' },
    { name: 'Piotr Przykaza', description: 'Developer' }
  ]

  constructor() { }

  ngOnInit() {
  }

}
