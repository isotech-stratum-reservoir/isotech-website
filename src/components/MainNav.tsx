'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function MainNav() {
    const pathname = usePathname();
    const navRef = useRef(null);

    useEffect(() => {
        if (navRef.current) {
            navRef.current.classList.remove('show');
        }
    }, [pathname]);

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mainNav" ref={navRef}>
                    <ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <button className="nav-link dropdown-toggle" id="aboutDropdownBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</button>

                            <ul className="dropdown-menu" aria-labelledby="#aboutDropdownBtn">
                                <li>
                                    <Link className="bold-text" href="/about">About<FontAwesomeIcon icon={faAnglesRight} className="icon orange-text ms-1"/></Link>
                                    
                                    <ul className="list-unstyled">
                                        <li><Link href="/about/staff">Staff</Link></li>
                                        <li><Link href="/about/satellite-laboratories">Satellite Laboratories</Link></li>
                                        <li><Link href="/about/qaqc">Quality Assurance/Quality Control</Link></li>
                                        <li><Link href="/about/contact">Contact</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link dropdown-toggle" id="servicesDropdownBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</button>

                            <ul className="dropdown-menu" aria-labelledby="#servicesDropdownBtn">
                                <li>
                                    <Link className="bold-text" href="/services">Services<FontAwesomeIcon icon={faAnglesRight} className="icon orange-text ms-1"/></Link>

                                    <ul className="list-unstyled">
                                        <li><Link href="/services/gas">Gas</Link></li>
                                        <li><Link href="/services/water">Water</Link></li>
                                        <li><Link href="/services/authentication">Authentication</Link></li>
                                        <li><Link href="/services/solids-liquids">Solids & Liquids</Link></li>
                                        <li><Link href="/services/interpretive">Interpretive Services</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link dropdown-toggle" id="productsDropdownBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</button>

                            <ul className="dropdown-menu" aria-labelledby="#productsDropdownBtn">
                                <li>
                                    <Link className="bold-text" href="/products">Products<FontAwesomeIcon icon={faAnglesRight} className="icon orange-text ms-1"/></Link>

                                    <ul className="list-unstyled col-list">
                                        <li><Link href="/products/isotube">IsoTube<sup>®</sup></Link></li>
                                        <li><Link href="/products/isosampler-pro">IsoSampler™ Pro</Link></li>
                                        <li><Link href="/products/isosampler-go">IsoSampler™ Go</Link></li>
                                        <li><Link href="/products/isojar">IsoJar<sup>®</sup></Link></li>
                                        <li><Link href="/products/isobag">IsoBag<sup>®</sup></Link></li>
                                        <li><Link href="/products/isoflask">IsoFlask<sup>®</sup></Link></li>
                                        <li><Link href="/products/cylinders">Cylinders</Link></li>
                                        <li><Link href="/products/isotrap">IsoTrap<sup>®</sup></Link></li>
                                        <li><Link href="/products/isotrap-sampler">IsoTrap<sup>®</sup> Sampler</Link></li>
                                        <li><Link href="/products/h2s-scrubbing-isoflask">H<sub>2</sub>S Scrubbing IsoFlask<sup>®</sup></Link></li>
                                        <li><Link href="/products/water-chemistry-kit">Water Chemistry Kit</Link></li>
                                        <li><Link href="/products/warranty">Warranty Information</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <button className="nav-link dropdown-toggle" id="resourcesDropdownBtn" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources</button>

                            <ul className="dropdown-menu" aria-labelledby="#resourcesDropdownBtn">
                                <li>
                                    <Link className="bold-text" href="/resources">Resources<FontAwesomeIcon icon={faAnglesRight} className="icon orange-text ms-1"/></Link>
                                    
                                    <ul className="list-unstyled">
                                        <li><Link href="/resources/new-client-information">New Client Information</Link></li>
                                        <li><Link href="/resources/sampling-procedures">Sampling Procedures</Link></li>
                                        <li><Link href="/resources/shipping-guidelines">Shipping Guidelines</Link></li>
                                        <li><Link href="/resources/faq">Frequently Asked Questions</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}