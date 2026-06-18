import { Icon } from "./Icons";
const KIT = [
    "Detailed Notes",
    "Quick Summary",
    "Definitions",
    "Formulas",
    "Diagrams",
    "Flashcards",
    "Practice Quiz",
    "Revision Plan",
];
export default function UploadHero() {
    return (
        <main
            style={{
                flex: 1,
                display: "grid",
                placeItems: "center",
                padding: "40px",
            }}
        >
            <div
                style={{
                    maxWidth: 720,
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        width: 96,
                        height: 96,
                        margin: "0 auto 22px",
                        borderRadius: 28,
                        background:
                            "radial-gradient(circle at 30% 25%, #f3f7e7, #e6eed4)",
                        border: "1px solid var(--line)",
                        display: "grid",
                        placeItems: "center",
                        fontSize: "42px",
                    }}
                >
                    <Icon.mic size={46} />
                </div>

                <h1
                    style={{
                        fontSize: "38px",
                        lineHeight: 1.1,
                    }}
                >
                    Turn any lecture into a
                    <br />
                    <span style={{ color: "var(--olive)" }}>
                        playable study kit
                    </span>
                </h1>

                <p
                    style={{
                        maxWidth: 560,
                        margin: "16px auto 0",
                        color: "var(--ink-soft)",
                        lineHeight: 1.6,
                    }}
                >
                    Drop a classroom recording and Lumi writes your
                    detailed notes, summaries, definitions, formulas,
                    diagrams, flashcards and a quiz — ready in under a minute.
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 12,
                        marginTop: 34,
                    }}
                >
                    {KIT.map((item) => (
                        <div
                            key={item}
                            style={{
                                background: "white",
                                border: "1px solid var(--line-soft)",
                                borderRadius: "var(--r)",
                                padding: "16px 12px",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "24px",
                                    marginBottom: "8px",
                                }}
                            >
                                📚
                            </div>

                            <div>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}