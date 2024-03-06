import { v4 as uuid } from 'uuid';
import { Ticket } from '../models/ticket.model';

export const ticket1: Ticket = {
    id: uuid().slice(0, 8),
    hardware: "no",
    software: "yes",
    solvingStatus: "undone",
    priorityStatus: "high",
    title: "ERROR 404",
    description: "Page Not Found"
}
export const ticket2: Ticket = {
    id: uuid().slice(0, 8),
    hardware: "no",
    software: "yes",
    solvingStatus: "undone",
    priorityStatus: "low",
    title: "shu",
    description: "login not working"
}

export const ticket3: Ticket =
{
    id: uuid().slice(0, 8),
    hardware: "yes",
    software: "yes",
    solvingStatus: "done",
    priorityStatus: "high",
    title: "shu -works again",
    description: "login works"
}

