import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  Students : any[] = [
    {
      'name' : 'Rahul Kumar'
    },
    {
      'name' : 'Ajeet Kumar'
    },
    {
      'name' : 'Rohan Kumar'
    },
    {
      'name' : 'Mukesh Kumar'
    },
    {
      'name' : 'Chandan Kumar'
    },
    {
      'name' : 'Soni Kumari'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
