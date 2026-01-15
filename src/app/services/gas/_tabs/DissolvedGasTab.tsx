import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import dissolvedGasImg from '@/public/images/water/Dissolved Gas_Water Analyses.png';

export default function DissolvedGasTab() {
    const isoflaskLink = "/products/isoflask";

    return(
        <div className="tab-pane fade" id="DissolvedGas" role="tabpanel" aria-labelledby="DissolvedGasTab" tabIndex={0}>
            <h2>Dissolved Gas</h2>

            <p>Our team determines the dissolved gas composition of water samples collected in <Link href={isoflaskLink}>IsoFlasks®</Link>. Analytical reports include a full compositional and isotopic analysis of the headspace, concentration of methane, ethane and propane dissolved in the water, and carbon and hydrogen isotope values for individual gas components. Dissolved gas concentrations are available for additional components upon request. Below is a diagram showing some sources of stray gas that could migrate into a groundwater well.</p>

            <Image 
                priority
                src={dissolvedGasImg}
                alt="Layered diagram of water wells near a landfill"
                width={400}
                height={363}
                className="figure-img img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <h3 className="mt-4">Sampling Guidelines</h3>

            <h4>Sample Container</h4>
            <p>The <Link href={isoflaskLink}>IsoFlask®</Link> is the recommended container for this analysis.</p>

            <h4>Sample Size</h4>
            <p>We recommend that you fill the IsoFlask with 600-750 mL of water. If you wish to use a bottle method for collection please <Link href="/about/contact">contact us</Link> for recommendations. Note that other sampling containers may over or under represent the gas content of the water. We do have the capability to analyze dissolved gas from 40 mL VOA vials or similar sized containers. However, the amount of gas available could severely limit the isotopic work possible.</p>

            <h4>Preservative</h4>
            <p>IsoFlasks have a biocide that prevents microbial action and should be kept from excessive heat and sunlight. Other containers require refrigeration and shipment on ice.</p>

            <h4>Holding Time</h4>
            <p>IsoFlasks can be held unrefrigerated for up to two months. For other containers, if the sample is kept refrigerated, we recommend shipping the sample to us within two weeks of sampling.</p>

            <h4>Shipping</h4>
            <p>IsoFlasks can be shipped using your preferred method. For other containers, we recommend the sample be shipped on ice and overnighted to the lab. Please do not ship on a Friday as we only receive samples Monday through Friday.</p>

            <h3 className="mt-4">Analysis Suites</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th><span className="visually-hidden">Analytes/properties tested for</span></th>
                        <th>GC Only</th>
                        <th>DG-1</th>
                        <th>DG-2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dissolved Gas GC</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Concentration of methane, ethane, and propane dissolved in water </td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C and δD of methane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C of ethane and propane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}