import axios from "axios";
import { Ticket } from "../models/ticket.model";

export default async function getIncidents() {
    try {
        const response = await axios.get('http://localhost:3001/tickets')
        const tickets = response.data;
        console.log(tickets);

        display(tickets)
        return response.data
    }
    catch (errors) {
        console.error(errors);

    }
}


function display(tickets: Ticket[]) {
    //create dynamic html-elements
    //loop through each fetched Item and create elements

    tickets.map((element) => {

        const section = document.createElement('section');
        section.classList.add('renderTicketCardContainer')

        /*  Explanation of line 30: 
        we need to add a link to the detailpage so that when we click on the link
        then we need to add the id to the link in the href attribute of the <a> tag 
        and the "?id=${element.id}" is the query string
        */

        const h4 = document.createElement('h4')
        h4.innerHTML = `Incident: <a href="http://localhost:5173/detail.html?id=${element.id}">${element.title}</a>`;

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
        document.body.querySelector('#app')!.appendChild(section)
    });
}
