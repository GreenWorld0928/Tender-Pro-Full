import { Inter } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export default function Layout() {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
