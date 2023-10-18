import { Component } from '@angular/core';

@Component({
  selector: 'app-trackby',
  templateUrl: './trackby.component.html',
  styleUrls: ['./trackby.component.scss']
})
export class TrackbyComponent {
  planets = [
    {
      id: 1,
      name: 'Mercury'
    },
    {
      id: 2,
      name: 'Venus'
    },
    {
      id: 3,
      name: 'Earth'
    },
    {
      id: 4,
      name: 'Jupiter'
    }
  ]

  refreshList() {
    this.planets = [
      {
        id: 8,
        name: 'Pluto'
      },
      // below single object will not refresh in DOM if track by is used
      {
        id: 2,
        name: 'Venus'
      },
      {
        id: 5,
        name: 'Saturn'
      },
      {
        id: 6,
        name: 'Pluto'
      }
    ]
  }

  trackByUser(index: number, item: any) {
    return item.id;
  }
}
