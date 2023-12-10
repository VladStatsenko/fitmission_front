function Nav() {

  const logo = './fm-full.png'

  return (
        <nav className='z-50 sticky left-0 top-0 flex justify-center w-full py-10'>
        <div className='justify-center lg:justify-between w-full flex items-center max-w-7xl'>
          <div className='flex gap-x-12 items-center'>
          <a href={"/"}>
            <img src={logo} />
          </a>
          </div>
          <div className='hidden lg:flex flex-row gap-x-10'>
          <a href="/" className='text-white/80 font-semibold text-[25px] m-auto cursor-pointer'>О нас</a>
              <a href="/" className='text-white/80 font-semibold text-[25px] m-auto cursor-pointer'>Преимущества</a>
              <a href="/" className='text-white/80 font-semibold text-[25px] m-auto cursor-pointer'>Концепция</a>
              <a href="/" className='text-white/80 font-semibold text-[25px] m-auto cursor-pointer'>Отзывы</a>
          </div>
        </div>
      </nav>
  )
}

export default Nav