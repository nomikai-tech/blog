import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = "https://imagedelivery.net/dFIo1wWuUZtJiq57QrgKWw/312b4d06-319f-4522-aa4d-eccf5b280c00/w=800";
	return (
		<footer className="py-20 dark:border-neutral-800 ">
			<Container className="flex flex-col md:flex-row border-b border-gray-100">
				<div className="mb-5 ms:mb-0 flex w-full flex-col md:flex-row justify-center items-center md:justify-start md:items-start">
					<Link
						href={'/'}
						aria-label={`${publication.title} home page`}
						className="flex flex-row items-center gap-5"
					>
						<img className="block w-[125px]" src={PUBLICATION_LOGO} alt={publication.title} />
					</Link>
				</div>
				<div className="flex w-full h-auto pb-6 flex-col md:flex-row gap-5 md:grid-cols-6 lg:grid-cols-5 items-center place-content-end">
					<Link href="https://nomikai.com" className="text-sm md:pr-6 hover:text-turquoise md:border-r h-5">
						Home
					</Link>
					<Link href="https://nomikai.com/pricing" className="text-sm md:pr-6 hover:text-turquoise md:border-r h-5">
						Pricing
					</Link>
					<Link href="https://nomikai.com/about" className="text-sm md:pr-6 hover:text-turquoise md:border-r h-5">
						About
					</Link>
					<Link href="https://nomikai.com/talk-to-us" className="text-sm md:pr-6 hover:text-turquoise h-5">
						Contact Us
					</Link>
					<div className="flex align-center">
						<SocialLinks />
					</div>
				</div>
			</Container>
			<Container className="flex flex-col md:flex-row border-gray-100 pt-10">
				<div className="mb-5 ms:mb-0 flex w-full flex-col md:flex-row text-xs justify-center items-center md:justify-start md:items-start">
					Copyright ©2024 Nomikai Corporation
				</div>
				<div className="flex w-full h-auto flex-col md:flex-row gap-5 md:grid-cols-6 lg:grid-cols-5 justify-center items-center items-end md:content-end md:align-end md:place-content-end md:justify-items-end">
					<Link href="https://nomikai.com/terms-of-use" className="text-xs md:pr-6 hover:text-turquoise md:border-r h-5">
						Terms of Use
					</Link>
					<Link href="https://nomikai.com/privacy-policy" className="text-xs md:pr-6 hover:text-turquoise md:border-r h-5">
						Privacy Policy
					</Link>
					<Link href="https://nomikai.com/cookie-policy" className="text-xs hover:text-turquoise h-5">
						Cookie Policy
					</Link>	
				</div>
			</Container>
		</footer>
	);
};