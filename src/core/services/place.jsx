import { FetchClient } from "./api";

export function getPlaces() {
    return FetchClient("/question-list/places");
}
