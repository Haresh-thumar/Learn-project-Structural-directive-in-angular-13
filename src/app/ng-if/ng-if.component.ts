import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  isValid:boolean=false;

  //  isValid:boolean = true;
  thenblock:any;

  userLoggedIn: boolean = true;
  isLoggedIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeValue(valid:any){
    this.isValid = valid;
  }

  clicksome(data:any){
    this.isLoggedIn = data;
  }

  onCreateBlock(){
    this.isValid = true;
  }

}
