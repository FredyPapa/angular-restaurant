import { Component } from '@angular/core';

@Component({
  selector: 'rw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurant';
  dish = 'carapulcra';
  taste = true;

  changeTest():void{
    this.taste = !this.taste;
  }
}
