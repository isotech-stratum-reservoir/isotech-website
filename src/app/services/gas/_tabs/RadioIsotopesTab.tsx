import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import fig7A from '@/public/images/gas/Fig 7A. RadioIsotope Analyses.png';
import fig7B from '@/public/images/gas/Fig 7B. RadioIsotope Analyses.png';
import fig7C from '@/public/images/gas/Fig 7C. RadioIsotope Analyses.jpg';

export default function RadioisotopesTab() {
    return (
        <div className="tab-pane fade" id="Radioisotopes" role="tabpanel" aria-labelledby="RadioisotopesTab" tabIndex={0}>
        <h2>Radioisotopes</h2>

        <h3>Carbon-14 (<sup>14</sup>C) of methane or carbon dioxide</h3>
        <figure className="figure row mt-4">
            <div className="col-12 col-lg-6">
                <Image 
                    priority
                    src={fig7A}
                    alt="graph showing detection of tritium and carbon 14"
                    width={500}
                    height={256}
                    className="figure-img img-fluid"
                />
            </div>
            <figcaption className="figure-caption col-12 col-lg-6">We can differentiate methane formed from carbon that was buried millions of years ago, methane from drift gas that formed tens to hundreds of thousands of years ago, and recently forming methane from swamps and landfill gas using measurements of <sup>14</sup>C in methane and carbon dioxide.</figcaption>
        </figure>

        <h3>Tritium (<sup>3</sup>H) of methane</h3>
        <figure className="figure row mt-4">
            <div className="col-12 col-lg-6">
                <Image 
                    priority
                    src={fig7B}
                    alt="bar chart showing carbon 14 activity in different types of samples"
                    width={500}
                    height={307}
                    className="figure-img img-fluid"
                />
            </div>
            <figcaption className="figure-caption col-12 col-lg-6">Tritium has a half-life decay of 12.39 years, and we have found it to be enriched in methane from landfills (Hackley et al., 1996). This allows us to delineate methane from landfills versus methane formation from naturally occurring microbial gas sources such as from swamp environments or drift gas.</figcaption>
        </figure>

        <h3 className="mt-4">Sampling Guidelines</h3>

        <h4>Sample Container</h4>
        <p>Gas samples for <strong><sup>14</sup>C of methane</strong> can be collected in <Link href="/products/isobag">IsoBags®</Link>, <Link href="/products/isotube">IsoTubes®</Link>, gas bags, or steel cylinders.</p>

        <p>Gas samples for <strong><sup>3</sup>H of methane</strong> need to be collected in ~18 liter LP tanks that have been pre-evacuated and are pressurized to 20 psi using a pump. It is important to ensure that there are no leaks in the connections and that liquid does not get into the LP tank. A specific SOP for collecting gas samples for tritium analysis is provided.</p>

        <figure className="figure row mt-4">
            <div className="col-12 col-lg-6">
                <Image 
                    priority
                    src={fig7C}
                    alt="sampling equipment in a grassy field"
                    width="500"
                    className="figure-img img-fluid"
                />
            </div>
            <figcaption className="figure-caption col-12 col-lg-6">A photo of the LP Tank, the pump and the associated connections to collect a gas sample for tritium of methane analysis from a gas monitoring well in the field.</figcaption>
        </figure>

        <h4>Holding Time</h4>
        <p>As long as sample containers are not leaking gas, samples will maintain gas molecular and isotopic composition.</p>

        <h4>Shipping</h4>
        <p>Do not ship on a Friday as there is no one to receive the sample. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>

        <h3 className="mt-4">Analysis Suites</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th><span className="visually-hidden">Analytes/properties tested for</span></th>
                    <th>BG-1</th>
                    <th>BG-2</th>
                    <th>BG-3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Full GC</td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
                <tr>
                    <td>δ<sup>13</sup>C and δD of methane</td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
                <tr>
                    <td>δ<sup>13</sup>C of CO<sub>2</sub></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
                <tr>
                    <td><sup>14</sup>C of methane</td>
                    <td><span className="visually-hidden">no</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
                <tr>
                    <td><sup>3</sup>H of methane</td>
                    <td><span className="visually-hidden">no</span></td>
                    <td><span className="visually-hidden">no</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}