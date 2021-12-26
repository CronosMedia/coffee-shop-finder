import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
	const router = useRouter();
	console.log("router", router);
	return (
		<div>
			Coffee Store Page {router.query.id}
			<br />
			<Link href="/">
				<a>Back to Home</a>
			</Link>
			<br />
			<Link href="/coffee-store/dynamic">
				<a>Go to page {router.query.id}</a>
			</Link>
		</div>
	);
};

export default CoffeeStore;
