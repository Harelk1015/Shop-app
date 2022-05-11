import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ReducersState } from '../../../store/reducers';

import { User } from '../../../utils/types';
import ContactView from './Contact.view';

const Contact = () => {
	const [subjectState, setSubjectState] = useState<string>('');
	const [messageState, setMessageState] = useState<string>('');

	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [submitMessage, setSubmitMessage] = useState<string>('');
	const [submitErrMessage, setSubmitErrMessage] = useState<string>('');

	const auth: { user: User } = useSelector((state: ReducersState) => state.auth);

	const contactSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		setIsLoading(true);

		axios
			.post(process.env.REACT_APP_BACKEND_URL + '/ticket/add-ticket', {
				subject: subjectState,
				email: auth.user.email,
				message: messageState,
			})
			.then((res) => {
				setIsLoading(false);
				setSubmitErrMessage('');
				setSubmitMessage(res.data.message);
			})
			.catch((err) => {
				setIsLoading(false);
				setSubmitErrMessage(err.response.data.message);
				setSubmitMessage('');
			});
	};

	return (
		<ContactView
			setSubjectState={setSubjectState}
			setMessageState={setMessageState}
			contactSubmitHandler={contactSubmitHandler}
			isLoading={isLoading}
			submitMessage={submitMessage}
			submitErrMessage={submitErrMessage}
		/>
	);
};

Contact.displayName = 'Contact';

export default Contact;
