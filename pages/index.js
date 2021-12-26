import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";

// import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
	console.log("HI get static props");

	const options = {
		method: "GET",
		headers: {
			Accept: "application/json",
			Authorization: "fsq3/af2Kso9hM/nmTIqLbs8fPHlgn5+aze6r78y8LplwRo=",
		},
	};

	const response = await fetch(
		"https://api.foursquare.com/v3/places/search?ll=44.93%2C26.02&categories=13035&limit=9",
		options
	);
	const data = await response.json();

	console.log(data);

	return {
		props: { coffeeStores: data.results }, // will be passed to the page component as props
	};
}

export default function Home(props) {
	console.log("props", props);
	const handleOnBannerBtnClick = () => {
		console.log("clicked");
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Shop Finder</title>
				<meta
					name="description"
					content="Coffee Shop Finder App using NextJS"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Banner
					buttonText="View stores nearby"
					handleOnClick={handleOnBannerBtnClick}
				/>
				{props.coffeeStores.length > 0 && (
					<>
						<h2 className={styles.heading2}>
							Bucharest Coffee Stores
						</h2>
						<div className={styles.cardLayout}>
							{props.coffeeStores.map((item) => {
								return (
									<Card
										key={item.fsq_id}
										{...item}
										href={`/coffee-store/${item.fsq_id}`}
									/>
								);
							})}
						</div>
					</>
				)}
			</main>
		</div>
	);
}
