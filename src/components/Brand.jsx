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
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                }}
            >
                <img
                    src="/logo.svg"
                    alt="Wynaut Labs logo"
                    style={{
                        width: "38px",
                        height: "38px",
                        objectFit: "contain",
                    }}
                />
            </div>

            {!compact && (
                <div style={{ lineHeight: 1 }}>
                    <div
                        style={{
                            fontWeight: 700,
                            fontSize: "19px",
                        }}
                    >
                        Wynaut Labs
                    </div>


                </div>
            )}
        </div>
    );
}