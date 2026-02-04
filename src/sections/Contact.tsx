import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
    return (
        <section id="contact" className='py-16 pt-12 lg:py-24 lg:pt-20'>
            <div className='container'>
                <div className='bg-linear-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left overflow-hidden z-0'>
                    <div
                        className="absolute inset-0 -z-10 opacity-5"
                        style={{ backgroundImage: `url(${grainImage.src})` }}
                    ></div>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
                        <div>
                            <h2 className='font-serif text-2xl md:text-3xl'>Let&apos;s build something that actually works</h2>
                            <p className='text-sm md:text-base mt-2'>
                                Whether you need a high-performance website or a reliable frontend developer, I&apos;m open to meaningful conversations.
                            </p>
                        </div>
                        <div>
                            <a href="mailto:shamimthedev@gmail.com?subject=Frontend Project Inquiry&body=Hi Shamim,%0D%0A%0D%0AI came across your portfolio and would love to discuss a potential opportunity." className='cursor-pointer'>
                                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 cursor-pointer">
                                    <span className="font-semibold">Start a Conversation</span>
                                    <ArrowUpRightIcon className="size-4" />
                                </button>
                                <p className="text-xs text-gray-900/70 mt-2">
                                    Usually replies within 24 hours
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}