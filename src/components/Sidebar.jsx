import Brand from "./Brand";
import Dropzone from "./Dropzone";
import { useNavigate } from "react-router-dom";
export default function Sidebar({ fileName = "", setFileName = () => { } }) {
    const navigate = useNavigate();
    return (
        <aside className="sidebar">
            <Brand />

            <div>
                <div
                    style={{
                        color: "var(--olive)",
                        fontWeight: 600,
                        fontSize: "12px",
                        textTransform: "uppercase",
                    }}
                >
                    Enter Audio
                </div>
                <Dropzone fileName={fileName} setFileName={setFileName} />
                <button
                    onClick={() => setFileName("Lecture12_WorkEnergyPower.mp3")}
                    style={{
                        marginTop: 10,
                        color: "var(--sky)",
                        fontWeight: 700,
                    }}
                >
                    ↳ Use sample audio
                </button>
                <div
                    style={{
                        color: "var(--ink-soft)",
                        marginTop: 4,
                    }}
                >
                    Voice sample · WAV or MP3
                </div>
            </div>
            <button
                onClick={() => navigate("/processing")}
                disabled={!fileName}
                style={{
                    padding: "14px",
                    borderRadius: "var(--r)",
                    background: fileName ? "var(--olive)" : "#c4ceac",
                    color: "white",
                    fontWeight: 600,
                    marginTop: 10,
                    cursor: fileName ? "pointer" : "not-allowed",
                }}
            >
                Create Study Kit
            </button>
        </aside>
    );
}