import Logo from '@/assets/logo.svg'
import X from '@/assets/social-x.svg'
import Insta from '@/assets/social-instagram.svg'
import YT from '@/assets/social-youtube.svg'
import Github from '@/assets/github.svg'
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
        <a
  href="https://github.com/Rijul1607"
  target="_blank"
  rel="noopener noreferrer"
  className="text-white/40 hover:text-white transition"
  
  aria-label="GitHub"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5 mt-0.5 "
  >
    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.26 1.87 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.49 11.49 0 016 0c2.3-1.55 3.31-1.23 3.31-1.23.66 1.65.24 2.87.12 3.17.77.85 1.24 1.93 1.24 3.25 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.69.83.57A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
</a>
      </div>
      </div>
    </div>
  </footer>;
};
