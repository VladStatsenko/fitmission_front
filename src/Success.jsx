function Success() {
    return(
        <>
            <h1 className="max-w-3xl w-full m-auto font-bold text-emerald-500">Ваш план питания был отправлен на почту! 📨</h1>
            <div className="relative my-4 italic text-zinc-500 text-justify leading-7 indent-6 max-w-3xl w-full m-auto before:absolute before:h-full before:w-1 before:bg-emerald-500 before:rounded-full">
                <div className="ml-6">
                    <p>Дорогой пользователь,</p>
                    <p>
                        Впереди вас ждут удивительные перемены, и вы на верном пути к достижению идеальной формы и здоровья. FitMission создал для вас не просто план питания, а настоящее путешествие к лучшей версии себя. Помните, что каждый шаг, который вы предпримете, приближает вас к цели.
                    </p>

                    <p>
                        Не позволяйте маленьким неудачам отвлечь вас от своей цели. Просто продолжайте двигаться вперед, ведь успех складывается из множества маленьких, но верных решений.
                    </p>

                    <p>
                        И помните, что вы не одиноки на этом пути. Весь коллектив FitMission поддерживает вас, верит в вас и гордится каждым вашим достижением. Поделитесь своими успехами, задайте вопросы, найдите вдохновение у тех, кто уже прошел этот путь.
                    </p>

                    <p>
                        Поверьте, вы способны на большее, чем вы можете себе представить. Следуйте плану питания FitMission с уверенностью и верой в себя, и вы обязательно достигнете своей цели.
                    </p>
                    
                    <p>С уважением,</p>
                    <p>Команда <span className="text-emerald-500">FitMission</span></p>
                </div>
            </div>
            <img className="max-w-3xl w-full m-auto rounded-lg" src='./meal_plan.jpg' />
        </>
    )
}

export default Success