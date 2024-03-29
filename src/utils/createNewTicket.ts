// this is a utility function for hard-coding dummy data
// used for workflow, called in main.ts to display data
// then uncommented call in main.ts

import { v4 as uuid } from 'uuid';
import { Ticket, store } from "../models/ticket.model"

//create new ticket generator function
export default function createNewTicket(props: Ticket) {
    const thisTicket = {
        id: uuid().slice(0, 8),
        hardware: props.hardware,
        software: props.software,
        solvingStatus: props.solvingStatus,
        priorityStatus: props.priorityStatus,
        title: props.title,
        description: props.description
    }

    return store.push(thisTicket)
}
