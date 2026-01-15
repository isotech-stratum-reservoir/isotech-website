import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import staffData from "@/data/staff.json";

export const metadata = {
    title: "Staff | About | Isotech",
    description: "Isotech employs chemists, technicians, technologists and support staff dedicated to providing customers with the best possible data and service.",
};

export default function Staff() {
    const breadcrumbs = ["About", "Staff"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Staff</h1>

            <div className="row mt-4">

                {staffData.map((person) => (
                    <div key={person.name} className="col-12 col-md-6 col-lg-4 mb-4">
                        <Image
                            src={`/images/staff/${person.image}`}
                            alt={person.name}
                            width={200}
                            height={280}
                            className="img-fluid mb-3"
                        />
                        <h2 className="fs-5 mb-1">{person.name}</h2>
                        <p>
                            {person.title}<br/>
                            <Link href={`mailto:${person.email}`}>{person.email}</Link>
                        </p>
                    </div>
                ))}

            </div>
        </Subpage>
    );
}