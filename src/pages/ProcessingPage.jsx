import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const STEPS = [
    "Transcribing audio",
    "Detecting key concepts",
    "Writing detailed notes",
    "Extracting formulas & definitions",
    "Sketching diagrams",
    "Building flashcards & quiz",
];

export default function ProcessingPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [pct, setPct] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPct((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);

                    setTimeout(() => {
                        navigate("/results");
                    }, 500);

                    return 100;
                }
                return prev + 1;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const currentStep = Math.floor((pct / 100) * STEPS.length);
        setStep(Math.min(currentStep, STEPS.length - 1));
    }, [pct]);

    return (
        <main
            style={{
                height: "100vh",
                display: "grid",
                placeItems: "center",
                padding: "40px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "600px",
                }}
            >
                <h1>Building your study kit</h1>

                <div
                    style={{
                        height: "12px",
                        background: "#ddd",
                        borderRadius: "999px",
                        marginTop: "20px",
                        overflow: "hidden",
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: `${pct}%`,
                            background: "var(--olive)",
                        }}
                    />
                </div>

                <p>{pct}%</p>

                <div style={{ marginTop: "20px" }}>
                    {STEPS.map((s, i) => (
                        <div
                            key={s}
                            style={{
                                padding: "10px",
                                marginBottom: "8px",
                                borderRadius: "12px",
                                background:
                                    i === step ? "var(--chip)" : "transparent",
                            }}
                        >
                            {s}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}