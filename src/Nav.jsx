import { Link } from 'react-router-dom'

function Nav() {

  const logo = './fm-full.png'
  const about_us = () => {
    const element = document.getElementById('about_us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: "center" });
    }}
  const advantages = () => {
    const element = document.getElementById('advantages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: "start" });
    }}
  const concepts = () => {
    const element = document.getElementById('concepts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: "center" });
    }}
  const reviews = () => {
    const element = document.getElementById('reviews');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: "end" });
    }}

  return (
        <nav className='z-50 sticky left-0 top-0 flex justify-center w-full py-10 px-8 xl:px-0'>
          <div className='justify-center lg:justify-between w-full flex items-center max-w-7xl'>
            <div className='flex gap-x-12 items-center justify-between w-full xl:w-auto'>
            <a href={"/"}>
              <img src={logo} />
            </a>
            <a className="flex text-white hover:text-white" href='/form'>
                <button className={`flex bg-[#5B8266] font-bold text-[12px] sm:text-[20px] sm:leading-[30px] uppercase px-2 sm:px-8 py-2 sm:py-3 rounded-[20px] cursor-pointer`}>
                СОСТАВИТЬ РАЦИОН
                </button>
            </a>
            </div>
            <div className='hidden xl:flex flex-row gap-x-10'>
              <a onClick={about_us} className='text-white/80 font-semibold text-[25px] m-auto cursor-pointer'>О нас</a>
              <a onClick={advantages} className='text-white/80 font-semibold text-[25px] m-auto cursor-pointer'>Преимущества</a>
              <a onClick={concepts} className='text-white/80 font-semibold text-[25px] m-auto cursor-pointer'>Концепция</a>
              <a onClick={reviews} className='text-white/80 font-semibold text-[25px] m-auto cursor-pointer'>Отзывы</a>
            </div>
          </div>
        </nav>
  )
}

export default Nav