import Link from "next/link";
import Subpage from "@/components/Subpage";

export const metadata = {
    title: "New Client Information | Resources | Isotech",
    description: "",
};

export default function NewClientInformation() {
    const breadcrumbs = ["Resources", "New Client Information"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>New Client Information</h1>
            
            <p>Thank you for considering using us for your analytical and sampling needs. As one of the largest commercial isotope laboratory in the western hemisphere, Isotech offers superior services and expert staff.</p>

            <h2>Contract</h2>

            <p>Our internal processes require that we establish a contract and obtain billing information.  If you want to sign a one-time contract for work we can create a formal price quote for you with terms included.  In that case, please contact one of our Project Managers and request a price quote.</p>

            <p>Otherwise, a Master Service Agreement is recommended.  Please review the terms and fill out the form to send along with the billing information</p>

            <p>
                <Link className="button download" href="/files/WFT Laboratory Services and Sales Master Agreement.pdf" target="_blank">Master Service Agreement</Link> 
            </p>

            <h2>Billing</h2>

            <p>To be able to ship sampling containers and provide services we need to establish you in our accounting system. This requires that a Credit Application be completed.  Our project managers and customer service representatives can help you with any questions about the forms.</p>

            <p>
                <Link className="button download" href="/files/Credit Application.pdf" target="_blank">Credit Application</Link> 
            </p>

        </Subpage>
    );
}