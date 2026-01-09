export default function Section({ id, title, subtitle, children, action }) {
  return (
    <section id={id} className="section">
      <div className="sectionHead">
        <div>
          <h2>{title}</h2>
          {subtitle ? <p className="muted">{subtitle}</p> : null}
        </div>
        {action ? <div className="sectionAction">{action}</div> : null}
      </div>
      {children}
    </section>
  );
}
