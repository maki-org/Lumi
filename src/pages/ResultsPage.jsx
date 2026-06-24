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

export default function ResultsPage({ report }) {
    const [activeTab, setActiveTab] = useState("notes");

    const tabs = [
        { id: "notes", label: "Detailed Notes" },
        { id: "summary", label: "Summary" },
        { id: "definitions", label: "Definitions" },
        ...(report?.formulas?.length
            ? [{ id: "formulas", label: "Formulas" }]
            : []),
        { id: "diagrams", label: "Diagrams" },
        { id: "flashcards", label: "Flashcards" },
        { id: "quiz", label: "Quiz" },
        { id: "revision", label: "Revision" },
    ];

    return (
        <div className="app-shell">
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
                    <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
                        {report?.title || "Generated Study Kit"}
                    </h1>

                    <p style={{ color: "var(--ink-soft)" }}>
                        {report?.course || "Course"} • {report?.duration || "00:00"} •{" "}
                        {report?.concepts || 0} concepts
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
                                        activeTab === tab.id ? "var(--olive)" : "white",
                                    color:
                                        activeTab === tab.id ? "white" : "var(--ink)",
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
                        {activeTab === "notes" && <NotesPanel report={report} />}

                        {activeTab === "summary" && <SummaryPanel report={report} />}

                        {activeTab === "definitions" && (
                            <DefinitionsPanel report={report} />
                        )}

                        {activeTab === "formulas" && <FormulasPanel report={report} />}

                        {activeTab === "diagrams" && <DiagramsPanel report={report} />}

                        {activeTab === "flashcards" && (
                            <FlashcardsPanel report={report} />
                        )}

                        {activeTab === "quiz" && <QuizPanel report={report} />}

                        {activeTab === "revision" && <RevisionPanel report={report} />}
                    </div>
                </div>
            </main>
        </div>
    );
}