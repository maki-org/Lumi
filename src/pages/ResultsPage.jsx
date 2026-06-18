import { useState } from "react";
import Sidebar from "../components/Sidebar";
import NotesPanel from "../components/results/NotesPanel";
import SummaryPanel from "../components/results/SummaryPanel";
import DefinitionsPanel from "../components/results/DefinitionsPanel";
import FlashcardsPanel from "../components/results/FlashcardsPanel";
import QuizPanel from "../components/results/QuizPanel";
import FormulasPanel from "../components/results/FormulasPanel";
import DiagramsPanel from "../components/results/DiagramsPanel";
import RevisionPanel from "../components/results/RevisionPanel";

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
                        {activeTab === "notes" && <NotesPanel />}

                        {activeTab === "summary" && <SummaryPanel />}

                        {activeTab === "definitions" && <DefinitionsPanel />}

                        {activeTab === "formulas" && <FormulasPanel />}

                        {activeTab === "diagrams" && <DiagramsPanel />}

                        {activeTab === "flashcards" && <FlashcardsPanel />}

                        {activeTab === "quiz" && <QuizPanel />}

                        {activeTab === "revision" && <RevisionPanel />}
                    </div>
                </div>
            </main>
        </div>
    );
}