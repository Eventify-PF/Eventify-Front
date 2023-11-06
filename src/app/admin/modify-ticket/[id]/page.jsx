 
import EditTicketForm from "./updateTicket";
const LoadTicket = async (id) => {
  const res = await fetch(`http://localhost:3001/events/${id}`);
  // const res = await fetch(`https://server-eventifypro.onrender.com/events/${id}`);

  const data = await res.json();
  return data.tickets[0];
};

export default async function EventPage({ params }) {
  const detailTicket = await LoadTicket(params.id);

  return <EditTicketForm detailTicket={detailTicket} />;
}
 
