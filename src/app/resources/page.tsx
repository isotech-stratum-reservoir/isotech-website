import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faVial, faTruckFast, faCircleQuestion, faCircle } from "@fortawesome/free-solid-svg-icons";
import resourcesImg from "@/public/images/resources-hero.jpg";

export const metadata = {
    title: "Resources | Isotech",
    description: "",
};

export default function Resources() {
    const breadcrumbs = ["Resources"];
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <Section bgColor="green" className="landing-hero">
            <div className="pe-lg-4">
                <h1>Resources</h1>

                <p className="lead mb-0 mb-md-3">Companies from around the world turn to Isotech for help in solving problems through high precision isotopic analysis. We&lsquo;ve built a reputation on providing customers with superior sampling products and the best possible technical support.</p>
            </div>

            <Image 
                priority
                src={resourcesImg}
                alt=""
                className="slanted-left"
            />
        </Section>

        <Section>
        <div className="row mt-4 pt-3">
                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faClipboardList} className="d-block mx-auto mb-4 fs-3rem"/>
                            <h3 className="card-title text-center">
                                <Link href="/resources/new-client-information" className="stretched-link">New Client Information</Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faVial} className="d-block mx-auto mb-4 fs-3rem"/>
                            <h3 className="card-title text-center">
                                <Link href="/resources/sampling-procedures" className="stretched-link">Sampling Procedures</Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faTruckFast} className="d-block mx-auto mb-4 fs-3rem"/>
                            <h3 className="card-title text-center">
                                <Link href="/resources/shipping-guidelines" className="stretched-link">Shipping Guidelines</Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5">
                        <div className="card-body">
                            <FontAwesomeIcon icon={faCircleQuestion} className="d-block mx-auto mb-4 fs-3rem"/>
                            <h3 className="card-title text-center">
                                <Link href="/resources/faq" className="stretched-link">Frequently Asked Questions</Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
        </>
    );
}