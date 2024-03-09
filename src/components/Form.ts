import { v4 as uuid } from 'uuid';
import { Ticket } from '../models/ticket.model';
import axios from 'axios';

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
    console.log('form component importet to create-ticket.html')
    //onsubmit
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let newStoreItem: Ticket =
        {
            id: uuid().slice(0, 8),
            title: title.value,
            description: description.value,
            hardware: hardware.checked ? "yes" : "no",
            software: software.checked ? "yes" : "no",
            solvingStatus: progress.checked ? "done" : "undone",
            priorityStatus: prioLow.checked ? "low" : undefined
                || prioMid.checked ? "mid" : undefined
                    || prioHigh.checked ? "high" : undefined

        };


        //add and send new ticket to db.json
        const sendData = async () => {
            const response = await axios.post('http://localhost:3001/tickets', newStoreItem)
            console.log(response.data)
            return response

        }
        sendData()

        //navigate after submit
        window.location.href = 'http://localhost:5173/index.html';

    })
}