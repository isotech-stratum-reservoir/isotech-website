import Link from 'next/link';
import Image from 'next/image';
import nitrateFig from '@/public/images/water/Fig. 4 Isotopic Analysis of Nitrate.jpg';
import Accordion from '@/components/Accordion';

export default function NitrateTab() {
    return (
        <div className="tab-pane fade" id="Nitrate" role="tabpanel" aria-labelledby="NitrateTab" tabIndex={0}>
            <h2>Nitrate Isotopes</h2>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={nitrateFig}
                        alt="graph showing results of nitrate isotope analysis"
                        width="600"
                        className="figure-img img-fluid border"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">
                    There are a variety of processes that can result in increased nitrate concentrations in water. This graph is a diagnostic tool used by our interpretive team to assess processes responsible for nitrate in water or if denitrification is occurring.
                </figcaption>
            </figure>    

            <h3 className="mt-4">δ<sup>15</sup>N and δ<sup>18</sup>O of Nitrate</h3>
            <p>δ<sup>15</sup>N and δ<sup>18</sup>O of Nitrate is analyzed by isolation via ion exchange and then EA/TCEA-IRMS analysis. A minimum concentration of 3 mg/L (as nitrate) is required for analysis.</p>

            <Accordion heading="Sampling Guidelines for Nitrate" headingLevel={4}>
                <h5>Sample Size</h5>
                <p>We recommend sending 1 liter of water. Analyses on smaller amounts are possible. If you wish to analyze less than 500 mL please <Link href="/about/contact">contact us</Link> first.</p>

                <h5>Sample Container</h5>
                <p>We recommend a 1 liter HDPE or plastic bottle.</p>

                <h5>Preservative</h5>
                <p>The sample should be field filtered using at least 0.45 micron or smaller pore-size diameter filter. The sample must be kept chilled to minimize microbial action.</p>

                <h5>Holding Time</h5>
                <p>Samples should be sent in within two weeks of sampling.</p>
                
                <h5>Shipping</h5>
                <p>Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
            </Accordion>
            
            <h3 className='mt-4'>Questions we can answer</h3>

            <ul className="questions mb-0">
                <li>What is the source of nitrate in a water source and is the concentration at levels dangerous to human health?</li>
                <li>Is nitrate from reduced nitrogen fertilizer?</li>
                <li>Is nitrate from synthetic fertilizer?</li>
                <li>Is nitrate from septic systems?</li>
                <li>Is nitrate from manure applications?</li>
                <li>Is denitrification occurring in a groundwater aquifer system?</li>
            </ul>
        </div>
    );
}