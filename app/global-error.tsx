"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ru">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          padding: 24,
          background: "#111",
          color: "#eee",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: 20, marginBottom: 12 }}>критическая ошибка</h1>
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
          перезагрузить
        </button>
      </body>
    </html>
  );
}
