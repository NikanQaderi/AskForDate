import { useRef, useState } from "react";

function QuestionOne({ onNext, onAnswer }) {
    const noButtonRef = useRef(null);
    const [position, setPosition] = useState(null);

    function moveNoButton() {
        const button = noButtonRef.current;

        if (!button) return;

        const { width, height } = button.getBoundingClientRect();

        const maxX = window.innerWidth - width;
        const maxY = window.innerHeight - height;

        setPosition({
            x: Math.max(0, Math.random() * maxX),
            y: Math.max(0, Math.random() * maxY),
        });
    }

    function accept() {
        onAnswer(true);
        onNext();
    }

    return (
        <section className="w-full max-w-xl text-center">
            <div className="mb-10">
                <div className="mb-6 text-6xl">👀</div>

                <h2 className="text-3xl font-black  sm:text-3xl">
                    میتونم یه شانس کوچیک برای آشنایی داشته باشم؟
                </h2>

                <p className="mt-4 text-white/40"> :D فقط یک قرار ساده</p>
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={accept}
                    className="rounded-2xl bg-white px-7 py-3 font-bold text-black transition hover:scale-105 active:scale-95"
                >
                    بزن بریم . پایم
                </button>

                <button
                    ref={noButtonRef}
                    onClick={moveNoButton}
                    style={
                        position
                            ? {
                                  position: "fixed",
                                  left: position.x,
                                  top: position.y,
                                  zIndex: 9999,
                              }
                            : undefined
                    }
                    className="rounded-2xl border border-white/10 bg-white/10 px-7 py-3 font-bold backdrop-blur-xl transition-all duration-300"
                >
                    نه بابا برو حال داری
                </button>
            </div>
        </section>
    );
}

export default QuestionOne;
