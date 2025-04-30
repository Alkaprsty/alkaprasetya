import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header-section"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alka Prasetya | Portfolio & Blog",
  description: "Portfolio and blog website for Alka Prasetya",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
          <Header />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="cursor"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
