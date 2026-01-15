import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import isoflaskImg from "@/public/images/products/Iso-Flask-Kit.jpg";
import OrderProductsSection from "../OrderProductsSection";

export const metadata = {
    title: "IsoFlask® | Products | Isotech",
    description: "The IsoFlask® is designed specifically for the collection and shipment of groundwater samples for dissolved gas analysis.",
};

export default function IsoFlask() {
    const breadcrumbs= ["Products", "IsoFlask®"];
    
    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoFlask<sup>®</sup></h1>

            <Image
                priority
                src={isoflaskImg}
                alt="IsoFlask Kit"
                width={300}
                height={360}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The IsoFlask is designed specifically for the collection and shipment of groundwater samples for dissolved gas analysis. Its unique design will not alter the quantity or isotopic characteristic of dissolved hydrocarbon gases, making it useful to identify the source of methane, ethane and propane.</p>

            <h2 className="mt-4">Key Advantages</h2>

            <ul>
                <li><Link href="/files/MethaneSamplingMethods_Molofskyetal._GroundwaterJournal_March2016.pdf" target="_blank">Improvement over the direct fill and inverted VOA sampling methods</Link></li>
                <li>Tamper evident ring helps to identify and flag potential variability in sampling protocol</li>
                <li>Pre-inserted bactericide capsule prevents bacterial degradation of the sample</li>
                <li>Includes complete, ready-to-use sampling kit with attachments for proper filling</li>
            </ul>

            <h2 className="mt-4">Specifications</h2>

            <ul>
                <li>Volume: ~750 ml each</li>
                <li>Stand-up pouch design</li>
                <li>Removable Luer® self-closing valve and cap configuration with tamper evident ring</li>
                <li>The front of the IsoFlask is clear and puncture resistant plastic and the back is white to assist in observing collected water</li>
                <li>Temperature Range: +41°F (+5°C) to +122°F (+50°C)</li>
            </ul>

            <p className="mt-4"><Link className="button download" href="/files/FO 705 Rev 5 IsoFlask Flyer.pdf" target="_blank">IsoFlask Product Flyer (PDF)</Link></p>

            <p><Link className="button download" href="/files/FO 616 Rev. 5 Collecting Groundwater Samples in IsoFlasks.pdf" target="_blank">IsoFlask Sampling Instructions (PDF)</Link></p>

            <div className="ratio ratio-16x9 w-lg-50 my-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZkZ-8ySx3FA?si=sABt0VfHvqFDFPoD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

        </Subpage>

        <OrderProductsSection/>
        </>
    );
}