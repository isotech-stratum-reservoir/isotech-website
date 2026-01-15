import Link from "next/link";
import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Sampling Procedures | Resources | Isotech",
    description: "",
};

export default function SamplingProcedures() {
    const breadcrumbs = ["Resources", "Sampling Procedures"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Sampling Procedures</h1>

            <p>The following sampling techniques are commonly used by many of Isotech's customers. If you have a unique situation and need further assistance, please <Link href="/about/contact">contact us</Link>. All instructions are available in PDF format using <Link href="https://get2.adobe.com/reader/">Adobe Acrobat Reader</Link>.</p>

            <h2>Mud gas Samples</h2>
            <ul>
                <li><Link href="/files/IsoSampler Pro Quick Start Guide.pdf" target="_blank">IsoSampler™ Pro Quick Start Guide</Link></li>
                <li><Link href="/files/IsoSampler Pro Maintanance Guide.pdf" target="_blank">IsoSampler™ Pro Maintenance Guide</Link></li>
            </ul>

            <h2>Dissolved Gas Samples from Domestic and Municipal Water Wells</h2>
            <ul>
                <li><Link href="/files/FO 616 Rev. 5 Collecting Groundwater Samples in IsoFlasks.pdf" target="_blank">Using IsoFlasks®</Link></li>
                <li><Link href="https://www.youtube.com/watch?v=ZkZ-8ySx3FA" target="_blank">IsoFlask® Sampling Video</Link></li>
            </ul>

            <h2>Wellhead Gas Samples</h2>
            <ul>
                <li><Link href="/files/FO 712 Rev. 4 Collecting Gas Samples with Double-Ended Cylinders.pdf" target="_blank">In double-ended gas cylinders</Link></li>
                <li><Link href="/files/FO 613 Rev 3 Collecting Wellhead Samples in Classic IsoTubes.pdf" target="_blank">IsoSampler™ GO to collect gas sample from wellhead</Link></li>
            </ul>

            <h2>Hydrogen Sulfide Samples</h2>
            <ul>
                <li><Link href="/files/FO 700 Rev 5 Collecting H2S for Sulfur Isotope Analysis with an IsoTrap.pdf" target="_blank">Using IsoTrap®</Link></li>
                <li><Link href="https://www.youtube.com/watch?v=jv6PwF7ocV8" target="_blank">IsoTrap® Sampling Video</Link></li>
                <li><Link href="/files/H2S_IsoFlask_Sampling_Instructions.pdf" target="_blank">Using H<sub>2</sub>S Scrubbing IsoFlasks®</Link></li>
            </ul>

            <h2>Soil-Gas Samples</h2>
            <ul>
                <li><Link href="/files/FO 701 Rev. 8 Collecting Gas Samples with a Hand Pump and IsoBags.pdf" target="_blank">In gas bags with a hand pump</Link></li>
                <li><Link href="https://www.youtube.com/watch?v=OnUNlGOFIlg" target="_blank">IsoBag® Sampling Video</Link></li>
            </ul>

            <h2>Cuttings/Mud Samples</h2>
            <ul>
                <li><Link href="/files/FO 702 Rev. 10 Collecting Cuttings Samples in IsoJars.pdf" target="_blank">In IsoJars®</Link></li>
            </ul>

            <h2>Landfill Gas Sampling for Tritium</h2>
            <ul>
                <li><Link href="/files/FO 714 Rev 4 Collecting Gas Samples with LP Tanks and a 12 V Pump.pdf" target="_blank">LP Cylinders for landfill gas sampling</Link></li>
            </ul>

            <h2>Water Chemistry Samples</h2>
            <ul>
                <li><Link href="/files/FO 329 Rev 1 Collecting Water Samples with the Water Chemistry Kit.pdf" target="_blank">Water Chemistry Kit Sampling Instructions</Link></li>
            </ul>

        </Subpage>
    );
}