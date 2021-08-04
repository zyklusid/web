import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import InternalLink from '../components/atoms/InternalLink'

import Hero from '../components/organisms/Hero'
import MainLayout from '../components/templates/Main'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <div className="container lg:px-20 md:px-5 mx-auto px-2">
        {/* About Section */}
        <div className="py-16 mb-5" id="about">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 flex items-center">
            <div className="lg:w-3/4 mx-auto">
              <div className="image-container px-md-5 w-md-75">
                <Image src="/Volunteering-bro-800-small.png" layout="fill" alt="kolaborasi_lestari" className="image" />
              </div>
            </div>
            <div className="w-full">
              <h2 className="font-bold lg:text-4xl text-3xl mb-4">#KolaborasiLestari</h2>
              <p className="text-xl">Berkolaborasi dengan berbagai pihak untuk mengelola sampah secara ramah lingkungan, memberdayakan masyarakat, dan mewujudkan kehidupan yang lestari Mewujudkan Kelestarian Lingkungan Dengan Menghubungkan Seluruh Masyarakat Dalam Satu Platform</p>
              <div className="py-4">
                <InternalLink href="/" className="text-xl text-green-600 font-bold">
                  <span className="mr-4">Selengkapnya Tentang Kami</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </InternalLink>
              </div>
            </div>
          </div>
        </div>
        {/* End of About Section */}

        {/* Service Section */}
        <div className="py-10" id="layanan">
          <h2 className="font-bold lg:text-4xl text-3xl mb-3">Layanan</h2>
          <p className="text-xl">Layanan berbasi kolaborasi untuk mendaur ulang sampah demi terciptanya lingkungan yang letstari. Lihat semua layanan kami.</p>
          <div className="py-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4" id="layanan_grid">
            <div className="bg-white shadow-lg px-4 text-center rounded py-6" id="zi_waste">
              <div className="w-2/6 mx-auto mb-4">
                <div className="image-container">
                  <Image src="/icon/box-small.png" layout="fill" className="image" alt="zi_waste" />
                </div>
              </div>
              <h5 className="text-xl font-bold mb-2">Zi Waste</h5>
              <p className="text-xl">
                Pilah-pilih sampahmu kemudian upload ke aplikasi zyklus. Kemudian pesan layanan Pick Up untuk menjual sampah
              </p>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6" id="zi_poin">
              <div className="w-2/6 mx-auto mb-4">
                <div className="image-container">
                  <Image src="/icon/poin-small.png" layout="fill" className="image" alt="zi_poin" />
                </div>
              </div>
              <h5 className="text-xl font-bold mb-2">Zi Poin</h5>
              <p className="text-xl">Dapatkan poin setiap kali kamu menjual sampah. Tukarkan poin dengan uang dan transfer ke rekening tabungan kamu.</p>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6" id="zi_market">
              <div className="w-2/6 mx-auto mb-4">
                <div className="image-container">
                  <Image src="/icon/recycle-small.png" layout="fill" className="image" alt="zi_market" />
                </div>
              </div>
              <h5 className="text-xl font-bold mb-2">Zi Market</h5>
              <p className="text-xl">Beli atau jual produk daur ulang kamu di Zi Market. Bergabunglah menjadi mitra Zyklus untuk menjual produkmu.</p>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6" id="zi_blog">
              <div className="w-2/6 mx-auto mb-4">
                <div className="image-container">
                  <Image src="/icon/blog-small.png" layout="fill" className="image" alt="zi_blog" />
                </div>
              </div>
              <h5 className="text-xl font-bold mb-2">Zi Blog</h5>
              <p className="text-xl">Dapatkan berita, tips & trick, diskon di Zi Blog melalui berbagai chanel kami.</p>
            </div>
          </div>
        </div>
        {/* End of Service Section */}

        {/* Waste Categories Section */}
        <div className="py-10" id="kategori_sampah">
          <h2 className="font-bold lg:text-4xl text-3xl mb-3">Jenis Sampah</h2>
          <p className="text-xl">Lihat dan pelajari beberapa jenis sampah yang kami daur ulang.</p>
          {/* Grid */}
          <div className="py-2 grid md:grid-cols-4 grid-cols-2 gap-4 py-4" id="jenis_sampah_grid">
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center" id="sampah_kertas">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/kertas-small.png" layout="fill" className="image" alt="sampah_kertas" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Kertas</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center" id="sampah_plastik">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/plastik-small.png" layout="fill" className="image" alt="sampah_plastik" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Plastik</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center" id="sampah_kain">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/kain-small.png" layout="fill" className="image" alt="sampah_kain" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Kain</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center" id="sampah_besi">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/besi-small.png" layout="fill" className="image" alt="sampah_besi" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Besi & Logam</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center" id="sampah_beling">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/beling-small.png" layout="fill" className="image" alt="sampah_beling" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Kaca</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center" id="sampah_alumunium">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/alumunium-small.png" layout="fill" className="image" alt="sampah_alumunium" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Alumunium</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center" id="sampah_elektronik">
              <div>
                <div className="w-2/6 mx-auto mb-4">
                  <div className="image-container">
                    <Image src="/icon/elektronik-small.png" layout="fill" className="image" alt="sampah_elektronik" />
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-0">Elektronik</h5>
              </div>
            </div>
            <div className="bg-white shadow-lg px-4 text-center rounded py-6 flex items-center" id="sampah_lain">
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


      </div>
    </MainLayout>
  )
}