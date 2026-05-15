import styles from "@/css/home.module.scss";
import Link from "next/link";
import Section from "@/components/Section";
import map from "@/public/images/world-map.jpg";
import cottonFrame from "@/public/images/authentication/cotton-first-frame.png";

export default function Home() {
    return (
        <>
            <h1 className="visually-hidden">Isotech</h1>

            <div className={`h-60vh video-bg transparent-overlay ${styles['transparent-overlay']} ${styles['fingerprint-bg']}`}>
                <div className="video-container">
                    <video autoPlay loop muted playsInline poster={cottonFrame.src}>
                        <source src="/videos/cotton-clips.mp4" type="video/mp4"/>
                        <img src={cottonFrame.src} alt="cotton field"/>
                    </video>
                </div>

                <div className="container h-100 d-flex align-items-center">
                    <div className="w-lg-50 py-5">
                        <h2 className="fs-1 white-text">Do you know where your cotton really comes from?</h2>

                        <p className="white-text fs-5">Isotech verifies cotton origin at every stage of the supply chain.</p>

                        <p className="mt-4"><Link className="button" href="/services/authentication">Verify the origin of your cotton</Link></p>
                    </div>
                </div>
            </div>

            {/* <Section className="bg-img" style={{backgroundImage: `url(${cotton.src})`}}>
                <div className="py-md-4 d-flex justify-content-end">
                    <div className="orange-bg w-lg-50 p-2rem">
                        <h2>Cotton Origin Verification</h2>

                        <p>Do you know where your cotton is from? Do you have control and visibility into your supply chain? Is there a risk that your supply chain could be using yarn or fabric in finished products from prohibited regions that use forced labor?</p>

                        <p>Our team has built an extensive library of isotopic compositions of cotton samples from the major cotton producing regions of the world. You can send in raw cotton fiber, unprocessed or processed greige yarn, dyed fabric, or finished products to our facility to confirm your cotton origin.</p>

                        <p className="mt-4 mb-0"><Link className="button orange-bg" href="/services/authentication">Verify the Origin of Your Cotton</Link></p>
                    </div>
                </div>
            </Section> */}

            <Section className="text-center">
                <div className="mw-800">
                    <h2>A Global Leader in High Precision Isotope Testing</h2>

                    <p>Isotech specializes in high-precision carbon, hydrogen, oxygen, nitrogen, and sulfur isotope analysis and interpreting data for isotopic fingerprinting. We have built our reputation by providing superior services delivered by expert staff.</p>

                    <p className="mt-4"><Link className="button" href="/about">More about Isotech</Link></p>
                </div>
            </Section>

            <div className={styles.hero}>
                <div className={`slanted-right ${styles.services}`}>
                    <h2 className="text-center" data-aos="fade-up">
                        <Link href="/services">
                            <span className="fw-normal">Explore Our</span> 
                            <br/>
                            <span className="text-uppercase fs-1">Services</span>
                        </Link>
                    </h2>
                </div>

                <div className={`slanted-left ${styles.products}`}>
                    <h2 className="text-center" data-aos="fade-up">
                        <Link href="/products">
                            <span className="fw-normal">Discover Our</span> 
                            <br/>
                            <span className="text-uppercase fs-1">Products</span>
                        </Link>
                    </h2>
                </div>
            </div>


            <Section 
                className="bg-img text-center py-4 paralax"
                style={{
                    backgroundImage: `url(${map.src})`,
                    backgroundColor: "rgba(255,255,255,0.85)",
                    backgroundBlendMode: "lighten"
                }}
            >
                <div className="mw-800">
                    <h2>Satellite Laboratories</h2>

                    <p>Enhancing our services to industries around the globe.</p>

                    <p className="mt-4"><Link className="button" href="/about/satellite-laboratories">See satellite labs</Link></p>
                </div>
            </Section>

            <Section className="text-center py-4">
                <h2 className="mb-4">Certifications</h2>

                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="card p-4 d-flex flex-column justify-content-center" data-aos="fade-right">
                            <h3>ISO/IEC 17025:2017</h3>
                            <p>Accreditation #120824: Applies only to services listed in the scope.</p>
                            <p><Link className="button download" href="/files/ISO17025certificate.pdf" target="_blank">ISO/IEC 17025:2017 Certificate</Link></p>
                            <p><Link className="button download" href="/files/FO 520 Rev 0 Scope of Accreditation for ISO 17025.pdf" target="_blank">ISO/IEC 17025:2017 Scope</Link></p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card p-4 d-flex flex-column justify-content-center" data-aos="fade-left">
                            <h3>ISO 9001:2015</h3>

                            <p><Link className="button download" href="/files/P21 DF18Q_Stratum Reservoir (Isotech), LLC_Recert 2025.pdf" target="_blank">ISO 9001:2015 Certificate</Link></p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}