import Document, { Head, Html, NextScript, Main } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/Poppins-Black.ttf"
						as="font"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Poppins-Bold.ttf"
						as="font"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Poppins-ExtraBold.ttf"
						as="font"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Poppins-ExtraLight.ttf"
						as="font"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Poppins-Light.ttf"
						as="font"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Poppins-Medium.ttf"
						as="font"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Poppins-Regular.ttf"
						as="font"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Poppins-SemiBold.ttf"
						as="font"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/Poppins-Thin.ttf"
						as="font"
						crossOrigin="anonymous"
					/>
				</Head>
				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
