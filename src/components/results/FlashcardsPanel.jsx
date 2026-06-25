import { useState } from "react";

export default function FlashcardsPanel({ report }) {
    const cards = report?.flashcards || [];

    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    if (cards.length === 0) {
        return (
            <>
                <h2>Flashcards</h2>
                <p>No flashcards available.</p>
            </>
        );
    }

    const card = cards[index];

    function flipCard() {
        setShowAnswer((prev) => !prev);
    }

    function nextCard() {
        setShowAnswer(false);
        setIndex((prev) => prev + 1);
    }

    function restartCards() {
        setShowAnswer(false);
        setIndex(0);
    }

    if (index >= cards.length) {
        return (
            <>
                <h2>Flashcards completed</h2>

                <p style={{ marginTop: "12px", color: "var(--ink-soft)" }}>
                    You reviewed all {cards.length} flashcards.
                </p>

                <button
                    type="button"
                    onClick={restartCards}
                    style={{
                        marginTop: "20px",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        background: "var(--olive)",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Review Again
                </button>
            </>
        );
    }

    return (
        <>
            <h2>Flashcards</h2>

            <p style={{ marginTop: "8px", color: "var(--ink-soft)" }}>
                Card {index + 1} of {cards.length}
            </p>

            <div
                role="button"
                tabIndex={0}
                onClick={flipCard}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        flipCard();
                    }
                }}
                style={{
                    marginTop: "20px",
                    width: "100%",
                    minHeight: "230px",
                    perspective: "1200px",
                    cursor: "pointer",
                    outline: "none",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        minHeight: "230px",
                        transformStyle: "preserve-3d",
                        transition: "transform 0.6s ease",
                        transform: showAnswer
                            ? "rotateY(180deg)"
                            : "rotateY(0deg)",
                    }}
                >
                    {/* Front */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            minHeight: "230px",
                            padding: "36px",
                            background: "white",
                            border: "3px solid var(--line)",
                            outline: "1px solid rgba(0, 0, 0, 0.08)",
                            borderRadius: "18px",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            display: "grid",
                            placeItems: "center",
                            textAlign: "center",
                            boxShadow: "0 16px 36px rgba(0, 0, 0, 0.12)",
                            boxSizing: "border-box",
                            overflow: "hidden",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "var(--olive)",
                                    marginBottom: "14px",
                                }}
                            >
                                Question
                            </div>

                            <div
                                style={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    lineHeight: 1.5,
                                }}
                            >
                                {card.q}
                            </div>
                        </div>
                    </div>

                    {/* Back */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            minHeight: "230px",
                            padding: "36px",
                            background: "white",
                            border: "3px solid var(--line)",
                            outline: "1px solid rgba(0, 0, 0, 0.08)",
                            borderRadius: "18px",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                            display: "grid",
                            placeItems: "center",
                            textAlign: "center",
                            boxShadow: "0 16px 36px rgba(0, 0, 0, 0.12)",
                            boxSizing: "border-box",
                            overflow: "hidden",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    fontSize: "12px",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    color: "var(--olive)",
                                    marginBottom: "14px",
                                }}
                            >
                                Answer
                            </div>

                            <div
                                style={{
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    lineHeight: 1.5,
                                }}
                            >
                                {card.a}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "24px",
                    flexWrap: "wrap",
                }}
            >
                <button
                    type="button"
                    onClick={flipCard}
                    style={{
                        padding: "12px 20px",
                        borderRadius: "12px",
                        background: "white",
                        border: "1px solid var(--line)",
                        color: "var(--ink)",
                        cursor: "pointer",
                    }}
                >
                    {showAnswer ? "Show Question" : "Show Answer"}
                </button>

                <button
                    type="button"
                    onClick={nextCard}
                    style={{
                        padding: "12px 20px",
                        borderRadius: "12px",
                        background: "var(--olive)",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    {index === cards.length - 1
                        ? "Finish Flashcards"
                        : "Next Card"}
                </button>
            </div>
        </>
    );
}