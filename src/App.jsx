import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import ProcessingPage from "./pages/ProcessingPage";
import ResultsPage from "./pages/ResultsPage";
import StudyPage from "./pages/StudyPage";
import { LECTURE } from "./data/lecture";

export default function App() {
  const [file, setFile] = useState(null);
  const [report, setReport] = useState(LECTURE);

  return (
    <Routes>
      <Route
        path="/"
        element={<UploadPage file={file} setFile={setFile} />}
      />

      <Route
        path="/processing"
        element={<ProcessingPage file={file} setReport={setReport} />}
      />

      <Route
        path="/results"
        element={<ResultsPage report={report} />}
      />

      <Route path="/study" element={<StudyPage />} />
    </Routes>
  );
}