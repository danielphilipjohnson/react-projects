import './globals.css';
import Navbar from './Navbar'
import Providers from "../components/Provider";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode,
}) {
	return (
		<html>
			<head></head>
			<body>
				<main>
					<Providers>
						<Navbar title="home" />

						<div className='container mx-auto'>
							{children}
						</div>
					</Providers>
				</main>
			</body>

		</html>
	);
}