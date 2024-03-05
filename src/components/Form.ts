import { v4 as uuid } from 'uuid';
import { Ticket } from '../models/ticket.model';

//HTML Reference
const form = document.getElementById('form') as HTMLFormElement;
const title = document.getElementById('title') as HTMLInputElement;
const description = document.getElementById('description') as HTMLTextAreaElement;
const hardware = document.getElementById('hardware') as HTMLInputElement;
const software = document.getElementById('software') as HTMLInputElement;
const progress = document.getElementById('progress') as HTMLInputElement;
const prioLow = document.getElementById('prioLow') as HTMLInputElement;
const prioMid = document.getElementById('prioMid') as HTMLInputElement;
const prioHigh = document.getElementById('prioHigh') as HTMLInputElement;

export default function Form() {
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

        const renderNewTicket = newStoreItem.map((ticket, index) => {
            return ` 
                <h2>New Incidend Added!</h2>
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

        document.querySelector<HTMLDivElement[]>('#form-output')!.innerHTML = renderNewTicket;


    })
}