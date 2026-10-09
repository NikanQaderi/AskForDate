import { useEffect, useState } from "react";
import { getPlaces } from "../../core/services/place";
const placeEmojis = {
    resturant: "🍕",
    restaurant: "🍕",
    caffee: "☕",
    cafe: "☕",
    cinema: "🎬",
    park: "🌳",
};

const placeLabels = {
    resturant: "رستوران",
    restaurant: "رستوران",
    caffee: "کافه",
    cafe: "کافه",
    cinema: "سینما",
    park: "پارک",
};

function QuestionTwo({ value, onAnswer, onNext, onBack }) {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPlaces() {
            try {
                setLoading(true);
                setError("");

                const data = await getPlaces();

                const questions =
                    data.questions?.flatMap(
                        (phase) => phase.question_list ?? [],
                    ) ?? [];

                const formattedPlaces = questions.map((place) => ({
                    id: place.id,
                    text: place.text,
                    label: placeLabels[place.text.toLowerCase()] ?? place.text,
                    emoji: placeEmojis[place.text.toLowerCase()] ?? "📍",
                }));

                setPlaces(formattedPlaces);
            } catch (err) {
                console.error("Error fetching places:", err);
                setError("دریافت مکان‌ها با خطا مواجه شد.");
            } finally {
                setLoading(false);
            }
        }

        loadPlaces();
    }, []);

    return (
        <section className="w-full max-w-xl">
            <div className="mb-8 text-center">
                <span className="text-5xl">💕 خب خانم خوشگله</span>

                <h2 className="mt-5 text-3xl font-black">
                    اول از همه کجا بریم زیبا
                </h2>

                <p className="mt-2 text-white/40">شما انتخاب کن پرنسس</p>
            </div>

            {loading ? (
                <p className="text-center text-white/60">
                    داریم مکان‌ها رو میاریم... 💕
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
            ) : (
                <div className="grid grid-cols-2 gap-3">
                    {places.map((place) => {
                        const answer = `${place.emoji} ${place.label}`;

                        return (
                            <button
                                key={place.id}
                                onClick={() => onAnswer(answer, place.id)}
                                className={`rounded-2xl border p-5 text-left transition ${
                                    value === answer
                                        ? "border-white bg-white text-black"
                                        : "border-white/10 bg-white/5 hover:bg-white/10"
                                }`}
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
                    className="rounded-xl px-4 py-2 text-white/40 hover:text-white"
                >
                    ← قبلی
                </button>

                <button
                    disabled={!value || loading || !!error}
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
