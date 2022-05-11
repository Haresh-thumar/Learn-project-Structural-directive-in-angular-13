import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if.component'
import { NgSwitchComponent } from './ng-switch/ng-switch.component'

const routes: Routes = [
  { path: '', component: NgIfComponent },
  { path: '', component: NgSwitchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
