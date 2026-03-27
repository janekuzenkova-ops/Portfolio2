"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 24,
        background: "#0a0a0a",
        color: "#eee",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>ошибка в разделе</h1>
      <pre
        style={{
          fontSize: 13,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          opacity: 0.85,
          marginBottom: 20,
        }}
      >
        {String(error?.message ?? error)}
      </pre>
      <button
        type="button"
        onClick={() => reset()}
        style={{
          padding: "10px 16px",
          borderRadius: 8,
          border: "1px solid #444",
          background: "#222",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        попробовать снова
      </button>
    </div>
  );
}
