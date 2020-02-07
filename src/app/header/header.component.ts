import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output("selectedHeader") selectedHeader = new EventEmitter<string>();

  onHeaderClick(headerName: string){
    this.selectedHeader.emit(headerName);
  }
}
