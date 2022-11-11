'use client'
import { useSelectedLayoutSegment } from 'next/navigation';
import '../styles/globals.css';
import Header from './components/header/Header';
import Transition from './components/page_component/Transition';
import WavesBackground from './components/waves-background/WavesBackground';
import styles from './layout.module.css';

export default function RootLayout({ children }) {
  const segment = useSelectedLayoutSegment();
  console.log(segment)
  return (

    <html>
      <head>
        <title> Luciano Kapluk - Flutter Dev</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      </head>
      <body>
        <WavesBackground />
        <div className={styles.container}>
          <Header />
          <div className={styles.profile_card + ' ' + styles.blur}>
            <div className={styles.slide}>

            </div>
            <div className={styles.body_card_profile}>
              <span> asdas bdajhsb asds aasd dasd sad sa  djashb ldashb djsahb dljashb dalsjh basjhb d</span>
            </div>
          </div>
          <Transition keys={segment}>
            {children}
          </Transition>



        </div>

      </body>
    </html >
  )
}
