import { useState } from "react";

import Header from "../components/header";
import Progress from "../components/Progress";
import QuestionOne from "./question1";
import QuestionTwo from "./question2";
import QuestionThree from "./question3";
import QuestionFour from "./ending";
import Final from "./final";
function Main() {
    const [step, setStep] = useState(1);

    const [answers, setAnswers] = useState({
        accepted: false,
        place: "",
        food: "",
        date: "",
    });

    function updateAnswer(key, value) {
        setAnswers((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function nextStep() {
        setStep((prev) => prev + 1);
    }

    function previousStep() {
        setStep((prev) => Math.max(prev - 1, 1));
    }

    function renderStep() {
        switch (step) {
            case 1:
                return (
                    <QuestionOne
                        onNext={nextStep}
                        onAnswer={(value) => updateAnswer("accepted", value)}
                    />
                );

            case 2:
                return (
                    <QuestionTwo
                        value={answers.place}
                        onAnswer={(value) => updateAnswer("place", value)}
                        onNext={nextStep}
                        onBack={previousStep}
                    />
                );

            case 3:
                return (
                    <QuestionThree
                        value={answers.food}
                        place={answers.place}
                        onAnswer={(value) => updateAnswer("food", value)}
                        onNext={nextStep}
                        onBack={previousStep}
                    />
                );

            case 4:
                return (
                    <QuestionFour
                        value={answers.date}
                        onAnswer={(value) => updateAnswer("date", value)}
                        onNext={nextStep}
                        onBack={previousStep}
                    />
                );

            case 5:
                return <Final answers={answers} />;

            default:
                return null;
        }
    }

    return (
        <main className="min-h-screen bg-[#09090b] text-white">
            <div className="relative min-h-screen overflow-hidden">
                <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />

                <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-pink-600/20 blur-[120px]" />

                <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-8">
                    <Header />

                    {step < 5 && <Progress step={step} />}

                    <div className="flex flex-1 items-center justify-center py-10">
                        {renderStep()}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
