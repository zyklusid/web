import MainFooter from "../../organisms/Footer/mainFooter"
import Navbar from "../../organisms/Navbar"

type Props = {
    children: any
    navGlass?: boolean
}

export default function MainLayout({ children, navGlass }: Props) {
    return (
        <>
            <div>
                <Navbar transparent={navGlass} />
                <div className="min-h-screen">
                    {children}
                </div>
                <MainFooter />
            </div>
        </>
    )
}