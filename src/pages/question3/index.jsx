import { useEffect, useState } from "react";
import { getFoods } from "../../core/services/food";
const foodDetails = {
    pizza: { label: "پیتزا", emoji: "🍕" },
    burgur: { label: "برگر", emoji: "🍔" },
    pasta: { label: "پاستا", emoji: "🍝" },
    steak: { label: "استیک", emoji: "🥩" },
    fried_chiken: { label: "مرغ سوخاری", emoji: "🍗" },
    coffee: { label: "قهوه", emoji: "☕" },
    cake: { label: "کیک", emoji: "🍰" },
    cheese_cake: { label: "چیزکیک", emoji: "🍓" },
    ice_cream: { label: "بستنی", emoji: "🍦" },
    pancake: { label: "پنکیک", emoji: "🥞" },
    hot_chocolate: { label: "هات‌چاکلت", emoji: "🍫" },

    popcorn: { label: "پاپ‌کورن", emoji: "🍿" },
    pop_corn: { label: "پاپ‌کورن", emoji: "🍿" },
    soda: { label: "نوشابه", emoji: "🥤" },
    nacho: { label: "ناچو", emoji: "🌮" },
    chocolate: { label: "شکلات", emoji: "🍫" },
    deep_fries: { label: "سیب‌زمینی", emoji: "🍟" },
    fry: { label: "سیب‌زمینی", emoji: "🍟" },
    fruit_juice: { label: "آبمیوه", emoji: "🧃" },
    tea: { label: "چای", emoji: "🍵" },
};

const placeIdRanges = {
    "🍕 رستوران": [1, 5],
    "☕ کافه": [6, 11],
    "🎬 سینما": [12, 17],
    "🌳 پارک": [18, 23],
};

function QuestionThree({ value, onAnswer, onNext, onBack, place }) {
    const [allFoods, setAllFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadFoods() {
            try {
                setLoading(true);
                setError("");

                const data = await getFoods();

                const foods =
                    data.questions?.flatMap(
                        (phase) => phase.question_list ?? [],
                    ) ?? [];

                setAllFoods(foods);
            } catch (err) {
                console.error("Error fetching foods:", err);
                setError("دریافت غذاها با خطا مواجه شد.");
            } finally {
                setLoading(false);
            }
        }

        loadFoods();
    }, []);

    const idRange = placeIdRanges[place];

    const foods = idRange
        ? allFoods
              .filter((food) => food.id >= idRange[0] && food.id <= idRange[1])
              .map((food) => {
                  const details = foodDetails[food.food];

                  return {
                      id: food.id,
                      text: food.food,
                      label: details?.label ?? food.food,
                      emoji: details?.emoji ?? "🍴",
                  };
              })
        : [];

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

            {loading ? (
                <p className="text-center text-white/50">
                    داریم منو رو آماده می‌کنیم... 🍽️
                </p>
            ) : error ? (
                <div className="text-center">
                    <p className="text-red-400">{error}</p>

                    <button
                        onClick={() => window.location.reload()}
                        className="mt-3 rounded-xl bg-white px-4 py-2 text-black"
                    >
                        تلاش مجدد
                    </button>
                </div>
            ) : foods.length === 0 ? (
                <p className="text-center text-white/50">
                    برای این مکان غذایی پیدا نشد.
                </p>
            ) : (
                <div className="grid grid-cols-2 gap-3">
                    {foods.map((food) => {
                        const answer = `${food.emoji} ${food.label}`;

                        return (
                            <button
                                key={food.id}
                                onClick={() => onAnswer(answer, food.id)}
                                className={`
                                rounded-2xl
                                border
                                p-5
                                text-left
                                transition-all
                                duration-200
                                hover:-translate-y-1
                                ${
                                    value === answer
                                        ? "border-white bg-white text-black shadow-lg"
                                        : "border-white/10 bg-white/5 hover:bg-white/10"
                                }
                            `}
                            >
                                {answer}
                            </button>
                        );
                    })}
                </div>
            )}

            <div className="mt-8 flex justify-between">
                <button
                    onClick={onBack}
                    className="rounded-xl px-4 py-2 text-white/40 transition hover:text-white"
                >
                    ← قبلی
                </button>

                <button
                    disabled={
                        !value || loading || !!error || foods.length === 0
                    }
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
