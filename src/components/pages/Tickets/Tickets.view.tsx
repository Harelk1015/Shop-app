import React from 'react';
import { Ticket } from '../../../utils/types';
import classes from './Tickets.module.scss';

interface IProps {
	readonly ticket: Ticket | undefined;
	readonly errMessage: string;
}

const TicketsView: React.FC<IProps> = ({ ticket, errMessage }) => {
	return (
		<div className={classes.app}>
			{errMessage ? (
				<p>{errMessage}</p>
			) : (
				<>
					<h3 className={classes.line}>
						{`Subject :
				${ticket?.subject}`}
					</h3>
					<h3 className={classes.line}>
						{`Ticket ID :
				${ticket?._id}`}
					</h3>
					<h3 className={classes.line}>
						{`E-Mail :
				${ticket?.email}`}
					</h3>
					<h3 className={classes.line}>
						{`Message :
				${ticket?.message}`}
					</h3>
				</>
			)}
		</div>
	);
};

TicketsView.displayName = 'TicketsView';

export default TicketsView;
