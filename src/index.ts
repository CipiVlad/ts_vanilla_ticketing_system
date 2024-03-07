// import createNewTicket from './utils/createNewTicket';
// import { ticket1, ticket2, ticket3 } from './utils/dummyData';
// import RenderTicket from './components/RenderTicket';
import getIncidents from './utils/fetchAndDisplay';


async function App() {
    await getIncidents()

    //call dummyData on util function 
    // createNewTicket(ticket1)
    // createNewTicket(ticket2);
    // createNewTicket(ticket3);



    // document.querySelector('#app')!.innerHTML = renderTicket;
    // must be under dummyData is called
    // RenderTicket()


    // call Form component for creating and rendering new ticket
    // Form()
}
// Start App
App()
