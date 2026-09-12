// Footer.jsx

import { useRef, useState } from "react";

function Footer() {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState(null);

    function moveButton() {
        const button = buttonRef.current;

        if (!button) return;

        const { width, height } = button.getBoundingClientRect();

        const maxX = window.innerWidth - width;
        const maxY = window.innerHeight - height;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        setPosition({
            x: Math.max(0, Math.min(x, maxX)),
            y: Math.max(0, Math.min(y, maxY)),
        });
    }

    return (
        <footer className="relative flex w-full justify-center">
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    className="
                        h-12
                        rounded-2xl
                        bg-white
                        px-6
                        font-semibold
                        text-zinc-900
                        shadow-lg
                        transition
                        duration-200
                        hover:-translate-y-1
                        hover:shadow-xl
                        active:scale-95
                    "
                >
                    چرا که نه؟ ❤️
                </button>

                <button
                    ref={buttonRef}
                    type="button"
                    onClick={moveButton}
                    style={
                        position
                            ? {
                                  position: "fixed",
                                  left: `${position.x}px`,
                                  top: `${position.y}px`,
                                  zIndex: 999999,
                              }
                            : {}
                    }
                    className="
                        h-12
                        whitespace-nowrap
                        rounded-2xl
                        border border-red-300/20
                        bg-red-500
                        px-6
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-red-500/20
                        transition-all
                        duration-300
                        hover:bg-red-600
                        active:scale-95
                    "
                >
                    نههههههه 😭
                </button>
            </div>
        </footer>
    );
}

export default Footer;
