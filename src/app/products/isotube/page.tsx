import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import Accordion from "@/components/Accordion";
import OrderProductsSection from "../OrderProductsSection";
import isotubeImg from "@/public/images/products/isotube.png";
import currentValveImg from "@/public/images/products/Septum Valve Connection For Current IsoTube.png";
import oldValveImg from "@/public/images/products/Septum Valve Connection For Old IsoTube.png";
import adapterImg from "@/public/images/products/Adapter for Septum Valve Old tube to new tube.png";
import attachedValvesImg from "@/public/images/products/Isotubes with septum connections.jpg";

export const metadata = {
    title: "IsoTube® | Products | Isotech",
    description: "The next-generation IsoTube® sets the industry standard for mud gas sampling and produced gas sampling.",
};

export default function IsoTube() {
    const breadcrumbs = ["Products", "IsoTube®"];

    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoTube<sup>®</sup></h1>

            <Image
                priority
                src={isotubeImg}
                alt="IsoTube"
                width={500}
                height={110}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The original IsoTube was developed in response to gas sampling and shipping difficulties our customers experienced in the field. Since then, over 1 million IsoTubes have been sold and used by hundreds of customers around the globe. Now, 25 years later, the next-generation IsoTube continues to set the industry standard for mud gas and produced gas sampling.</p>

            <h2 className="mt-4">Key Advantages</h2>

            <p><strong>More analysis potential:</strong> IsoTubes are evacuated to minimize air contamination, and IsoSampler™ devices are designed to pressurize the collected samples. More gas and minimal air contamination allows the laboratory to generate more data points and improve precision for our customers.</p>

            <p><strong>Faster, more precise sampling:</strong> Evacuated IsoTubes sample quickly, maximizing data precision at each depth. Data from legacy flow-through systems represents an average gas composition over a wider range of depth in the well, especially when modern field equipment with lower gas flow rates is used.</p>

            <p><strong>Preserves sample integrity:</strong> Each IsoTube is pressure- and vacuum-tested to ensure sample integrity. Long-term testing shows virtually no chemical or isotopic degradation of gases stored for 3 years or longer.</p>

            <p><strong>Environmentally-friendly:</strong> IsoTubes are 99.9% recyclable.</p>

            <p className="mt-4"><Link className="button download" href="/files/FO 725 Rev 1 IsoTube Specifications.pdf" target="_blank">IsoTube Specification Sheet (PDF)</Link></p>

            <p className="mb-4"><Link href="https://isosampler.com" className="button">Learn more about IsoTube sampling devices</Link></p>

            <Accordion heading="IsoTube Septum for Syringes" headingLevel={2}>
                <p>If a situation arises in the field or you are conducting an experiment in which you will need to collect gas in a syringe to then inject into an IsoTube, our team has designed septum connections to use with the IsoTube.</p>

                <div className="row mt-4">

                    <div className="col-12 col-md-4">
                        <figure className="figure">
                            <Image 
                                src={currentValveImg}
                                alt="Septum valve connection for the current IsoTube"
                                width={300}
                                height={236}
                                className="figure-img img-fluid"
                            />
                            <figcaption className="figure-caption">
                                <strong>Septum valve connection for the current IsoTube</strong><br/>
                                The black sampling chuck is a quick connect for the IsoTube.
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="col-12 col-md-4">
                        <figure className="figure">
                            <Image 
                                src={oldValveImg}
                                alt="Septum valve connection for the old IsoTube"
                                width={300}
                                height={236}
                                className="figure-img img-fluid"
                            />
                            <figcaption className="figure-caption">
                                <strong>Septum valve connection for the old IsoTube</strong><br/>
                                This septum valve connection is screwed onto the old IsoTube (double ended IsoTube that has been discontinued).
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="col-12 col-md-4">
                        <figure className="figure">
                            <Image 
                                src={adapterImg}
                                alt="Adapter to connect old isoTube septum valve to current isoTube"
                                width={300}
                                height={236}
                                className="figure-img img-fluid"
                            />
                            <figcaption className="figure-caption">
                                <strong>Adapter</strong><br/>
                                For customers that have the septum valve connection for the old IsoTube, we sell an adapter to allow for connection to the new IsoTube.
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <figure className="figure row mt-4">
                    <div className="col-12 col-lg-6">
                        <Image 
                            src={attachedValvesImg}
                            alt="Current and old IsoTubes with septum valves attached"
                            width={600}
                            height={450}
                            className="figure-img img-fluid"
                        />
                    </div>
                    <figcaption className="figure-caption col-12 col-lg-6">
                        The current IsoTube (on top, single valved) and the old IsoTube (on bottom, double valved) with the septum valves attached
                    </figcaption>
                </figure>
            </Accordion>

        </Subpage>

        <OrderProductsSection/>
        </>
    );
}