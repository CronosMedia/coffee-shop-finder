import cls from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import coffeeStoreData from "../../data/coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";

export function getStaticProps(staticProps) {
	const params = staticProps.params;
	return {
		props: {
			coffeeStore: coffeeStoreData.find((coffeeStore) => {
				return coffeeStore.id.toString() === params.id; //dynamic ID
			}),
		},
	};
}

export async function getStaticPaths() {
	const paths = coffeeStoreData.map((coffeeStore) => {
		return { params: { id: coffeeStore.id.toString() } };
	});
	return {
		paths,
		fallback: true,
	};
}

const CoffeeStore = (props) => {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	const { address, name, neighbourhood, imgUrl } = props.coffeeStore;

	const handleUpVoteButton = () => {
		console.log("handleUpVoteButton");
	};

	return (
		<div className={styles.layout}>
			<Head>
				<title>{name}</title>
			</Head>
			<div className={styles.container}>
				{" "}
				<div className={styles.backToHomeLink}>
					<Link href="/">
						<a className={styles.backToHomeButton}>Back to Home</a>
					</Link>
				</div>
				<div className={styles.heading}>
					<div className={styles.nameWrapper}>
						<h1 className={styles.name}>{name}</h1>
					</div>
				</div>
				<div className={cls("glass", styles.coffeeShopCard)}>
					<div className={styles.cardImageWrapper}>
						<Image
							src={imgUrl}
							alt={name}
							width={600}
							height={360}
							className={styles.storeImg}
						/>
					</div>
					<div className={styles.coffeeShopCardInfo}>
						<div className={styles.iconWrapper}>
							<Image
								src="/static/icons/places.svg"
								width="24"
								height="24"
								alt={address}
							/>
							<p className={styles.text}>{address}</p>
						</div>
						<div className={styles.iconWrapper}>
							<Image
								src="/static/icons/nearMe.svg"
								width="24"
								height="24"
								alt={neighbourhood}
							/>
							<p className={styles.text}>{neighbourhood}</p>
						</div>
						<div className={styles.iconWrapper}>
							<Image
								src="/static/icons/star.svg"
								width="24"
								height="24"
								alt="Upvote Star"
							/>{" "}
							<p className={styles.text}>1</p>
						</div>
						<button
							className={styles.upvoteButton}
							onClick={handleUpVoteButton}>
							Vote
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeStore;
