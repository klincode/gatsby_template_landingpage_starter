import React from "react";
import SEO from "../components/common/seo.js";
import Layout from "../components/common/layout";
import Navigation from "../components/navigation/navigation";
import Header from "../components/sections/header";
import About from "../components/sections/about";
import Team from "../components/sections/team";
import Services from "../components/sections/services";
import Partners from "../components/sections/partners";
import Career from "../components/sections/Career";
import AsideInfo from "../components/sections/aside";
import Map from "../components/sections/map";
import Contact from "../components/sections/contact";

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Navigation />
    <Header />
    <About />
    <Team />
    <Services />
    <Partners />
    <Career />
    <AsideInfo />
    <Map />
    <Contact />
  </Layout>
);

export default IndexPage;
