import TestSlider from "./TestSlider";

function Start() {
    const hero_food = './food.png'
    const arrow_1 = './arrow_1.png'
    const arrow_2 = './arrow_2.png'
    const underline = './underline_hero.png'

    return (
        <section className="flex flex-col gap-y-[200px] px-0 lg:px-8 items-center justify-center w-full">
            {/* Hero section */}
            <div className="grid grid-flow-row gap-y-[45px] lg:gap-y-[84px] max-w-7xl w-full px-5 lg:px-0">
                <div className="w-full flex flex-col">
                    <div className="relative flex justify-center lg:justify-start">
                        <img src={arrow_1} className="absolute lg:flex hidden top-[42px] -left-20" />
                        <h1 className="uppercase font-extrabold text-[25px] lg:text-[3.125em] leading-[120px] justify-center lg:justify-start flex">простой и надежный</h1>
                    </div>
                    <div className="lg:pt-10 pt-6 lg:pb-[55px] pb-3 justify-center lg:justify-between w-full flex items-center lg:items-end">
                        <div className="lg:hidden relative justify-center flex-col flex min-w-[343px]">
                            <img src={hero_food} className="w-[240px] flex m-auto" width={0} height={0} />
                            <div className="absolute flex flex-col gap-y-12 w-full pt-10">
                            <h1 className="uppercase font-extrabold text-[25px] -right-4">твой</h1>
                            <h1 className="uppercase font-extrabold text-[25px] justify-end flex">рацион</h1>
                            </div>
                        </div>
                        <h1 className="uppercase font-extrabold text-[3.125em] leading-[120px] pb-[115px] hidden lg:flex justify-start pl-[120px]">твой</h1>
                        <img src={hero_food} className="lg:flex hidden" />
                        <div className="relative hidden lg:flex">
                            <h1 className="uppercase font-extrabold text-[3.125em] leading-[120px] pb-[115px] flex justify-end pr-[66.5px]">рацион</h1>
                            <img src={arrow_2} className="absolute -top-6 -right-16" />
                        </div>
                    </div>
                    <div className="relative flex justify-center lg:justify-end">
                        <h1 className="uppercase font-extrabold text-[25px] lg:text-[3.125em] leading-[120px]">на каждый день</h1>
                        <img src={underline} className="absolute top-[105px] hidden lg:flex" />
                        <img src="./underline_hero_mobile.png" className="lg:hidden flex absolute top-[90px]" />
                    </div>
                </div>
                <div className="m-auto justify-center">
                    <a className="text-white hover:text-white" href='/form'>
                    <button className={`flex bg-[#5B8266] font-bold text-[18px] lg:text-[25px] leading-[22px] lg:leading-[30px] uppercase px-[44px] lg:px-[65px] py-[15px] lg:py-5 rounded-[20px] cursor-pointer`}>
                        СОСТАВИТЬ РАЦИОН
                        </button>
                    </a>
                </div>
            </div>

            {/* About us section */}
            <div className="max-w-7xl grid grid-flow-row gap-y-[45px] lg:gap-y-[90px] px-10 lg:px-0 justify-center items-center m-auto" id="about_us">
                <h1 className="uppercase font-extrabold text-[25px] lg:text-[3.125em] text-center">О НАС</h1>
                <p className="text-center max-w-[987px] text-[18px] lg:text-[25px] text-white/80 whitespace-pre-line leading-[22px] lg:leading-[30px]">
                    Мы молодая компания нутриоциологов и экспертов в области правильного питания собрались вместе с целью изменить этот мир и здоровье людей в лучшую сторону. <br />
                    <br />
                    Важно понимать, что избавившись от лишнего веса ты не только делаешь свою фигуру красивее, но и улучшаешь своё здоровье. 
                </p>
                <div className="flex lg:flex-row flex-col items-center justify-center gap-x-20 gap-y-20">
                    <div className="relative flex justify-center items-center">
                        <img src="./rectangle_1.png" />
                        <div className="flex flex-col -space-y-[5px] max-w-[108px] text-center absolute">
                            <h2 className="font-bold text-[40px] leading-[49px]">1239</h2>
                            <span className="text-[15px] leading-[18px] text-white/80 font-medium">проданных курсов</span>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src="./rectangle_2.png" />
                        <div className="flex flex-col -space-y-[5px] text-center absolute h-[79px]">
                            <h2 className="font-bold text-[40px] leading-[49px]">7</h2>
                            <span className="text-[15px] leading-[18px] text-white/80 font-medium">нутрициологов</span>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src="./rectangle_3.png" />
                        <div className="flex flex-col -space-y-[5px] max-w-[108px] text-center absolute">
                            <h2 className="font-bold text-[40px] leading-[49px]">
                            15
                            </h2>
                            <span className="text-[15px] leading-[18px] text-white/80 font-medium">персональных коучей</span>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <img src="./rectangle_4.png" />
                        <div className="flex flex-col -space-y-[5px] max-w-[108px] text-center absolute">
                            <h2 className="font-bold text-[40px] leading-[49px]">
                                95%
                            </h2>
                            <span className="text-[15px] leading-[18px] text-white/80 font-medium">довольных клиентов</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our advantages section */}
            <div className="max-w-7xl px-10 lg:px-0 flex flex-col gap-y-[45px] lg:gap-y-[90px] justify-center items-center w-full" id="advantages">
                <h1 className="uppercase font-extrabold text-[25px] lg:text-[3.125em] text-center">Наши преимущества</h1>
                <p className="text-center max-w-[909px] text-[18px] lg:text-[25px] text-white/80 whitespace-pre-line leading-[22px] lg:leading-[30px]">
                FitMission использует науку и персонализацию, чтобы помочь вам похудеть и сохранить результат навсегда. Мы поможем вам лучше понять ваши отношения с едой, как быть более внимательными к своим привычкам, и дадим вам знания и поддержку, необходимые для долгосрочных изменений.
                </p>
                <div className="flex lg:flex-row flex-col gap-y-[45px] items-center justify-center relative w-full">
                    <img src="./bowl.jpg" />
                        <div className="flex flex-col gap-y-2.5 max-w-[314px] text-center items-center justify-center top-0 left-0 lg:absolute">
                            <img src="./icons/icon_1.png" />
                            <h2 className="font-bold text-white/80 text-[25px] leading-[30px]">Сбалансированное питание</h2>
                            <p className="font-medium text-white/80 text-[25px] leading-[30px]">Ешь вкусно и правильно - улучшай фигуру и здоровье</p>
                        </div>
                        <div className="flex flex-col gap-y-2.5 max-w-[314px] text-center items-center justify-center top-0 right-0 lg:absolute">
                            <img src="./icons/icon_2.png" />
                            <h2 className="font-bold text-white/80 text-[25px] leading-[30px]">Экономь деньги</h2>
                            <p className="font-medium text-white/80 text-[25px] leading-[30px]">Благодаря нашим рационам - траты на продукты сократятся на 30%</p>
                        </div>
                        <div className="flex flex-col gap-y-2.5 max-w-[314px] text-center items-center justify-center bottom-0 left-0 lg:absolute">
                            <img src="./icons/icon_3.png" />
                            <h2 className="font-bold text-white/80 text-[25px] leading-[30px]">Худей плавно и постепенно</h2>
                            <p className="font-medium text-white/80 text-[25px] leading-[30px]">В среднем за месяц уходит до 6кг жира, а это залог безопастного похудения</p>
                        </div>
                        <div className="flex flex-col gap-y-2.5 max-w-[314px] text-center items-center justify-center bottom-0 right-0 lg:absolute">
                            <img src="./icons/icon_4.png" />
                            <h2 className="font-bold text-white/80 text-[25px] leading-[30px]">Держи свой рассудок под конролем</h2>
                            <p className="font-medium text-white/80 text-[25px] leading-[30px]">Наши полезные лайфхаки помогут вашей психике легко перестроиться</p>
                        </div>
                </div>
            </div>

            {/* Our concept section */}
            <div className="max-w-7xl flex flex-col px-10 lg:px-0 gap-y-[45px] lg:gap-y-[90px] justify-center items-center w-full" id="concepts">
                <h1 className="uppercase font-extrabold text-[25px] lg:text-[3.125em] text-center">Наша концепция</h1>
                <p className="text-center max-w-[987px] text-[18px] lg:text-[25px] text-white/80 whitespace-pre-line leading-[22px] lg:leading-[30px]">Мы знаем, что путешествие по снижению веса может быть трудным. Мы его максимально облегчили, без ущерба эффективности похудения.</p>
                <div className="flex lg:flex-row gap-y-[45px] flex-col items-start justify-center gap-x-[116px]">
                    <div className="flex flex-col gap-y-10 items-center justify-center">
                        <img src="./icons/icon_big_1.png" />
                        <h2 className="font-bold text-white/80 text-[25px] leading-[30px] max-w-[314px] text-center">Не нужны вечные походы в спортзал</h2>
                    </div>
                    <div className="flex flex-col gap-y-10 items-center justify-center">
                        <img src="./icons/icon_big_2.png" />
                        <h2 className="font-bold text-white/80 text-[25px] leading-[30px] max-w-[314px] text-center">Не нужно мучать себя надоедливыми диетами</h2>
                    </div>
                    <div className="flex flex-col gap-y-10 items-center justify-center">
                        <img src="./icons/icon_big_3.png" />
                        <h2 className="font-bold text-white/80 text-[25px] leading-[30px] max-w-[314px] text-center">Не обязательно стоять по несколько часов у плиты</h2>
                    </div>
                </div>
            </div>
            
            {/* Clients */}
            <div className="max-w-7xl flex flex-col px-10 lg:px-0 gap-y-[45px] lg:gap-y-[90px] justify-center items-center w-full" id="reviews">
                    <h1 className="uppercase font-extrabold text-[25px] lg:text-[3.125em] leading-10 text-center">НАШИ КЛИЕНТЫ ЛЮБЯТ НАС</h1>
                    <p className="text-center lg:max-w-[1090px] text-[18px] lg:text-[25px] text-white/80 whitespace-pre-line w-auto leading-[22px] lg:leading-[30px]">Мы рады любой обратной связи, потому что благодаря ей мы становимся лучше <br /> Не забывайте делиться результатами работы с нами. Помните, что многие боятся этого пути, давайте покажем, что это просто.</p>
                <TestSlider />
            </div>

            <div className="flex lg:flex-row flex-col px-10 lg:px-0 gap-y-[45px] justify-between items-center w-full max-w-7xl">
                <div className="gap-y-[50px] flex flex-col order-2 lg:order-1 justify-center items-center lg:items-start">
                    <p className="text-white/80 text-[18px] lg:text-[25px] lg:text-left text-center whitespace-pre-line leading-[22px] lg:leading-[30px] max-w-[546px]">Наши персонализированные курсы простые в использовании и помогут вам укрепить уверенность с помощью инструментов, которые вы можете применить на практике в первый день.</p> 
                    <a className="text-white hover:text-white" href='/form'>
                        <button className={`flex bg-[#5B8266] font-bold text-[18px] lg:text-[25px] leading-[22px] lg:leading-[30px] uppercase px-[44px] lg:px-[65px] py-[15px] lg:py-5 rounded-[20px] cursor-pointer`}>
                        СОСТАВИТЬ РАЦИОН
                        </button>
                    </a>
                </div>
                <img src="./food_heart.png" className="order-1 lg:order-2" />
            </div>
        </section>
    )
}

export default Start