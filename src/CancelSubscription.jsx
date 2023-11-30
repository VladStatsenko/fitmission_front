import { useNavigate } from "react-router-dom"

function CancelSubscription(props) {

    let isFormCorrect = props.values.slice(8).every(el => el.validity)


    const navigate = useNavigate()


    function sendData(e) {
        e. preventDefault()
        console.log(JSON.stringify(props.form.email.value, null, 2))
        
        fetch ('/Cancel', {
            method: 'POST',
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(props.form.email.value, null, 2)
        }).then(() => {
            console.log('sub canceled')
            navigate('/subscription-canceled-success')
        })
    }

    return (
        <>
            <h1 className="max-w-3xl pt-48 w-full mx-auto -mb-2 font-bold text-3xl text-emerald-500">Вы уверены, что хотите отказаться от рассылки? 😔</h1>
            <input 
                className="mt-2 px-4 max-w-3xl m-auto py-2 w-full bg-zinc-900 rounded-md placeholder:text-zinc-700 ring-1 valid:ring-emerald-500 invalid:ring-rose-500 focus:ring-0"
                onChange={props.handleChange}
                id='email'
                value={props.form.email.value}
                name='email'
                type='email'
                placeholder='Ваша  эл. почта'
                required>
            </input>
            {isFormCorrect
                ? <button
                    onClick={(e) => sendData(e)}
                    className='bg-zinc-900 max-w-3xl m-auto px-4 py-2 w-full rounded-md sm:max-2xl:ring-1 sm:max-2xl:ring-emerald-500 sm:max-2xl:hover:ring-2 sm:max-2xl:hover:ring-emerald-500 max-sm:bg-emerald-500'
                    >Отменить подписку
                </button>
                : <button onClick={() => alert('Укажите ваш e-mail')} className='max-w-3xl m-auto bg-zinc-900 px-4 py-2 w-full rounded-md max-sm:bg-emerald-500 cursor-not-allowed max-sm:opacity-50'>Отменить подписку</button>
            }         
        </>
    )
}

export default CancelSubscription