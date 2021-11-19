import { useRouter } from "next/router";
import Head from 'next/head';
import Image from 'next/image';
import OpenGraph from '../../components/atoms/OpenGraph'
import Container from "../../components/atoms/Container";

export default function SuccessResetPassword() {
    const router = useRouter()
    const { code } = router.query

    return (
        <Container className="bg-gray-100 h-screen">
            <Head>
                <title>Reset Password</title>
                <OpenGraph
                title="Reset Password"
                description="Startup pengelola sampah berbasis ramah lingkungan, pemberdayaan masyarakat, dan kearifan lokal"
                url="/"
                />
            </Head>
            <div className="flex justify-center pt-20">
                <div className="bg-white py-10 px-5 shadow rounded-lg md:w-96 w-full">
                    <div className="flex justify-center mb-10">
                        <div className="w-3/4">
                            <div className="image-container">
                                <Image src="/undraw_order_confirmed_re_g0if.svg" layout="fill" alt="kolaborasi_lestari" className="image" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 text-center">
                        <h1 className="text-xl">Password mu sudah berhasil diperbarui. Silakan login kembali melalui aplikasi Zyklus.</h1>
                    </div>
                </div>
            </div>
        </Container>
    )
}