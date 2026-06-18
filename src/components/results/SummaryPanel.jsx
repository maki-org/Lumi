import { LECTURE } from "../../data/lecture";

export default function SummaryPanel() {
    return (
        <>
            <h2>Summary</h2>

            <ul>
                {LECTURE.summary.map((point) => (
                    <li key={point}>{point}</li>
                ))}
            </ul>
        </>
    );
}