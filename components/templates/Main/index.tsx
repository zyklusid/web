import MainFooter from "../../organisms/Footer/mainFooter"
import Navbar from "../../organisms/Navbar"

type Props = {
    children: any
}

export default function MainLayout({ children }: Props) {
    return (
        <>
            <div>
                <Navbar />
                <div>
                    {children}
                </div>
                <MainFooter />
            </div>
        </>
    )
}