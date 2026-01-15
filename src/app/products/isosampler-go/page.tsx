import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import Accordion from "@/components/Accordion";
import OrderProductsSection from "../OrderProductsSection";
import isosamplerGoImg from '@/public/images/products/IsoSampler_Go.jpg';
import adapterImg from "@/public/images/products/Adapter for Septum Valve Old tube to new tube.png";

export const metadata = {
    title: "IsoSampler™ Go | Products | Isotech",
    description: "Regulator used to collect gas samples from producing wells or separators into IsoTubes®.",
};

export default function IsoSamplerGo() {
    const breadcrumbs = ["Products", "IsoSampler™ Go"];

    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoSampler™ Go</h1>

            <Image
                priority
                src={isosamplerGoImg}
                alt="IsoSampler Go attached to an IsoTube"
                width={500}
                height={58}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The IsoSampler Go is used to collect pressurized gas samples from a well head or separator into an IsoTube®. The IsoSampler Go can reduce gas pressures up to 3000 psi down to 80 psi for gas sample collection. Wellhead pressures greater than 3000 psi will require additional flow controls.</p>

            <p className="my-4"><Link className="button download" href="/files/FO 613 Rev 3 Collecting Wellhead Samples in Classic IsoTubes.pdf" target="_blank">IsoSampler Go Sampling Instructions</Link></p>

            <Accordion heading="Adapter to use the Wellhead Sampler with the current IsoTubes" headingLevel={2}>
                <p>For customers that have the Wellhead Sampler that was used to collect gas samples with the old IsoTubes (double valved tube), we also provide a adapter to use the Wellhead Sampler to collect gas samples into the current IsoTubes (single valved tube). Photo shown below:</p>

                <Image 
                    src={adapterImg}
                    alt="Adapter to connect old isoTube septum valve to current isoTube"
                    width={400}
                    height={315}
                    className="figure-img img-fluid d-block mx-auto mt-4"
                />
            </Accordion>

        </Subpage>

        <OrderProductsSection/>
        </>
    );
}