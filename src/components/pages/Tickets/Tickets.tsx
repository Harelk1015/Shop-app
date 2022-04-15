import axios from 'axios';
import { useEffect, useState } from 'react';
import { Ticket } from '../Profile/Profile';
import TicketsView from './Tickets.view';

const Tickets = () => {
	const params = new URLSearchParams(window.location.search);
	const id = params.get('_id');

	const [ticket, setTicket] = useState<Ticket>();
	const [errMessage, setErrMessage] = useState('');

	useEffect(() => {
		axios
			.post(process.env.REACT_APP_BACKEND_URL + '/ticket/get-ticket', {
				ticketId: id,
			})
			.then((res) => {
				setTicket(res.data.ticket);
			})
			.catch((err) => {
				setErrMessage(err.response.data.message);
			});
	}, []);

	return <TicketsView ticket={ticket} errMessage={errMessage} />;
};

Tickets.displayName = 'Tickets';

export default Tickets;
