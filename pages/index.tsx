import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Head from 'next/head'
import InternalLink from '../components/atoms/InternalLink'

import Hero from '../components/organisms/Hero'
import MainLayout from '../components/templates/Main'
import Container from '../components/atoms/Container'
import OpenGraph from '../components/atoms/OpenGraph'

export default function Home() {
  return (
    <MainLayout navGlass={true}>
      <Head>
        <title>Zyklus Indonesia | Aplikasi Pengelola Sampah digital</title>
        <OpenGraph
          title="Zyklus Indonesia | Aplikasi Pengelola Sampah digital"
          description="Startup pengelola sampah berbasis ramah lingkungan, pemberdayaan masyarakat, dan kearifan lokal"
          url="/"
        />
      </Head>
      <Hero />
      <Container>
        {/* About Section */}
        <div className="py-16" id="about">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 flex items-center">
            <div className="lg:w-3/4 mx-auto">
              <div className="image-container px-md-5 w-md-75">
                <Image src="/Volunteering-bro-800-small.png" layout="fill" alt="kolaborasi_lestari" className="image" />
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-bold lg:text-4xl text-3xl mb-4">Tentang Kami</h2>
              <p className="text-xl">
                Startup pengelola sampah yang berkolaborasi dengan berbagai pihak untuk mewujudkan kehidupan yang lestari dengan menghubungkan seluruh masyarakat dalam satu platform
              </p>
              <div className="py-4">
                <InternalLink href="/about" className="text-xl text-green-600 font-bold">
                  <span className="mr-4">Selengkapnya Tentang Kami</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </InternalLink>
              </div>
            </div>
          </div>
        </div>
        {/* End of About Section */}
      </Container>

      <div className="py-20 bg-green-100">
        <Container>
          <div className="mb-8">
            <h2 className="font-bold lg:text-4xl text-3xl mb-4 text-center">Profil Kami</h2>
          </div>
          <div className="flex justify-center lg:px-48">
            <iframe className="w-full md:h-96 h-56" width={560} height={315} src="https://www.youtube.com/embed/JSIii542X3Y" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
          </div>
        </Container>
      </div>

      <Container>
        {/* Service Section */}
        <div className="md:py-20 py-10" id="layanan">
          <div className="mb-4">
            <h2 className="font-bold lg:text-4xl text-3xl mb-3">Layanan</h2>
            <p className="text-xl">Layanan berbasis kolaborasi untuk mendaur ulang sampah demi terciptanya lingkungan yang letstari. Lihat semua layanan kami.</p>
          </div>
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
                <h2 className="text-2xl font-bold">Zi Mart</h2>
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
                <h2 className="text-2xl font-bold">Zinfo</h2>
              </div>
              <div className="text-lg py-5">
                Dapatkan berita, tips & trick, diskon di Zi Blog melalui berbagai channel kami.
              </div>
            </div>
          </div>
        </div>
        {/* End of Service Section */}

        {/* Waste Categories Section */}
        <div className="md:py-20 py-10" id="kategori_sampah">
          <h2 className="font-bold lg:text-4xl text-3xl mb-3">Jenis Sampah</h2>
          <p className="text-xl">Lihat dan pelajari beberapa jenis sampah yang kami daur ulang.</p>
          {/* Grid */}
          <div className="py-2 grid md:grid-cols-4 grid-cols-2 gap-4 py-4" id="jenis_sampah_grid">
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center justify-center" id="sampah_kertas">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/kertas-small.png" layout="fill" className="image" alt="sampah_kertas" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Kertas</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center justify-center" id="sampah_plastik">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/plastik-small.png" layout="fill" className="image" alt="sampah_plastik" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Plastik</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center justify-center" id="sampah_kain">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/kain-small.png" layout="fill" className="image" alt="sampah_kain" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Kain</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center justify-center" id="sampah_besi">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/besi-small.png" layout="fill" className="image" alt="sampah_besi" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Besi & Logam</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center justify-center" id="sampah_beling">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/beling-small.png" layout="fill" className="image" alt="sampah_beling" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Kaca</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center justify-center" id="sampah_alumunium">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/alumunium-small.png" layout="fill" className="image" alt="sampah_alumunium" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Alumunium</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center justify-center" id="sampah_elektronik">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/elektronik-small.png" layout="fill" className="image" alt="sampah_elektronik" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Elektronik</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center justify-center" id="sampah_lain">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/sampah_lain-small.png" layout="fill" className="image" alt="sampah_lain" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Sampah Khusus & Barang Donasi</h5>
              </div>
            </div>
          </div>
          {/* End of Grid */}
        </div>
      </Container>
    </MainLayout>
  )
}