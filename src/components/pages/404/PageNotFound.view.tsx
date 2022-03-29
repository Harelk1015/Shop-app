import classes from './PageNotFound.module.scss';

const PageNotFoundView = () => {
	return <p className={classes.text}>404 Page not found</p>;
};

PageNotFoundView.displayName = 'PageNotFoundView';


export default PageNotFoundView;
