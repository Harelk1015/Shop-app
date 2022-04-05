import { tickets } from '../Profile/Profile';
import TicketsView from './Tickets.view';

const Tickets = () => {
	const params = new URLSearchParams(window.location.search);
	const id = params.get('_id');

	const ticket = tickets.find((ticket) => ticket._id.toString() === id);

	return <TicketsView ticket={ticket} />;
};

Tickets.displayName = 'Tickets';

export default Tickets;
