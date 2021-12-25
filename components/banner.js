import styles from "./banner.module.css";

const Banner = (props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Coffee Shop Finder</h1>
			<p className={styles.subtitle}>Discover local coffee shops!</p>
			<div className={styles.buttonWrapper}>
				<button className={styles.button} onClick={props.handleOnClick}>
					{props.buttonText}
				</button>
			</div>
		</div>
	);
};

export default Banner;
