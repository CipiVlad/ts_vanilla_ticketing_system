// Overview Logic
import { v4 as uuid } from 'uuid';
const ticketId = uuid();

// ticket type objects
type ProblemOptions = {
    hardware: boolean,
    software: boolean,
    solvingStatus: "done" | "undone"
    priorityStatus: "low" | "mid" | "high"
}

type ProblemDescription = {
    id: string,
    title: string,
    description: string,
}


type Ticket = ProblemOptions & ProblemDescription;

//example

const newTicket: Ticket = {
    id: ticketId,
    hardware: false,
    software: true,
    solvingStatus: "undone",
    priorityStatus: "high",
    title: "ERROR 404",
    description: "Page Not Found"
}


// render ticket
const renderTicket = () => {
    // for (const [key, value] of Object.entries(newTicket)) {
    //     return ticketNumber.innerHTML = (
    //         `${key}: ${value}`
    //     )
    // }
    return (
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<header>
<nav class="navBar">
  <h1>Ticketing Help Desk Service</h1>
  <a href="index.html">Overview</a>
  <a href="problemInput.html">Create Ticket</a>
</nav>
</header>


<main>
<h2>Ticket Overview</h2>
<!-- here goes dynamic rendering -->
<section id="ticketCard" class="problems_container software">

  <h4 id="title">${newTicket.title}</h4>
  <p id="ticketNumber">Ticket Number: ${newTicket.id}</p>
  <p id="description">${newTicket.description}</p>
  
  <p id="hardware">Hardware: ${newTicket.hardware}</p>
  <p id="software">Software:${newTicket.software}</p>
  <p id="status">Progress: ${newTicket.solvingStatus}</p>
  <p id="priority">Priority: ${newTicket.priorityStatus}</p>
</section>
<section class="problems_container hardware"></section>
</main>`
    )

}

renderTicket()

