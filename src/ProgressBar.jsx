import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

function ProgressBar(props) {

    const [count, setCount] = useState(0)
    
    const navigate = useNavigate()
    
    useEffect(() => {
        const progressBar = () => {
            const target = 100
            setCount(prevCount => prevCount < target ? prevCount + 1 : target)
            setTimeout(() => {
                progressBar()
            }, 70)
        }
        progressBar()
    }, [])
    
    useEffect(() => {
        count == 100 ? navigate('/payment') & window.scrollTo(0, 0) : ''
    }, [count])


    return (
        <div className="max-w-3xl w-full m-auto p-12 text-center flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Создание вашего плана</h2>
            <p className="leading-8 text-xl">Хорошо питайтесь, развлекайтесь, выглядите потрясающе</p>
            <div className="p-1 h-10 ring-2 ring-emerald-500 rounded-md relative">
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-xl text-emerald-200 font-bold leading-8 z-10 flex">
                    <p>{count}</p>
                    <p>%</p>
                </div>
                <div className={`bg-emerald-500 rounded-sm h-full w-full origin-left animate-[progress_7s_linear] -z-10`}></div>
            </div>
            <p className="text-emerald-500">Анализ ваших данных...</p>
            <img src='progress.jpg' className="rounded-xl max-h-96 object-cover max-w-3xl w-full m-auto" />
        </div>
    )
}

export default ProgressBar