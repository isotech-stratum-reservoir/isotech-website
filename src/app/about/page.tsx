import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import buildingImg from "@/public/images/Isotech Building side view.png";

export const metadata = {
    title: "About | Isotech",
    description: "The largest commercial stable isotope laboratory in the world, Isotech specializes in high-precision carbon, hydrogen, oxygen, nitrogen, and sulfur isotope analysis - isotopic fingerprinting - for a variety of industries.",
};

export default function About() {
    const breadcrumbs = ["About"];
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <Section bgColor="green" className="landing-hero">
            <div className="pe-lg-4">
                <h1>About</h1>

                <p className="lead mb-0 mb-md-3">As one of the largest commercial stable isotope laboratories in the world, Isotech specializes in high-precision carbon, hydrogen, oxygen, nitrogen, and sulfur isotope analysis - isotopic fingerprinting - for a variety of industries. We have built our reputation by providing superior services delivered by expert staff.</p>
            </div>

            <Image 
                priority
                src={buildingImg}
                alt="Isotech building"
                className="slanted-left"
            />
        </Section>

        <Section>
            <p>From the original offerings of gas composition and stable isotope analysis of natural gases, Isotech has expanded into isotope analyses and molecular composition of radiogenic isotopes, waters, organic and inorganic solids, and nutrients, completing analyses for samples from customers around the world. We have also expanded our analytical services to include water chemistry analysis.</p>

            <p>Known for the innovative development of the IsoTube®, IsoBag®, IsoJar®, IsoTrap® and IsoFlask® sampling containers, Isotech sets industry standards for generating the most accurate data possible and providing the highest quality customer service.</p>

            <h2 className="mt-4">Staff</h2>

            <p>Founded in 1985, Isotech now employs approximately 50 chemists, technicians, technologists and support staff dedicated to providing customers with the best possible data and service.</p>

            <p><Link className="button" href="/about/staff">Meet Our Staff</Link></p>

            <h2 className="mt-4">Location and Facilities</h2>

            <p>Isotech&lsquo;s headquarters are located 150 miles south of Chicago in Champaign, Illinois, home of the University of Illinois, the Illinois State Geological Survey, the Illinois Natural History Survey, and the Illinois State Water Survey. We also maintain numerous satellite laboratories in the U.S. and around the world.</p>

            <p>Isotech is a state-of-the-art facility that occupies 31,000 square feet and was designed and constructed specifically to meet the requirements of high-precision isotopic analysis. In our on-site workshop, we maintain much of our own equipment, as well as design and construct the equipment needed for special analyses or for sampling under unusual conditions.</p>

            <h2 className="mt-4">Instrumentation</h2>

            <ul>
                <li>18 Isotope Ratio Mass Spectrometers (IR-MS).</li>
                <li>All instruments are installed in a dedicated room with uninterruptible power supply and a back-up generator to ensure that samples will not be lost due to a power failure during analysis or storage.</li>
                <li>23 Gas Chromatographs (GC) for compositional analysis of gases and for preparation of gas samples for isotopic analysis of different species; several are interfaced with vacuum systems for sample preparation.</li>
                <li>Three Low Level Liquid Scintillation Spectrometers in a temperature-controlled environment for Beta counting of tritium.</li>
                <li>2 laser spectrometers Picarro CRDS laser for water isotope analysis.</li>
                <li>An inductively coupled plasma optical emission spectroscopy (ICP-OES) and an ion chromatograph (IC) for anion and cation water concentrations. </li>
                <li>Electrolytic enrichment systems for low-level tritium analysis.</li>
                <li>In addition to routine laboratory facilities such as drying ovens and fume hoods, Isotech maintains numerous glass and metal vacuum systems for various sample preparation procedures.</li>
            </ul>

        </Section>
        
        </>
    );
}