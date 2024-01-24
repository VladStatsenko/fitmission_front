import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Countdown, { zeroPad } from 'react-countdown';

function Payment(props) {

    let isFormCorrect = props.values.slice(8).every(el => el.validity)

    let price = 1990

    const navigate = useNavigate()
  
    function sendData(e) {
        e. preventDefault()
        console.log(JSON.stringify(newDataObj(), null, 2))
        
        fetch ('/generate', {
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(newDataObj(), null, 2)
        }).then(() => {
            navigate(
                '/pay?' +
                'activity=' + newDataObj().activity +
                '&goals=' + newDataObj().goals +
                '&reason=' + newDataObj().reason +
                '&age=' + newDataObj().age +
                '&email=' + newDataObj().email +
                '&exceptedWeight=' + newDataObj().expectedWeight +
                '&height=' + newDataObj().height +
                '&milk=' + newDataObj().milk +
                '&sex=' + newDataObj().sex +
                '&vegetarian=' + newDataObj().vegetarian +
                '&weight=' + newDataObj().weight
            )
        }).then(() => {
                      navigate(0)
                      })

    }

    function newDataObj() {
        const data = new Object()
    
        for (const key in props.form) {
            if (typeof props.form[key] == 'object') {
                if (key != 'email') data[key] = Number(props.form[key].value)
                else data[key] = props.form[key].value
            }
            else data[key] = props.form[key]
        }

        return data
    }

    const renderer = ({ minutes, seconds }) => (
        <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>
    )


    const [checked, setChecked] = useState({
        first: false,
        second: false
    })


    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-center text-xl font-bold">Ваш персональный план готов!</h2>
            <div className="max-w-3xl w-full m-auto">
                <div className="p-4 bg-emerald-500 rounded-t-xl flex items-end justify-between">
                    <p className="text-md">Срок действия специального предложения истекает через:</p>
                    <span className="text-xl font-bold tracking-wide"><Countdown renderer={renderer} date={Date.now() + 1200000} /></span>
                </div>
                <div className="p-4 bg-zinc-900 rounded-b-xl">
                    <div className="flex justify-between items-end">
                        <p className="text-xl">Индивидуальный план питания</p>
                        <p className="text-3xl font-bold before:content-['1990₽'] before:text-lg before:font-normal before:text-emerald-500 before:line-through
                        after:content-['*'] after:text-lg after:font-normal after:text-emerald-700 after:absolute"> 49₽</p>
                    </div>
                    <input 
                        className="mt-4 px-4 py-2 w-full bg-zinc-900 rounded-md placeholder:text-zinc-600 ring-1 valid:ring-emerald-500 invalid:ring-rose-500 focus:ring-0"
                        onChange={props.handleChange}
                        id='email'
                        value={props.form.email.value}
                        name='email'
                        type='email'
                        placeholder='Ваша  эл. почта'
                        required>
                    </input>


                    <div className="flex flex-col gap-2 mt-4 text-zinc-600">
                        <label className={`cursor-pointer`}>
                            <input
                                type='checkBox'
                                value={0}
                                checked={checked.first}
                                onChange={(e) => setChecked(el => ({...el, first: !el.first}))}
                            /> Соглашаюсь с условиями оферты рекуррентных платежей(Первые 3 дня 49 руб. Далее {price} рублей/неделя)
                        </label>
                        <label className='cursor-pointer'>
                            <input
                                type='checkBox'
                                value={1}
                                checked={checked.second}
                                onChange={(e) => setChecked(el => ({...el, second: !el.second}))}
                            /> Соглашаюсь с политикой обработки персональных данных
                        </label>
                    </div>


                    {isFormCorrect && !Object.values(checked).includes(false)
                        ? <button
                            onClick={(e) => sendData(e)}
                            className='mt-4 bg-zinc-900 px-4 py-2 w-full rounded-md sm:max-2xl:ring-1 sm:max-2xl:ring-emerald-500 sm:max-2xl:hover:ring-2 sm:max-2xl:hover:ring-emerald-500 max-sm:bg-emerald-500'
                            >Оплатить
                        </button>
                        : <button onClick={() => alert('Укажите ваш e-mail и дайте соглашение на обработку данных')} className='mt-4 bg-zinc-900 px-4 py-2 w-full rounded-md max-sm:bg-emerald-500 cursor-not-allowed max-sm:opacity-50'>Оплатить</button>
                    }                    
                </div>
            </div>

            <p className="max-w-3xl w-full m-auto -mt-2 text-md text-zinc-400">* Скидка действует первые три дня. Далее – {price}₽ / неделя</p>

            <img src='img.png' className="rounded-xl max-h-96 object-cover max-w-3xl w-full m-auto" />
            
        </div>
    )
}

export default Payment