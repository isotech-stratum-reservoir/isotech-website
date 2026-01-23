import Image from "next/image";
import Subpage from "@/components/Subpage";
import qcImg from "@/public/images/Quality Assurance.Quality Control Table.png";

export const metadata = {
    title: "Quality Assurance/Quality Control | About | Isotech",
    description: "Isotech, an ISO 9001:2008 Certified company, is known for the quality of its data.",
};

export default function QualityAssurance() {
    const breadcrumbs = ["About", "Quality Assurance/Quality Control"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Quality Assurance/Quality Control</h1>

            <p className="mt-4">Isotech is an ISO 9001 certified company, and maintains ISO/IEC 17025 accreditation for some specific laboratory testing services as defined in our Scope of Accreditation. Since our inception, Isotech has been known for the quality of our data. Isotech was co-selected by the National Institute of Standards and Technology (NIST) to perform the isotopic calibration of natural gas standards for international distribution.</p>

            <p>In support of our ISO/IEC 17025 accredited activities, Isotech parcitipates in required annual proficiency testing programs and routinely engages in round-robin studies, including collaborations with Finnigan Corporation, the International Atomic Energy Agency (IAEA), the Forensic Isotope Ratio Mass Spectrometry (FIRMS) network, and others.</p>

            <Image 
                src={qcImg}
                alt="table of analysis results"
                width={700}
                height={873}
                className="img-fluid"
            />

            <p className="mt-3">At least 20% of all analyses performed at Isotech are for QA/QC.</p>

            <h2>Standards</h2>

            <p>We obtain our primary standards from the International Atomic Energy Agency (IAEA) in Vienna, Austria, which are then certified by the National Institute of Standards and Technology (NIST), or from NIST directly. We obtain secondary standards from commercially available sources recognized in the industry. Internal Reference standards are prepared by direct calibration against primary and secondary standards.</p>

            <h2>Check/Reference Samples</h2>

            <p>A check/reference sample is analyzed approximately every tenth analysis. This, is a quality control measure to ensure methodologies are being properly followed. Check/reference samples are chosen which have been analyzed many times over a period of years with consistent results and which are compositionally similar to the samples being analyzed.</p>

            <h2>Duplicate Analyses</h2>

            <p>Where appropriate, duplicate analyses are also performed approximately every tenth analysis.</p>
        </Subpage>
    );
}