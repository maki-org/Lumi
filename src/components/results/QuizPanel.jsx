import { useState } from "react";

export default function QuizPanel({ report }) {
    const questions = report?.quiz || [];

    const [questionIndex, setQuestionIndex] = useState(0);
    const [selected, setSelected] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

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

    function submitAnswer() {
        if (selected === null) return;

        if (selected === question.correct) {
            setScore((prev) => prev + 1);
        }

        setSubmitted(true);
    }

    function nextQuestion() {
        const isLastQuestion = questionIndex === questions.length - 1;

        if (isLastQuestion) {
            setIsFinished(true);
            return;
        }

        setSelected(null);
        setSubmitted(false);
        setQuestionIndex((prev) => prev + 1);
    }

    function restartQuiz() {
        setQuestionIndex(0);
        setSelected(null);
        setSubmitted(false);
        setScore(0);
        setIsFinished(false);
    }

    if (isFinished) {
        return (
            <>
                <h2>Quiz completed</h2>

                <p style={{ marginTop: "12px", color: "var(--ink-soft)" }}>
                    You scored {score} out of {questions.length}.
                </p>

                <button
                    type="button"
                    onClick={restartQuiz}
                    style={{
                        marginTop: "20px",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        background: "var(--olive)",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Restart Quiz
                </button>
            </>
        );
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
                    onClick={submitAnswer}
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
                        <strong>
                            {selected === question.correct
                                ? "Correct"
                                : "Incorrect"}
                        </strong>

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
                        {questionIndex === questions.length - 1
                            ? "Finish Quiz"
                            : "Next Question"}
                    </button>
                </>
            )}
        </>
    );
}