import Header from '@/components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import Searchbar from '@/components/Searchbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'IMDb Clone',
	description: 'This is the IMDb clone website',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					{/* Header */}
					<Header />
					{/* Navbar */}
					<Navbar />
					{/* Search bar */}
					<Searchbar />
					{/* Content */}
					{children}
				</Providers>
			</body>
		</html>
	);
}
