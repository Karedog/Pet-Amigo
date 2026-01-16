import { Roboto } from 'next/font/google'
import "./globals.css";


const roboto = Roboto({
  weight: ['400','500','600','700'], // Escolha os pesos que vai usar
  subsets: ['latin'],
  variable: '--font-roboto', // <-- O NOME DA SUA VARIÁVEL CSS
  display: 'swap',
})

export const metadata = {
  title: "Pet Amigo",
  description: "O melhor lugar para seu pet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        {children}
      </body>
    </html>
  );
}
