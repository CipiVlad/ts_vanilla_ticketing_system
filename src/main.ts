import createNewTicket from './utils/createNewTicket';
import { ticket1, ticket2, ticket3 } from './utils/dummyData';
import Form from './components/Form';
import { store } from './models/ticket.model';

// call Form component for creating and rendering new ticket
Form()

// call dummyData on util function 

createNewTicket(ticket1)
createNewTicket(ticket2);
createNewTicket(ticket3);


// render card
const renderTicket = store.map((ticket, index) => {
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

});

document.querySelector<HTMLDivElement[]>('#app')!.innerHTML = renderTicket;




