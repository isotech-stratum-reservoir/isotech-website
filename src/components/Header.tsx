import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/Isotech-logo.png';
import MainNav from './MainNav';

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <Image
                            priority
                            src={logo}
                            alt="Isotech a Stratum Reservoir brand"
                            width="225"
                            height="56"
                        />
                    </Link>
                </div>

                <MainNav/>
            </div>
        </header>
    )
}