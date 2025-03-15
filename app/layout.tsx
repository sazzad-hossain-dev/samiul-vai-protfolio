import type { Metadata } from "next";
import "./globals.css";
import { ThemeProviders } from "./themeProvider";

export const metadata: Metadata = {
    title: "Samiul Alam Khan",
    description: "Protfolio website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            className="h-full w-full overflow-x-hidden overflow-y-visible"
            suppressHydrationWarning
            lang="en"
        >
            <ThemeProviders>
                <body className=" h-full w-full overflow-x-hidden overflow-y-visible">
                    {children}
                </body>
            </ThemeProviders>
        </html>
    );
}
