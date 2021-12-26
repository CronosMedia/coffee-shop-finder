import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import cls from "classnames";

const Card = (props) => {
	return (
		<Link href={props.href}>
			<a className={styles.cardLink}>
				<div className={cls("glass", styles.container)}>
					<div className={styles.cardImageWrapper}>
						<Image
							src={
								props.imgUrl ||
								"https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
							}
							width={350}
							height={300}
							alt=""
							className={styles.cardImage}
						/>
					</div>

					<div className={styles.cardHeaderWrapper}>
						<h2 className={styles.cardHeader}>{props.name}</h2>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default Card;
