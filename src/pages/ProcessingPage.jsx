import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateStudyKit } from "../api/playground";
import { LECTURE } from "../data/lecture";

const STEPS = [
    "Uploading audio",
    "Transcribing audio",
    "Detecting key concepts",
    "Writing detailed notes",
    "Building flashcards and quiz",
    "Preparing results",
];

function getStepFromProgress(progress) {
    if (progress < 17) return 0;
    if (progress < 34) return 1;
    if (progress < 51) return 2;
    if (progress < 68) return 3;
    if (progress < 85) return 4;
    return 5;
}

export default function ProcessingPage({ file, setReport }) {
    const navigate = useNavigate();
    const [pct, setPct] = useState(0);
    const [error, setError] = useState("");

    const step = getStepFromProgress(pct);

    useEffect(() => {
        if (!file) {
            navigate("/");
            return;
        }

        let progressTimer;

        async function runGeneration() {
            try {
                progressTimer = setInterval(() => {
                    setPct((prev) => {
                        if (prev >= 92) return prev;
                        return prev + 2;
                    });
                }, 700);

                if (file.isSample) {
                    await new Promise((resolve) => setTimeout(resolve, 2500));
                    clearInterval(progressTimer);

                    setReport(LECTURE);
                    setPct(100);

                    setTimeout(() => {
                        navigate("/results");
                    }, 600);

                    return;
                }

                const data = await generateStudyKit(file);

                clearInterval(progressTimer);

                if (data?.report) {
                    setReport(data.report);
                }

                setPct(100);

                setTimeout(() => {
                    navigate("/results");
                }, 600);
            } catch (err) {
                clearInterval(progressTimer);
                console.error(err);
                setError("Unable to generate the study kit. Please try again.");
            }
        }

        runGeneration();

        return () => clearInterval(progressTimer);
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
                    {STEPS.map((s, i) => {
                        const isActive = i === step;
                        const isDone = i < step;

                        return (
                            <div
                                key={s}
                                style={{
                                    padding: "10px",
                                    marginBottom: "8px",
                                    borderRadius: "12px",
                                    background: isActive
                                        ? "var(--chip)"
                                        : "transparent",
                                    color: isDone
                                        ? "var(--ink-soft)"
                                        : "var(--ink)",
                                    fontWeight: isActive ? 700 : 500,
                                }}
                            >
                                {isDone ? "Completed: " : ""}
                                {s}
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}