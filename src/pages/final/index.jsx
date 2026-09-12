function Final({ answers }) {
    return (
        <section className="w-full max-w-xl text-center">
            <div className="mb-8 text-7xl">💌</div>

            <h2 className="text-4xl font-black">پس قرارمون قطعی شد!</h2>

            <p className="mt-3 text-white/40">دیگه راه فراری نیست 😌</p>

            <div className="mt-10 space-y-3 text-left">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs text-white/40">کجا؟</p>

                    <p className="mt-1 font-bold">{answers.place}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs text-white/40">چی بخوریم؟</p>

                    <p className="mt-1 font-bold">{answers.food}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs text-white/40">تاریخ</p>

                    <p className="mt-1 font-bold">{answers.date}</p>
                </div>
            </div>

            <div className="mt-8 text-sm text-white/30">See you there ❤️</div>
        </section>
    );
}

export default Final;
