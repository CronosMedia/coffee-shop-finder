import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import { coffeeShops } from "../data/coffee-stores";

export default function Home() {
	const handleOnBannerBtnClick = () => {
		console.log("clicked");
	};

	const coffeeStores = coffeeShops.map((item) => {
		return (
			<Card key={item.id} {...item} href={`/coffee-store/${item.id}`} />
		);
	});

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
				<div className={styles.cardLayout}>{coffeeStores}</div>
			</main>
		</div>
	);
}
