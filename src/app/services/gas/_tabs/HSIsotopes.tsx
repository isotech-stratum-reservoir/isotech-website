import Link from "next/link";
import Image from "next/image";
import HSIsotopesImg from '@/public/images/gas/Hydrogen Sulfide Isotopes_Gas Analyses.png';

export default function HSIsotopesTab() {
    return (
        <div className="tab-pane fade" id="HydrogenSulfideIsotopes" role="tabpanel" aria-labelledby="HydrogenSulfideIsotopesTab" tabIndex={0}>
            <h2>Hydrogen Sulfide (H<sub>2</sub>S) Isotopes</h2>

            <p>Hydrogen Sulfide is a toxic gas that is dangerous to human health and is costly to remove from produced gas streams. Isotech is not a sour gas lab and therefore cannot receive sour gases. Therefore, our team provides sampling equipment that removes H<sub>2</sub>S or converts it to a solid form to ship without HAZMAT restrictions to determine the sulfur isotopic composition of H<sub>2</sub>S to assess the source of H2S. We also sell equipment to remove H<sub>2</sub>S from gas for analyses of other parameters.</p>

            <figure className="figure">
                <Image 
                    priority
                    src={HSIsotopesImg}
                    alt="Using isotopes of h2s and hydrocarbon gas data to source h2s in producing well"
                    width={800}
                    height={404}
                    className="figure-img img-fluid mx-auto d-block mb-3"
                />
                <figcaption className="figure-caption">Understanding the source of H<sub>2</sub>S is important for well field management and future exploration activities. The associated costs in remediating a well that contains H<sub>2</sub>S could make a well no longer feasible to produce gas from. The diagram above shows some of the possible H<sub>2</sub>S sources that our isotope testing can differentiate.”</figcaption>
            </figure>

            <h3 className="mt-4">Sampling Guidelines</h3>

            <h4>Sample Container</h4>
            <p>The H<sub>2</sub>S <Link href="/products/isotrap">IsoTrap®</Link>. Gas flowed through the IsoTrap is converted to a non-hazardous material that can be shipped without HAZMAT protocols. The IsoTrap® has a color indicator that denotes when enough H<sub>2</sub>S has been captured for analysis. A minimum of 15 psi of pressure is required for gas sample collection.</p>

            <h4>Sample Size</h4>
            <p>Gas is flown through the IsoTrap for isotopic analysis, the volume of gas needed to be flown through the IsoTrap® is dependent on the concentration of H<sub>2</sub>S in the gas stream.</p>

            <h4>Holding Time</h4>
            <p>After properly collecting a sample, there is no limit on how long an IsoTrap can be stored.</p>

            <h4>Shipping</h4>
            <p>Do not ship on a Friday as there is no one to receive the sample over the weekend. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
        </div>
    );
}