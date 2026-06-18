import { LECTURE } from "../../data/lecture";

export default function DiagramsPanel() {
    return (
        <>
            <h2>Diagrams</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "16px",
                    marginTop: "20px",
                }}
            >
                {LECTURE.diagrams.map((diagram) => (
                    <div
                        key={diagram.title}
                        style={{
                            background: "white",
                            border: "1px solid var(--line)",
                            borderRadius: "12px",
                            padding: "18px",
                        }}
                    >
                        <div
                            style={{
                                height: "120px",
                                borderRadius: "12px",
                                background: "var(--chip)",
                                display: "grid",
                                placeItems: "center",
                                marginBottom: "14px",
                                fontSize: "34px",
                            }}
                        >
                            📊
                        </div>

                        <h3>{diagram.title}</h3>

                        <p
                            style={{
                                marginTop: "8px",
                                color: "var(--ink-soft)",
                            }}
                        >
                            {diagram.caption}
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: "8px",
                                flexWrap: "wrap",
                                marginTop: "12px",
                            }}
                        >
                            {diagram.labels.map((label) => (
                                <span
                                    key={label}
                                    style={{
                                        padding: "4px 10px",
                                        borderRadius: "999px",
                                        background: "var(--correct-soft)",
                                        color: "var(--olive)",
                                        fontSize: "12px",
                                        fontWeight: 700,
                                    }}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}