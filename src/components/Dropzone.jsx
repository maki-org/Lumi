export default function Dropzone() {
    return (
        <div
            style={{
                border: "2px dashed var(--line)",
                borderRadius: "var(--r)",
                padding: "30px 20px",
                textAlign: "center",
                marginTop: "12px",
            }}
        >
            <div
                style={{
                    fontSize: "32px",
                }}
            >
                📁
            </div>

            <div
                style={{
                    fontWeight: 600,
                    marginTop: "10px",
                }}
            >
                Click or drag a file here
            </div>

            <div
                style={{
                    color: "var(--ink-faint)",
                    marginTop: "4px",
                    fontSize: "12px",
                }}
            >
                WAV or MP3, up to 90 minutes
            </div>
        </div>
    );
}