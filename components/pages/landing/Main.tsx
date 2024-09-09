import { NextPage } from 'next'
import Link from 'next/link';
import { batch, StickyIn, FadeIn, ZoomIn, Fade, Move, Sticky, ScrollContainer, ScrollPage, Animator, MoveOut, MoveIn } from 'react-scroll-motion';

interface Props { }

const Main: NextPage<Props> = ({ }) => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(),);
    const animation = batch(Move(), Fade(), Sticky());
    const titleTextStyle = "font-lexend font-bold text-2xl xl:text-4xl"
    const contentTextStyle = "lg:text-sm text-xs"
    const animatorClass = 'w-full max-w-screen-2xl'
    return (
        <ScrollContainer snap='mandatory'>
            <ScrollPage>
                <Animator animation={animation} className={animatorClass}>
                    <div className='flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center gap-8 w-full px-2'>
                        <div className='flex-none lg:basis-1/2 flex justify-end'>
                            <img
                                src='/assets/images/dummy2.png'
                                width={558}
                                height={351}
                                alt='dummy'
                                className='flex-none'
                            />
                        </div>
                        <div className='flex flex-col gap-8'>
                            <p className={titleTextStyle}>Elevate Your Messaging Efficiency with Our Innovative Admin Tools</p>
                            <p className={contentTextStyle}>Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Penerusan pesan jadi lebih lancar melalui fitur otomatis, sehingga Anda dapat lebih fokus pada interaksi dengan pelanggan. Dapatkan kendali penuh atas pesan dan informasi dengan manajemen konten dan kontak yang praktis.</p>
                            <div className='flex w-full '>
                                <Link href={'/signup'} className='flex justify-between items-center bg-black rounded-md text-white px-2 hover:cursor-pointer'>
                                    <p className='px-4 py-2'>Daftar Sekarang</p>
                                    <div className='flex-none border-l px-2 border-white h-full flex items-center'>
                                        <img src="/assets/icons/arrow.svg" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={animation} className={animatorClass}>
                    <div className='flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center gap-8 w-full px-2'>
                        <div className='flex-none lg:basis-1/2 flex justify-end'>
                            <img
                                src='/assets/images/dummy2.png'
                                width={558}
                                height={351}
                                alt='dummy'
                                className='flex-none'
                            />
                        </div>
                        <div className='flex flex-col gap-8'>
                            <p className={titleTextStyle}>Elevate Your Messaging Efficiency with Our Innovative Admin Tools</p>
                            <p className={contentTextStyle}>Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Penerusan pesan jadi lebih lancar melalui fitur otomatis, sehingga Anda dapat lebih fokus pada interaksi dengan pelanggan. Dapatkan kendali penuh atas pesan dan informasi dengan manajemen konten dan kontak yang praktis.</p>
                            <div className='flex w-full '>
                                <Link href={'/signup'} className='flex justify-between items-center bg-black rounded-md text-white px-2 hover:cursor-pointer'>
                                    <p className='px-4 py-2'>Daftar Sekarang</p>
                                    <div className='flex-none border-l px-2 border-white h-full flex items-center'>
                                        <img src="/assets/icons/arrow.svg" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <ScrollPage>
                <Animator animation={animation} className={animatorClass}>
                    <div className='flex flex-col lg:flex-row-reverse justify-center lg:justify-between items-center gap-8 w-full px-2'>
                        <div className='flex-none lg:basis-1/2 flex justify-end'>
                            <img
                                src='/assets/images/dummy2.png'
                                width={558}
                                height={351}
                                alt='dummy'
                                className='flex-none'
                            />
                        </div>
                        <div className='flex flex-col gap-8'>
                            <p className={titleTextStyle}>Elevate Your Messaging Efficiency with Our Innovative Admin Tools</p>
                            <p className={contentTextStyle}>Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Penerusan pesan jadi lebih lancar melalui fitur otomatis, sehingga Anda dapat lebih fokus pada interaksi dengan pelanggan. Dapatkan kendali penuh atas pesan dan informasi dengan manajemen konten dan kontak yang praktis.</p>
                            <div className='flex w-full '>
                                <Link href={'/signup'} className='flex justify-between items-center bg-black rounded-md text-white px-2 hover:cursor-pointer'>
                                    <p className='px-4 py-2'>Daftar Sekarang</p>
                                    <div className='flex-none border-l px-2 border-white h-full flex items-center'>
                                        <img src="/assets/icons/arrow.svg" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}
export default Main