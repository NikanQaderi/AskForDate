const places = ["🍕 رستوران", "☕ کافه", "🎬 سینما", "🌳 پارک"];

function QuestionTwo({ value, onAnswer, onNext, onBack }) {
    return (
        <section className="w-full max-w-xl">
            <div className="mb-8 text-center">
                <span className="text-5xl">💕 خب خانم خوشگله </span>

                <h2 className="mt-5 text-3xl font-black">
                    اول از همه کجا بریم زیبا
                </h2>

                <p className="mt-2 text-white/40">شما انتخاب کن پرنسس</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {places.map((place) => (
                    <button
                        key={place}
                        onClick={() => onAnswer(place)}
                        className={`rounded-2xl border p-5 text-left transition ${
                            value === place
                                ? "border-white bg-white text-black"
                                : "border-white/10 bg-white/5 hover:bg-white/10"
                        }`}
                    >
                        {place}
                    </button>
                ))}
            </div>

            <div className="mt-8 flex justify-between">
                <button
                    onClick={onBack}
                    className="rounded-xl px-4 py-2 text-white/40 hover:text-white"
                >
                    ← قبلی
                </button>

                <button
                    disabled={!value}
                    onClick={onNext}
                    className="rounded-xl bg-white px-6 py-2 font-bold text-black disabled:cursor-not-allowed disabled:opacity-30"
                >
                    بعدی →
                </button>
            </div>
        </section>
    );
}

export default QuestionTwo;
