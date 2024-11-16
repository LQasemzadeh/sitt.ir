import Head from 'next/head'
import Navbar from "@/pages/Navbar";
import Hero from "@/pages/Hero";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Price from "@/pages/Price";
import Contact from "@/pages/Contact";
import Footer from "@/pages/Footer";
import Adsbar from "@/pages/Adsbar";



export default function Home() {


    return (
        <>
            <Head>
                <title>برج الکترونیک شیراز</title>
            </Head>

            <div className="bg-blue-100">
                <Navbar />
                <Hero />
                <Services />
                <Projects />
                <Price />
                <Adsbar />
                <Contact />
                <Footer />
            </div>
        </>
    )
}
