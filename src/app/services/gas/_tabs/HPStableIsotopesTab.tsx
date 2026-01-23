import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import fig14 from '@/public/images/gas/Figure 14 High Precision Stable Isotopes.png';

export default function HPStableIsotopesTab() {
    return (
        <div className="tab-pane fade" id="HighPrecisionStableIsotopes" role="tabpanel" aria-labelledby="HighPrecisionStableIsotopesTab" tabIndex={0}>
            <h2>High-Precision Stable Isotopes</h2>

            <p>Isotech uses an off-line method to generate high-precision stable isotope ratios of carbon and hydrogen in hydrocarbon gas samples. Each sample is separated into its components, each component is combusted, and the combustion products are collected and sealed in a glass ampoule using a vacuum system. The combustion products are then analyzed on a dual-inlet IRMS. This method is much more labor-intensive and time-consuming, but allows us to achieve unbeatable precision: 1 sigma is 0.1‰ for δ<sup>13</sup>C measurements, and 3.5 ‰ for δ<sup>2</sup>H measurements.</p>

            <p>Isotech has the capability to analyze δ<sup>13</sup>C and δ<sup>2</sup>H in hydrocarbons C<sub>1</sub>-C<sub>5</sub>; and δ<sup>13</sup>C of CO<sub>2</sub>.</p>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={fig14}
                        alt="Graph showing the source of methane"
                        width={500}
                        height={490}
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">A diagnostic plot that uses the isotopes of methane to determine if methane was formed by thermogenic processes, sub-surface microbial processes, or near-surface microbial gas processes.</figcaption>
            </figure>

            <h3 className="mt-4">Sampling Guidelines</h3>

            <h4>Sample Container</h4>
            <p>Gas samples can be collected in <Link href="/products/isobag">IsoBags®</Link>, <Link href="/products/isotube">IsoTubes®</Link>, or <Link href="/products/cylinders">steel cylinders</Link>.</p>

            <h4>Holding Time</h4>
            <p>As long as sample containers are not leaking gas, samples will maintain gas molecular and isotopic composition.</p>

            <h4>Shipping</h4>
            <p>See our <Link href="/resources/shipping-guidelines">Shipping Guidelines page</Link> for specific shipping information for gas containers.</p>

            <h3 className="mt-4">Analysis Suites</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th><span className="visually-hidden">Analytes/properties tested for</span></th>
                        <th>NG-1</th>
                        <th>NG-2</th>
                        <th>NG-3</th>
                        <th>NG-4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Full GC</td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C and δD of methane</td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C of ethane and propane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C of Iso- and normal-butane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C of Iso- and normal-pentane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                </tbody>
            </table>

            <p>Custom analysis packages available on request. Call us at (217) 398-3490 or email <Link href="mailto:DLChampaignProjectManagement@stratumreservoir.com">DLChampaignProjectManagement@stratumreservoir.com</Link> for a quote. </p>
        </div>
    );
}