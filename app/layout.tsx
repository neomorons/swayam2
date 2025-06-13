import type React from "react"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "white", fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>{children}</body>
    </html>
  )
}
