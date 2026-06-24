import { useState } from "react";

export default function QuizPanel({ report }) {
    const questions = report?.quiz || [];

    const [questionIndex, setQuestionIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    if (questions.length === 0) {
        return (
            <>
                <h2>Quiz</h2>
                <p>No quiz available.</p>
            </>
        );
    }

    const question = questions[questionIndex];

    function chooseAnswer(index) {
        if (submitted) return;
        setSelected(index);
    }

    function nextQuestion() {
        setSelected(null);
        setSubmitted(false);
        setQuestionIndex((prev) => (prev + 1) % questions.length);
    }

    return (
        <>
            <h2>Quiz</h2>

            <p style={{ marginTop: "8px", color: "var(--ink-soft)" }}>
                Question {questionIndex + 1} of {questions.length}
            </p>

            <p style={{ marginTop: "12px", marginBottom: "20px" }}>
                {question.q}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {question.options.map((option, index) => {
                    const isSelected = selected === index;
                    const isCorrect = submitted && index === question.correct;
                    const isWrong =
                        submitted && isSelected && index !== question.correct;

                    return (
                        <button
                            key={option}
                            type="button"
                            onClick={() => chooseAnswer(index)}
                            style={{
                                padding: "12px",
                                textAlign: "left",
                                borderRadius: "12px",
                                border: isSelected
                                    ? "2px solid var(--olive)"
                                    : "1px solid var(--line)",
                                background: isCorrect
                                    ? "var(--correct-soft)"
                                    : isWrong
                                        ? "var(--wrong-soft)"
                                        : isSelected
                                            ? "var(--chip)"
                                            : "white",
                                color: "var(--ink)",
                                cursor: submitted ? "default" : "pointer",
                                fontWeight: isSelected ? 700 : 500,
                            }}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            {!submitted ? (
                <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    disabled={selected === null}
                    style={{
                        marginTop: "20px",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        background:
                            selected === null ? "#c4ceac" : "var(--olive)",
                        color: "white",
                        cursor: selected === null ? "not-allowed" : "pointer",
                    }}
                >
                    Submit Answer
                </button>
            ) : (
                <>
                    <div
                        style={{
                            marginTop: "20px",
                            padding: "12px",
                            borderRadius: "12px",
                            background:
                                selected === question.correct
                                    ? "var(--correct-soft)"
                                    : "var(--wrong-soft)",
                        }}
                    >
                        {selected === question.correct
                            ? "✅ Correct!"
                            : "❌ Incorrect"}

                        <p style={{ marginTop: "8px" }}>
                            {question.explain}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={nextQuestion}
                        style={{
                            marginTop: "16px",
                            padding: "12px 20px",
                            borderRadius: "12px",
                            background: "var(--olive)",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Next Question
                    </button>
                </>
            )}
        </>
    );
}