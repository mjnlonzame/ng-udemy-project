import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentHeader = 'recipes';
  onHeaderChange(headerName : string){
    console.log(headerName);
    this.currentHeader = headerName;
  }
}
