import styles from "@/css/home.module.scss";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import cotton from "@/public/images/cotton.jpg";
import map from "@/public/images/world-map.jpg";
import acreditationLogo from '@/public/images/Iso accreditation symbol.png';

export default function Home() {
    return (
        <>
            <h1 className="visually-hidden">Home</h1>

            <div className={styles.hero}>
                <div className={`slanted-right ${styles.services}`}>
                    <h2 className="text-center">
                        <Link href="/services">
                            <span className="fw-normal">Explore Our</span> 
                            <br/>
                            <span className="text-uppercase fs-1">Services</span>
                        </Link>
                    </h2>
                </div>

                <div className={`slanted-left ${styles.products}`}>
                    <h2 className="text-center">
                        <Link href="/products">
                            <span className="fw-normal">Discover Our</span> 
                            <br/>
                            <span className="text-uppercase fs-1">Products</span>
                        </Link>
                    </h2>
                </div>
            </div>

            <Section className="text-center">
                <div className="mw-800">
                    <h2>A Global Leader in High Precision Isotope Testing</h2>

                    <p>Isotech specializes in high-precision carbon, hydrogen, oxygen, nitrogen, and sulfur isotope analysis and interpreting data for isotopic fingerprinting. We have built our reputation by providing superior services delivered by expert staff.</p>

                    <p className="mt-4"><Link className="button" href="/about">More About Isotech</Link></p>
                </div>
            </Section>

            <Section className="bg-img" style={{backgroundImage: `url(${cotton.src})`}}>
                <div className="py-md-4 d-flex justify-content-end">
                    <div className="orange-bg w-lg-50 p-2rem">
                        <h2>Cotton Origin Verification</h2>

                        <p>Do you know where your cotton is from? Do you have control and visibility into your supply chain? Is there a risk that your supply chain could be using yarn or fabric in finished products from prohibited regions that use forced labor?</p>

                        <p>Our team has built an extensive library of isotopic compositions of cotton samples from the major cotton producing regions of the world. You can send in raw cotton fiber, unprocessed or processed greige yarn, dyed fabric, or finished products to our facility to confirm your cotton origin.</p>

                        <p className="mt-4 mb-0"><Link className="button orange-bg" href="/services/authentication">Verify the Origin of Your Cotton</Link></p>
                    </div>
                </div>
            </Section>

            <Section 
                className="bg-img text-center py-4"
                style={{
                    backgroundImage: `url(${map.src})`,
                    backgroundColor: "rgba(255,255,255,0.85)",
                    backgroundBlendMode: "lighten"
                }}
            >
                <div className="mw-800">
                    <h2>Satellite Laboratories</h2>

                    <p>Enhancing our services to industries around the globe.</p>

                    <p className="mt-4"><Link className="button" href="/about/satellite-laboratories">See Satellite Labs</Link></p>
                </div>
            </Section>

            <Section className="text-center py-4">
                <h2 className="mb-4">Certifications</h2>

                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="card p-4 d-flex flex-column justify-content-center">
                            <h3>ISO / IEC 17025:2017</h3>
                            <p>Accreditation #120824</p>
                            <p><Link className="button download" href="/files/ISO17025certificate.pdf" target="_blank">Download our ISO / IEC 17025:2017 Certificate</Link></p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card p-4 d-flex flex-column justify-content-center">
                            <h3>ISO 9001:2015</h3>

                            <p><Link className="button download" href="/files/ISO9001certificate.pdf" target="_blank">Download our ISO 9001:2015 Certificate</Link></p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}