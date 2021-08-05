import Image from "next/image";
import InternalLink from "../../components/atoms/InternalLink";
import MainLayout from "../../components/templates/Main";

export default function Blog() {
    return (
        <MainLayout >
            <div className="pt-28 container lg:px-20 md:px-5 px-2">
                <h1 className="text-5xl font-bold">Ada apa di Zyklus?</h1>
                <p className="text-base">Berita seru, cerita mitra, dan promo terbaru. Baca Semua Artikel tentang Zyklus disini. </p>

                <div className="py-4">
                    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1">
                        <div className="bg-white shadow-lg rounded relative">
                            <div className="image-container">
                                <Image src="https://picsum.photos/500/300" layout="fill" className="image rounded" alt="gambar" />
                            </div>
                            <div className="p-4 mb-5">
                                <h1 className="text-lg font-bold">Sebuah Judul Artikel Yang Bisa Kalian Baca</h1>
                                <p className="text-base">
                                    Sama seperti negara-negara lain, Indonesia menghadapi ancaman besar dari meluapnya limbah infeksius – beginilah peraturan daerah dan masyarakat menangani limbah situasi pandemi COVID-19.
                                </p>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 px-4 mb-2">
                                <InternalLink href="/blog/blog-1" className="text-green-500 hover:text-green-600 font-bold">Baca Selengkapnya</InternalLink>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded relative">
                            <div className="image-container">
                                <Image src="https://picsum.photos/500/300" layout="fill" className="image rounded" alt="gambar" />
                            </div>
                            <div className="p-4">
                                <h1 className="text-lg font-bold">Sebuah Judul Artikel Yang Bisa Kalian Baca</h1>
                                {/* <p className="text-base">
                                        Sama seperti negara-negara lain, Indonesia menghadapi ancaman besar dari meluapnya limbah infeksius – beginilah peraturan daerah dan masyarakat menangani limbah situasi pandemi COVID-19.
                                    </p> */}
                            </div>
                            <div className="absolute inset-x-0 bottom-0 px-4 mb-2">
                                <a href="" className="text-green-500 hover:text-green-600 font-bold">Baca Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>\


            </div>
        </MainLayout>
    )
}