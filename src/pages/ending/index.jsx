import { useMemo } from "react";

function QuestionFour({ value, onAnswer, onNext, onBack }) {
    const dates = useMemo(() => {
        const result = [];
        const today = new Date();

        for (let i = 1; i <= 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            const value = date.toISOString().split("T")[0];

            result.push({
                value,
                day: date.toLocaleDateString("fa-IR", {
                    weekday: "short",
                }),
                number: date.toLocaleDateString("fa-IR", {
                    day: "numeric",
                }),
                month: date.toLocaleDateString("fa-IR", {
                    month: "short",
                }),
            });
        }

        return result;
    }, []);

    return (
        <section className="w-full max-w-xl text-center">
            <div className="mb-8">
                <div
                    className="
                        mx-auto mb-5
                        flex h-20 w-20
                        items-center justify-center
                        rounded-[28px]
                        bg-pink-500/10
                        text-4xl
                        shadow-inner
                    "
                >
                    🥺
                </div>

                <h2 className="text-3xl font-black tracking-tight">
                    حالا کی بریم؟
                </h2>

                <p className="mt-3 text-sm text-white/40">
                    یه روز برای خودمون انتخاب کن 💕
                </p>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
                {dates.map((date) => {
                    const selected = value === date.value;

                    return (
                        <button
                            key={date.value}
                            type="button"
                            onClick={() => onAnswer(date.value)}
                            className={`
                                group
                                relative
                                flex
                                min-h-[100px]
                                flex-col
                                items-center
                                justify-center
                                gap-1
                                rounded-2xl
                                border
                                transition-all
                                duration-200
                                active:scale-95

                                ${
                                    selected
                                        ? `
                                            border-pink-300
                                            bg-pink-300
                                            text-pink-950
                                            shadow-lg
                                            shadow-pink-500/20
                                            -translate-y-1
                                        `
                                        : `
                                            border-white/10
                                            bg-white/5
                                            text-white
                                            hover:-translate-y-1
                                            hover:bg-white/10
                                        `
                                }
                            `}
                        >
                            <span className="text-xs opacity-50">
                                {date.day}
                            </span>

                            <span className="text-2xl font-black">
                                {date.number}
                            </span>

                            <span className="text-xs opacity-50">
                                {date.month}
                            </span>

                            {selected && (
                                <span className="absolute -right-1 -top-2 text-lg">
                                    💗
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Selected date */}
            <div
                className={`
                    mt-6
                    rounded-2xl
                    border
                    px-5 py-4
                    transition-all
                    duration-300

                    ${
                        value
                            ? "border-pink-300/20 bg-pink-300/10"
                            : "border-white/5 bg-white/[0.03]"
                    }
                `}
            >
                {value ? (
                    <p className="text-sm">
                        پس قرارمون برای{" "}
                        <span className="font-bold text-pink-200">
                            {new Date(value + "T00:00:00").toLocaleDateString(
                                "fa-IR",
                                {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                },
                            )}
                        </span>{" "}
                        باشه؟ 🥹💕
                    </p>
                ) : (
                    <p className="text-sm text-white/30">
                        هنوز یه تاریخ انتخاب نکردی... 🥺
                    </p>
                )}
            </div>

            <div className="mt-8 flex items-center justify-between">
                <button
                    type="button"
                    onClick={onBack}
                    className="
                        rounded-xl
                        px-4 py-2
                        text-sm
                        text-white/40
                        transition
                        hover:bg-white/5
                        hover:text-white
                    "
                >
                    ← قبلی
                </button>

                <button
                    type="button"
                    disabled={!value}
                    onClick={onNext}
                    className="
                        rounded-2xl
                        bg-pink-300
                        px-6 py-3
                        font-bold
                        text-pink-950
                        shadow-lg
                        shadow-pink-500/10
                        transition-all
                        duration-200
                        hover:-translate-y-1
                        hover:bg-pink-200
                        active:scale-95
                        disabled:cursor-not-allowed
                        disabled:opacity-30
                    "
                >
                    تموم شد ✨
                </button>
            </div>
        </section>
    );
}

export default QuestionFour;
