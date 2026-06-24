import Sidebar from "../components/Sidebar";
import UploadHero from "../components/UploadHero";

export default function UploadPage({ file, setFile }) {
    return (
        <div className="app-shell">
            <Sidebar file={file} setFile={setFile} />
            <UploadHero />
        </div>
    );
}