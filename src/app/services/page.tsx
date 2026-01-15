import "@/css/services.scss";
import Link from "next/link";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
    title: "Services | Isotech",
    description: "Isotech offers stable and radiogenic isotope analyses of gases, waters, solids and other liquids from a variety of sources.",
};

export default function Services() {
    const breadcrumbs = ["Services"];
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <Section>
            <h1>Services</h1>

            <h2 className="mt-4">Laboratory Services</h2>

            <div className="row">
                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5 services-card gas-card">
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                <Link href="/services/gas" className="stretched-link">Gas</Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5 services-card water-card">
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                <Link href="/services/water" className="stretched-link">Water</Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5 services-card cotton-card">
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                <Link href="/services/authentication" className="stretched-link">Authentication</Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5 services-card solid-liquid-card">
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                <Link href="/services/solids-liquids" className="stretched-link">Solids & Liquids</Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

        <Section bgColor="lighter grey">
            <h2>Interpretive Services</h2>

            <p>Our team composes interpretive reports for clients to assess the source, fate, and transport of natural gas and water in the vadose zone, surface water, groundwater aquifers, and oil and gas reservoirs to determine remediation, monitoring, and extraction strategies. We present data using diagnostic plots to identify contaminant sources, assess storage gas operations, or to enhance gas production from reservoirs for clients.</p>

            <p className="mt-4"><Link className="button" href="/services/interpretive">Explore Interpretive Services</Link></p>
        </Section>
        </>
    );
}