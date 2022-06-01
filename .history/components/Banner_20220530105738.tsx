import letterB from '../public/images/blogLogo.png'

const Banner = () => {
  return (
      <div className='flex bg-gradient-to-t from-orangy to-orang p-8'>
          <div>
            <h1>Bloggy woggy your blog, create your blog for others to read,read other ppl blogs </h1>
            <p>Know and learn more by reading blgs be more sophisticated</p>
          </div>
          <div>
              <img src={letterB.src} alt='letter b'/>
          </div>
      </div>
  )
}

export default Banner