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
            <Container className="pt-32 pb-16">
                <h1 className="md:text-4xl text-3xl font-bold mb-4">Kebijakan Privasi</h1>
                <p className="text-lg mb-4">Setiap data pengguna aplikasi Zyklus yang masuk ke PT Zylus Lestari Indonesia sangat Kami hormati perlindungan privasinya. Maka dari itu disusun Kebijakan Privasi ini untuk memberi penjelasan kepada Anda tentang cara Kami memperoleh, mengumpulkan, mengolah, menganalisis, mengirimkan, menyebarluaskan, memusnahkan, dan menghapus Data Pribadi yang Anda berikan kepada Kami ketika mendaftar sebagai bagian dari pengguna produk Zyklus, baik ketika pembukaan situs website, pengunduhan aplikasi, melakukan registrasi, menggunakan atau melakukan aktivitas dalam aplikasi.</p>
                <p className="text-lg mb-4">Sebagai yang memasukkan data, Anda menyatakan dan menjamin bahwa data yang Anda masukkan adalah benar dan sah. Anda juga sekaligus menyetujui Kami untuk mengumpulkan, mengolah, menganalisis, mengirimkan, menyebarluaskan, memusnahkan, dan menghapus Data Pribadi Anda sesuai ketentuan dalam Kebijakan Privasi ini dan peraturan perundang-undangan terkait.</p>
                <p className="text-lg mb-4">Mohon untuk membaca terlebih dahulu Kebijakan Privasi ini dengan seksama, supaya Anda memahami proses pengolahan data Kami.</p>
                <p className="text-lg mb-4">Dengan Anda menggunakan Aplikasi Zyklus, artinya Anda sudah membaca, memahami dan menyetujui keseluruhan ketentuan yang ada dalam Kebijakan Privasi ini yang sekaligus menjadi bagian dari Syarat dan Ketentuan Zyklus. </p>
                <p className="text-lg mb-4">Berikut adalah rincian dalam Kebijakan Privasi</p>
                
                <h1 className="text-lg font-bold mb-4">A. Data Pribadi</h1>
                <p className="text-lg mb-4">Data Pribadi merupakan segala data, informasi, dan/atau keterangan dalam bentuk apapun yang dapat mengidentifikasi diri Anda, yang setiap waktu Anda sampaikan kepada Kami atau yang Anda masukkan atau sampaikan melalui Aplikasi berkaitan informasi mengenai pribadi Anda, yang mencakup, antara lain: nama lengkap, tanggal lahir, jenis kelamin, alamat surat elektronik (e-mail), nomor telepon genggam/handphone (termasuk namun tidak terbatas pada:IP address, data perangkat Anda, informasi lokasi, nomor IMEI, nama aplikasi yang telah dilekatkan pada perangkat Anda), data yang menyangkut informasi mengenai kegiatan transaksi Anda pada Aplikasi Zyklus, dan data lainnya yang tergolong sebagai Data Pribadi.</p>

                <h1 className="text-lg font-bold mb-4">B. Keakuratan Data Pribadi</h1>
                <p className="text-lg mb-4">Setiap data yang Anda berikan kepada Kami harus dipastikan keakuratan dan kebenarannya. Tidak diperkenankan mengisikan data palsu atau data yang salah. Apabila terjadi perubahan dengan Data Pribadi, maka Anda diwajibkan melakukan pembaharuan Data Pribadi pada akun Anda, agar Kami tetap dapat memberikan layanan secara tepat dan sesuai. Sehubungan dengan keakuratan Data Pribadi Anda, apabila data yang Anda berikan tidak akurat, maka Anda membesakan Kami dari setiap tuntutan, gugatan, ganti rugi, dan/atau klaim sehubungan dengan kegagalan pemrosesan transaksi pada Aplikasi Zyklus yang disebabkan oleh ketidakakuratan Data Pribadi yang Anda berikan kepada Kami.</p>
                <p className="text-lg mb-4">Bagi Anda yang belum berusia 17 tahun atau melebihi 65 tahun, maka Anda memerlukan persetujuan dari penanggung jawab dari keluarga, orang tua, wali atau pengampu Anda yang sah untuk memberikan Data Pribadi kepada Kami. Jika Data Pribadi Anda tersebut diberikan kepada Kami, Anda dengan ini menyatakan dan menjamin bahwa penanggung jawab dari keluarga, orang tua, wali atau pengampu yang sah Anda telah setuju dengan pemrosesan Data Pribadi Anda tersebut dan secara pribadi menerima dan setuju untuk terikat dengan Kebijakan Privasi ini serta bertanggung jawab atas tindakan Anda.</p>
                <p className="text-lg mb-4">Pada kondisi tertentu, dimungkinkan Anda memberikan Data Pribadi yang berkaitan dengan orang lain (seperti pasangan, anggota keluarga, dan/atau teman Anda). Untuk kondisi tersebut Anda menyatakan dan menjamin bahwa Anda telah memiliki wewenang dan persetujuan dari pemilik Data Pribadi tersebut untuk memberikan Data Pribadi mereka kepada Kami untuk digunakan sesuai dengan tujuan-tujuan yang diuraikan dalam Kebijakan Privasi ini.</p>

                <h1 className="text-lg font-bold mb-4">C. Pengumpulan Data Pribadi</h1>
                <ul className="list-inside list-disc">
                    <li className="text-lg mb-4">Dalam mengumpulkan Data Pribadi, sifatnya adalah sukarela. Tapi apabila Anda tidak memberikan Data Pribadi Anda seperti yang Kami minta dalam form pendaftaran, Kami tidak akan dapat memproses Data Pribadi Anda untuk tujuan yang diuraikan di bawah ini, dan menyebabkan Kami tidak dapat memberikan layanan-layanan kepada Anda.</li>
                    <li className="text-lg mb-4">Pengumpulan Data Pribadi Anda Kami lakukan ketika Anda membuat atau memperbarui data Akun atau pada saat lainnya sebagaimana yang Kami minta kepada Anda apabila dibutuhkan dari waktu ke waktu.</li>
                    <li className="text-lg mb-4">Pengumpulan Data Pribadi Anda juga akan Kami lakukan setiap kali Anda mengakses Aplikasi Zyklus atau melakukan transaksi dalam Aplikasi Zyklus.</li>
                </ul>

                <h1 className="text-lg font-bold mb-4">D. Penggunaan Data Pribadi</h1>
                <p className="text-lg mb-4">Data Pribadi Anda akan Kami kumpulkan, kelola, analisa dan/atau gunakan untuk tujuan di bawah ini ataupun tujuan lainnya yang masih mendapat izin atau dibolehkan menurut peraturan perundang-undangan yang berlaku:</p>
                <ul className="list-inside list-disc text-lg mb-4">
                    <li>mengidentifikasi dan mendaftarkan Anda sebagai pengguna Aplikasi Zyklus untuk selanjutnya melakukan verifikasi, mengelola dan menonaktifkan akun Anda, serta melakukan proses Mengenal Pelanggan (Know Your Customer);</li>
                    <li>memungkinkan Kami untuk memberikan informasi kepada Anda terkait berita, layanan dan agenda terbaru dari Kami,  menyediakan layanan yang Anda minta serta memproses transaksi yang Anda minta;</li>
                    <li>untuk memenuhi kebutuhan administratif internal, seperti; audit, analisis data, rekaman-rekaman dalam database;</li>
                    <li>memproses dan mengelola jumlah sampah Anda dan Zi Pay Anda;</li>
                    <li>pengiriman informasi yang Kami anggap berguna untuk Anda termasuk informasi tentang layanan dari Kami setelah Anda memberikan persetujuan kepada Kami bahwa Anda tidak keberatan dihubungi mengenai layanan Kami;</li>
                    <li>mencegah, mendeteksi, menyelidiki dan mengatasi terjadinya tindakan yang merupakan kecurangan, kejahatan, dilarang, ilegal atau tidak sah, yang mungkin terjadi dalam penggunaan Aplikasi Zyklus sehingga merugikan berbagai pihak, baik pengguna Aplikasi, Kami maupun pihak ketiga (mitra);</li>
                    <li>menjadi acuan Kami untuk mengembangkan, menambah dan menyediakan layanan atau produk dalam rangka memenuhi kebutuhan Anda;</li>
                    <li>menjadi bahan riset terkait data demografis pengguna Aplikasi Zyklus;</li>
                    <li>untuk tujuan komunikasi dengan Anda berhubungan dengan segala hal terkait Aplikasi Zyklus, layanan-layanan Kami, dan/atau fitur-fitur di dalamnya; dan menjaga keselamatan, keamanan, dan keberlangsungan Aplikasi Zyklus, layanan-layanan Kami, dan/atau fitur-fitur di dalamnya.</li>
                </ul>

                <h1 className="text-lg font-bold mb-4">E. Penyimpanan Dan Keamanan Data</h1>
                <ul className="list-inside list-disc text-lg mb-4">
                    <li>Data Pribadi yang Anda kumpulkan dan/atau terkumpul oleh Kami pastikan akan disimpan dengan baik, aman dan terjaga kerahasiaannya sesuai dengan peraturan perundang-undangan yang berlaku di Indonesia. Kami akan menyimpan data Anda selama diperlukan untuk memenuhi tujuan yang dijelaskan dalam Kebijakan Privasi ini;</li>
                    <li>Data Pribadi Anda akan dihapus atau behenti disimpan dan/atau dimusnahkan dengan segera oleh Kami apabila dianggap bahwa tujuan pengumpulan Data Pribadi tidak lagi dibutuhkan dan hal tersebut diperbolehkan menurut peraturan perundang-undangan yang berlaku di Indonesia;</li>
                    <li>Data Pribadi Anda dimungkinkan untuk disimpan, ditransfer atau diolah oleh penyedia layanan pihak ketiga. Kami akan berupaya secara wajar untuk memastikan pihak ketiga tersebut melakukan perlindungan Data Pribadi yang sebanding dengan komitmen Kami sesuai Kebijakan Privasi ini.</li>
                </ul>

                <h1 className="text-lg font-bold mb-4">F. Akses Tidak Sah</h1>
                <p className="text-lg mb-4">Terkait Data Pribadi Anda Kami akan bertanggung jawab terhadap Data Pribadi yang Kami kumpulkan dari Anda, tapi perlu diperhatikan bahwa Anda juga bertanggung jawab untuk menjaga kerahasiaan Data Pribadi Anda dengan tidak akan membiarkan pihak lain mengakses Data Pribadi Anda tanpa sepengetahuan dan persetujuan Anda. Berkaitan dengan hal tersebut, apabila ada Data Pribadi Anda yang tersebar ke pihak lain atas kelalalian Anda, maka Kami tidak bertanggung jawab atas penyalahgunaan Akun dan password yang Anda buat dan gunakan untuk mengakses Data Pribadi Anda dimanapun Anda menyimpan Data Pribadi Anda, termasuk Akun serta password untuk login atau mengakses layanan Aplikasi Zyklus Anda. Apabila terjadi penyalahgunaan akun dan password Aplikasi Zyklus yang sudah Anda pastikan, maka Anda wajib memberitahukan kepada Kami, agar Kami segera melakukan tindakan pembekuan akun untuk meminimalisir dampak kerugian bagi seluruh pihak.</p>

                <h1 className="text-lg font-bold mb-4">G. Hak Kekayaan Intelektual</h1>
                <ul className="list-inside list-disc text-lg mb-4">
                    <li>Aplikasi Zyklus dan seluruh sistem atau komponen yang mendukungnya diantaranya : (a) tampilan, desain, dan layout situs website atau Aplikasi Zyklus yang ditampilkan oleh media website atau Aplikasi Zyklus; (b) logo, merek, nama, kata, foto, gambar, susunan warna, huruf-huruf, angka-angka, ilustrasi, dan tulisan, yang ada pada website atau Aplikasi Zyklus; keseluruhan yang disebutkan dalam huruf (a) dan (b) adalah Hak Kekayaan Intelektual yang Kami miliki dan pihak lain tidak memiliki hak atas segala yang tercantum dalam huruf (a) dan (b);</li>
                    <li>Pihak lain termasuk Anda tidak diizinkan dalam kondisi apapun dan kapanpun untuk: (i) mengadaptasi, menyalin, menerjemahkan, memodifikasi, mendistribusikan, membuat karya turunannya, mentransmisikan, menjual, menampilkan di muka umum, mengalihkan, mengubah, menyiarkan, membuat ulang, memindahkan, membajak, atau membongkar Aplikasi Zyklus (termasuk layanan dan sistem di dalamnya), kecuali hal-hal yang diizinkan untuk digunakan oleh Anda sesuai Syarat dan Ketentuan, (ii) memanipulasi data, hak cipta, dan merek dagang, penggunaan lisensi secara illegal, meretas data untuk dijual-belikan, dan aktivitas lain yang mengomersilkan situs website atau Aplikasi Zyklus tanpa persetujuan dari Kami; (iii) menduplikasi, menerbitkan, menyiarkan dengan cara apapun hal-hal yang dalam lindungan hak cipta, merek dagang, atau informasi lainnya yang Kami miliki lainnya tanpa persetujuan dari Kami atau pihak yang memberikan lisensinya kepada Kami, (iv) menghapus setiap hak cipta, merek dagang atau pemberitahuan hak milik lainnya yang ada dalam Aplikasi Zyklus, (v) membuat duplikasi atau rekayasa situs website atau Aplikasi Zyklus termasuk  seluruh  layanan dan sistem di dalamnya untuk (a) membuat layanan tandingan, (b) membuat situs website atau Aplikasi atau produk dengan memakai ide, layanan, fungsi dan ilustrasi sejenis, atau (c) membuat salinan ide, layanan, fungsi dan ilustrasi, (vi) menyisipkan software atau program otomatis atau script, seperti virus, bots, web crawlers, web indexers, web robots, worm, dan aplikasi sejenisnya atau segala program yang dapat menghambat kinerja atau operasi situs website dan Aplikasi Zyklus, (vii) memasukkan data dengan bantuan program otomasi seperti web robot, atau berupaya menghindari atau memperbanyak sistem navigasi dari Aplikasi Zyklus.</li>
                </ul>

                <h1 className="text-lg font-bold mb-4">H. Permintaan Akses Dan Perubahan Data Pribadi</h1>
                <ul className="list-inside list-disc text-lg mb-4">
                    <li>
                        <span>Apabila Anda perlu melakukan perubahan pada Data Pribadi maka Anda dapat meminta perubahan atau meminta akses mengubah Data Pribadi Anda, melalui Customer Service atau Contact Channel atau Layanan Bantuan dalam situs website atau Aplikasi Zyklus (disertai bukti pendukung) :</span>
                        <ul className="ml-5 list-inside list-disc text-lg mb-4">
                            <li>Telepon ke nomor 085162611440;</li>
                            <li>Fitur Bantuan di Aplikasi Zyklus;</li>
                            <li>e-mail ke zyklusid@gmail.com</li>
                            <li>Instagram (@zyklusid);</li>
                            <li>Twitter (@zyklusid);</li>
                            <li>LinkedIn (www.linkedin.com/company/zyklusid)</li>
                        </ul>
                    </li>
                    <li>Pengubahan dan/atau akses data yang Anda minta dapat Kami tolak disebabkan hal-hal yang dibenarkan menurut peraturan perundang-undangan yang berlaku.</li>
                </ul>

                <h1 className="text-lg font-bold mb-4">J. Hukum Yang Berlaku</h1>
                <p className="text-lg mb-4">Kebijakan Privasi ini diatur dan ditafsirkan sebagaimana hukum di Negara Republik Indonesia.</p>

                <h1 className="text-lg font-bold mb-4">K. Perubahan Atas Kebijakan Privasi</h1>
                <p className="text-lg mb-4">Pihak Kami dapat melakukan pengubahan, pembaruan, dan/atau penambahan sebagian atau seluruh ketentuan di Kebijakan Privasi ini, menyesuaikan kondisi, perubahan alur bisnis, dan/atau perubahan peraturan perundang-undangan. Kami akan memberitahukan Anda atas setiap pengubahan/penambahan/pembaruan yang terjadi dalam Kebijakan Privasi ini, yang akan disampaikan melalui notifikasi dalam situs website atau Aplikasi Zyklus. Kami menganggap Anda menyetujui atau menyepakati segala perubahan pada aplikasi Zyklus selama Anda tidak mengajukan komplain, pemberhentian layanan, dan terus menggunakan berbagai fitur atau layanan Kami atau terus berkomunikasi dengan Kami. Apabila penggunaan Aplikasi Zyklus  Anda masih berlanjut setelah membaca Kebijakan Privasi ini (termasuk segala perubahan nantinya), Anda dinyatakan telah paham dan setuju dengan Kebijakan privasi ini dan tetap menjadi pengguna Aplikasi Zyklus.
                </p>

                <h1 className="text-lg font-bold mb-4">L. Tanggal Berlaku</h1>
                <p className="text-lg mb-4">Tanggal berlakukan Kebijakan Privasi yaitu sejak tanggal 3 November 2021</p>

            </Container>
        </MainLayout>
    )
}