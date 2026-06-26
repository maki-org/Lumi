import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    securityLevel: "loose",
});

function MermaidBlock({ chart }) {
    const [svg, setSvg] = useState("");
    const [error, setError] = useState("");
    const idRef = useRef(`mermaid-${Math.random().toString(36).slice(2)}`);

    useEffect(() => {
        let isMounted = true;

        async function renderDiagram() {
            try {
                setError("");
                setSvg("");

                const result = await mermaid.render(idRef.current, chart);

                if (isMounted) {
                    setSvg(result.svg);
                }
            } catch (err) {
                console.error("Mermaid render error:", err);

                if (isMounted) {
                    setError("Unable to render diagram.");
                }
            }
        }

        if (chart) {
            renderDiagram();
        }

        return () => {
            isMounted = false;
        };
    }, [chart]);

    if (error) {
        return (
            <div
                style={{
                    padding: "14px",
                    borderRadius: "12px",
                    background: "white",
                    border: "1px solid var(--line)",
                    color: "var(--ink-soft)",
                }}
            >
                {error}
            </div>
        );
    }

    if (!svg) {
        return (
            <div
                style={{
                    padding: "14px",
                    borderRadius: "12px",
                    background: "white",
                    border: "1px solid var(--line)",
                    color: "var(--ink-soft)",
                }}
            >
                Rendering diagram...
            </div>
        );
    }

    return (
        <div
            style={{
                padding: "16px",
                background: "white",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                overflowX: "auto",
            }}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}

function MarkdownRenderer({ content }) {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                code({ className, children }) {
                    const language = className?.replace("language-", "");
                    const code = String(children).trim();

                    if (language === "mermaid") {
                        return <MermaidBlock chart={code} />;
                    }

                    return (
                        <pre
                            style={{
                                padding: "14px",
                                background: "white",
                                border: "1px solid var(--line)",
                                borderRadius: "12px",
                                overflowX: "auto",
                            }}
                        >
                            <code>{code}</code>
                        </pre>
                    );
                },
            }}
        >
            {content}
        </ReactMarkdown>
    );
}

function getDiagramContent(diagram) {
    if (typeof diagram === "string") {
        return {
            title: "Diagram",
            caption: "",
            chart: diagram.replace(/```mermaid|```/g, "").trim(),
            markdown: "",
        };
    }

    if (diagram.code) {
        return {
            title: diagram.title || "Diagram",
            caption: diagram.caption || "",
            chart: diagram.code,
            markdown: "",
        };
    }

    if (diagram.mermaid) {
        return {
            title: diagram.title || "Diagram",
            caption: diagram.caption || "",
            chart: diagram.mermaid,
            markdown: "",
        };
    }

    if (diagram.markdown) {
        return {
            title: diagram.title || "Diagram",
            caption: diagram.caption || "",
            chart: "",
            markdown: diagram.markdown,
        };
    }

    if (diagram.content) {
        return {
            title: diagram.title || "Diagram",
            caption: diagram.caption || "",
            chart: "",
            markdown: diagram.content,
        };
    }

    return {
        title: diagram.title || "Diagram",
        caption: diagram.caption || "",
        chart: "",
        markdown: "",
    };
}

export default function DiagramsPanel({ report }) {
    const diagrams = report?.diagrams || [];

    if (diagrams.length === 0) {
        return (
            <>
                <h2>Diagrams</h2>
                <p>No diagrams available.</p>
            </>
        );
    }

    return (
        <>
            <h2>Diagrams</h2>

            <div
                style={{
                    display: "grid",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {diagrams.map((diagram, index) => {
                    const diagramContent = getDiagramContent(diagram);

                    return (
                        <div
                            key={`${diagramContent.title}-${index}`}
                            style={{
                                background: "var(--paper)",
                                border: "1px solid var(--line)",
                                borderRadius: "18px",
                                padding: "20px",
                            }}
                        >
                            <h3>{diagramContent.title}</h3>

                            {diagramContent.caption && (
                                <p
                                    style={{
                                        marginTop: "8px",
                                        marginBottom: "16px",
                                        color: "var(--ink-soft)",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {diagramContent.caption}
                                </p>
                            )}

                            {diagramContent.chart ? (
                                <MermaidBlock chart={diagramContent.chart} />
                            ) : diagramContent.markdown ? (
                                <MarkdownRenderer
                                    content={diagramContent.markdown}
                                />
                            ) : (
                                <p style={{ color: "var(--ink-soft)" }}>
                                    Diagram content unavailable.
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}