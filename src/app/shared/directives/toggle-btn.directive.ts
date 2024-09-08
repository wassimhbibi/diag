import { Directive, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appToggleBtn]'
})
export class ToggleBtnDirective {
  // used in form Element component
  constructor( private element: ElementRef) { }

  ngOnInit(){
    fromEvent(this.element.nativeElement, 'click').subscribe(() => {
      //toogle on/off
      this.element.nativeElement.classList.toggle('on');
    });
  }

}
