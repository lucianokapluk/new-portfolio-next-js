'use client'
import { Poppins } from '@next/font/google';
import Image from 'next/image';
import '../styles/globals.css';
import { TabIndexProvider } from './components/context';
import Header from './components/header/Header';
import Transitions from './components/page_component/Transition';
import WavesBackground from './components/waves-background/WavesBackground';
import styles from './layout.module.css';
const poppins = Poppins({ weight: "400", subsets: ['latin'] })
export default function RootLayout() {




  return (

    <html>
      <head>
        <title> Luciano Kapluk - Flutter Dev</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      </head>
      <body className={poppins.className}>
        <TabIndexProvider>
          <WavesBackground />
          <div className={styles.container}>
            <Header />
            <div className={styles.profile_card + ' ' + styles.blur}>
              <div >
                <div className={styles.image_profile}>
                  <Image src="/LucianoKapluk.jpg" layout='fill'
                    objectFit='cover' alt="profile" />
                </div>
                {/*           <Image src="/LucianoKapluk.jpg" layout='fill'
                objectFit='contain' alt="profile" position="relative" /> */}
              </div>
              <div className={styles.body_card_profile}>
                <div className={styles.my_name}>Luciano Kapluk</div>
                <div className={styles.profession}> Flutter Developer</div>
                <div className={styles.brands_icons}>

                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-github"></i>
                  <i class="fa-brands fa-whatsapp"></i>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                </div>
              </div>
              <div className={styles.download_cv_container}>
                <div className={styles.download_cv_button}><div>DOWNLOAD CV</div></div>
                <div className={styles.contact_button}><div>CONTACT ME</div></div>
              </div>
            </div>
            <Transitions />
          </div>
        </TabIndexProvider>
      </body>
    </html >

  )
}
