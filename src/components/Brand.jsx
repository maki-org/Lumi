import { Icon } from "./Icons";

export default function Brand({ compact = false }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
            }}
        >
            <div
                style={{
                    width: 34,
                    height: 34,
                    borderRadius: 11,
                    background: "var(--olive)",
                    display: "grid",
                    placeItems: "center",
                    color: "#eaf0d6",
                }}
            >
                <Icon.spark size={19} />
            </div>

            {!compact && (
                <div style={{ lineHeight: 1 }}>
                    <div
                        style={{
                            fontWeight: 700,
                            fontSize: "19px",
                        }}
                    >
                        Lumi
                    </div>

                    <div
                        style={{
                            fontSize: "11px",
                            letterSpacing: ".04em",
                        }}
                    >
                        LEARNING PLAYGROUND
                    </div>
                </div>
            )}
        </div>
    );
}