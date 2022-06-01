import mainLogo from '../public/images/mainLogo.png'
import svg from '../public/images/sun.svg'

const Header = () => {
  return (
    <nav className='flex justify-between p-2'>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <img src={mainLogo.src} alt='logo' className='mr-1 w-10 h-10' />
            <span className='font-semibold'>BloggySecture</span>
          </div>
          <ul className='hidden md:flex ml-4 space-x-3 font-semibold'>
              <li>About</li>
              <li>Contact</li>
              <li className='bg-gradient-to-t from-orangy to-orang text-white px-4 py-2 rouned'>Create</li>
          </ul> 
        </div>
        <div>
        <img src={svg.src} alt='svg' />
        </div>
    </nav>
  )
}

export default Header