import { faBars, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import InternalLink from '../../atoms/InternalLink';
// import ZyklusLogo from '../../../public/zyklus-logo.png';
import NavLink from '../../molecules/Nav/Link';

type Props = {
    transparent?: boolean
}

const navigation = [
    {
        href: '/',
        text: 'Beranda'
    },
    {
        href: '/partner',
        text: 'Mitra'
    },
    {
        href: '/about',
        text: 'Tentang'
    },
    {
        href: '/blog',
        text: 'Blog'
    },
    {
        href: '/help',
        text: 'Bantuan'
    }
]

function checkPath(pathname: string, href: string): boolean {
    const new_pathname = pathname.slice(1)
    const new_href = href.slice(1)

    return new_pathname === new_href
}

export default function Navbar({ transparent }: Props) {
    const [scroll, setScroll] = useState(0)
    const [navClass, setNavClass] = useState('bg-white shadow')
    const [navLinkClass, setNavLinkClass] = useState('text-gray-700')
    const [zyklusLogo, setZyklusLogo] = useState('logo-175.png')
    const router = useRouter()

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
                setZyklusLogo('logo-175-putih.png')
            } else {
                setNavClass('bg-white shadow')
                setNavLinkClass('text-gray-700')
                setZyklusLogo('logo-175.png')
            }
        }
    }, [transparent, scroll])

    return (
        <Disclosure as="nav" className={`${navClass} z-50 fixed w-full`}>
            {({ open }) => (
                <>
                    <div className="h-20 flex items-center justify-between md:px-20 px-5">

                        <div className="w-24">
                            <InternalLink className="image-container" href="/">
                                <Image src={`/${zyklusLogo}`} layout="fill" className="image" alt="zyklus-logo" />
                            </InternalLink>
                        </div>
                        <div className="hidden sm:block" id="navbarNavAltMarkup">
                            <div className="flex space-x-4">
                                {navigation.map((navItem, idx) => (
                                    <NavLink className={navLinkClass} href={navItem.href} key={idx} active={checkPath(router.pathname, navItem.href)}>
                                        {navItem.text}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="sm:hidden">
                            <Disclosure.Button className={`${navLinkClass} text-xl`}>
                                {open ? (
                                    <FontAwesomeIcon icon={faTimes} />
                                ) : (
                                    <FontAwesomeIcon icon={faBars} />
                                )}
                            </Disclosure.Button>
                        </div>
                    </div>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="sm:hidden bg-white rounded">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className={checkPath(router.pathname, item.href) ?
                                            'text-white bg-green-500 active:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium rounded'
                                            : 'text-gray-700 active:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'}
                                    >
                                        {item.text}
                                    </a>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}

        </Disclosure>
    )
}