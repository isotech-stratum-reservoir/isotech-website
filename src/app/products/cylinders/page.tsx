import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import cylinderImg from "@/public/images/products/Cylinder.jpg";
import lpTankImg from '@/public/images/gas/Fig 7C. RadioIsotope Analyses.jpg';

export const metadata = {
    title: "Cylinders | Products | Isotech",
    description: "Isotech offers DOT-approved stainless steel gas sampling cylinders and LP gas cylinders for sampling gas at pressures up to 1800 psig.",
};

export default function Cylinders() {
    const breadcrumbs= ["Products", "Cylinders"];
    return (
        <>

        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Cylinders</h1>

            <Image
                priority
                src={cylinderImg}
                alt="Stainless steel gas cylinder"
                width={336}
                height={76}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <h2 className="mt-4">Stainless Steel Gas Cylinders</h2>

            <p>We offer DOT-approved stainless steel gas sampling cylinders that are cleaned and evacuated after every use for rent. These cylinders are packed in reusable plastic shipping cartons. Gas cylinders are used to sample pressurize gas from a wellhead or separator.</p>

            <p className="mt-4"><Link className="button download" href="/files/FO 712 Rev. 4 Collecting Gas Samples with Double-Ended Cylinders.pdf" target="_blank">Stainless Steel Gas Cylinders Sampling Instructions (PDF)</Link></p>

            <Image
                priority
                src={lpTankImg}
                alt="Sampling equipment in a grassy field"
                width={336}
                height={76}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />


            <h2 className="mt-5">LP Gas Cylinders</h2>

            <p>DOT-approved LP tanks are required for shipment of large samples of flammable gas (&gt;5% methane) for tritium analysis of methane. These cylinders are evacuated after every use. We have several battery-operated pumps that can be supplied for filling these tanks.</p>

            <p className="mt-4"><Link className="button download" href="/files/FO 714 Rev 4 Collecting Gas Samples with LP Tanks and a 12 V Pump.pdf" target="_blank">LP Gas Cylinders Sampling Instructions (PDF)</Link></p>

        </Subpage>

        <OrderProductsSection />

        </>
    );
}