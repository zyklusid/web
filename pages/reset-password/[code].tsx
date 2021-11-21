import { useRouter } from "next/router";
import Head from 'next/head';
import Image from 'next/image';
import OpenGraph from '../../components/atoms/OpenGraph'
import Container from "../../components/atoms/Container";
import { FormEvent, ReactEventHandler, useState } from "react";
import axios from "axios";
import { backendUrl } from '../../helper/global';

export default function ResetPassword() {
    const router = useRouter()
    const { code } = router.query
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submitPassword = async (e: FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            const res = await axios.post(backendUrl + '/auth/new-password', {
                code: code,
                new_password: password,
                new_password_confirmation: passwordConfirmation
            })

            if (res.status == 200) {
                router.push('/reset-password/success')
            }
        }catch (e: any) {
            setMessage(e.response.data.message)
            setStatus(e.response.status)
        } finally {
            setIsSubmitting(false)
        }
    }

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
                        <form action="POST" onSubmit={submitPassword}>

                        <div className="mb-5">
                            <label htmlFor="new_password" className="block text-base font-medium text-gray-700">
                                Password Baru
                            </label>
                            <input
                                type="password"
                                name="new_password"
                                id="new_password"
                                autoComplete="given-name"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                className="mt-1 py-1 px-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent w-full rounded-md"
                            />
                        </div>
                        { status !== 200 && status !== 0 ? (
                            <div className="mb-5 bg-red-200 border border-red-500 p-3 rounded-md text-red-700">
                                { message }
                            </div>
                        ) : ''}
                        <div className="mt-5">
                            <button 
                                className="bg-green-500 hover:bg-green-700 rounded px-3 py-1 text-white w-full disabled:opacity-50"
                                disabled={isSubmitting}
                            >
                                { isSubmitting ? 'Memproses...' : 'Simpan' }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}