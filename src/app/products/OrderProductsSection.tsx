import Link from "next/link";
import Section from "@/components/Section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function OrderProductsSection() {
    return (
        <Section bgColor="lighter grey">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="d-flex align-items-center gap-3">
                        <h2>Order Products</h2>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6">
                    <p className="mb-0">
                        <span className="d-flex gap-2 align-items-center mb-3"><FontAwesomeIcon icon={faPhone} className="icon steel-text"/> (217) 398-3490</span>

                        <span className="d-flex gap-2 align-items-center mb-3"><FontAwesomeIcon icon={faEnvelope} className="icon steel-text"/> <Link className="steel-text" href="mailto:onlineorders@stratumreservoir.com">onlineorders@stratumreservoir.com</Link></span>

                        <span className="d-flex gap-2 align-items-center"><FontAwesomeIcon icon={faInfoCircle} className="icon steel-text"/> <Link href="/products/warranty" className="steel-text">Warranty Information</Link></span>
                    </p>
                </div>
            </div>
        </Section>
    );
}