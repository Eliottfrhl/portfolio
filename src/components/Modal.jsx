import { useEffect } from "react";

export default function Modal({ open, title, onClose, children }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modalOverlay" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHead">
          <h3>{title}</h3>
          <button className="iconBtn" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="modalBody">{children}</div>
      </div>
    </div>
  );
}
