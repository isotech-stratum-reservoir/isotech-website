import Image from "next/image";
import Link from "next/link";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import isotrapImg from "@/public/images/products/isotrap.jpg";

export const metadata = {
    title: "IsoTrap® | Products | Isotech",
    description: "The IsoTrap® converts hydrogen sulfide to a non-hazardous material for easy shipping and subsequent sulfur isotopic analysis.",
};

export default function IsoTrap() {
    const breadcrumbs= ["Products", "IsoTrap®"];
    return (
        <>

        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoTrap<sup>®</sup></h1>

            <Image
                priority
                src={isotrapImg}
                alt="IsoTrap"
                width={55}
                height={300}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The H<sub>2</sub>S IsoTrap is designed to help identify the source of H<sub>2</sub>S when encountered. Since hydrogen sulfide cannot be shipped via air when at toxic concentrations, the IsoTrap converts the H<sub>2</sub>S into a non-hazardous material so that samples can be shipped by any means, including air—without HAZMAT certification.</p>

            <p>The preferred method for collecting H<sub>2</sub>S samples with an IsoTrap is to use our IsoTrap Sampler. This device was specifically designed for collecting samples from pressurized sources and helps to regulate pressure and control flow through the IsoTrap. The design incorporates color coding to ensure the sample flows in the proper direction. Samples can then be returned to Isotech for isotope analysis. No HAZMAT shipping is required!</p>

            <p className="mt-4"><Link className="button download" href="/files/FO 713 Rev. 5 IsoTrap Flyer.pdf" target="_blank">IsoTrap Product Flyer (PDF)</Link></p>

            <p><Link className="button download" href="/files/FO 700 Rev 5 Collecting H2S for Sulfur Isotope Analysis with an IsoTrap.pdf" target="_blank">IsoTrap Sampling Instructions (PDF)</Link></p>
            
            <div className="ratio ratio-16x9 w-lg-50 my-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jv6PwF7ocV8?si=kEE2IX4rM4_-WbOh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

        </Subpage>

        <OrderProductsSection />

        </>
    );
}