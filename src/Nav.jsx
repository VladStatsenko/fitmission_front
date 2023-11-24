import { Link } from 'react-router-dom'


function Nav() {

  const logo = './fm.svg'

  return (
    <>
        <div className='z-50 fixed left-0 top-0 p-6 w-full shadow-md bg-zinc-900'>
            <Link className='max-w-3xl w-full m-auto flex' to='/'>
              <img className='w-6' src={logo} />
              <h2 className='m-auto text-xl text-zinc-700 font-black tracking-widest'>fitmission</h2>
            </Link>
        </div>
    </>
  )
}

export default Nav