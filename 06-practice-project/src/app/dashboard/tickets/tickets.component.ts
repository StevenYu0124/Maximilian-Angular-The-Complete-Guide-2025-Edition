import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(inputTicket: { title: string, text: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: inputTicket.title,
      request: inputTicket.text,
      status: 'open',
    };
    this.tickets.push(ticket);
    console.log(this.tickets);
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map(ticket => {
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
