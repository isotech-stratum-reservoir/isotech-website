import Link from "next/link";
import Subpage from "@/components/Subpage";
import Accordion from "@/components/Accordion";

export const metadata = {
    title: "Frequently Asked Questions | Resources | Isotech",
    description: "",
};

export default function FAQ() {
    const breadcrumbs = ["Resources", "Frequently Asked Questions"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1 className="mb-4">Frequently Asked Questions</h1>

            <Accordion heading="What is our QHSSE policy?" headingLevel={2}>
                <p><Link href="/files/90-70-24-5015 QHSSE Policy Rev. 5.pdf" target="_blank">QHSSE Policy (PDF)</Link></p>
            </Accordion>

            <Accordion heading="I want to do isotopic analysis of a gas sample. Do I have to order compositional analysis too?" headingLevel={2}>
                <p>Yes. Accurate GC analysis is required on gases prior to isotope analysis. The concentration of each gas component determines the amount of sample needed for the isotope analysis and is necessary for QA/QC monitoring.</p>
            </Accordion>

            <Accordion heading="What is the difference between off-line and online analysis?" headingLevel={2}>
                <p>Off-line analysis is the traditional method that has been in use for many years. Gas samples are separated into their individual components in a gas chromatograph and each hydrocarbon is then oxidized to CO2 and H2O. These combustion products are then transported to a dual-inlet isotope ratio mass spectrometer (DI-IRMS) for the actual analysis. In the case of the H2O, it must be further reacted to hydrogen gas. In a DI-IRMS, the sample gas is slowly streamed into the instrument and its isotopic composition monitored. Then, via switching valves, a reference gas of precisely known isotopic composition is measured. Measurement of the sample and then the reference gas is repeated several times for a very precise calibration. Online analysis is the newer method, in which the gas chromatograph (GC), combustion system, and IRMS are all connected. Each component is oxidized as it exits the GC and passed directly into the IRMS. Online analysis is faster and cheaper, and it requires much less sample than off-line analysis, but it lacks the precision needed in some applications. Isotech offers both options, depending on customer needs.</p>
            </Accordion>

            <Accordion heading="How do you ensure the accuracy of your analysis?" headingLevel={2}>
                <p>At least 20% of all analyses at Isotech are for quality assurance and quality control (QAQC). In addition to regularly calibrating all instruments with standards traceable to the National Institute of Standards and Testing (NIST), or the International Atomic Energy Agency (IAEA), approximately 10% of the analyses are of internal check standards that have compositions similar to those of the samples being analyzed. For example, when analyzing methane in samples that are mostly air, we test our methods and our equipment using standards that are diluted with air, and solely hydrocarbon gas mixtures. Close attention to detail and constantly testing ourselves results in the high quality data that our customers expect.</p>
            </Accordion>

            <Accordion heading="How do I ship my samples? Cylinders? IsoBags®? IsoTubes®? Other?" headingLevel={2}>
                <p>We have <Link href="/resources/shipping-guidelines">shipping instructions</Link> in pdf format that you can download from the Customer Support section of this website. Please note that you must be certified to ship hazardous materials, such as flammable gas. However, the IsoBag kit (3 IsoBags and 5 gallon drum) has been specifically designed so that if 3 IsoBags are filled properly and shipped back in the 5 gallon drum, flammable HAZMAT shipping is not required. Feel free to contact us for more information.</p>
            </Accordion>

            <Accordion heading="Can I take samples on an airplane?" headingLevel={2}>
                <p>We do not recommend hand transport of samples on aircraft. It may be legal to take them on a plane, but we recommend that samples be shipped by courier. Check with the airline to verify if it is possible to take your particular samples on a passenger aircraft.</p>
            </Accordion>

            <Accordion heading="What happens to my samples after the analysis is done?" headingLevel={2}>
                <p>We generally hold samples for a couple of weeks after data is reported, and then dispose of the samples. Client cylinders are returned. Upon request, we can hold samples for longer periods of time or return your samples to you.</p>
            </Accordion>

            <Accordion heading="Will I get my containers back after the analysis is complete?" headingLevel={2}>
                <p>Yes, in the case of gas cylinders. We normally dispose of or recycle glass or plastic bottles, gas bags, and IsoTubes®. If you have special containers or would like your containers returned, please let us know.</p>
            </Accordion>

            <Accordion heading="My company requires a chain-of-custody form. How do I get one?" headingLevel={2}>
                <p>You&lsquo;ll find a <Link href="/resources/shipping-guidelines">chain-of-custody form</Link> in the Resources section of this website. The link will take you to a page where you can choose to download a static form to be completed by hand, or an interactive form that can be filled out on the computer.</p>
            </Accordion>

            <Accordion heading="Can I buy IsoTubes without using Isotech for analysis?" headingLevel={2}>
                <p>Yes. Although we would prefer that samples in IsoTubes® be returned to us for analysis, there is no requirement to return IsoTubes® to Isotech.</p>
            </Accordion>

            <Accordion heading="Can I reuse the IsoTubes?" headingLevel={2}>
                <p>IsoTubes® are a single-use container and it is this single-use designation that provides for reduced shipping restrictions when compared to traditional cylinders.</p>
            </Accordion>

            <Accordion heading="Can the IsoTubes be pressurized?" headingLevel={2}>
                <p>Yes. The IsoSampler™ Go is used for collection of pressurized samples into IsoTubes. The IsoSampler Go can handle inlet pressures up to 3000 psig, and reduces the pressure to approximately 60 psig. Maximum pressure for an IsoTube® is limited to 80 psig.</p>
            </Accordion>

            <Accordion heading="How do I order IsoTube equipment?" headingLevel={2}>
                <p>You can <Link href="mailto:onlineorders@isotechlabs.com">email your orders</Link> or call 217-398-3490.</p>
            </Accordion>

            <Accordion heading="Do I have to be certified to ship hazardous materials (HAZMAT)?" headingLevel={2}>
                <p>Yes, anyone who completes and signs HAZMAT shipping documents MUST have completed a training course.</p>
            </Accordion>

            <Accordion heading="How do I become certified to ship hazardous materials (HAZMAT)?" headingLevel={2}>
                <p>There are a number of companies that offer training courses, either in their facilities or on-site at your company. Alternatively, you can take an online course. Please <Link href="/about/contact">contact us</Link> for information.</p>
            </Accordion>

            <Accordion heading="What happens to the IsoTubes when the analyses are completed?" headingLevel={2}>
                <p>IsoTubes® returned to Isotech are disassembled and the materials are then recycled. Nearly every component (&gt;99%) is recycled.</p>
            </Accordion>

            <Accordion heading="Is there an IsoTube distributor in my area?" headingLevel={2}>
                <p>Below is a list of distributors.</p>

                <p>
                    <strong>Isotech</strong><br/>
                    Contact: Missy Meade<br/>
                    Champaign, Illinois<br/>
                    217-398-3490<br/>
                    Email: <Link href="mailto:melissa.meade@stratumreservoir.com">melissa.meade@stratumreservoir.com</Link>
                </p>

                <p>
                    <strong>Stratum Reservoir - Houston</strong><br/>
                    Contact: Jarrod Dall<br/>
                    Houston, Texas<br/>
                    832-375-6800<br/>
                    Email: <Link href="mailto:jarrod.dall@stratumreservoir.com ">jarrod.dall@stratumreservoir.com </Link>
                </p>

                <p>
                    <strong>Stratum Reservoir - Saudi Arabia</strong><br/>
                    Contact: Patrick Hanna<br/>
                    Cell: +966 551294013<br/>
                    Email: <Link href="mailto:patrick.hanna@stratumreservoir.com">patrick.hanna@stratumreservoir.com</Link><br/>
                    Country Manager - KSA
                </p>
            </Accordion>

        </Subpage>
    );
}