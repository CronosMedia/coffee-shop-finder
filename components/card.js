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
							src={props.imgUrl}
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
