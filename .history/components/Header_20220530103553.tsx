import blogLogo from './images/blogLogo.png'

const Header:NextPage = () => {
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