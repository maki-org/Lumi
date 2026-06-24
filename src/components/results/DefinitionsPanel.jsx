export default function DefinitionsPanel({ report }) {
    const definitions = report?.definitions || [];

    return (
        <>
            <h2>Definitions</h2>

            {definitions.length === 0 ? (
                <p>No definitions available.</p>
            ) : (
                <div
                    style={{
                        display: "grid",
                        gap: "12px",
                        marginTop: "20px",
                    }}
                >
                    {definitions.map((item) => (
                        <div
                            key={item.term}
                            style={{
                                padding: "16px",
                                background: "white",
                                borderRadius: "12px",
                                border: "1px solid var(--line)",
                            }}
                        >
                            <strong>{item.term}</strong>

                            <p style={{ marginTop: "6px" }}>
                                {item.def}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}