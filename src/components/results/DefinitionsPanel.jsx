import { LECTURE } from "../../data/lecture";

export default function DefinitionsPanel() {
    return (
        <>
            <h2>Definitions</h2>

            <div
                style={{
                    display: "grid",
                    gap: "12px",
                    marginTop: "20px",
                }}
            >
                {LECTURE.definitions.map((item) => (
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
        </>
    );
}