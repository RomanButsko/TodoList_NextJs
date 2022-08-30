import Head from 'next/head'
import CurrentDate from './CurrentDate'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}: any) => {
    return (
        <div className=' display: flex  flex-col h-screen w-screen bg-cyan-300'>
            <Head>   
                <link rel="preconnect" href="https://fonts.googleapis.com" /> 
                <link rel="preconnect" href="https://fonts.gstatic.com" /> 
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />  
            </Head>  
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
