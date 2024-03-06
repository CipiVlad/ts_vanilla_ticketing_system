import { store } from "../models/ticket.model";

export default function RenderTicket() {

    const ticket = store.map((ticket, index) => {
        return ` 
            <section key=${index} id="ticketCard" class="renderTicketCardContainer">    
                <h4 id="title">Incidend: <a href="./detail.html">${ticket.title}</a></h4>
                <p id="ticketNumber">Ticket Number: ${ticket.id}</p>
                <p id="description">Description: ${ticket.description}</p>
                <p id="hardware">Hardware: ${ticket.hardware}</p>
                <p id="software">Software: ${ticket.software}</p>
                <p id="status">Progress: ${ticket.solvingStatus}</p>
                <p id="priority">Priority: ${ticket.priorityStatus}</p>
            </section>
    `
    })

    document.querySelector('#app')!.innerHTML = ticket;
}