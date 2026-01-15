import Link from "next/link";
import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Shipping Guidelines | Resources | Isotech",
    description: "",
};

export default function ShippingGuidelines() {
    const breadcrumbs = ["Resources", "Shipping Guidelines"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Shipping Guidelines</h1>

            <p>To ensure that your samples arrive safely in our laboratory, we have developed detailed shipping guidelines. For your convenience we have also included Material Safety Data Sheet (MSDS) information. All documents are available in PDF format using <Link href="https://get2.adobe.com/reader/">Adobe Acrobat Reader</Link>.</p>

            <ul>
                <li><Link href="/files/FO 703 Rev 5 Shipping Guidelines for Gas Samples in IsoTubes.pdf" target="_blank">Flammable gas samples in IsoTubes® and MSDS for UN2037 (PDF)</Link></li>
                <li><Link href="/files/FO 711 Rev 3 Shipping Guidelines for Gas Samples in LP Tanks.pdf" target="_blank">Gas samples in LP tanks and MSDS for UN1971 (PDF)</Link></li>
                <li><Link href="/files/FO 710 Rev 3 Shipping Guidelines for Gas Samples in Cylinders.pdf" target="_blank">Natural gas samples in cylinders and MSDS for UN1971 (PDF)</Link></li>
                <li><Link href="/files/International_Shipping.pdf" target="_blank">Special instructions for international shipments (PDF)</Link></li>
            </ul>
            
            <h2 className="mt-4">Shipping Address for Samples</h2>

            <p>
                Stratum Reservoir (Isotech)<br/>
                Sample Receiving<br/>
                1308 Parkland Ct<br/>
                Champaign, IL 61821-1826
            </p>

            <h2 className="mt-4">Chain of Custody Forms</h2>

            <p>When shipping samples to Isotech we require a Chain of Custody (COC). The COC includes critical information regarding sample identification, contact information and analysis requests.</p>

            <p>Often in legal proceedings a COC is critical to validate the admissibility of data. We will make contact with the person specified on the COC to confirm analysis requests and expected turnaround times. When your samples are received we will sign the COC and create an electronic copy which will be sent back to you with your results.</p>

            <p>For traceability purposes, please be sure you sign and date the bottom of the form after printing. In addition to shipping the COC with the samples you may also email a copy of the form to us. This helps eliminate any potential transcription errors.</p>

            <p>
                <Link className="button download me-2" href="/files/FO 607 Rev 5 Analysis Request Form and Chain of Custody Record Fillable.pdf" target="_blank">Fillable COC (PDF)</Link>
                <Link className="button download" href="/files/FO 607 Rev 5 Analysis Request Form and Chain of Custody Record.pdf" target="_blank">Printable COC (PDF)</Link>
            </p>

            <h2 className="mt-4">HAZMAT Certification</h2>

            <p>You must be certified to ship hazardous goods before sending flammable gases to Isotech&lsquo;s laboratory.</p>

        </Subpage>
    );
}