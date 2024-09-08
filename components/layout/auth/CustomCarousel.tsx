'use client'
import { Carousel } from 'flowbite-react'
const CustomCarousel = () => {
    const carouselData = [
        {
            id: 1,
            img: 'landing_image3.png',
            title: 'Elevate Your Messaging Efficiency with Our Innovative Admin Tools',
            body: 'Selamat datang di Fowardin! Admin Tools kami mempermudah pengelolaan pesan Anda. Dapatkan kendali penuh dengan fitur pesan otomatis dan manajemen konten praktis, serta penyimpanan kontak yang lebih praktis dengan sinkronisasi Google Contact.'
        },
        {
            id: 2,
            img: 'landing_image2.png',
            title: 'React Further with Ease!',
            body: 'Dengan Fowardin, memperluas jangkauan komunikasi Anda tercapai dengan cepat. Kirim pesan Anda ke banyak kontak dan grup sekaligus melalui fitur Broadcast.'
        },
        {
            id: 3,
            img: 'landing_image1.png',
            title: 'Right Time, Effective Messages!',
            body: 'Manfaatkan fitur Campaign di Fowardin untuk merencanakan pengiriman iklan yang tepat sasaran. Optimalkan pesan iklan untuk hasil yang lebih akurat dan sukses.'
        }
    ]
    return (
        <Carousel
            className='bg-transparent w-[85%]'
            leftControl="&nbsp;"
            rightControl="&nbsp;">
            {carouselData.map(i => (
                <div key={i.id} className='h-full flex flex-col gap-4 justify-evenly px-8'>
                    <div className='flex justify-center'>
                        <img
                            src={'/assets/images/' + i.img}
                            alt='dummy'
                            className='flex-none'
                        />
                    </div>
                    <div className=''>
                        <p className='font-lexend text-3xl font-bold '>{i.title}</p>
                        <p className='mt-4 text-sm'>{i.body}</p>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default CustomCarousel