import blogLogo from '../public/images/mainLogo.png'

const Header = () => {
  return (
    <nav className='flex justify-between'>
        <div className='flex'>
            <img src={blogLogo} alt='logo' />
            BloggySecture
        </div>
    </nav>
  )
}

export default Header