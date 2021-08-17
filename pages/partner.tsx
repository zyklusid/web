import Image from 'next/image'
import Container from '../components/atoms/Container';
import MainLayout from "../components/templates/Main";

export default function Partner() {
    return (
        <MainLayout>
            <Container className="pt-36">

                <h1 className="md:text-4xl text-3xl font-bold">Mitra Kami</h1>
                <p className="text-lg">Seperti tagline kami #KolaborasiLestari, kami menjalin beberapa kerja sama dengan beberapa mitra untuk menjalankan visi dan misi kami.</p>

                <div className="py-10">
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 text-center flex items-center">
                        <div className="shadow bg-white p-4 rounded">
                            <div className="w-2/5 mx-auto mb-3">
                                <div className="image-container">
                                    <Image src="/icon/truck-small.png" layout="fill" className="image" alt="mitra_driver" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">Mitra Driver</h3>
                        </div>
                        <div className="shadow bg-white p-4 rounded">
                            <div className="w-2/5 mx-auto mb-3">
                                <div className="image-container">
                                    <Image src="/icon/warehouse-small.png" layout="fill" className="image" alt="mitra_warehouse" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">Mitra Warehouse</h3>
                        </div>
                        <div className="shadow bg-white p-4 rounded">
                            <div className="w-2/5 mx-auto mb-3">
                                <div className="image-container">
                                    <Image src="/icon/shop-small.png" layout="fill" className="image" alt="mitra_seller" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">Mitra Seller</h3>
                        </div>
                        <div className="shadow bg-white p-4 rounded">
                            <div className="w-2/5 mx-auto mb-3">
                                <div className="image-container">
                                    <Image src="/icon/eco-factory-small.png" layout="fill" className="image" alt="mitra_perusahaan" />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">Mitra Perusahaan</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </MainLayout>
    )
}