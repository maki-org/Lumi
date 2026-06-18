import { Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import ProcessingPage from "./pages/ProcessingPage";
import ResultsPage from "./pages/ResultsPage";
import StudyPage from "./pages/StudyPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UploadPage />} />
      <Route path="/processing" element={<ProcessingPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/study" element={<StudyPage />} />
    </Routes>
  );
}