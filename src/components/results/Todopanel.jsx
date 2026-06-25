import { useState } from "react";

export default function Todopanel({ report }) {
    const initialTasks = report?.revision || [];
    const [tasks, setTasks] = useState(initialTasks);

    if (tasks.length === 0) {
        return (
            <>
                <h2>To-do List</h2>
                <p>No To-do list available.</p>
            </>
        );
    }

    function toggleTask(index) {
        setTasks((prev) =>
            prev.map((task, i) =>
                i === index ? { ...task, done: !task.done } : task
            )
        );
    }

    return (
        <>
            <h2>To-do List</h2>

            <div style={{ marginTop: "20px" }}>
                {tasks.map((task, index) => (
                    <div
                        key={`${task.when}-${task.title}`}
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

                            <p
                                style={{
                                    marginTop: "4px",
                                    marginBottom: 0,
                                    color: "var(--ink-faint)",
                                }}
                            >
                                {task.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}