import { Link } from "react-router-dom"

function Start() {
    return (
        <div className="max-w-3xl w-full m-auto flex-grow">
            <img src='start.jpeg' className="rounded-xl max-h-60 object-cover max-w-3xl w-full m-auto" />
            <div className='py-6 text-center max-sm:text-left text-2xl'>
                <h2>Индивидуальные планы питания, чтобы похудеть <span className='text-3xl font-bold text-emerald-500 whitespace-nowrap'>БЫСТРО ⏳</span></h2>
                <h2>Ешьте хорошо, выглядите <span className='text-3xl font-bold text-emerald-500 whitespace-nowrap'>ПОТРЯСАЮЩЕ 👍</span></h2>
            </div>
            <Link className="text-white hover:text-white" to='/form'>
                <button className={`w-full bg-zinc-900 px-4 py-2 rounded-md sm:max-2xl:ring-1 sm:max-2xl:ring-emerald-500 sm:max-2xl:hover:ring-2 sm:max-2xl:hover:ring-emerald-500 max-sm:bg-emerald-500 cursor-pointer`}>
                    Перейти к тесту
                </button>
            </Link>
        </div>
    )
}

export default Start