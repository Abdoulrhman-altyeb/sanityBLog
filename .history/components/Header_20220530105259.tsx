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
          <ul className='hidden md:flex ml-4 space-x-3 text-sm font-semibold text-gray-600  md:items-center'>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Contact</li>
              <li className='bg-gradient-to-t from-orangy to-orang text-white px-4 py-2 rounded-full inline-block cursor-pointer hover:opacity-90 transition-opacity duration-150'>Create</li>
          </ul> 
        </div>
        <div className='flex space-x-3 items-center'>
          <img src={svg.src} alt='svg' className='h-6 w-6 cursor-pointer'/>
          <div className='flex space-x-2'>
            <span className='cursor-pointer'>Login</span>
            <span > / </span>
            <span className='cursor-pointer'>Sing up</span>
          </div>
          <button className='block bg-gradient-to-t from-orangy to-orang text-white px-4 py-2 rounded-md'>GET STARTED</button>
        </div>
    </nav>
  )
}

export default Header