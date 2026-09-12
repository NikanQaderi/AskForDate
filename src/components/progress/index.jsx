function Progress({ step }) {
    return (
        <div className="mx-auto mt-8 w-full max-w-md">
            <div className="mb-3 flex justify-between text-xs text-white/40">
                <span>{step * 25}%</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                    className="h-full rounded-full bg-white transition-all duration-500"
                    style={{ width: `${step * 25}%` }}
                />
            </div>
        </div>
    );
}

export default Progress;
