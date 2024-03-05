// Overview Logic
import { v4 as uuid } from 'uuid';


// ticket type objects
export type ProblemOptions = {
    hardware?: "yes" | "no",
    software?: "yes" | "no",
    solvingStatus?: "done" | "undone"
    priorityStatus?: "low" | "mid" | "high"
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


// ----------------------------------------------------------------------


// ----------------------------------------------------------------------



//create ticket
const form = document.getElementById('form') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const description = document.getElementById('description') as HTMLTextAreaElement;
const hardware = document.getElementById('hardware') as HTMLInputElement;
const software = document.getElementById('software') as HTMLInputElement;
const progress = document.getElementById('progress') as HTMLInputElement;
const priority = document.getElementById('priority') as HTMLSelectElement;

const prioLow = document.getElementById('prioLow') as HTMLInputElement;
const prioMid = document.getElementById('prioMid') as HTMLInputElement;
const prioHigh = document.getElementById('prioHigh') as HTMLInputElement;

console.log(priority);



form.addEventListener('submit', (event) => {
    event.preventDefault();

    let newStoreItem: Ticket[] = [];

    newStoreItem.push({
        id: uuid().slice(0, 8),
        title: title.value,
        description: description.value,
        hardware: hardware.checked ? "yes" : "no",
        software: software.checked ? "yes" : "no",
        solvingStatus: progress.checked ? "done" : "undone",
        priorityStatus: prioLow.checked ? "low" : undefined
            || prioMid.checked ? "mid" : undefined
                || prioHigh.checked ? "high" : undefined

    })

    const render = newStoreItem.map((ticket, index) => {
        return ` 
                <h2>New Item Added!</h2>
                <section key=${index} id="ticketCard" class="renderTicketCardContainer">  
                <h4 id="title">Incidend: <a href="./detail.html">${ticket.title}</a></h4>
                <p id="ticketNumber">Ticket Number: ${ticket.id}</p>
                <p>Description: ${ticket.description}</p>
                <p>Hardware Issue: ${ticket.hardware}</p>
                <p>Software Issue: ${ticket.software}</p>
                <p>Solving Status: ${ticket.solvingStatus}</p> 
                <p>Priority: ${ticket.priorityStatus}</p> 
                </section>
        `
    });

    document.querySelector<HTMLDivElement[]>('#form-output')!.innerHTML = render;


});

// ----------------------------------------------------------------------


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

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
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




