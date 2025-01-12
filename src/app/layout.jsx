import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/context/ThemeProvider"
import "./globals.css"
import { AuthProvider } from "@/context/AuthProvider"
import { ModeToggle } from "@/components/ModeToggle"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "App crud de clientes",
  description: "Crud de clientes com fins didáticos",
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="pt-BR" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
            <ModeToggle className="fixed bottom-4 right-4 z-10 bg-background border-2 outline-none" />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
