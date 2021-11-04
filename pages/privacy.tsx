import MainLayout from "../components/templates/Main";
import Head from 'next/head';
import OpenGraph from "../components/atoms/OpenGraph";
import Container from "../components/atoms/Container";

export default function Privacy() {
    return (
        <MainLayout>
            <Head>
                <title>Mitra Kami</title>
                <OpenGraph
                    title='Kebijakan Privasi'
                    description='Setiap data pengguna aplikasi Zyklus yang masuk ke PT Zylus Lestari Indonesia sangat Kami hormati perlindungan privasinya. Maka dari itu disusun Kebijakan Privasi ini untuk memberi penjelasan kepada Anda tentang cara Kami memperoleh, mengumpulkan, mengolah, menganalisis, mengirimkan, menyebarluaskan, memusnahkan, dan menghapus Data Pribadi yang Anda berikan.'
                    url={`https://www.zyklus.id/privacy/`}
                />
            </Head>
            <Container className="pt-36">
                <h1 className="md:text-4xl text-3xl font-bold">Kebijakan Privasi</h1>
            </Container>
        </MainLayout>
    )
}