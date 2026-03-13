import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import Link from "next/link";

export default function NotFound() {
	return (
		<>
			<div className="absolute inset-0 -z-10">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)",
						backgroundSize: "14px 24px",
					}}
				/>

				<div className="absolute top-[20%] right-[30%] h-[500px] w-[500px] rounded-full bg-[rgba(34,197,94,0.5)] blur-[80px] opacity-50" />
			</div>

			<Header />

			<div className="relative z-10 h-screen flex flex-col justify-center items-center gap-4 text-center text-white">
				<p className="font-bold text-7xl">404</p>
				<h2 className="font-bold text-5xl">Page not found</h2>
				<p>Sorry, we couldn’t find the page you’re looking for.</p>
				<Link href="/" className="font-bold text-teal-500 hover:underline">
					← Back to home
				</Link>
			</div>

			<Footer />
		</>
	);
}