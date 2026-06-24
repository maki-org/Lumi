import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateStudyKit } from "../api/playground";

const STEPS = [
    "Uploading audio",
    "Transcribing audio",
    "Detecting key concepts",
    "Writing detailed notes",
    "Building flashcards & quiz",
    "Preparing results",
];

export default function ProcessingPage({ file, setReport }) {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [pct, setPct] = useState(0);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!file) {
            navigate("/");
            return;
        }

        async function runGeneration() {
            try {
                const fakeProgress = setInterval(() => {
                    setPct((prev) => Math.min(prev + 3, 92));
                    setStep((prev) => Math.min(prev + 1, STEPS.length - 1));
                }, 900);

                let data;

                if (file.isSample) {
                    await new Promise((resolve) => setTimeout(resolve, 2500));
                    data = null;
                } else {
                    data = await generateStudyKit(file);
                }

                clearInterval(fakeProgress);

                if (data?.report) {
                    setReport(data.report);
                }

                setPct(100);
                setStep(STEPS.length - 1);

                setTimeout(() => {
                    navigate("/results");
                }, 600);
            } catch (err) {
                console.error(err);
                setError("Something went wrong while generating the study kit.");
            }
        }

        runGeneration();
    }, [file, navigate, setReport]);

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

                {error && (
                    <div
                        style={{
                            marginTop: "16px",
                            padding: "12px",
                            borderRadius: "12px",
                            background: "var(--wrong-soft)",
                            color: "var(--wrong)",
                            fontWeight: 700,
                        }}
                    >
                        {error}
                    </div>
                )}

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
                            transition: "width 0.3s ease",
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