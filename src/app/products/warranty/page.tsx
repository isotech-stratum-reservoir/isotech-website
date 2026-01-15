import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Warranty | Products | Isotech",
};

export default function Warranty() {
    const breadcrumbs= ["Products", "Warranty"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Isotech Sampling Products Warranty Information</h1>

            <p>Seller warrants that the products sold are in accordance with seller&lsquo;s published specifications or those specifications agreed to by seller in writing at the time of sale. Seller&lsquo;s obligation and liability under this warranty is limited to repairing or replacing, at seller&lsquo;s option, within 12 months after date of delivery, any product not meeting the specifications.</p>
            
            <p>SELLER MAKES NO OTHER WARRANTY, EXPRESS OR IMPLIED, AND MAKES NO WARRANTY OF MERCHANTABILITY OR OF FITNESS FOR ANY PARTICULAR PURPOSE.</p>
            
            <p>Seller&lsquo;s obligation under this warranty shall not include any transportation charges or costs of installation or any liability for direct, indirect, or consequential damages or delay. If requested by seller, products or parts for which a warranty claim is made are to be returned transportation prepaid to seller&lsquo;s facility. Any improper use, operation beyond capacity, substitution of parts not approved by seller, or any alteration or repair by others in such manner as in seller&lsquo;s judgment affects the product materially and adversely shall void this warranty. No employee or representative of seller is authorized to change this warranty in any way or grant any other warranty.</p>

        </Subpage>
    );
}