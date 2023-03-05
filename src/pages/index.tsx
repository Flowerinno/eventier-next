import Landing from "@/components/landing/Landing";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Eventier</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.png" />
			</Head>
			<Landing />
		</>
	);
}
