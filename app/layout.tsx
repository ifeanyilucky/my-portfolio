import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import Preloader from "@/components/motion/Preloader";
import BackgroundManager from "@/components/motion/BackgroundManager";
import CustomCursor from "@/components/motion/CustomCursor";
import PageTransition from "@/components/motion/PageTransition";
import { LoaderProvider } from "@/context/LoaderContext";

export const metadata: Metadata = {
    title: "Ifeanyi Lucky | Senior Full-Stack Developer",
    description: "Senior Creative Frontend Engineer & Full-Stack Developer specializing in high-end web experiences.",
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
