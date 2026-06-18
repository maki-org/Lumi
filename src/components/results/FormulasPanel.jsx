import { LECTURE } from "../../data/lecture";

function Formula({ parts }) {
    return (
        <span>
            {parts.map((part, index) => {
                if (typeof part === "string") {
                    return <span key={index}>{part}</span>;
                }

                if (part.sub) {
                    return <sub key={index}>{part.sub}</sub>;
                }

                if (part.sup) {
                    return <sup key={index}>{part.sup}</sup>;
                }

                if (part.frac) {
                    return (
                        <span key={index}>
                            {part.frac[0]} / {part.frac[1]}
                        </span>
                    );
                }

                return null;
            })}
        </span>
    );
}

export default function FormulasPanel() {
    return (
        <>
            <h2>Formulas</h2>

            <div
                style={{
                    display: "grid",
                    gap: "16px",
                    marginTop: "20px",
                }}
            >
                {LECTURE.formulas.map((formula) => (
                    <div
                        key={formula.name}
                        style={{
                            background: "white",
                            border: "1px solid var(--line)",
                            borderRadius: "12px",
                            padding: "18px",
                        }}
                    >
                        <h3>{formula.name}</h3>

                        <div
                            style={{
                                fontSize: "24px",
                                marginTop: "10px",
                                fontWeight: 700,
                            }}
                        >
                            <Formula parts={formula.parts} />
                        </div>

                        <p style={{ marginTop: "10px" }}>
                            {formula.vars}
                        </p>

                        <p
                            style={{
                                marginTop: "8px",
                                color: "var(--ink-soft)",
                            }}
                        >
                            {formula.note}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}