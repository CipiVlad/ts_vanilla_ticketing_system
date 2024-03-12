import axios from "axios";
import { Ticket } from "./models/ticket.model";
import { v4 as uuid } from "uuid";




// #1 fetchById
// #2 edit inputfields

const form = document.getElementById('form') as HTMLFormElement;
const title = document.getElementById('editTitle') as HTMLInputElement;
const description = document.getElementById('editDescription') as HTMLTextAreaElement;


async function editTicket() {
    const updatedTicketObj: Ticket = {
        id: uuid(),
        title: title.value,
        description: description.value
    }


    async function updateTicket(id: string) {
        try {

            const { data } = await axios.put(`http://localhost:3001/tickets/${id}`, updatedTicketObj)
            confirm('Would you like to edit this ticket?')

            //navigate to back to index.html after successfully deleting ticket
            window.location.href = 'http://localhost:5173/index.html'

            return data

        } catch (error) {
            console.error(error)
        }
    }

    updateTicket("90ee6492")

}

form?.addEventListener('submit', (event) => {
    event.preventDefault()
    editTicket()

})

