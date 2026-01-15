import Link from 'next/link';
import analysisSuites from '@/data/water-chemistry-analysis-suites.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function WaterChemistryTab() {    
    return (
        <div className="tab-pane fade" id="WaterChemistry" role="tabpanel" aria-labelledby="WaterChemistryTab" tabIndex={0}>
            <h2>Water Chemistry</h2>

            <h3>Sampling Guidelines and Analytical Procedures</h3>

            <h4>Anions</h4>
            <p>In the field, 250 mL of filtered water (using a 0.45 micron filter) is collected in a HDPE or plastic bottle. Water is inlet into an Ion Chromatograph (IC) for anion concentration analysis at the lab.</p>

            <h4>Cations</h4>
            <p>In the field, 250 mL of filtered water (using a 0.45 micron filter) are collected in a separate HDPE or plastic bottle and preserved with nitric acid. Water is inlet into an inductively coupled plasma optical emission spectrometer (ICP-OES) for cation concentration analysis at the lab.</p>

            <p>Smaller sample volumes can be analyzed for anion and cation concentrations. Please contact the lab for more information.</p>

            <h4>Preservative </h4>
            <p>The sample must be kept chilled prior to and during shipment.</p>

            <h4>Holding Time</h4>
            <p>Samples should be overnighted to the laboratory. Sampling events should be planned for Monday through Thursday to allow receipt of the sample within 48 hours. If shipment of the sample cannot happen the same or next day the sample should be kept refrigerated.</p>

            <h4>Shipping</h4>
            <p>Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>

            <h3 className="mt-4">Analysis Suites</h3>

            <div className="table-responsive mb-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th><span className="visually-hidden">Analytes/properties tested for</span></th>
                        <th>WAB (Basic)</th>
                        <th>WAE (Environmental)</th>
                        <th>WAO (Oilfield)</th>
                        <th>WAFA (Flow Assurance)</th>
                        <th>WAC (CO<sub>2</sub>)</th>
                    </tr>
                </thead>
                <tbody>
                    {analysisSuites.map(property =>
                        <tr key={property.name}>
                            <td>{property.name}</td>
                            {Object.entries(property.suites).map(([key, value]) =>
                                <td key={key} className="text-center">
                                    { value ? (
                                        <><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></>
                                    ) : (
                                        <span className="visually-hidden">no</span>
                                    )}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
            </div>

            <p>Custom analysis packages available on request - call us at (217) 398-3490 or email <Link href="mailto:DLChampaignProjectManagement@stratumreservoir.com">DLChampaignProjectManagement@stratumreservoir.com</Link> for a quote. </p>

            <h3 className='mt-4'>Questions we can answer</h3>

            <ul className="questions mb-0">
                <li>What is the concentration of a specific metal in a water sample?</li>
                <li>Have deeper saline fluids higher in chloride and sodium migrated into shallower groundwater aquifers?</li>
                <li>What is the concentration of lithium in produced water?</li>
                <li>Are waters from different origins mixing?</li>
                <li>Is subsurface carbon sequestration successfully trapping dissolved carbon dioxide in the subsurface?</li>
                <li>What is the baseline water quality prior to oil and gas drilling?</li>
            </ul>
        </div>
    );
}