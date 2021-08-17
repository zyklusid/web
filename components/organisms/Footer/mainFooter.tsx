import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

export default function MainFooter() {
    return (
        <div style={{ backgroundColor: "#323236" }} className="text-white w-full">
            <div className="md:px-20 px-5 py-5 flex items-center justify-between">
                <div className="w-28">
                    <div className="image-container">
                        <Image src="/zyklus-logo.png" alt="logo_zyklus" layout="fill" className="image" />
                    </div>
                </div>
                <div>
                    <h1 className="text-base font-bold">Cari tau berita terbaru</h1>
                    <div className="flex justify-end space-x-4">
                        <a href="https://www.linkedin.com/company/zyklusid" className="text-white hover:text-green-200">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://twitter.com/ZyklusID" className="text-white hover:text-green-200">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com/zyklusid" className="text-white hover:text-green-200">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://www.linkedin.com/company/zyklusid" className="text-white hover:text-green-200">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#232326" }}>
                <div className="md:px-20 px-5 py-2 flex items-center">
                    <h1 className="text-sm">© 2021 Zyklus</h1>
                </div>
            </div>
        </div>
    )
}