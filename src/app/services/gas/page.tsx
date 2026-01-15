import Link from 'next/link';
import Subpage from '@/components/Subpage';
import Tabs from '@/components/Tabs';
import ChemCompTab from './_tabs/ChemCompTab';
import HPStableIsotopesTab from './_tabs/HPStableIsotopesTab';
import SPStableIsotopesTab from './_tabs/SPStableIsotopesTab';
import RadioisotopesTab from './_tabs/RadioIsotopesTab';
import HSIsotopesTab from './_tabs/HSIsotopes';
import DissolvedGasTab from './_tabs/DissolvedGasTab';

export const metadata = {
    title: "Gas Analyses | Services | Isotech",
    description: "Isotech is an established industry leader in performing gas compositional and isotopic analyses for a variety of enterprises.",
};

export default function Gas() {
    const breadcrumbs = ["Services", "Gas Analyses"];

    const tabs = [
        {
            name: "Chemical Composition",
            id: "ChemicalCompositionTab",
            target: "ChemicalComposition"
        },
        {
            name: "High-Precision Stable Isotopes",
            id: "HighPrecisionStableIsotopesTab",
            target: "HighPrecisionStableIsotopes"
        },
        {
            name: "Standard-Precision Stable Isotopes",
            id: "StandardPrecisionStableIsotopesTab",
            target: "StandardPrecisionStableIsotopes"
        },
        {
            name: "Radioisotopes",
            id: "RadioisotopesTab",
            target: "Radioisotopes"
        },
        {
            name: "Hydrogen Sulfide Isotopes",
            id: "HydrogenSulfideIsotopesTab",
            target: "HydrogenSulfideIsotopes"
        },
        {
            name: "Dissolved Gas",
            id: "DissolvedGasTab",
            target: "DissolvedGas"
        }
    ];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Gas Analyses</h1>

            <p className="lead">We are an established industry leader in performing gas compositional and isotopic analyses since 1985 for a variety of enterprises. If you have a specific need not listed, please <Link href="/about/contact">contact us</Link>.</p>

            <div className="row mt-4">
                <div className="col-12 col-lg-3 pe-lg-4 mb-4">
                    <Tabs tabData={tabs}/>
                </div>

                <div className="col-12 col-lg-9">
                    <div className="tab-content pt-lg-2 mt-lg-1">
                        <ChemCompTab/>
                        <HPStableIsotopesTab/>
                        <SPStableIsotopesTab/>
                        <RadioisotopesTab/>
                        <HSIsotopesTab/>
                        <DissolvedGasTab/>
                    </div>
                </div>
            </div>

            <hr className="my-5"/>

            <h2>Questions we can answer</h2>

            <ul className="questions mb-0">
                <li>Is stray natural gas from a leaking pipeline, gas storage reservoir, swamp, microbial drift gas, coal mining, oil spill, gasoline spill, abandoned well, or a producing oil or gas well?</li>
                <li>Did storage gas enter a producing well? If so, what proportion of gas is storage gas and native gas in the producing well?</li>
                <li>Is gas from the tubing of a well leaking into the annulus spacing of the well? Could gas in the annulus space of a well be from shallower hydrocarbon bearing units or from microbial activity?</li>
                <li>Could hydrocarbon gas be migrating into the soil gas zone and if so, what is the source of that hydrocarbon gas?</li>
                <li>Has stray gas undergone oxidation?</li>
                <li>What geologic unit is gas from in a producing well? If there is a mixture of gas sources, what is the proportion of gas from each source?</li>
                <li>Is microbial methane formed by near surface fermentation or deeper sub-surface carbon dioxide reduction processes?</li>
                <li>Did I discover economically viable concentrations of hydrogen or helium?</li>
                <li>While drilling a well could I be drilling through other hydrocarbon bearing units suitable for extraction?</li>
                <li>Did gas originate from a landfill or an alternative source?</li>
            </ul>
        </Subpage>
    );
}