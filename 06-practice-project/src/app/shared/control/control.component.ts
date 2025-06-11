import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ElementRef, inject, input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements OnInit, AfterContentInit {
  label = input<string>();
  private el = inject(ElementRef);
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }
  
  onClick(): void {
    console.log('Control clicked:', this.label());
    console.log(this.el);
    console.log(this.control());
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.control());
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log(this.control());
  }
}
