import { DiaryContext } from "../context/diaryContext";
import { useContext } from "react";

export default function useDiaryContext() {
    const context = useContext(DiaryContext)

    if (!context) {
        throw Error("useDiaryContext must be used inside a DiaryContextProvider")
    }

    return context
}