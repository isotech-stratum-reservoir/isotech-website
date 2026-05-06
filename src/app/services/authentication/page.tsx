import styles from "@/css/authentication.module.scss";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import cottonCutout from "@/public/images/authentication/cotton-cutout.png";
import cottonLogo from "@/public/images/authentication/cotton-logo.png";
import lab from "@/public/images/authentication/lab.jpg";
import sampleIcons from "@/public/images/authentication/sample-icons.svg";
import shipIcon from "@/public/images/authentication/results-shipment-icon.svg";
import statBG from "@/public/images/authentication/authentication-stat-bg.jpg";

export const metadata = {
    title: "Authentication | Services | Isotech",
    description: "Isotech is the largest commercial U.S. isotopic laboratory providing cotton and textile fiber origin authentication meeting enforcement requirements for the Uyghur Forced Labor Prevention Act (UFLPA).",
};

export default function Authentication() {
    const breadcrumbs = ["Services", "Authentication"];

    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <h1 className="visually-hidden">Authentication</h1>

        <div className={`${styles.hero} gradient-bg-90 animated-gradient-bg`}>
            <div className="container d-md-flex align-items-center justify-content-between position-relative mh-450">
                <h2 className="pt-sm-5 pt-md-0" data-aos="fade-right">
                    <span className="semi-bold-text ">Your cotton has a fingerprint.</span><br/>
                    <span className="extra-bold-text">Isotech reads it.</span>
                </h2>

                <Image className="align-self-end" src={cottonCutout} alt="cotton boll" width={425} height={425}/>
            </div>
        </div>

        <Section>
            <div className="mw-800 text-center">
                <Image src={cottonLogo} alt="" width={60} height={78} className="mb-4"/>

                <h2>A U.S.-Based Solution for Cotton Origin Enforcement</h2>

                <p>Isotech is the largest commercial U.S. isotopic laboratory providing cotton and textile fiber origin authentication meeting enforcement requirements for the Uyghur Forced Labor Prevention Act (UFLPA).</p>
            </div>
            {/* <div className="row pt-3">
                <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
                    <Image src={cottonLogo} alt="" width={90} height={117} className="mb-4"/>
                </div>

                <div className="col-12 col-md-6 col-lg-8">
                    <h2>A U.S.-Based Solution for Cotton Origin Enforcement</h2>

                    <p>Isotech is the largest commercial U.S. isotopic laboratory providing cotton and textile fiber origin authentication meeting enforcement requirements for the Uyghur Forced Labor Prevention Act (UFLPA).</p>
                </div>

            </div> */}
        </Section>

        <Section>
            <div className="row">
                <div className="col-12 col-md-6" data-aos="fade-right">
                   <Image src={lab} alt="scientist working in a lab" width={550} height={374} className="mb-4"/>
                </div>

                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center" data-aos="fade-left">
                    <ul className="mb-0 list-unstyled">
                        <li className="yes-check">Fast sample processing and report turnaround</li>
                        <li className="yes-check">Results accepted by Customs and Border Protection</li>
                        <li className="no-x">No cross-border data transmission</li>
                        <li className="no-x">No foreign server exposure</li>
                        <li className="no-x mb-0">No risk of sensitive information leaving U.S. jurisdiction</li>
                    </ul>
                </div>
            </div>
        </Section>

        <Section>
            {/* <div className="row swap-cols-mobile">
                <div className="col-12 col-md-6 col-lg-8" data-aos="fade-right">
                    <h2>Results that Move Shipments</h2>

                    <p>Isotech's reports have been used by importers to support the release of numerous cotton products detained under the UFLPA, with results accepted by Customs and Border Protection in real-world enforcement matters.</p>
                </div>

            </div> */}

            <div className="mw-800 text-center" data-aos="fade-up">
                <h2>Results that Move Shipments</h2>

                <p>Isotech's reports have been used by importers to support the release of numerous cotton products detained under the UFLPA, with results accepted by CBP in real-world enforcement matters.</p>
            </div>

            <div className="row mt-5">

                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" data-aos="flip-left">
                        <div className="card-body border-bottom-steel">
                            <h3 className="card-title">From Detained to Delivered</h3>
                            <p>A cotton garment shipment was flagged by CBP under the UFLPA. The importer had supplier documentation, but needed scientific proof. Isotech tested samples from the detained shipment, delivered a formal origin report, and the importer submitted the findings to CBP. The shipment was released.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" data-aos="flip-left">
                        <div className="card-body border-bottom-orange">
                            <h3 className="card-title">The Blend Isn't a Barrier</h3>
                            <p>A stretch denim (cotton, polyester, and elastane) raised a red flag regarding the cotton's origin. Standard chemical testing can't isolate the cotton component. Isotech stripped out the synthetic fibers, isolated the cotton's isotopic signature, and delivered a clear origin determination on the cotton itself.</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card" data-aos="flip-left">
                        <div className="card-body border-bottom-green">
                            <h3 className="card-title">Testing at Every Step</h3>
                            <p>A brand wanted to validate its supplier's origin claims before goods reached the U.S. border. Isotech tested samples at four points — raw fiber, yarn, fabric, and finished garment — and confirmed a consistent isotopic signature throughout. End-to-end chain of custody, backed by science.</p>
                        </div>
                    </div>
                </div>

            </div>
        </Section>

        <Section className={`gradient-bg-180 ${styles['fingerprint-bg']}`}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="sticky-md-top" data-aos="fade-right">
                        <h2 className="mb-2">The Science Behind the Answer</h2>
                        <h3 className="regular-text mb-4"><em>Stable Isotopic Analysis</em></h3>
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <ul className="animated-list" data-aos="fade-up">
                        <li data-aos="fade-up"><strong>Cotton absorbs its environment as it grows.</strong><br/>
                        Cotton's isotopic composition is determined by factors including water source, latitude, and altitude.</li>
                        <li data-aos="fade-up"><strong>Samples are sent to our lab.</strong><br/>
                        The isotopic composition remains consistent through every stage of the supply chain, from raw fiber to finished goods.</li>
                        <li data-aos="fade-up"><strong>We capture the unique isotopic “fingerprint”.</strong><br/>
                        Stable isotope ratios provide a scientifically proven tool for confirming the sample's geographic origin.</li>
                        <li data-aos="fade-up"><strong>We map the results to a specific region.</strong><br/>
                        Isotech maintains a reference library of cotton samples covering over 96% of all traded cotton.</li>
                        <li data-aos="fade-up"><strong>Results are delivered with certainty.</strong><br/>
                        The final report includes findings on origin with full interpretive support from our expert geochemists. We can also evaluate samples against risk origins.</li>
                    </ul>
                </div>

            </div>
        </Section>

        <Section>
            <div className="row my-4">
                <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center" data-aos="fade-right">
                    <Image className="mb-3" src={sampleIcons} alt="" width={170} height={160}/>
                </div>

                <div className="col-12 col-md-6 col-lg-8" data-aos="fade-left">
                    <h2>Blends, Yarns, Finished Goods. No Sample Too Complex.</h2>

                    <p>Cotton can be tested at any point in the supply chain — from raw fiber through yarn, fabric, and finished garments. Isotech also handles blended fabrics, including polyester, nylon, rayon, viscose, and elastane, by quantitatively removing the non-cotton fiber component. This is critical for UFLPA enforcement, where blended textile goods represent a significant share of detained shipments.</p>
                </div>

            </div>
        </Section>
        
        <Section className="bg-img paralax transparent-overlay dark-grey-bg text-center" style={{backgroundImage: `url(${statBG.src})`}}>
            <div className="py-5">
                <p className="stat">
                    <span className="stat-top"><AnimatedNumber number={1000000}/>+</span>
                    <span className="stat-bottom">samples analyzed for isotopic composition</span>
                </p>
                <p>cotton | oil & gas | water | timber</p>
            </div>
        </Section>

        <Section className="text-center">
            <div className="mw-800 my-4">
                <h2>More data. Less cost. Fast results.</h2>

                <p className="fs-5">When origin matters, trust Isotech — the most experienced isotope lab in the U.S. with 40 years of science, over one million samples analyzed, and results CBP accepts.</p>

                <p className="mt-4"><Link className="button" href="/about/contact">Get your cotton tested today</Link></p>
            </div>
        </Section>
        </>
    );
}