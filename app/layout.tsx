import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/motion/SmoothScroll";
import PageTransition from "@/components/motion/PageTransition";

export const metadata: Metadata = {
    title: "Ifeanyi | Software Engineer",
    description:
        "Backend and full-stack software engineer building scalable systems across logistics, fintech, Web3, and marketplace platforms — Node.js, TypeScript, React, and cloud infrastructure.",
    openGraph: {
        title: "Ifeanyi | Software Engineer",
        description:
            "Software engineer building backend and full-stack systems across logistics, fintech, Web3, and marketplace platforms.",
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
            <body className="antialiased">
                <SmoothScroll>
                    <PageTransition>
                        <main>{children}</main>
                    </PageTransition>
                </SmoothScroll>
            </body>
        </html>
    );
}