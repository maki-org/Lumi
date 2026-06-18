const Ic = ({ d, size = 22, sw = 2, fill = "none", children, style }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke="currentColor"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
    >
        {d ? <path d={d} /> : children}
    </svg>
);

const Icon = {
    spark: (p) => (
        <Ic {...p} fill="currentColor" sw={0}>
            <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z" />
        </Ic>
    ),

    mic: (p) => (
        <Ic {...p}>
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10a7 7 0 0 0 14 0 M12 19v3" />
        </Ic>
    ),

    upload: (p) => (
        <Ic {...p} d="M12 16V4 M7 9l5-5 5 5 M5 20h14" />
    ),

    play: (p) => (
        <Ic {...p} fill="currentColor" sw={0}>
            <path d="M7 4.5v15l13-7.5z" />
        </Ic>
    ),

    check: (p) => (
        <Ic {...p} d="M20 6L9 17l-5-5" />
    ),

    notes: (p) => (
        <Ic {...p}>
            <rect x="4" y="3" width="16" height="18" rx="2.5" />
            <path d="M8 8h8 M8 12h8 M8 16h5" />
        </Ic>
    ),

    list: (p) => (
        <Ic {...p} d="M8 6h12 M8 12h12 M8 18h12 M3.5 6h.01 M3.5 12h.01 M3.5 18h.01" />
    ),

    book: (p) => (
        <Ic {...p}>
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z M20 18v3H6.5A2.5 2.5 0 0 1 4 18.5" />
        </Ic>
    ),

    sigma: (p) => (
        <Ic {...p} d="M17 5H7l6 7-6 7h10" />
    ),

    cards: (p) => (
        <Ic {...p}>
            <rect x="3" y="6" width="14" height="14" rx="2.5" />
            <path d="M8 3h11a2 2 0 0 1 2 2v11" />
        </Ic>
    ),

    quiz: (p) => (
        <Ic {...p}>
            <circle cx="12" cy="12" r="9.5" />
            <path d="M9.2 9a2.8 2.8 0 0 1 5.4 1c0 1.8-2.6 2.2-2.6 4 M12 17.5h.01" />
        </Ic>
    ),

    refresh: (p) => (
        <Ic {...p} d="M21 12a9 9 0 1 1-2.6-6.4 M21 3v5h-5" />
    ),
};

function Pill({ children }) {
    return (
        <span
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 12px",
                borderRadius: "999px",
                background: "var(--chip)",
                color: "var(--olive)",
                fontWeight: 600,
            }}
        >
            {children}
        </span>
    );
}

function Ring({ value = 0 }) {
    return (
        <div
            style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "4px solid var(--olive)",
                display: "grid",
                placeItems: "center",
            }}
        >
            {Math.round(value * 100)}%
        </div>
    );
}

export { Icon, Pill, Ring };