import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
// import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
// import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'
// import ContactSection from '@/Components/ContactSection/ContactSection'

export const metadata = {
    title: 'Millionairebia: Redefining Luxury Living | Exclusive Concierge Services & Luxury Consultations',
    description: `Experience unparalleled luxury with Millionairebia. Our mission is to redefine luxury living by providing exclusive concierge services, expert consultations, and access to the world’s most prestigious destinations`,
    icons: {
        icon: `https://ucarecdn.com/0f405681-7972-40ce-872a-9fe8bbc1918a/logobia.jpg`
    }
}

export default function RootLayout({children} : {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;900&display=swap" rel="stylesheet"/>
            </head>

            <body className=''>

                <ContextWrapper>
                    <Navbar/>
                    <Sidebar cates={undefined}/>
                    {/* <QuickCart/> */}
                    {/* <ScrollToTop/> */}
                    <main >

                     {children}
                    </main>
                    <Footer/>
                </ContextWrapper>
            </body>
        </html>
    )
}
