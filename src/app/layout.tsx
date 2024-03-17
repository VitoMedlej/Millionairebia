import Navbar from '@/Components/Navbar/Navbar'
import '../Styles/Styles.css'
import '../Styles/qty.css'
import Footer from '@/Components/Footer/Footer'
import Sidebar from '@/Components/Sidebar/Sidebar'
import ScrollToTop from '@/Components/ScrollToTop/ScrollToTop'
import QuickCart from '@/Components/Shared/QuickCart/QuickCart'
import ContextWrapper from '@/context/Contexts'
import ContactSection from '@/Components/ContactSection/ContactSection'

export const metadata = {
    title: 'Millionairebia - Premier Car Care Services in Lebanon',
    description: `At Millionairebia, we offer top-notch car care services in Lebanon. From expert car wash and interior detailing to exterior treatments, window tinting, vinyl wrap, upholstery repair, body paint, and more – trust us for a sparkling clean and well-maintained ride.`,
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
                    <ContactSection/>
                    <Footer/>
                </ContextWrapper>
            </body>
        </html>
    )
}
