import Link from "next/link";

export default function SPStableIsotopesTab() {
    return (
        <div className="tab-pane fade" id="StandardPrecisionStableIsotopes" role="tabpanel" aria-labelledby="StandardPrecisionStableIsotopesTab" tabIndex={0}>
            <h2>Standard-Precision Stable Isotopes</h2>

            <p>When results are needed faster, analytical precision is not as crucial, or hydrocarbon gas concentrations are lower, Isotech offers the typical online gas chromatography-isotope ratio mass spectrometry method to measure the stable isotope ratios of carbon and hydrogen in hydrocarbon gas samples. Due to this process not involving the more labor-intensive steps in the high-precision stable isotope analysis preparation, the 1 sigma is 0.3‰ for δ<sup>13</sup>C measurements and 5 ‰ for δ<sup>2</sup>H measurements. </p>

            <h3 className="mt-4">Sampling Guidelines</h3>

            <h4>Sample Container</h4>
            <p>Gas samples can be collected in <Link href="/products/isobag">IsoBags®</Link>, <Link href="/products/isotube">IsoTubes®</Link>, gas bags, or steel cylinders.</p>

            <h4>Holding Time</h4>
            <p>As long as sample containers are not leaking gas, samples will maintain gas molecular and isotopic composition.</p>

            <h4>Shipping</h4>
            <p>Do not ship on a Friday as there is no one to receive the sample. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
        </div>
    );
}