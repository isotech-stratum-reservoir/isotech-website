import Image from "next/image";
import Subpage from "@/components/Subpage";
import fig13 from "@/public/images/authentication/Figure 13_3D plot of cotton origin.png";
import honeyGraph from "@/public/images/authentication/Honey_Graph.png";

export const metadata = {
    title: "Authentication | Services | Isotech",
    description: "",
};

export default function Authentication() {
    const breadcrumbs = ["Services", "Authentication"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Authentication</h1>
            
            <h2 className="mt-4">Cotton Origin</h2>

            <p>In 2021, US Customs and Border Protection (CBP) passed the Uyghur Forced Labor Prevention Act (UFLPA) to prohibit cotton from the Xinjiang Uyghur Autonomous Region (XUAR) to be distributed in US markets. This was due to forced labor in the XUAR being used to grow cotton. Bad actors have been incorporating cotton grown in the XUAR into cotton supply chains and passing it off as cotton grown in other regions. To verify where cotton was grown, the CBP put together Publication No. 3869-1024, which states that isotopic testing of cotton is a tool to verify cotton origin and provides an Isotopic Testing Guide that our facility conforms to. Our team has been verifying the source of cotton prior to the passage of the UFLPA and has generated an extensive reference library of isotopic compositions of cotton from the major producing regions of the world. You can send in raw cotton fiber, unprocessed or processed greige yarn, dyed fabric, or finished products to our facility to verify cotton origin.</p>

            <p>In addition to adhering to regulatory requirements, isotopic testing of cotton can ensure consumer expectations are met. For example if a product claims that it is “Egyptian Cotton”, our isotopic testing and associated report will tell you if it was actually grown in Egypt.</p>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={fig13}
                        alt="3D visualization of isotope fingerprints of cotton"
                        width="500"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">Advanced 3D visualization illustrates the different isotope fingerprints based on carbon, hydrogen, and oxygen isotopic measurements of cotton to correlate with geographic origin.</figcaption>
            </figure>

            <hr className="my-4"/>

            <h2>Honey Authentication</h2>

            <p>Honey can be adulterated with sugar. Our team can perform carbon isotopic testing on honey to determine if honey you are being sold is being fraudulently adulterated or if you have high-quality natural honey made by bees.</p>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={honeyGraph}
                        alt="graph showing isotopic composition of honey"
                        width="500"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">The plot shows how we can use the carbon isotopic composition to determine if a honey sample is made of pure honey or if it has been adulterated with sugar cane or corn syrup.</figcaption>
            </figure>

            <hr className="my-4"/>

            <h2>Meat and Timber Authentication</h2>

            <p>Unfortunately, bad actors can label lower quality meat or wood as higher quality products to unethically increase profits. For example, beef can be labeled as “Product of USA” and cattle could have born, raised, and slaughtered outside the USA. Timber can be harvested from protected regions and fraudulently passed off as timber being grown in regions where logging is permitted.</p>

            <p>Our team can make isotopic measurements of meat and timber to assess the origin of where cattle were raised or where timber was grown to verify the origin of meat or timber.</p>

        </Subpage>
    );
}