import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'log()'
  }
})
export class LogDirective {
  private element = inject(ElementRef);

  log() { 
    console.log(this.element.nativeElement);
    console.log('clicked');
  }
}
