import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  titleInput = '';
  textInput = '';
  add = output<{ title: string, text: string }>();

  onSubmit() {
    this.add.emit({ title: this.titleInput, text: this.textInput });
    this.titleInput = '';
    this.textInput = '';
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.form());
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.form());
  }
}
