
import MainNav from './component/MainNav'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export const metadata = {
  title: 'kyoo page',
  description: 'The series begins by addressing fundamental questions that often arise in the minds of Muslims and non-Muslims alike.Questions such as Why am I a Muslim? and Is Islam the religion of truth?',
  keywords: ["islam, muslim, keyword3"],
  icons: {
    icon: '/iconIslam.svg',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8531563006408715"
     crossorigin="anonymous"></script>
      </head>
      <body className="">
        <MainNav />
        <div>{children}</div>
      </body>
    </html>
  )
}
