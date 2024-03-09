import axios from "axios"

export default async function deleteTicket(id: string) {
    try {
        const response = await axios.delete(`http://localhost:3001/tickets/${id}`)
        console.log(`Deleted Todo ID: `, id);

        return response.data
    } catch (error) {
        console.error(error)
    }
}