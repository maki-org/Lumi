export default function SummaryPanel({ report }) {
    const summary = report?.summary || [];

    return (
        <>
            <h2>Summary</h2>

            {summary.length === 0 ? (
                <p>No summary available.</p>
            ) : (
                <ul>
                    {summary.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            )}
        </>
    );
}