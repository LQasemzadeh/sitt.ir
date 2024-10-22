import Head from 'next/head'
import Navbar from "@/pages/Navbar";
import Hero from "@/pages/Hero";
import Services from "@/pages/Services";


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
            </div>
        </>
    )
}
