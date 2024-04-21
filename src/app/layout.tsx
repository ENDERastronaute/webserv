
import { Inter } from "next/font/google";
import "./globals.scss";
import WallpaperContext from "@/lib/utils/hooks/wallpaperContext";
import useWallpaper from "@/lib/utils/hooks/useWallpaper";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
		<body className={inter.className}><Providers>{children}</Providers></body>
		</html>
	);
}
