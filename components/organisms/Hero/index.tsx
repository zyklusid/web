import Image from "next/image";
import Container from "../../atoms/Container";

export default function Hero() {
    return (
        <div className="hero-section">
            {/* <div className="landing-text">
                <h1 className="display-4 ">Zyklus Indonesia</h1>
            </div> */}
            <div className="hero-overlay relative h-full flex items-center">
                <Container className="pt-10">
                    <h1 className="text-white lg:text-6xl text-5xl font-bold">Zyklus Indonesia</h1>
                    <div className="lg:grid lg:grid-cols-2">
                        <div>
                            <p className="lg:text-3xl text-2xl text-white font-medium">
                                Startup pengelola sampah berbasis ramah lingkungan, pemberdayaan masyarakat, dan kearifan lokal
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <Image
                className="landing-image h-100"
                src="/waste.jpg"
                alt="hero"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
        </div>
    )
}