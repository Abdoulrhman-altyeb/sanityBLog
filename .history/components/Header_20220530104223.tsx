import mainLogo from '../public/images/mainLogo.png'

const Header = () => {
  return (
    <nav className='flex justify-between p-2'>
        <div className='flex items-center'>
          <div>
            <img src={mainLogo.src} alt='logo' className='mr-1 w-10 h-10' />
            <span className='font-semibold'>BloggySecture</span>
          </div>
          <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Create</li>
          </ul> 
        </div>
    </nav>
  )
}

export default Header