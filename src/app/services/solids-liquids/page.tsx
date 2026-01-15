import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import fig15 from "@/public/images/solids-liquids/Figure 15 Solids and Liquids.jpg";

export const metadata = {
    title: "Solids & Liquids | Services | Isotech",
    description: "",
};

export default function SolidsLiquids() {
    const breadcrumbs = ["Services", "Solids & Liquids"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Solids & Liquids</h1>

            <p className="lead">Our team can analyze the carbon, nitrogen, sulfur, oxygen, and hydrogen isotopic composition in a variety of different solids and liquids. We have cryogenic mills and elemental analyzers to prepare solid samples for isotopic analyses. Please <Link href="/about/contact">contact us</Link> if you have any questions regarding which types of samples we can provide analyses on.</p>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={fig15}
                        alt="sample being weighed on a scale"
                        width="600"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">A scale with a solid sample being weighed for isotopic analysis.</figcaption>
            </figure>

            <h2>Sampling Guidelines</h2>

            <h3>Sample Container</h3>

            <p>Solid samples can be collected in small vials, pouches, envelops, jars.</p>  

            <p>Liquid samples can be collected in HDPE or plastic bottles.</p> 

            <h3>Holding Time</h3>

            <p>The hold time is dependent on which analyses the client wishes to perform and what the make up is of the sample.</p>  

            <h3>Shipping</h3>

            <p>Do not ship on a Friday as there is no one to receive the sample. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>

            <h2 className="mt-4">Questions we can answer</h2>

            <ul className="questions">
                <li>Could a honey sample contain sugar cane and corn syrups, rather than authentic honey derived from C3 plants?</li>
                <li>Could precipitation or dissolution of certain minerals be occurring in a water sample?</li>
                <li>Has dissolution occurred on a carbonate sample?</li>
                <li>Were carbonate rocks from different locations formed by the same geologic process?</li>
                <li>What were the conditions of the geologic past when carbonate rock formed? </li>
            </ul>
        </Subpage>
    );
}