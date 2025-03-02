import "./globals.css"

export const metadata = {
  title: "Developer Portfolio",
  description: "A professional portfolio showcasing my work and skills",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



import './globals.css'