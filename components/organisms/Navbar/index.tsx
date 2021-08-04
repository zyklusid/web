import Image from 'next/image';
// import ZyklusLogo from '../../../public/zyklus-logo.png';
import NavLink from '../../molecules/Nav/Link';

export default function Navbar() {
    return (
        <nav className="z-50 fixed h-20 bg-white shadow w-full flex items-center justify-between md:px-20 px-2">
            <div className="w-24">
                <a className="image-container" href="#">
                    <Image src="/zyklus-logo.png" layout="fill" className="image" alt="zyklus-logo" />
                </a>
            </div>
            <div className="hidden sm:block" id="navbarNavAltMarkup">
                <div className="flex space-x-4">
                    <NavLink href="/" active={true}>
                        Beranda
                    </NavLink>
                    <NavLink href="/mitra">
                        Mitra
                    </NavLink>
                    <NavLink href="/tentang">
                        Tentang
                    </NavLink>
                    <NavLink href="/blog">
                        Blog
                    </NavLink>
                    <NavLink href="/bantuan">
                        Bantuan
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}