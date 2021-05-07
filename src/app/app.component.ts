import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title:string = 'Hello World';
  isNewUser:boolean = true;
  bestWishes:string[] = ['How are you?', 'How was Corona?', 'Thanks for coming back!'];
  beautifulDay:number = Date.now();
  price:number = 2567367;
}
