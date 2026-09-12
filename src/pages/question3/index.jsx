const foodsByPlace = {
    "🍕 رستوران": [
        "🍕 پیتزا",
        "🍔 برگر",
        "🍝 پاستا",
        "🥩 استیک",
        "🍗 مرغ سوخاری",
        "🦐 سوشی",
    ],

    "☕ کافه": [
        "☕ قهوه",
        "🍰 کیک",
        "🍓 چیزکیک",
        "🍦 بستنی",
        "🥞 پنکیک",
        "🍫 هات‌چاکلت",
    ],

    "🎬 سینما": [
        "🍿 پاپ‌کورن",
        "🥤 نوشابه",
        "🌮 ناچو",
        "🍫 شکلات",
        "🍟 سیب‌زمینی",
        "🧃 آبمیوه",
    ],

    "🌳 پارک": [
        "🍦 بستنی",
        "☕ قهوه",
        "🧃 آبمیوه",
        "🍵 چای",
        "🍟 سیب‌زمینی",
        "🍿 پاپ‌کورن",
    ],
};

function QuestionThree({ value, onAnswer, onNext, onBack, place }) {
    const foods = foodsByPlace[place] || [];

    return (
        <section className="w-full max-w-xl">
            <div className="mb-8 text-center">
                <span className="text-5xl">🍴</span>

                <h2 className="mt-5 text-3xl font-black">
                    خب حالا چی سفارش بدیم؟
                </h2>

                <p className="mt-2 text-white/40">
                    برای {place} چی می‌چسبه؟ 😌
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {foods.map((food) => (
                    <button
                        key={food}
                        onClick={() => onAnswer(food)}
                        className={`
                            rounded-2xl
                            border
                            p-5
                            text-left
                            transition-all
                            duration-200
                            hover:-translate-y-1
                            ${
                                value === food
                                    ? "border-white bg-white text-black shadow-lg"
                                    : "border-white/10 bg-white/5 hover:bg-white/10"
                            }
                        `}
                    >
                        {food}
                    </button>
                ))}
            </div>

            <div className="mt-8 flex justify-between">
                <button
                    onClick={onBack}
                    className="rounded-xl px-4 py-2 text-white/40 transition hover:text-white"
                >
                    ← قبلی
                </button>

                <button
                    disabled={!value}
                    onClick={onNext}
                    className="
                        rounded-xl
                        bg-white
                        px-6
                        py-2
                        font-bold
                        text-black
                        transition
                        hover:scale-105
                        disabled:cursor-not-allowed
                        disabled:opacity-30
                    "
                >
                    بعدی →
                </button>
            </div>
        </section>
    );
}

export default QuestionThree;
