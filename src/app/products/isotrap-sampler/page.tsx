import Image from "next/image";
import Link from "next/link";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import isotrapSamplerImg from "@/public/images/products/IsoTrap_Sampler.png";

export const metadata = {
    title: "IsoTrap® Sampler | Products | Isotech",
    description: "The IsoTrap® Sampler is a regulator used to flow gas through the IsoTrap to collect a gas sample for analysis of hydrogen sulfide isotopes.",
};

export default function IsoTrapSampler() {
    const breadcrumbs= ["Products", "IsoTrap® Sampler"];
    return (
        <>

        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoTrap® Sampler</h1>

            <Image
                priority
                src={isotrapSamplerImg}
                alt="IsoTrap Sampler"
                width={250}
                height={450}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The IsoTrap Sampler is a regulator used to flow gas through the IsoTrap to collect a gas sample for analysis of hydrogen sulfide isotopes.</p>

            <p className="mt-4"><Link className="button download" href="/files/IsoTrap_Product_Flyer.pdf" target="_blank">IsoTrap Product Flyer (PDF)</Link></p>

            <p><Link className="button download" href="/files/IsoTrap_Sampling_Instructions.pdf" target="_blank">IsoTrap Sampling Instructions (PDF)</Link></p>

            <div className="ratio ratio-16x9 w-lg-50 my-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jv6PwF7ocV8?si=kEE2IX4rM4_-WbOh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

        </Subpage>

        <OrderProductsSection />

        </>
    );
}