"use client";

// import { Poppins } from "next/font/google";
import { metadata } from "./metadata";
import "./globals.css";
import { ToastContainer } from "react-toastify";

/* 
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-poppins",
}); */

export default function RootLayout({ children }) {
	

	return (
		<html lang="es">
			<head>
				<meta name="description" content={metadata.description} />
				<title>{metadata.title}</title>
			</head>
			<body>
				<div className="fixed inset-0 z-[-999] bg-black pointer-events-none">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)",
							backgroundSize: "14px 24px",
						}}
					/>
				</div>
				{/* 				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<AuthProvider>
							{showSplash && <SplashScreen isVisible={!fadeOut} />}
							{appReady && children}{" "}
							<ToastContainer
								position="bottom-right"
								autoClose={4000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
								theme="light"
							/>
						</AuthProvider>
					</PersistGate>
				</Provider> */}
				{children}
				<ToastContainer
					position="bottom-right"
					autoClose={4000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</body>
		</html>
	);
}
