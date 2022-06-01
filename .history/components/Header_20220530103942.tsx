import mainLogo from '../public/images/mainLogo.png'

const Header = () => {
  return (
    <nav className='flex justify-between'>
        <div className='flex items-center'>
            <img src={mainLogo.src} alt='logo' className='mr-2' />
            BloggySecture
        </div>
    </nav>
  )
}

export default Header