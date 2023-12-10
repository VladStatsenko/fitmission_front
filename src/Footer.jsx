import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate()

  return (
    <footer className='w-full from-[#070707]/0 to-[#070707] bg-gradient-[137deg] py-[66px] justify-center px-0 lg:px-8 xl:px-0 mt-[200px]'>
        <div className='justify-between flex xl:flex-row flex-col gap-y-[100px] px-8 lg:px-0 m-auto max-w-7xl items-start'>
            <img src="./fm-full-2.png" className='w-[138px] h-[43px]' />
            <div className='gap-y-5 flex flex-col'>
                <p className='text-white/80 text-[20px] leading-[24px]'>Сервис</p>
                <a onClick={() => navigate('/subscription-cancellation') & window.scrollTo(0, 0)} target='_blank' className='font-semibold text-[20px] leading-[24px] cursor-pointer'>Отменить подписку</a>
                <a href={"assets/docs/tariff.pdf"} download className='font-semibold text-[20px] leading-[24px]'>Тарифы</a>
            </div>
            <div className='gap-y-5 flex flex-col'>
                <p className='text-white/80 text-[20px] leading-[24px]'>Документы</p>
                <a href={"assets/docs/oferta.pdf"} download className='font-semibold text-[20px] leading-[24px]'>Договор оферты</a>
                <a href={"assets/docs/policy.pdf"} download className='font-semibold text-[20px] leading-[24px]'>Политика конфиденциальности</a>
            </div>
            <div className='gap-y-5 flex flex-col'>
                <p className='text-white/80 text-[20px] leading-[24px]'>ИП: Стаценко В.А.</p>
                <p className='text-white/80 text-[20px] leading-[24px]'>ИНН: 682907120244</p>
                <p className='text-white/80 text-[20px] leading-[24px]'>ОГРНИП: 323680000029697</p>
                <p className='text-white/80 text-[20px] leading-[24px]'>help.fitmission@gmail.com</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer