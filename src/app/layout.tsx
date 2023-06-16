import '@/styles/globals.css'

export const metadata = {
  title: 'Sharny',
  description: 'On Sharny you can share your thoughts with the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
