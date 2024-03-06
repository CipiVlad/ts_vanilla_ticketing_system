import createNewTicket from './utils/createNewTicket';
import { ticket1, ticket2, ticket3 } from './utils/dummyData';
import Form from './components/Form';
import RenderTicket from './components/RenderTicket';
import getIncidents from './utils/fetchAndDisplay';

// call dummyData on util function 
createNewTicket(ticket1)
createNewTicket(ticket2);
createNewTicket(ticket3);

// call Form component for creating and rendering new ticket
Form()

// document.querySelector('#app')!.innerHTML = renderTicket;
// must be under dummyData is called
RenderTicket()


async function main() {
    await getIncidents()
}

main()