import Image from "next/image";
import Link from "next/link";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import isoJarImg from "@/public/images/products/IsoJar.jpg";
import chart1 from "@/public/images/products/isojarschart1.jpg";
import chart2 from "@/public/images/products/isojarschart2.jpg";

export const metadata = {
    title: "IsoJar® | Products | Isotech",
    description: "The IsoJar® is constructed of a durable, clear plastic designed for collecting drill cuttings.",
};

export default function IsoJar() {
    const breadcrumbs= ["Products", "IsoJar®"];
    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoJar<sup>®</sup></h1>

            <Image 
                priority
                src={isoJarImg} 
                alt="IsoJar" 
                width={125}
                height={155}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />
            
            <p className="clearfix">For collecting drill cuttings that have traditionally been sampled into paint cans, we have developed the IsoJar; constructed of a durable, clear plastic. After extensive testing, we have found there is very little change in the compositional data and no change in the isotopic data of gases contained in IsoJars compared to leakage associated with using amber glass bottles for sampling.</p>

            <hr className="mb-5"/>

            <div className="row">
                <div className="col-12 col-md-6">
                    <Image 
                        src={chart1} 
                        alt="Graph showing concentrations of C2-C4+ after 2.5 months" 
                        width={490}
                        height={186}
                        className="img-fluid d-block mx-auto"
                    />
                </div>

                <div className="col-12 col-md-6">
                    <Image 
                        src={chart2} 
                        alt="Graph showing isotope data after 5 months in IsoJars" 
                        width={490}
                        height={208}
                        className="img-fluid d-block mx-auto"
                    />
                </div>
            </div>

            <h2 className="mt-4">Sample and Jar Storage</h2>
            <ul>
                <li>Jars are guaranteed for 1 year from the date of sale from Isotech.</li>
                <li>Jars and samples should be stored between 60&deg;F and 80&deg;F.</li>
                <li>In situations where the product may not have been handled or stored properly, the customer is advised to evaluate the product for conformity and suitability for use.</li>
            </ul>

            <p className="mt-4"><Link className="button download" href="/files/FO 702 Rev. 10 Collecting Cuttings Samples in IsoJars.pdf" target="_blank">IsoJar Sampling Instructions (PDF)</Link></p>

            <p className="mt-4"><Link className="button download" href="/files/FO 717 Rev 2 IsoJar Sample Log Sheet.pdf" target="_blank">IsoJar Sample Log Sheet</Link></p>
            
        </Subpage>

        <OrderProductsSection />

        </>
    );
}