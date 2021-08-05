import Image from 'next/image';
import { useEffect, useState } from 'react';
// import ZyklusLogo from '../../../public/zyklus-logo.png';
import NavLink from '../../molecules/Nav/Link';

type Props = {
    transparent?: boolean
}

export default function Navbar({ transparent }: Props) {
    const [scroll, setScroll] = useState(0)
    const [navClass, setNavClass] = useState('bg-white shadow')
    const [navLinkClass, setNavLinkClass] = useState('text-gray-700')
    const [zyklusLogo, setZyklusLogo] = useState('banner-warna.png')

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY
            setScroll(scrollCheck)
        })
    })

    useEffect(() => {
        if (transparent) {
            if (scroll < 100) {
                setNavClass('')
                setNavLinkClass('text-white nav-glass')
                setZyklusLogo('banner-putih.png')
            } else {
                setNavClass('bg-white shadow')
                setNavLinkClass('text-gray-700')
                setZyklusLogo('banner-warna.png')
            }
        }
    }, [transparent, scroll])

    return (
        <nav className={`${navClass} z-50 fixed h-20 w-full flex items-center justify-between md:px-20 px-2`}>
            <div className="w-24">
                <a className="image-container" href="#">
                    <Image src={`/${zyklusLogo}`} layout="fill" className="image" alt="zyklus-logo" />
                </a>
            </div>
            <div className="hidden sm:block" id="navbarNavAltMarkup">
                <div className="flex space-x-4">
                    <NavLink className={navLinkClass} href="/" active={true}>
                        Beranda
                    </NavLink>
                    <NavLink className={navLinkClass} href="/mitra">
                        Mitra
                    </NavLink>
                    <NavLink className={navLinkClass} href="/tentang">
                        Tentang
                    </NavLink>
                    <NavLink className={navLinkClass} href="/blog">
                        Blog
                    </NavLink>
                    <NavLink className={navLinkClass} href="/bantuan">
                        Bantuan
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}