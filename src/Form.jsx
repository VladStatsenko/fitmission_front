import { useNavigate } from "react-router-dom"

function Form(props) {
    
    const navigate = useNavigate()

    let isFormCorrect = !props.values.slice(0,4).includes('') && props.values.slice(4,8).every(el => el.validity)

    console.log(props.form)

    return (    
        <div className="max-w-3xl w-full m-auto flex flex-col gap-4">
            <div>
                <h3 className='text-md mb-1'>Выберите пол 🙇‍♂️ 💁‍♀️</h3>
                <div className="flex gap-2" onChange={props.handleChangeForm}>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.sex == 1 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={1} name='sex' className="hidden" /> Мужчина
                    </label>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.sex == 0 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={0} name='sex' className="hidden" /> Женщина
                    </label>
                </div>
            </div>

            <div>
                <h3 className='text-md mb-1'>Едите ли вы мясо? 🥩</h3>
                <div className='flex gap-2' onChange={props.handleChangeForm}>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.vegetarian == 1 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={1} name='vegetarian' className="hidden" /> Да
                    </label>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.vegetarian == 0 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={0} name='vegetarian' className="hidden" /> Нет
                    </label>
                </div>
            </div>

            <div>
                <h3 className='text-md mb-1'>Ваше отношение к молочным продуктам 🍼</h3>
                <div className='flex gap-2' onChange={props.handleChangeForm}>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.milk == 1 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={1} name='milk' className="hidden" /> Употребляю в пищу
                    </label>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.milk == 0 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={0} name='milk' className="hidden" /> У меня непереносимость
                    </label>
                </div>
            </div>

            <div>
                <h3 className='text-md mb-1'>Выберите уровень Вашей активности 🏅</h3>
                <div className='flex max-sm:flex-col gap-2' onChange={props.handleChangeForm}>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.activity == 1 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={1} name='activity' className="hidden" /> Сижу дома
                    </label>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.activity == 2 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={2} name='activity' className="hidden" /> Часто хожу гулять
                    </label>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.activity == 3 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={3} name='activity' className="hidden" /> Занимаюсь в зале 1-2 раза в неделю
                    </label>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.activity == 4 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={4} name='activity' className="hidden" /> Занимаюсь в зале 3-4 раза в неделю
                    </label>
                    <label className={`px-4 py-2 bg-zinc-900 rounded-md hover:cursor-pointer hover:ring-1 hover:ring-emerald-500 ${props.form.activity == 5 ? 'ring-1 ring-emerald-500' : ''}`}>
                        <input type='radio' value={5} name='activity' className="hidden" /> Занимаюсь в зале 5+ раз в неделю
                    </label>
                </div>
            </div>

            <div>
                <h3 className='text-md mb-1'>Ваши физические данные 📏</h3>
                <div className='flex flex-col gap-2'>
                    <input 
                        className="px-4 py-2 bg-zinc-900 rounded-md placeholder:text-zinc-700 ring-1 valid:ring-emerald-500 invalid:ring-rose-500 focus:ring-0"
                        onChange={props.handleChangeData}
                        id='age'
                        value={props.form.age.value}
                        name='age'
                        type='tel'
                        pattern='[^0][0-9]{1,2}'
                        placeholder='Возраст'
                        required>
                    </input>
                    <input
                        className="px-4 py-2 bg-zinc-900 rounded-md placeholder:text-zinc-700 ring-1 valid:ring-emerald-500 invalid:ring-rose-500 focus:ring-0" 
                        onChange={props.handleChangeData}
                        id='height'
                        value={props.form.height.value}
                        name='height' 
                        type='tel' 
                        pattern='[1-2][0-9]{2}' 
                        placeholder='Рост (см)' 
                        required>    
                    </input>
                    <input 
                        className="px-4 py-2 bg-zinc-900 rounded-md placeholder:text-zinc-700 ring-1 valid:ring-emerald-500 invalid:ring-rose-500 focus:ring-0" 
                        onChange={props.handleChangeData} 
                        id='weight'
                        value={props.form.weight.value} 
                        name='weight' 
                        type='tel' 
                        pattern='\d{2,3}' 
                        placeholder='Вес (кг)' 
                        required>    
                    </input>
                    <input 
                        className="px-4 py-2 bg-zinc-900 rounded-md placeholder:text-zinc-700 ring-1 valid:ring-emerald-500 invalid:ring-rose-500 focus:ring-0" 
                        onChange={props.handleChangeData} 
                        id='expectedWeight'
                        value={props.form.expectedWeight.value} 
                        name='expectedWeight' 
                        type='tel' 
                        pattern='\d{2,3}' 
                        placeholder='Желаемый вес (кг)' 
                        required>
                    </input>
                </div>
            </div>


            {isFormCorrect
                ? <a className="text-white hover:text-white cursor-pointer" onClick={() => navigate('/loading') & window.scrollTo(0, 0)}>
                    <button
                        className={`mt-4 bg-zinc-900 px-4 py-2 w-full rounded-md sm:max-2xl:ring-1 sm:max-2xl:ring-emerald-500 sm:max-2xl:hover:ring-2 sm:max-2xl:hover:ring-emerald-500 max-sm:bg-emerald-500 cursor-pointer ${isFormCorrect ? '' : 'hover:cursor-not-allowed max-sm:opacity-50'}`}
                        >Составить план питания
                    </button>
                </a>
                : <button onClick={() => alert('Заполните форму')} className='mt-4 bg-zinc-900 px-4 py-2 w-full rounded-md max-sm:bg-emerald-500 cursor-not-allowed max-sm:opacity-50'>Составить план питания</button>
            }
        </div>
    )
}

export default Form

