const BASE_URL = "https://stelper-api.heymaki.ai";

export async function generateStudyKit(audioFile) {
    const formData = new FormData();
    formData.append("file", audioFile);

    const response = await fetch(`${BASE_URL}/playground/generate`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to generate study kit");
    }

    return response.json();
}