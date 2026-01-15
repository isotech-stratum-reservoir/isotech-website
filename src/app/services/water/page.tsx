import Link from 'next/link';
import Subpage from '@/components/Subpage';
import Tabs from '@/components/Tabs';
import DissolvedGasTab from './_tabs/DissolvedGasTab';
import StableIsotopesTab from './_tabs/StableIsotopesTab';
import RadioisotopesTab from './_tabs/RadioisotopesTab';
import SulfurTab from './_tabs/SulfurTab';
import NitrateTab from './_tabs/NitrateTab';
import WaterChemistryTab from './_tabs/WaterChemistryTab';

export const metadata = {
    title: "Water Analyses | Services | Isotech",
    description: "Isotech offers numerous types of compositional and isotopic analyses for water samples.",
};

export default function Water() {
    const breadcrumbs = ["Services", "Water Analyses"];

    const tabs = [
        {
            name: "Dissolved Gas",
            id: "DissolvedGasTab",
            target: "DissolvedGas"
        },
        {
            name: "Stable Isotopes",
            id: "StableIsotopesTab",
            target: "StableIsotopes"
        },
        {
            name: "Radioisotopes",
            id: "RadioisotopesTab",
            target: "Radioisotopes"
        },
        {
            name: "Sulfur",
            id: "SulfurTab",
            target: "Sulfur"
        },
        {
            name: "Nitrate",
            id: "NitrateTab",
            target: "Nitrate"
        },
        {
            name: "Water Chemistry",
            id: "WaterChemistryTab",
            target: "WaterChemistry"
        }
    ];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Water Analyses</h1>
            
            <p className="lead">Isotech offers numerous types of compositional and isotopic analyses for water samples. We also offer <Link href="/products">sampling products</Link> and advice to assist you in collecting good, representative samples. If you have a specific need not listed, please <Link href="/about/contact">contact us</Link>.</p>

            <div className="row mt-4">
                <div className="col-12 col-lg-3 pe-lg-4 mb-4">
                    <Tabs tabData={tabs}/>
                </div>

                <div className="col-12 col-lg-9">
                    <div className="tab-content pt-lg-2 mt-lg-1">
                        <DissolvedGasTab/>
                        <StableIsotopesTab/>
                        <RadioisotopesTab/>
                        <SulfurTab/>
                        <NitrateTab/>
                        <WaterChemistryTab/>
                    </div>
                </div>
            </div>
            
        </Subpage>
    );
}