import blogLogo from './images/blogLogo.png'

const Header = () => {
  return (
    <nav className='flex justify-between'>
        <div>
            <img src={blogLogo} alt='logo' />
            BloggySecture
        </div>
    </nav>
  )
}

export default Header