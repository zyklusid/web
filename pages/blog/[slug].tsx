import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import MainLayout from "../../components/templates/Main";

export default function BlogPost() {
    const router = useRouter()
    const { slug } = router.query

    return (
        <MainLayout>
            <div className="pt-28 lg:px-20 md:px-5 px-2 mb-10">
                <div className="grid md:grid-cols-4">
                    <div className="sm:block hidden">

                    </div>
                    <div className="col-span-2 col-end-4">
                        <div className="mb-3">
                            <h1 className="md:text-4xl text-2xl font-bold">Sebuah artikel yang bisa dibaca</h1>
                            <div className="flex space-x-2">
                                <div className="rounded-full bg-gray-200 text-gray-500 text-sm px-2">Admin</div>
                                <div className="rounded-full bg-gray-200 text-gray-500 text-sm px-2">6 Agustus 2021 </div>
                            </div>
                        </div>
                        <div className="image-container mb-4">
                            <Image src="https://picsum.photos/500/300" layout="fill" className="image rounded" alt="gambar" />
                        </div>
                        <div className="text-lg space-y-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu tincidunt tortor aliquam nulla facilisi. Eget aliquet nibh praesent tristique. A scelerisque purus semper eget. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Neque vitae tempus quam pellentesque nec nam aliquam. Nunc mattis enim ut tellus. Nisi est sit amet facilisis. Aliquet risus feugiat in ante metus dictum at tempor. Enim sed faucibus turpis in eu. Sit amet cursus sit amet dictum sit amet. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Aliquam ultrices sagittis orci a. Ut venenatis tellus in metus vulputate.</p>

                            <p>Tortor consequat id porta nibh venenatis cras sed felis. Non tellus orci ac auctor augue mauris augue neque. Id cursus metus aliquam eleifend. Nulla aliquet enim tortor at auctor urna nunc id. Turpis egestas integer eget aliquet nibh praesent tristique. Facilisis magna etiam tempor orci eu lobortis elementum. Consectetur lorem donec massa sapien faucibus et molestie ac. Massa id neque aliquam vestibulum. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Faucibus interdum posuere lorem ipsum. Mus mauris vitae ultricies leo integer malesuada nunc vel. Vitae justo eget magna fermentum iaculis eu non diam. Massa massa ultricies mi quis hendrerit dolor. Imperdiet nulla malesuada pellentesque elit.</p>

                            <p>Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Vitae purus faucibus ornare suspendisse sed nisi lacus. Massa eget egestas purus viverra accumsan in nisl nisi. Pretium nibh ipsum consequat nisl vel pretium. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Tellus pellentesque eu tincidunt tortor. Et leo duis ut diam quam nulla porttitor. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Amet commodo nulla facilisi nullam vehicula ipsum. Eleifend donec pretium vulputate sapien nec sagittis aliquam. Massa sapien faucibus et molestie ac feugiat sed. Interdum velit euismod in pellentesque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}