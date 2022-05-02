import React from 'react';

import classes from './PageLoading.module.scss';

interface IPageLoading {}

const PageLoading: React.FC<IPageLoading> = () => {
	return (
		<>
			<div className={classes.modalBackground} />
			<div className={classes.loader} />
		</>
	);
};

PageLoading.displayName = 'PageLoading';

export default PageLoading;
