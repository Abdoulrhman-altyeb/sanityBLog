import letterB from '../public/images/blogLogo.png'

const Banner = () => {
  return (
      <div className='flex bg-gradient-to-t from-orangy to-orang px-8 py-24 text-white items-center'>
          <div className='sm:mr-2 md:mr-4'>
            <h1 className='text-2xl mb-4 md:text-4xl'><span className='text-4xl mr-1'>B</span>loggy woggy your blog, create your blog for others to read,read other ppl blogs </h1>
            <p>Know and learn more by reading blgs be more sophisticated</p>
          </div>
          <div className='hidden sm:block'>
              <img src={letterB.src} alt='letter b'/>
          </div>
      </div>
  )
}

export default Banner