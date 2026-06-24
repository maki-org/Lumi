export default function DiagramsPanel({ report }) {
    const diagrams = report?.diagrams || [];

    if (diagrams.length === 0) {
        return (
            <>
                <h2>Diagrams</h2>
                <p>No diagrams available.</p>
            </>
        );
    }

    return (
        <>
            <h2>Diagrams</h2>

            <div
                style={{
                    display: "grid",
                    gap: "16px",
                    marginTop: "20px",
                }}
            >
                {diagrams.map((diagram) => (
                    <div
                        key={diagram.title}
                        style={{
                            background: "white",
                            border: "1px solid var(--line)",
                            borderRadius: "12px",
                            padding: "18px",
                        }}
                    >
                        <h3>{diagram.title}</h3>

                        <p
                            style={{
                                marginTop: "8px",
                                color: "var(--ink-soft)",
                            }}
                        >
                            {diagram.desc}
                        </p>

                        <div
                            style={{
                                marginTop: "16px",
                                padding: "20px",
                                borderRadius: "12px",
                                background: "var(--chip)",
                                textAlign: "center",
                                fontWeight: 700,
                            }}
                        >
                            {diagram.visual || "Diagram preview"}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}