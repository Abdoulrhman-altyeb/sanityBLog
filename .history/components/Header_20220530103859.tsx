import mainLogo from '../public/images/mainLogo.png'

const Header = () => {
  console.log(mainLogo)
  return (
    <nav className='flex justify-between'>
        <div className='flex'>
            <img src={`${mainLogo}`} alt='logo' />
            BloggySecture
        </div>
    </nav>
  )
}

export default Header