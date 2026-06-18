import { Icon } from "./Icons";
export default function Dropzone({ fileName, setFileName }) {
    function handleFileChange(event) {
        const file = event.target.files[0];

        if (file) {
            setFileName(file.name);
        }
    }

    return (
        <label
            style={{
                display: "block",
                border: "2px dashed var(--line)",
                borderRadius: "var(--r)",
                padding: "30px 20px",
                textAlign: "center",
                marginTop: "12px",
                cursor: "pointer",
                background: fileName ? "var(--correct-soft)" : "white",
            }}
        >
            <input
                type="file"
                accept=".wav,.mp3,audio/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
            />

            <div style={{ fontSize: "32px" }}>
                {fileName ? <Icon.check size={28} /> : <Icon.upload size={28} />}
            </div>

            <div
                style={{
                    fontWeight: 600,
                    marginTop: "10px",
                }}
            >
                {fileName || "Click or drag a file here"}
            </div>

            <div
                style={{
                    color: "var(--ink-faint)",
                    marginTop: "4px",
                    fontSize: "12px",
                }}
            >
                {fileName ? "Ready to process" : "WAV or MP3, up to 90 minutes"}
            </div>
        </label>
    );
}