import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  detailsVisible = signal(false);
  onCloseTicket = output<void>();

  toggleDetails() {
    this.detailsVisible.update(wasVisible => !wasVisible);
  }

  onMarkAsComplete() {
    this.onCloseTicket.emit();
  }
}
