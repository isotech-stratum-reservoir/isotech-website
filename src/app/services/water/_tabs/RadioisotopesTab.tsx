import Link from 'next/link';
import Accordion from '@/components/Accordion';

export default function RadioisotopesTab() {
    return (
        <div className="tab-pane fade" id="Radioisotopes" role="tabpanel" aria-labelledby="RadioisotopesTab" tabIndex={0}>
            <h2>Radioisotopes</h2>

            <h3>Carbon-14 (<sup>14</sup>C) of Dissolved Inorganic Carbon</h3>
            <p>Water is acidified and the resulting carbon dioxide is collected and sent to <Link href="https://www.radiocarbon.com/">Beta Analytic</Link> for AMS analysis. Results are reported in percent modern carbon (pMC).</p>

            <Accordion heading={<>Sampling Guidelines for <sup>14</sup>C of DIC</>} headingLevel={4}>
                <h5>Sample Size</h5>
                <p>Minimum-70 mL, ideal-250 mL. If you require analysis on smaller volumes please <Link href="/about/contact">contact us</Link>.</p>

                <h5>Sample Container</h5>
                <p>HDPE (plastic) or glass bottle. Plastic is preferred for shipping safety. The sample should not have air included in the bottle.</p>

                <h5>Preservative</h5>
                <p>Filter the sample with at least a 0.45 micron or smaller pore-size diameter filter. The sample should also be kept on ice to prevent any bacterial action.</p>

                <h5>Holding Time</h5>
                <p>If the sample is kept refrigerated, we recommend shipping the sample to us with in two weeks of sampling.</p>

                <h5>Shipping</h5>
                <p>We recommend the sample be shipped on ice and overnighted to the lab. Please do not ship on a Friday as we only receive sample Monday through Friday.</p>
            </Accordion>

            <h3 className="mt-4">Tritium Analysis via Scintillation Counter</h3>
            <p>Analysis is effective when elevated tritium concentrations are expected such as landfill and nuclear event studies. The quantifiable limit for direct count is 10-15 tritium units (TU) based on the specific statistics of the run. Smaller concentrations will be reported as a less than value based on the statistics.</p>

            <Accordion heading="Sampling Guidelines for Tritium Analysis via Scintillation Counter" headingLevel={4}>
                <h5>Sample Size</h5>
                <p>We recommend sending in 50 mL of water. Analyses on smaller amounts are possible. If you wish to analyze less than 10 mL please <Link href="/about/contact">contact us</Link> first.</p>

                <h5>Sample Container</h5>
                <p>We recommend a HDPE (plastic) bottle.</p>

                <h5>Preservative</h5>
                <p>No preservative or cooling is required. Ensure that the bottle is air tight to prevent evaporation.</p>

                <h5>Holding Time</h5>
                <p>Samples should be sent in within six months of sampling.</p>

                <h5>Shipping</h5>
                <p>No special considerations are needed in shipping these samples. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
            </Accordion>

            <h3 className="mt-4">Electrolytic Enrichment to measure tritium concentration</h3>
            <p>For tritium levels at or below modern levels electrolytic enrichment is suggested. The quantifiable limit for electrolytic enrichment is approximately 1TU. Smaller concentrations will be reported as a less than value based on the statistics.</p>

            <Accordion heading="Sampling Guidelines for Electrolytic Enrichment" headingLevel={4}>
                <h5>Sample Size</h5>
                <p>We recommend sending 1 liter of water. Analysis on smaller amounts is possible. If you wish to analyze less than 500 mL please <Link href="/about/contact">contact us</Link> first.</p>

                <h5>Sample Container</h5>
                <p>We recommend a 1 liter HDPE (plastic) bottle.</p>

                <h5>Preservative</h5>
                <p>No preservative or cooling is required. Ensure that the bottle is air tight to prevent evaporation.</p>

                <h5>Holding Time</h5>
                <p>Samples should be sent in within six months of sampling.</p>

                <h5>Shipping</h5>
                <p>No special considerations are needed in shipping these samples. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
            </Accordion>

            <h3 className="mt-4">Questions we can answer</h3>
            
            <ul className="questions mb-0">
                <li>How old is the groundwater in an aquifer system? </li>
                <li>Are there relationships between the relative ages of groundwater and water quality?</li>
                <li>Did landfill gas migrate into a groundwater well?</li>
                <li>Did fluids from producing oil/gas wells migrate into a landfill?</li>
                <li>Is water in an aquifer from recent precipitation (modern) or from an older source?</li>
                <li>Are nuclear waste fluids migrating into an aquifer?</li>
            </ul>
        </div>
    );
}