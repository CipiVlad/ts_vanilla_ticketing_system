import axios from "axios";
import { Ticket } from "../models/ticket.model";
export default async function getDetailedTicket(id: string) {
    try {
        const response = await axios.get(`http://localhost:3001/tickets/${id}`)
        const tickets = response.data;
        displayDetail(tickets)
        // return response.data
    }
    catch (errors) {
        console.error(errors);

    }
}

export function displayDetail(element: Ticket) {
    //create dynamic html-elements
    //loop through each fetched Item and create elements

    const section = document.createElement('section');
    section.classList.add('renderTicketCardContainer')
    const h4 = document.createElement('h4')
    h4.innerHTML = `Incident Details of: ${element.title}`;
    const ticketNum = document.createElement('p')
    ticketNum.innerHTML = `Ticket Number: ${element.id}`
    const description = document.createElement('p')
    description.innerHTML = `Description: ${element.description}`
    const hardware = document.createElement('p')
    hardware.innerHTML = `Hardware: ${element.hardware}`
    const software = document.createElement('p')
    software.innerHTML = `Software: ${element.software}`
    const solvingStatus = document.createElement('p')
    solvingStatus.innerHTML = `Progress: ${element.solvingStatus}`
    const priorityStatus = document.createElement('p')
    priorityStatus.innerHTML = `Priority: ${element.priorityStatus}`

    section.appendChild(h4)
    section.appendChild(ticketNum)
    section.appendChild(description)
    section.appendChild(hardware)
    section.appendChild(software)
    section.appendChild(solvingStatus)
    section.appendChild(priorityStatus)
    document.body.querySelector('#incidentById')!.appendChild(section)

}

