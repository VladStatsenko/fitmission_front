import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate()

  return (
    <>
        <div className='max-w-3xl w-full m-auto p-6 bg-zinc-900 rounded-xl text-zinc-400'>
            <div className='text-xs leading-5 flex justify-between max-sm:flex-col max-sm:gap-6'>
                <div className='flex flex-col gap-2 whitespace-nowrap justify-between'>
                    <div>
                        <p>ИП: Стаценко В.А.</p>
                        <p>ИНН: 682907120244</p>
                        <p>ОГРНИП: 323680000029697</p>
                    </div>
                    <div>
                        <p>help.fitmission@gmail.com</p>
                    </div>
                </div>
                <fr className='bg-zinc-700 h-0.5 rounded'></fr>
                <div className='max-sm:order-last w-full text-center sm:max-2xl:flex sm:max-2xl:flex-col sm:max-2xl:justify-end'>
                    <img className='m-auto mb-2 sm:max-2xl:my-auto w-14' alt='FitMission' src='fm.svg' />
                    {/* <h2>fitmission</h2> */}
                    <p>2023 Copyright</p>
                </div>
                <div className='flex flex-col gap-2 whitespace-nowrap'>
                    <a href='assets/docs/oferta.pdf' download>Оферта</a>
                    <a href='assets/docs/policy.pdf' download>Политика конфиденциальности</a>
                    <a onClick={() => navigate('/subscription-cancellation')} className='cursor-pointer' target='_blank'>Отменить подписку</a>
                    <a href='assets/docs/tariff.pdf' download>Тарифы</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer