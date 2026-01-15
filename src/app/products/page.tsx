import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import productsImg from "@/public/images/pexels-pixabay-248152.jpg";
import OrderProductsSection from "./OrderProductsSection";
import isotubeThumbnail from "@/public/images/products/thumbnails/isotube_thumbnail.jpg";
import isosamplerProThumbnail from "@/public/images/products/thumbnails/isosampler_pro_thumbnail.jpg";
import isosamplerGoThumbnail from "@/public/images/products/thumbnails/isosampler_go_thumbnail.jpg";
import isojarThumbnail from "@/public/images/products/thumbnails/isojar_thumbnail.jpg";
import isobagThumbnail from "@/public/images/products/thumbnails/isobag_thumbnail.jpg";
import isoflaskThumbnail from "@/public/images/products/thumbnails/isoflask_thumbnail.jpg";
import cylindersThumbnail from "@/public/images/products/thumbnails/cylinders_thumbnail.jpg";
import isotrapThumbnail from "@/public/images/products/thumbnails/isotrap_thumbnail.jpg";
import scrubbingIsoflaskThumbnail from "@/public/images/products/thumbnails/scrubbing_isoflask_thumbnail.jpg";
import waterChemKitThumbnail from "@/public/images/products/thumbnails/water_chemistry_kit_thumbnail.jpg";
import isotrapSamplerThumbnail from "@/public/images/products/thumbnails/isotrap_sampler_thumbnail.jpg";

export const metadata = {
    title: "Products | Isotech",
    description: "Isotech understands that providing customers with the best possible data begins with using premium sampling containers. We developed the IsoTube®, IsoBag®, IsoJar®, IsoTrap® and IsoFlask®.",
};

interface Product {
    name: string | JSX.Element;
    link: string;
    description: string | JSX.Element;
    image: string;
}

const products: Product[] = [
    {
        name: <>IsoTube<sup>®</sup></>,
        link: "/products/isotube",
        description: "The industry standard for mud gas and produced gas sampling.",
        image: isotubeThumbnail.src
    },
    {
        name: "IsoSampler™ Pro",
        link: "/products/isosampler-pro",
        description: "Manifold to efficiently collect mud gas samples into IsoTubes®.",
        image: isosamplerProThumbnail.src
    },
    {
        name: "IsoSampler™ Go",
        link: "/products/isosampler-go",
        description: "Regulator used to collect gas samples from producing wells or separators into IsoTubes®.",
        image: isosamplerGoThumbnail.src
    },
    {
        name: <>IsoJar<sup>®</sup></>,
        link: "/products/isojar",
        description: "Ideal for gases associated with rock cuttings and mud.",
        image: isojarThumbnail.src
    },
    {
        name: <>IsoBag<sup>®</sup></>,
        link: "/products/isobag",
        description: "Ideal for soil gas sampling or sampling gas in the headspace of a groundwater well.",
        image: isobagThumbnail.src
    },
    {
        name: <>IsoFlask<sup>®</sup></>,
        link: "/products/isoflask",
        description: "The most accurate way of collecting dissolved gas samples.",
        image: isoflaskThumbnail.src
    },
    {
        name: "Cylinders",
        link: "/products/cylinders",
        description: <>For sampling gas at pressures up to 1800 psig or for collection of large volumes of gas for <sup>3</sup>H of methane analysis.</>,
        image: cylindersThumbnail.src
    },
    {
        name: <>IsoTrap<sup>®</sup></>,
        link: "/products/isotrap",
        description: <>Provides an elegant solution for determining the sulfur isotopic ratio of H<sub>2</sub>S.</>,
        image: isotrapThumbnail.src
    },
    {
        name: <>IsoTrap<sup>®</sup> Sampler</>,
        link: "/products/isotrap-sampler",
        description: <>Regulator used with IsoTrap.</>,
        image: isotrapSamplerThumbnail.src
    },
    {
        name: <>H<sub>2</sub>S Scrubbing IsoFlask<sup>®</sup></>,
        link: "/products/h2s-scrubbing-isoflask",
        description: "Removes hydrogen sulfide from gas to collect gas samples safely.",
        image: scrubbingIsoflaskThumbnail.src
    },
    {
        name: "Water Chemistry Kit",
        link: "/products/water-chemistry-kit",
        description: "For collecting water samples for cations and anions concentrations.",
        image: waterChemKitThumbnail.src
    }
]

export default function Products() {
    const breadcrumbs = ["Products"];
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <Section bgColor="green" className="landing-hero">
            <div className="pe-lg-4">
                <h1>Products</h1>

                <p className="lead mb-0 mb-md-3">Because Isotech understands that providing customers with the best possible data begins with using premium sampling containers, we developed the IsoTube<sup>®</sup>, IsoBag<sup>®</sup>, IsoJar<sup>®</sup>, IsoTrap<sup>®</sup> and IsoFlask<sup>®</sup>. We also offer other high-quality sampling products to assist our customers with the sampling process.</p>
            </div>

            <Image 
                priority
                src={productsImg}
                alt=""
                className="slanted-left"
            />
        </Section>

        <Section>
            <div className="row mt-4">
                {products.map((product) => (
                    <div key={product.link} className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="card">
                            <Image src={product.image} alt="" width={300} height={200}/>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <Link href={product.link} className="stretched-link">
                                        {product.name}
                                    </Link>
                                </h2>
                                <p className="mb-0">{product.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        <OrderProductsSection />
        </>
    );
}