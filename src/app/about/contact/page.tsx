import Link from "next/link";
import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Contact | About | Isotech",
    description: "",
};

export default function Contact() {
    const breadcrumbs = ["About", "Contact"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Contact</h1>

            <div className="row">
                <div className="col-12 col-md-6">
                    <p>
                        Isotech<br/>
                        1308 Parkland Court<br/>
                        Champaign, Illinois 61821
                    </p>

                    <p>Phone: 217-398-3490</p>

                    <p>
                        Online ordering: <Link href="mailto:onlineorders@stratumreservoir.com">onlineorders@stratumreservoir.com</Link>
                    </p>

                    <p>For other inquiries, contact Missy Meade at <Link href="mailto:melissa.meade@stratumreservoir.com">melissa.meade@stratumreservoir.com</Link>.</p>
                </div>

                <div className="col-12 col-md-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.5407764546135!2d-88.28238742325895!3d40.13023637148707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd083d06fd3e3%3A0x85f348b75df51637!2sIsotech%20Laboratories%20Inc!5e0!3m2!1sen!2sus!4v1744592468448!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </Subpage>
    );
}