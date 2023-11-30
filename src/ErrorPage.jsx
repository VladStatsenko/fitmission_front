import { Link } from "react-router-dom"

function ErrorPage() {

    return (
        <div className="max-w-3xl w-full m-auto flex-grow py-6">
            <div className='p-6 text-center text-2xl'>
                <h1 className="text-center font-black text-transparent text-[10rem] bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-800">Упс... :/</h1>
                <h2>Вы перешли на <span className="text-emerald-500">несуществующую</span> страницу.</h2>
            </div>
            <Link className="text-white hover:text-white" to='/'>
                <button className={`mt-4 w-full bg-zinc-900 px-4 py-2 rounded-md sm:max-2xl:ring-1 sm:max-2xl:ring-emerald-500 sm:max-2xl:hover:ring-2 sm:max-2xl:hover:ring-emerald-500 max-sm:bg-emerald-500 cursor-pointer`}>
                    Вернуться на главную
                </button>
            </Link>
        </div>
    )
}

export default ErrorPage