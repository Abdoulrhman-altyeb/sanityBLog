import mainLogo from '../public/images/mainLogo.png'

const Header = () => {
  return (
    <nav className='flex justify-between'>
        <div className='flex items-center'>
            <img src={mainLogo.src} alt='logo' className='mr-2 w-10 h-10' />
            <span className='font-semibold'>BloggySecture</span>
        </div>
    </nav>
  )
}

export default Header