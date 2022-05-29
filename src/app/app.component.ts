import { Component, Inject } from '@angular/core';
import { MyservicesService } from './myservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'angular-fully-learning';

  constructor(@Inject(MyservicesService) myservicesService: any) {
    console.log(myservicesService);
  }
}
