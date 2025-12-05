export const metadata = {
  title: 'mi app',
  description: 'ejemplo con css modules',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
       {children}
      </body>
    </html>
  )
}