import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/atoms/Container';
import MainLayout from "../components/templates/Main";

export default function About() {
    return (
        <MainLayout>
            <Head>
                <title>Tentang Kami</title>
            </Head>
            <div className="h-screen pt-20 flex items-center" style={{ backgroundColor: "#B7E0C3" }}>
                <div className="container lg:px-20 px-5 mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 flex items-center">
                    <div className="w-4/5 mx-auto">
                        <div className="image-container">
                            <Image src="/gambar_tong.png" layout="fill" className="image" alt="gambar_tong" />
                        </div>
                    </div>
                    <div className="text-green-800 md:mt-0 mt-4 md:text-left text-center">
                        <h1 className="lg:text-4xl text-3xl font-extrabold">#PilahPilihSampah</h1>
                        <p className="text-xl font-semibold">Untuk Mewujudkan Lingkungan Indonesia Yang Lebih Lestari</p>
                        <button className="bg-green-700 hover:bg-green-800 px-2 py-1 rounded text-white mt-3 text-lg">Lihat Selengkapnya</button>
                    </div>
                </div>
            </div>
            <Container>

                <div className="py-20 grid md:grid-cols-2 grid-cols-1 gap-4 flex items-center">
                    <div className="lg:w-3/4 mx-auto sm:hidden block">
                        <div className="image-container px-md-5 w-md-75">
                            <Image src="/Volunteering-bro-800-small.png" layout="fill" alt="kolaborasi_lestari" className="image" />
                        </div>
                    </div>
                    <div>
                        <h1 className="lg:text-4xl text-3xl font-extrabold">#KolaborasiLestari</h1>
                        <div className="space-y-4 text-lg">
                            <p>
                                Berkolaborasi dengan berbagai pihak untuk mengelola sampah secara ramah lingkungan, memberdayakan masyarakat, dan mewujudkan kehidupan yang lestari.
                            </p>
                            <p>
                                Membangun Kelestarian Lingkungan Dengan Menghubungkan Seluruh Masyarakat Dalam Satu Platform
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-3/4 mx-auto sm:block hidden">
                        <div className="image-container px-md-5 w-md-75">
                            <Image src="/Volunteering-bro-800-small.png" layout="fill" alt="kolaborasi_lestari" className="image" />
                        </div>
                    </div>
                </div>

                <div className="py-20 md:px-10 px-2">
                    <div className="px-5 py-20 rounded" style={{ backgroundColor: "#E0F9D0" }}>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 flex items-center">
                            <div className="mx-auto w-8/12">
                                <div className="image-container">
                                    <Image src="/logo-700.png" layout="fill" className="image" alt="logo-zyklus-700" />
                                </div>
                            </div>
                            <div className="text-xl text-green-700">
                                Zyklus Indonesia adalah startup pengelola sampah yang berkolaborasi dengan berbagai pihak untuk membangun kelestarian lingkungan. Zyklus Indonesia dalam menjalankan usahanya bernaung di bawah PT Zyklus Indonesia Lestari.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-20 gap-4">
                    <h1 className="lg:text-4xl text-3xl font-bold">Layanan Kami</h1>
                    <p className="text-lg">Layanan berbasi kolaborasi untuk mendaur ulang sampah demi terciptanya lingkungan yang letstari. Lihat semua layanan kami.</p>
                    <div className="py-5 grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-4">
                        <div className="py-5 px-6 shadow bg-white rounded">
                            <div className="flex space-x-4 items-center">
                                <div className="w-10">
                                    <div className="image-container">
                                        <Image src="/icon/box-small.png" layout="fill" className="image" alt="zi_pick" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold">Zi Pick</h2>
                            </div>
                            <div className="text-lg py-5">
                                Pilah-pilih sampahmu kemudian upload ke aplikasi zyklus. Kemudian pesan layanan Pick Up untuk menjual sampah
                            </div>
                        </div>
                        <div className="py-5 px-6 shadow bg-white rounded">
                            <div className="flex space-x-4 items-center">
                                <div className="w-10">
                                    <div className="image-container">
                                        <Image src="/icon/bag-small.png" layout="fill" className="image" alt="zi_drop" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold">Zi Drop</h2>
                            </div>
                            <div className="text-lg py-5">
                                Kamu bisa mengantarkan sampahmu langsung ke warehouse zyklus untuk ditimbang dan mendapatkan hasil penjualan.
                            </div>
                        </div>
                        <div className="py-5 px-6 shadow bg-white rounded">
                            <div className="flex space-x-4 items-center">
                                <div className="w-10">
                                    <div className="image-container">
                                        <Image src="/icon/recycle-small.png" layout="fill" className="image" alt="zi_market" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold">Zi Market</h2>
                            </div>
                            <div className="text-lg py-5">
                                Beli atau jual produk daur ulang kamu di Zi Market. Bergabunglah menjadi mitra Zyklus untuk menjual produkmu.
                            </div>
                        </div>
                        <div className="py-5 px-6 shadow bg-white rounded">
                            <div className="flex space-x-4 items-center">
                                <div className="w-10">
                                    <div className="image-container">
                                        <Image src="/icon/blog-small.png" layout="fill" className="image" alt="zi_blog" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold">Zi Blog</h2>
                            </div>
                            <div className="text-lg py-5">
                                Dapatkan berita, tips & trick, diskon di Zi Blog melalui berbagai channel kami.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </MainLayout>
    )
}