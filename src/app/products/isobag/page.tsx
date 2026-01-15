import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import isobagImg from "@/public/images/products/IsoBag kit.Handpump.Tubing.png";

export const metadata = {
    title: "IsoBag® | Products | Isotech",
    description: "The Isobag is designed for easy collection of soil gases, low-pressure samples or where cylinders would be difficult to use.",
};

export default function IsoBag() {
    const breadcrumbs= ["Products", "IsoBag®"];
    return (
        <>
        
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoBag®</h1>

            <Image
                priority
                src={isobagImg}
                alt="IsoBag"
                width={300}
                height={302}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>For easy collection of soil gases, low-pressure samples or where cylinders would be difficult to use, we provide evacuated gas bags. Sets of three 0.3 liter bags packed in five-gallon shipping containers are available for shipping flammable gas samples.</p>

            <p>Storage Temperature range: -4°F (-20°C) TO +122°F (+50°C)</p>

            <p><strong>Note:</strong> The provided gas bags are NOT intended for gases containing hydrogen sulfide (H<sub>2</sub>S, sour gas).</p>

            <p className="mt-4"><Link className="button download" href="/files/FO 701 Rev. 8 Collecting Gas Samples with a Hand Pump and IsoBags.pdf" target="_blank">IsoBag Sampling Instructions (PDF)</Link></p>

            <p><Link className="button download" href="/files/IsoBag_Stability.pdf" target="_blank">Stability of the IsoBag Over Time (PDF)</Link></p>

        </Subpage>

        <OrderProductsSection />

        </>
    );
}