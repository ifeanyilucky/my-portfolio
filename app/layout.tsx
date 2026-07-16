import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Preloader from "@/components/motion/Preloader";
import BackgroundManager from "@/components/motion/BackgroundManager";
import CustomCursor from "@/components/motion/CustomCursor";
import PageTransition from "@/components/motion/PageTransition";
import { LoaderProvider } from "@/context/LoaderContext";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
    title: "Ifeanyi Lucky | Backend & Full-Stack Software Engineer",
    description: "Software engineer with 5+ years building scalable backend and full-stack systems across logistics, fintech, Web3, and marketplace platforms — Node.js, TypeScript, React, and cloud infrastructure.",
    openGraph: {
        title: "Ifeanyi Lucky | Backend & Full-Stack Software Engineer",
        description: "5+ years building scalable backend and full-stack systems across logistics, fintech, Web3, and marketplace platforms.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased selection:bg-accent selection:text-black">
                <LoaderProvider>
                    <CustomCursor />
                    <Navigation />
                    <Preloader />
                    <BackgroundManager />
                    <SmoothScroll>
                        <PageTransition>
                            <main>{children}</main>
                        </PageTransition>
                    </SmoothScroll>
                </LoaderProvider>
            </body>
        </html>
    );
}
