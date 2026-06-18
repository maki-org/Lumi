import { useState } from "react";
import { LECTURE } from "../../data/lecture";

const initialTasks = LECTURE.revision;

export default function RevisionPanel() {
    const [tasks, setTasks] = useState(initialTasks);

    function toggleTask(index) {
        setTasks((prev) =>
            prev.map((task, i) =>
                i === index ? { ...task, done: !task.done } : task
            )
        );
    }

    return (
        <>
            <h2>Revision Plan</h2>

            <div style={{ marginTop: "20px" }}>
                {tasks.map((task, index) => (
                    <div
                        key={task.title}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "14px",
                            marginBottom: "10px",
                            background: "white",
                            borderRadius: "12px",
                            border: "1px solid var(--line)",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={() => toggleTask(index)}
                        />

                        <div>
                            <strong
                                style={{
                                    textDecoration: task.done
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {task.title}
                            </strong>

                            <div style={{ color: "var(--ink-soft)" }}>
                                {task.when}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}