import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import isosamplerProImg from '@/public/images/products/IsoSampler_Pro_Dimensions.png';

export const metadata = {
    title: "IsoSampler™ Pro | Products | Isotech",
    description: "Manifold to efficiently collect mud gas samples into IsoTubes®.",
};

export default function IsoSamplerPro() {
    const breadcrumbs = ["Products", "IsoSampler™ Pro"];

    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoSampler™ Pro</h1>

            <Image
                priority
                src={isosamplerProImg}
                alt="IsoSampler Pro"
                width={500}
                height={266}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>One of the primary designs of the IsoTubes® is for sampling mud gas during drilling. The simple snap-in feature of the IsoSampler Pro allows samples to be taken instantaneously from a flow stream by easily snapping an IsoTube into the sampling chuck. This can all be done without interfering with the operation of other mud-logging equipment.</p>

            <p><strong>Note:</strong> IsoTubes are not suitable for collecting gases containing hydrogen sulfide (H<sub>2</sub>S, sour gas). The IsoSampler Pro has two pump output settings. Make sure you have selected the correct pump output setting for your gas flow rate prior to taking a sample, or your samples may be compromised. See the installation guide for more information.</p>

            <p className="mt-4"><Link className="button download" href="/files/IsoSampler Pro Specifications and Installation Guide.pdf" target="_blank">IsoSampler Pro Specifications and Installation Guide</Link></p>

            <p><Link className="button download" href="/files/IsoSampler Pro Sampling Instructions.pdf" target="_blank">IsoSampler Pro Sampling Instructions</Link></p>

        </Subpage>

        <OrderProductsSection/>
        </>
    );
}