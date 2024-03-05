// Overview Logic
import { v4 as uuid } from 'uuid';


// ticket type objects
export type ProblemOptions = {
    hardware: "yes" | "no",
    software: "yes" | "no",
    solvingStatus: "done" | "undone"
    priorityStatus: "low" | "mid" | "high"
}

export type ProblemDescription = {
    id: string,
    title: string,
    description: string,
}

export type Ticket = ProblemOptions & ProblemDescription;


// Ticket Array Store
export let store: Ticket[] = [];

//create new ticket function
function createNewTicket(props: Ticket) {
    const thisTicket = {
        id: uuid(),
        hardware: props.hardware,
        software: props.software,
        solvingStatus: props.solvingStatus,
        priorityStatus: props.priorityStatus,
        title: props.title,
        description: props.description
    }

    return store.push(thisTicket)
}


//examples tickets hard coded 

const newTicket: Ticket = {
    id: uuid(),
    hardware: "no",
    software: "yes",
    solvingStatus: "undone",
    priorityStatus: "high",
    title: "ERROR 404",
    description: "Page Not Found"
}

createNewTicket(newTicket)


//create ticket via generator function

createNewTicket({
    id: uuid(),
    hardware: "no",
    software: "yes",
    solvingStatus: "undone",
    priorityStatus: "low",
    title: "shu",
    description: "login not working"

});

createNewTicket({
    id: uuid(),
    hardware: "yes",
    software: "yes",
    solvingStatus: "done",
    priorityStatus: "high",
    title: "shu -works again",
    description: "login works"
});

console.log(store);


// render card

const renderTicket = store.map((ticket, index) => {
    return ` 
    <main class="renderTicketCardContainer">
            <section key=${index} id="ticketCard" class="problems_container">    
                <h4 id="title">Incidend: <a href="./detail.html">${ticket.title}</a></h4>
                <p id="ticketNumber">Ticket Number: ${ticket.id}</p>
                <p id="description">Description: ${ticket.description}</p>
                <p id="hardware">Hardware: ${ticket.hardware}</p>
                <p id="software">Software: ${ticket.software}</p>
                <p id="status">Progress: ${ticket.solvingStatus}</p>
                <p id="priority">Priority: ${ticket.priorityStatus}</p>
            </section>
    </main>`

});



document.querySelector<HTMLDivElement[]>('#app')!.innerHTML = renderTicket;


