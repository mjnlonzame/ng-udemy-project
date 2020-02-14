import { Directive, HostBinding, OnChanges, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective  {
  //isClicked : boolean = false;
  @HostBinding('class.open')  isOpen = false;
  constructor(private elRef: ElementRef) { 

  }

  
  // @HostListener('mouseenter') mouseover(eventData: Event){
  //   this.className = 'open';
  // }
  
  
  // @HostListener('mouseleave') mouseleave(eventData: Event){
  //   this.className = '';
  // }
  
  // @HostListener('click', ['$event.target']) onClick(btn){
  //   //this.isOpen = !this.isOpen;
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}
