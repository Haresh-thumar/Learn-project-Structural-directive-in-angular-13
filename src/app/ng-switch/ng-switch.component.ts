import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  public choose = '';

  constructor() { }

  ngOnInit(): void {
  }

  setValue(drp:any){
    this.choose = drp.target.value;
  }

}
