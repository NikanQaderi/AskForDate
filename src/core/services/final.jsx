import { FetchClient } from "./api";

export function submitFinalAnswers({ phase_one, phase_two, phase_date }) {
    return FetchClient("/finalize-list/set", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            phase_one,
            phase_two,
            phase_date,
        }),
    });
}
