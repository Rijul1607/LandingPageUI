import Logo from '@/assets/logo.svg'
import X from '@/assets/social-x.svg'
import Insta from '@/assets/social-instagram.svg'
import YT from '@/assets/social-youtube.svg'
export const Footer = () => {
  return <footer className='py-5 border-t border-white/15'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row lg:items-center gap-8'>

      <div className='flex gap-2 items-center lg:flex-1'>
      <Logo className="h-6 w-6"/>
      <div>AI Startup Landing Page</div>
      </div>
      
        <nav className='flex flex-col lg:flex-row  gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
          <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Features</a>
          <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Developers</a>
          <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Company</a>
          <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Blog</a>
          <a href="#" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Changlog</a>
        </nav>
      
      <div className='flex gap-5 lg:flex-1 lg:justify-end'>
        <X className="text-white/40 hover:text-white transition"/>
        <Insta className="text-white/40 hover:text-white transition"/>
        <YT className="text-white/40 hover:text-white transition"/>
      </div>
      </div>
    </div>
  </footer>;
};
