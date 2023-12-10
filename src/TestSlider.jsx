import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function TestSlider() {

    const dataSlider = [
        {name: "Александра", age: "36 лет", title: "Fit Mission молодцы!!!", text: "Ребята, верьте или нет но FitMission просто кудесники!!! Они меня поражает своим мастерством... Питание которое они мне составляют это просто вкуснятина и при этом килограммы тают на глазах!!Спасибо большое )))Благодаря Вам мечты сбываются)))"},
        {name: "Анастасия", age: "34 года", title: "Ребята очень выручили....", text: "Много писать не буду. Просто хочу поблагодорить ФитМишн, за то что помогли мне стать стройной и красивой женщиной. Я не думала что уже смогу когда-то такой быть. Спасибо!"},
        {name: "Елена", age: "27 лет", title: "Большое спасибо вам!", text: "Хочу сказать, что похудеть можно и очень хорошо, если следовать советам сайта. Поверьте, если вы будете худеть самостоятельно, без контроля специалиста у вас вряд ли что-то получиться, ведь можно и вред своему организму нанести. А если, под присмотром специалиста худеть, то и результат будет соответственный и можно не волноваться за свой организм."},
        {name: "Наталья", age: "45 лет", title: "Fit Спасибо", text: "Хочу выразить свою благодарность сайту, за то что помогли мне сбросить лишний вес. Я так мучалась с ним, муж говорил что если так будет дальше, то уйду. Нервы уже были на исходе, сил не было, я опустила руки, надежда пропала. Никак не хватало силы воли на то чтобы перестать есть жирную и сладкую пищу. Случайно найдя этот сайт, я прошла опрос и мне начали присылать рационы с рекомендациями. В итоге -20 кг. Счастью не было предела. Без особых усилий, типичных голодовок, я быстро похудела. Муж доволен,я,дети. Еще раз спасибо!!!"},
        {name: "Оксана", age: "29 лет", title: "Это лучшее,что со мной было", text: "Я проходила курс вместе с подругой и результаты нас очень порадовали. Я даже не думала что смогу так сильно похудеть при этом питаясь сытно, но правильно. Теперь данное питание вошло в мой стиль жизни. Девочки пробуйте, не бойтесь, программа шикарна."},
    ]

    return(
        <section className='lg:mx-auto max-w-md sm:max-w-2xl min-[1152px]:max-w-7xl mx-[1.5rem]'>
            <Swiper
        modules={[Pagination, Navigation]}
        loop={false}
        navigation
        spaceBetween={5}
        slidesPerView={1}
        initialSlide={1}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        breakpoints={{
          690: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          750: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1420: {
            slidesPerView: 3,
            spaceBetween: 65,
          },
        }}
        className="carousel"
      >
        {dataSlider.map((data, index) => {
          return (
            <SwiperSlide key={index}>
            <div className="max-w-[260px] lg:max-w-[350px] gap-y-[23px] justify-between flex flex-col bg-gradient-[140deg] from-[#070707] to-[#070707]/0 rounded-[30px] lg:rounded-[40px] px-[23px] lg:px-8 pt-10 pb-[30px] lg:pb-[53px]">
                <div className="flex flex-col gap-y-4">
                    <h2 className="text-[15px] lg:text-[20px] font-semibold text-white/90 leading-[21px] lg:leading-[28px] tracking-[-0.15px] lg:tracking-[0.2px]">{data.title}</h2>
                    <p className="text-[12px] lg:text-[16px] min-h-[216px] lg:min-h-[288px] font-medium text-white/80 leading-[150%]">{data.text}</p>
                </div>
                <div className="flex flex-col justify-end flex-grow">
                    <h2 className="text-[15px] lg:text-[20px] font-semibold text-white/90 leading-[21px] lg:leading-[28px] tracking-[-0.15px] lg:tracking-[0.2px]">{data.name}</h2>
                    <p className="text-[12px] lg:text-[16px] font-medium text-white/80 leading-[150%]">{data.age}</p>
                </div>
            </div>
        </SwiperSlide>
          );
        })}
      </Swiper>
        </section>
    )
}