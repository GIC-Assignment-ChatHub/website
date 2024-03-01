import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Team from "components/Team";
import type {NextPage} from "next";
import Head from "next/head";
import Footer from "components/Footer";

const Home: NextPage = () => {
    return (
        <div className="text-white h-screen overflow-scroll bg-slate-800">
            <Head>
                <title>ChatHub</title>
            </Head>

            <div id="Home"></div>
            {/* This is a hack to make the header links work properly. */}

            {/* Header */}
            <Header/>

            {/* Hero */}
            <section>
                <Hero/>
            </section>

            {/* Features */}
            <section id="Features">
                <Features/>
            </section>

            {/* Team */}
            <section id="Team">
                <Team/>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default Home;
