import { useRouter } from "next/router";
import Head from 'next/head';
import Image from 'next/image';
import OpenGraph from '../../components/atoms/OpenGraph'
import Container from "../../components/atoms/Container";

export default function ResetPassword() {
    const router = useRouter()
    const { code } = router.query

    return (
        <Container className="bg-gray-100 h-screen">
            <Head>
                <title>Reset Password</title>
                <OpenGraph
                title="Zyklus Indonesia | Aplikasi Pengelola Sampah digital"
                description="Startup pengelola sampah berbasis ramah lingkungan, pemberdayaan masyarakat, dan kearifan lokal"
                url="/"
                />
            </Head>
            <div className="flex justify-center pt-20">
                <div className="bg-white py-6 px-5 shadow rounded-lg md:w-96 w-full">
                    <div className="flex justify-center">
                        <div className="w-3/4">
                            <div className="image-container">
                                <Image src="/undraw_authentication_fsn5.svg" layout="fill" alt="kolaborasi_lestari" className="image" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4 text-center">
                        <h1 className="text-xl">Silakan buat dan masukkan password baru anda.</h1>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="new_password" className="block text-base font-medium text-gray-700">
                            Password Baru
                        </label>
                        <input
                            type="password"
                            name="new_password"
                            id="new_password"
                            autoComplete="given-name"
                            className="mt-1 py-1 px-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent w-full rounded-md"
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="new_password_confirmation" className="block text-base font-medium text-gray-700">
                            Konfirmasi Password Baru
                        </label>
                        <input
                            type="password"
                            name="new_password_confirmation"
                            id="new_password_confirmation"
                            autoComplete="given-name"
                            className="mt-1 py-1 px-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent w-full rounded-md"
                        />
                    </div>
                    <div className="mt-5">
                        <button className="bg-green-500 hover:bg-green-700 rounded px-3 py-1 text-white w-full">
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}