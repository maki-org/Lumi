import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function ResultsPage() {
    const [activeTab, setActiveTab] = useState("notes");

    const tabs = [
        { id: "notes", label: "Detailed Notes" },
        { id: "summary", label: "Summary" },
        { id: "definitions", label: "Definitions" },
        { id: "formulas", label: "Formulas" },
        { id: "diagrams", label: "Diagrams" },
        { id: "flashcards", label: "Flashcards" },
        { id: "quiz", label: "Quiz" },
        { id: "revision", label: "Revision" },
    ];

    const activeLabel =
        tabs.find((tab) => tab.id === activeTab)?.label || "";

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
            }}
        >
            <Sidebar />

            <main
                style={{
                    flex: 1,
                    padding: "32px",
                    overflow: "auto",
                }}
            >
                <div
                    style={{
                        background: "white",
                        border: "1px solid var(--line)",
                        borderRadius: "20px",
                        padding: "24px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "32px",
                            marginBottom: "8px",
                        }}
                    >
                        Introduction to Neural Networks
                    </h1>

                    <p
                        style={{
                            color: "var(--ink-soft)",
                        }}
                    >
                        Machine Learning • 42 min • 18 concepts
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "16px",
                            marginTop: "24px",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            style={{
                                padding: "12px 20px",
                                borderRadius: "16px",
                                background: "var(--xp-soft)",
                            }}
                        >
                            ⚡ 1250 XP
                        </div>

                        <div
                            style={{
                                padding: "12px 20px",
                                borderRadius: "16px",
                                background: "var(--flame-soft)",
                            }}
                        >
                            🔥 7 Day Streak
                        </div>

                        <div
                            style={{
                                padding: "12px 20px",
                                borderRadius: "16px",
                                background: "var(--chip)",
                            }}
                        >
                            🎯 82% Mastery
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "8px",
                            marginTop: "24px",
                            flexWrap: "wrap",
                        }}
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    padding: "10px 16px",
                                    borderRadius: "12px",
                                    border: "1px solid var(--line)",
                                    background:
                                        activeTab === tab.id
                                            ? "var(--olive)"
                                            : "white",
                                    color:
                                        activeTab === tab.id
                                            ? "white"
                                            : "var(--ink)",
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div
                        style={{
                            marginTop: "30px",
                            padding: "24px",
                            background: "var(--paper)",
                            borderRadius: "16px",
                        }}
                    >
                        {activeTab === "notes" && (
                            <>
                                <h2>Detailed Notes</h2>

                                <p>
                                    Neural networks are computational models inspired by the
                                    human brain. They consist of layers of interconnected
                                    neurons that process information.
                                </p>

                                <p>
                                    Training occurs through backpropagation, where errors
                                    are propagated backward to update weights.
                                </p>
                            </>
                        )}

                        {activeTab === "summary" && (
                            <>
                                <h2>Quick Summary</h2>

                                <ul>
                                    <li>Neural networks learn patterns from data.</li>
                                    <li>They contain input, hidden and output layers.</li>
                                    <li>Backpropagation updates weights.</li>
                                </ul>
                            </>
                        )}

                        {activeTab === "definitions" && (
                            <>
                                <h2>Definitions</h2>

                                <ul>
                                    <li><strong>Neuron:</strong> Basic processing unit.</li>
                                    <li><strong>Weight:</strong> Connection strength.</li>
                                    <li><strong>Epoch:</strong> One full training cycle.</li>
                                </ul>
                            </>
                        )}

                        {activeTab === "formulas" && (
                            <>
                                <h2>Formulas</h2>

                                <p>Output = Activation(Wx + b)</p>
                            </>
                        )}

                        {activeTab === "diagrams" && (
                            <>
                                <h2>Diagrams</h2>

                                <p>
                                    Input Layer → Hidden Layer → Output Layer
                                </p>
                            </>
                        )}

                        {activeTab === "flashcards" && (
                            <>
                                <h2>Flashcards</h2>

                                <div
                                    style={{
                                        padding: "20px",
                                        background: "white",
                                        borderRadius: "12px",
                                    }}
                                >
                                    What is backpropagation?
                                </div>
                            </>
                        )}

                        {activeTab === "quiz" && (
                            <>
                                <h2>Quiz</h2>

                                <p>
                                    Which algorithm is commonly used to train neural
                                    networks?
                                </p>

                                <button>Backpropagation</button>
                            </>
                        )}

                        {activeTab === "revision" && (
                            <>
                                <h2>Revision Plan</h2>

                                <ul>
                                    <li>Review notes today</li>
                                    <li>Practice flashcards tomorrow</li>
                                    <li>Take quiz after 3 days</li>
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}