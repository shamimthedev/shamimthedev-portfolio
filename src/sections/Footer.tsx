import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks = [
    {
        title: 'GitHub',
        href: 'https://github.com/shamimthedev',
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/shamimthedev/',
    },
    {
        title: 'Facebook',
        href: 'https://facebook.com/shamimthedev',
    },
    {
        title: 'Resume',
        href: '/Md_Shamim_Hossain_Frontend_Developer.pdf',
    }
]
export const FooterSection = () => {
    return (
        <footer className='relative overflow-x-clip'>
            <div className='absolute h-100 w-400 bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 mask-[radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
            <div className="container">
                <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
                    <div className='text-white/40'>© 2025 Md. Shamim Hossain · bebshardost.com</div>
                    <nav className='flex flex-col md:flex-row items-center gap-8'>
                        <div className="text-white/40 text-xs">
                                    Find me online
                                </div>
                        {footerLinks.map((link) => (
                            <a href={link.href} key={link.title}
                                className='inline-flex items-center gap-1.5 cursor-pointer' target="_blank" rel="noopener noreferrer">
                                <span className='font-semibold'>{link.title}</span>
                                <ArrowUpRightIcon className='size-4' />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}