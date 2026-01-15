import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import scrubbingIsoFlaskImg from "@/public/images/products/H2S_Scrubbing_IsoFlask.jpg";

export const metadata = {
    title: "H₂S Scrubbing IsoFlask® | Products | Isotech",
    description: "",
};

export default function ScrubbingIsoFlask() {
    const breadcrumbs= ["Products", "H₂S Scrubbing IsoFlask®"];
    return (
        <>

        <Subpage breadcrumbs={breadcrumbs}>
            <h1>H<sub>2</sub>S Scrubbing IsoFlask®</h1>

            <Image
                priority
                src={scrubbingIsoFlaskImg}
                alt="H₂S Scrubbing IsoFlask"
                width={350}
                height={279}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The H<sub>2</sub>S Scrubbing IsoFlask is used to remove H<sub>2</sub>S from gas samples. By removing H<sub>2</sub>S from gas in field, Isotech can then analyze gas from the H<sub>2</sub>S-free IsoBag® and get our clients high quality gas composition and isotope data that they have come to expect.</p>

            <p className="mt-4"><Link className="button download" href="/files/FO 718 Rev 2 H2S IsoFlask Info Sheet.pdf" target="_blank"><span>H<sub>2</sub>S Scrubbing IsoFlask Info Sheet (PDF)</span></Link></p>

            <p><Link className="button download" href="/files/FO 720 Rev 1 H2S IsoFlask Transfer Instructions.pdf" target="_blank"><span>H<sub>2</sub>S Scrubbing IsoFlask Sampling Instructions (PDF)</span></Link></p>

        </Subpage>

        <OrderProductsSection />

        </>
    );
}