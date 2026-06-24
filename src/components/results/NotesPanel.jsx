export default function NotesPanel({ report }) {
    const notes = report?.notes || [];

    return (
        <>
            <h2>Detailed Notes</h2>

            {notes.map((section) => (
                <div
                    key={section.id}
                    style={{
                        marginBottom: "24px",
                    }}
                >
                    <h3>{section.heading}</h3>

                    {section.body?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    {section.callout && (
                        <div
                            style={{
                                padding: "12px",
                                borderRadius: "12px",
                                background: "var(--chip)",
                                marginTop: "10px",
                            }}
                        >
                            <strong>
                                {section.callout.type.toUpperCase()}:
                            </strong>{" "}
                            {section.callout.text}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}