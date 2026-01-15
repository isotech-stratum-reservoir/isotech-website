import Link from 'next/link';
import Accordion from '@/components/Accordion';

export default function SulfurTab() {
    return (
        <div className="tab-pane fade" id="Sulfur" role="tabpanel" aria-labelledby="SulfurTab" tabIndex={0}>
            <h2>Sulfur</h2>

            <h3>Dissolved Sulfate Isotopes</h3>
            <p>δ<sup>34</sup>S and δ<sup>18</sup>O of Sulfate is analyzed by isolation via precipitation and then EA/TCEA-IRMS analysis. A minimum concentration of 5 mg/L is required for analysis.</p>

            <Accordion heading="Sampling Guidelines for Dissolved Sulfate Isotopes" headingLevel={4}>
                <h5>Sample Size</h5>
                <p>We recommend sending 1 liter of water. Analyses on smaller amounts are possible. If you wish to analyze less than 500 mL please <Link href="/about/contact">contact us</Link> first.</p>

                <h5>Sample Container</h5>
                <p>We recommend a 1 liter HDPE (plastic) bottle.</p>

                <h5>Preservative</h5>
                <p>The sample should be field filtered using at least 0.45 micron or smaller pore-size diameter filter. The sample must be kept chilled to minimize microbial action.</p>

                <h5>Holding Time</h5>
                <p>Samples should be sent in within two weeks of sampling.</p>

                <h5>Shipping</h5>
                <p>Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
            </Accordion>

            <h3 className="mt-4">Dissolved Hydrogen Sulfide (H<sub>2</sub>S) Isotopes</h3>
            <p>H<sub>2</sub>S is exsolved from solution, converted to silver sulfide and analyzed via EA-IRMS analysis. A minimum concentration of 3 mg/L is required for analysis.</p>

            <Accordion heading="Sampling Guidelines for Dissolved Hydrogen Sulfide Isotopes" headingLevel={4}>
                <h5>Sample Size</h5>
                <p>We recommend sending 1 liter of water. Analyses on smaller amounts are possible. If you wish to analyze less than 500 mL please <Link href="/about/contact">contact us</Link> first.</p>

                <h5>Sample Container</h5>
                <p>We recommend a 1 liter HDPE (plastic) bottle. The bottle should have no headspace. Fill the bottle with a surface tension bubble and cap.</p>

                <h5>Preservative</h5>
                <p>The sample must be kept chilled to minimize microbial action. It is recommended that 1mL of 25% NaOH is added.</p>

                <h5>Holding Time</h5>
                <p>Samples should be overnighted to the laboratory. Sampling events should be planned for Monday through Thursday to allow receipt of the sample within 48 hours. If shipment of the sample cannot happen the same or next day the sample should be frozen.</p>

                <h5>Shipping</h5>
                <p>Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
            </Accordion>

            <h3 className='mt-4'>Questions we can answer</h3>

            <ul className="questions mb-0">
                <li><span>What is the source of sulfate or hydrogen sulfide (H<sub>2</sub>S) in a groundwater well or in produced fluids from an oil or gas well?</span></li>
                <li>What processes are controlling the formation of sulfate (water rock interactions, thermochemical sulfate reduction, microbial processes)?</li>
                <li><span>Is this naturally occurring sulfate/H<sub>2</sub>S or is oil and gas drilling forming sulfate/H<sub>2</sub>S?</span></li>
            </ul>
        </div>
    );
}