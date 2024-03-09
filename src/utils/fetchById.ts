import axios from "axios";
import { Ticket } from "../models/ticket.model";
import deleteTicket from "./deleteTicket";


export default async function getDetailedTicket(id: string) {
    try {
        const response = await axios.get(`http://localhost:3001/tickets/${id}`)
        const ticketId = response.data;
        console.log(id);

        displayDetail(ticketId)
        return response.data
    }
    catch (errors) {
        console.error(errors);

    }
}

export function displayDetail(element: Ticket[]) {
    //create dynamic html-elements
    /**
     * Explaination for element[0]:
     * element[0] is the only element in the array of objects we want to display
     * so we need to access it with index 0 and therefore we don't need to map it
     */


    const section = document.createElement('section');
    section.classList.add('renderTicketCardContainer')

    const h4 = document.createElement('h4')
    h4.innerHTML = `Incident Details Of: <span>${element[0].title}</span>`;

    const ticketNum = document.createElement('p')
    ticketNum.innerHTML = `Ticket Number: ${element[0].id}`

    const description = document.createElement('p')
    description.innerHTML = `Description: ${element[0].description}`

    const hardware = document.createElement('p')
    hardware.innerHTML = `Hardware: ${element[0].hardware}`

    const software = document.createElement('p')
    software.innerHTML = `Software: ${element[0].software}`

    const solvingStatus = document.createElement('p')
    solvingStatus.innerHTML = `Progress: ${element[0].solvingStatus}`

    const priorityStatus = document.createElement('p')
    priorityStatus.innerHTML = `Priority: ${element[0].priorityStatus}`

    //edit button
    const editAnchorTag = document.createElement('a')
    editAnchorTag.setAttribute('href', "http://localhost:5173/edit-ticket.html")
    editAnchorTag.classList.add('editLink')
    editAnchorTag.innerHTML = 'edit'

    //delete button
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.innerHTML = 'delete'
    deleteButton.addEventListener('click', () => {
        if (confirm('Would you like to delete this ticket?')
        ) {
            deleteTicket(element[0].id)
            //navigate to back to index.html after successfully deleting ticket
            window.location.href = 'http://localhost:5173/index.html'

        }
        // if not confirmed say:
        console.log('nope!');

    })

    // append elements to parent element "section"
    section.appendChild(h4)
    section.appendChild(ticketNum)
    section.appendChild(description)
    section.appendChild(hardware)
    section.appendChild(software)
    section.appendChild(solvingStatus)
    section.appendChild(priorityStatus)
    section.appendChild(editAnchorTag)
    section.appendChild(deleteButton)
    document.body.querySelector('#incidentById')!.appendChild(section)

}

