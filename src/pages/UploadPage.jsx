import { useState } from "react";
import Sidebar from "../components/Sidebar";
import UploadHero from "../components/UploadHero";

export default function UploadPage() {
    const [fileName, setFileName] = useState("");

    return (
        <div className="app-shell">
            <Sidebar fileName={fileName} setFileName={setFileName} />
            <UploadHero hasFile={!!fileName} />
        </div>
    );
}