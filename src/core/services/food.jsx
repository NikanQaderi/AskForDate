import { FetchClient } from "./api";

export function getFoods() {
    return FetchClient("/question-list/foods");
}
