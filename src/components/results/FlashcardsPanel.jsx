import { useState } from "react";
import { LECTURE } from "../../data/lecture";

export default function FlashcardsPanel() {
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const cards = LECTURE.flashcards;
    const card = cards[index];

    function nextCard() {
        setShowAnswer(false);
        setIndex((prev) => (prev + 1) % cards.length);
    }

    return (
        <>
            <h2>Flashcards</h2>

            <div
                onClick={() => setShowAnswer(!showAnswer)}
                style={{
                    marginTop: "20px",
                    padding: "32px",
                    background: "white",
                    borderRadius: "16px",
                    border: "1px solid var(--line)",
                    cursor: "pointer",
                    minHeight: "150px",
                    display: "grid",
                    placeItems: "center",
                    textAlign: "center",
                    fontWeight: 600,
                }}
            >
                {showAnswer ? card.a : card.q}
            </div>

            <p style={{ marginTop: "10px", color: "var(--ink-soft)" }}>
                Click the card to flip it.
            </p>

            <button
                onClick={nextCard}
                style={{
                    marginTop: "16px",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    background: "var(--olive)",
                    color: "white",
                }}
            >
                Next Card
            </button>
        </>
    );
}