export default function Timeline({ items, onOpen }) {
  return (
    <div className="timeline">
      {items.map((it) => (
        <button key={it.id} className="timelineItem" onClick={() => onOpen(it)}>
          <div className="timelineDot" />
          <div className="timelineContent">
            <div className="timelineTop">
              <h3>{it.title}</h3>
              <span className="muted">{it.period}</span>
            </div>
            <p className="muted">{it.short}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
