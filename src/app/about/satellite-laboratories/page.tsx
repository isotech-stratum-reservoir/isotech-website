import Image from "next/image";
import Link from "next/link";
import Subpage from "@/components/Subpage";
import dhahranImg from "@/public/images/dammam.jpg";
import houstonImg from "@/public/images/Houston_Skyline.jpg";
import muscatImg from "@/public/images/Muscat.jpg";
import buenosAiresImg from "@/public/images/Buenos_Aires.jpg";

export const metadata = {
    title: "Satellite Laboratories | About | Isotech",
    description: "Isotech has proven the model of setting up sophisticated equipment in established laboratory locations while using highly experienced and trained chemists to operate them remotely.",
};

export default function SatelliteLaboratories() {
    const breadcrumbs = ["About", "Satellite Laboratories"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Satellite Laboratories</h1>

            <p>Isotech has proven the model of setting up sophisticated equipment in established laboratory locations while using highly experienced and trained chemists to operate them remotely. This allows you to access our experience and methods in remote locations while saving on shipping, improving turnaround times, and working with local representatives. These GC and GC-IRMS systems provide the same continuous flow quality you have come to expect from Isotech. We currently have equipment in the following locations.</p>

            <h2 className="mt-4">Dhahran, Saudi Arabia</h2>

            <Image
                src={dhahranImg}
                alt="Aerial view of Dhahran, Saudi Arabia"
                width={400}
                height={267}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Our satellite lab in Dhahran, Saudi Arabia, opened in 2012.</p>

            <p className="clearfix">For further information, including pricing for analyses and sampling products, <Link href="mailto:emad.bedaiwi@stratumreservoir.com">contact Stratum Reservoir - Dhahran</Link>.</p>

            <hr className="my-4"/>
            
            <h2>Houston, Texas</h2>

            <Image
                src={houstonImg}
                alt="Houston skyline"
                width={400}
                height={267}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Isotech&lsquo;s satellite laboratory in Houston, Texas opened in the fall of 2011, expanding our capacity to provide mud gas analyses to the southern regions of the United States. Located at Stratum Reservoir headquarters. If you are in the area ask for a tour and what additional solutions Stratum can offer.</p>

            <p className="clearfix">For further information, including pricing for analyses and sampling products, please <Link href="mailto:Jarrod.dall@stratumreservoir.com">contact Stratum Reservoir - Houston</Link>.</p>

            <hr className="my-4"/>
            
            <h2>Muscat, Oman</h2>

            <Image
                src={muscatImg}
                alt="Mountains and cityscape in Muscat, Oman"
                width={400}
                height={267}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p className="clearfix">Our satellite lab in Muscat, Oman, opened in 2022. For further information, including pricing for analyses and sampling products, <Link href="mailto:hazem.habib@stratumreservoir.com">contact Stratum Reservoir - Muscat</Link>.</p>

            <hr className="my-4"/>

            <h2>Buenos Aires, Argentina</h2>

            <Image
                src={buenosAiresImg}
                alt="Buenos Aires cityscape at night"
                width={400}
                height={267}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p className="clearfix">Our satellite lab in Argentina, opened in 2023, located in the excellent hands of the team at GeoLab Sur S.A. For further information, including pricing for analyses and sampling products, <Link href="mailto:hector.villar@geolabsur.com">contact GeoLab Sur</Link>.</p>

        </Subpage>
    );
}