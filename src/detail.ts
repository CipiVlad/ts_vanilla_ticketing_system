/**
 * What we need to do for getting detailed ticket?
 * 1. get id from url
 * 2. call getDetailedTicket with id 
 * 3. display detailed ticket in detail.html --> look up fetchById.ts
 */


import getDetailedTicket from './utils/fetchById'

const id = window.location.search;

const ticketDetailObject = await getDetailedTicket(id);
console.log(ticketDetailObject);

/*
    Explaination:
    const id = window.location.search

    window: global object in browser environment
    location: location object (means url of current page)
    search: query string (means id=123)

    so id holds the query string like "?id=123"
    since we are fetching data from db.json by id
    we need to get the id from the url by using window.location
    and pass it to the fetchById function to get the data from db.json by id


*/

//console.log(id); // logged: ?id=123 

/**
 * Explaination:
 * const ticketDetailObject = await getDetailedTicket(id);
 * 
 * ticketDetailObject holds the data fetched from db.json by id 
 * and looks like this:
 *  
console.log(ticketDetailObject)
 *  
 * 0:{
    "id": "1",
    "title": "Incident 1",
    "description": "Description 1",
    "hardware": "Hardware 1",
    "software": "Software 1",
    "solvingStatus": "solvingStatus 1",
    "priorityStatus": "priorityStatus 1"
 }
 * 
 * since it's index is 0, we need to access it in "fetchById.ts" 
 * by passing element[0] to displayDetail function
 * and don't need to map it again since it's only one element in the array
 * 
*/

/* 
    finnally call getDetailedTicket with id from url 
    and display detailed ticket in detail.html

    inside

*/
