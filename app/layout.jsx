import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Student Placement Committee | IIIT-K",
  description: "Student Placement Committee of Indian Institute of Information Technology, Kottayam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css' />
      </head>
      <body className={inter.className} style={{overflowX: "hidden"}} >{children}
        <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <script src="./script.js"></script>
      </body>
    </html>
  );
}
