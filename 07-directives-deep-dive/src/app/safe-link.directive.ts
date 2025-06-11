import { Directive, ElementRef, inject, input } from '@angular/core';
@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  }
})
export class SafeLinkDirective {
  queryParams = input('myapp', {alias: 'appSafeLink'});
  hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective initialized');
  }

  onConfirmLeavePage(event: MouseEvent): void {
    const confirmation = confirm('You are about to leave this page. Do you want to continue?');
    if (confirmation) {
      this.hostElement.nativeElement.href += '?source=' + this.queryParams();
    }
    else {
      event.preventDefault();
    }
  }
}