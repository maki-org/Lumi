import { useState } from "react";
import Sidebar from "../components/Sidebar";
import UploadHero from "../components/UploadHero";

export default function UploadPage() {
    const [fileName, setFileName] = useState("");

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
            }}
        >
            <Sidebar fileName={fileName} setFileName={setFileName} />
            <UploadHero hasFile={!!fileName} />
        </div>
    );
}