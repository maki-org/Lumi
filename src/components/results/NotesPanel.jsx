import { LECTURE } from "../../data/lecture";

export default function NotesPanel() {
    return (
        <>
            <h2>Detailed Notes</h2>

            <div
                style={{
                    display: "grid",
                    gap: "16px",
                    marginTop: "20px",
                }}
            >
                {LECTURE.notes.map((section) => (
                    <div
                        key={section.id}
                        style={{
                            background: "white",
                            border: "1px solid var(--line)",
                            borderRadius: "12px",
                            padding: "18px",
                        }}
                    >
                        <h3>{section.heading}</h3>

                        {section.body.map((paragraph, index) => (
                            <p
                                key={index}
                                style={{
                                    marginTop: "10px",
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}

                        <div
                            style={{
                                marginTop: "12px",
                                padding: "10px",
                                background: "var(--chip)",
                                borderRadius: "8px",
                            }}
                        >
                            {section.callout.text}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}