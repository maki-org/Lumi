import Sidebar from "../components/Sidebar";
import UploadHero from "../components/UploadHero";

export default function UploadPage() {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
            }}
        >
            <Sidebar />
            <UploadHero />
        </div>
    );
}