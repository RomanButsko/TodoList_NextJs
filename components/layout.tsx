import Head from 'next/head'
import BgColor from './BgColor'
import Footer from './Footer'
import Header from './Header'


const Layout = ({children}: any) => {
    return (
        <div className='flex flex-col justify-between min-h-screen w-screen'>
            <Head>   
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />  
            </Head>  
            <BgColor />
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
