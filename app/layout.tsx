import { Poppins } from "next/font/google";
import { Metadata } from "next";
import "./global.css";
import Header from "@/sections/header/Header";
import Footer from "@/sections/footer/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Ahmer's Dev | Streamline Your Digital Experience | Web Application Developer",
  description:
    "With expertise in HTML5, XHTML, CSS3, and Bootstrap, I bring seamless visual appeal and responsive design to your website. Leveraging JavaScript, NextJS, ReactJS, React TSX/Typescript, and JSON, I create dynamic and interactive web experiences that captivate your audience.",
  applicationName: "Ahmer's Dev",
  keywords: [
    "HTML5",
    "HTML",
    "CSS",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "NextJS",
    "ReactJS",
    "TSX",
    "TypeScript",
    "WordPress",
    "Wix",
  ],
  authors: [{ name: "Muhammad Ahmer Akram" }],
  referrer: "origin-when-cross-origin",
  colorScheme: "dark",
  creator: "Muhammad Ahmer Akram",
  publisher: "Muhammad Ahmer Akram",
  themeColor: "black",
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://ahmersdev-portfolio.vercel.app/"),
  openGraph: {
    title:
      "Ahmer's Dev | Streamline Your Digital Experience | Web Application Developer",
    description:
      "With expertise in HTML5, XHTML, CSS3, and Bootstrap, I bring seamless visual appeal and responsive design to your website. Leveraging JavaScript, NextJS, ReactJS, React TSX/Typescript, and JSON, I create dynamic and interactive web experiences that captivate your audience.",
    url: "https://ahmersdev-portfolio.vercel.app//",
    siteName: "Ahmer's Dev | Web Application Developer",
    images: [
      { url: "/brand_logo.png", width: 800, height: 600 },
      {
        url: "/brand_logo.png",
        width: 1800,
        height: 1600,
        alt: "Streamline Your Digital Experience",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "app",
    title:
      "Ahmer's Dev | Streamline Your Digital Experience | Web Application Developer",
    description:
      "With expertise in HTML5, XHTML, CSS3, and Bootstrap, I bring seamless visual appeal and responsive design to your website. Leveraging JavaScript, NextJS, ReactJS, React TSX/Typescript, and JSON, I create dynamic and interactive web experiences that captivate your audience.",
    creator: "@ahmersdev",
    images: {
      url: "/og-image.png",
      alt: "Cover",
    },
    app: {
      name: "Ahmer's Dev | Web Application Developer",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "/og-image.png",
        ipad: "/og-image.png",
      },
    },
  },
  // verification: {
  //   google: "google",
  //   yandex: "yandex",
  //   yahoo: "yahoo",
  //   other: {
  //     me: ["mahmerakram6@gmail.com", "my-link"],
  //   },
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
