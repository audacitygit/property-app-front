import React from "react"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
          <div>hello world</div>
        <body>{children}</body>
      </html>
    )
  }
