import Image from "next/image";
import Link from "next/link";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import waterChemKitImg from "@/public/images/products/Water Chemistry Kit.jpg";

export const metadata = {
    title: "Water Chemistry Kit | Products | Isotech",
    description: "Each Water Chemistry Kit comes with an acidified 250 mL bottle (bottle with red tape on it), a non-acidified 250 mL bottle, a 0.45 μm filter, and 1 foot of tubing.",
};

export default function WaterChemistryKit() {
    const breadcrumbs= ["Products", "Water Chemistry Kit"];
    return (
        <>

        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Water Chemistry Kit</h1>

            <Image
                priority
                src={waterChemKitImg}
                alt="Water chemistry kit with two bottles, a filter, and tubing"
                width={250}
                height={300}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Each Water Chemistry Kit comes with a pre-acidified 250 mL bottle (bottle with red tape on it), a non-acidified 250 mL bottle, a 0.45 μm filter, and ~1 foot of tubing. These kits are used to collect samples for the water chemistry suites described on the <Link href="/services/water#WaterChemistry">Water Analyses webpage</Link> (WAB, WAE, WAO, WAFA, or WAC). Make sure to fill an extra 250 mL bottle (do not filter or acidify) if an analysis for total suspended solids (TSS) will be needed.</p>

            <p className="mt-4 clearfix"><Link className="button download" href="/files/FO 329 Rev 1 Collecting Water Samples with the Water Chemistry Kit.pdf" target="_blank">Water Chemistry Kit Sampling Instructions (PDF)</Link></p>
            
        </Subpage>

        <OrderProductsSection />

        </>
    );
}