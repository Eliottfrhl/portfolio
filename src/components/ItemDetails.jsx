import Tag from "./Tag";

export default function ItemDetails({ item, type }) {
  const d = item.details || {};
  return (
    <div className="details">
      <p className="muted">{item.short}</p>

      {item.tags?.length ? (
        <div className="tagRow">
          {item.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      ) : null}

      {d.context ? (
        <div className="block">
          <h4>Contexte</h4>
          <p className="muted">{d.context}</p>
        </div>
      ) : null}

      {d.missions?.length ? (
        <div className="block">
          <h4>Missions</h4>
          <ul className="list">{d.missions.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ) : null}

      {d.whatIDid?.length ? (
        <div className="block">
          <h4>Ce que j’ai fait</h4>
          <ul className="list">{d.whatIDid.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ) : null}

      {d.results?.length ? (
        <div className="block">
          <h4>Résultats</h4>
          <ul className="list">{d.results.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ) : null}

      {d.deliverables?.length ? (
        <div className="block">
          <h4>Livrables</h4>
          <ul className="list">{d.deliverables.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      ) : null}

      {d.stack?.length ? (
        <div className="block">
          <h4>Stack</h4>
          <div className="tagRow">{d.stack.map((x) => <Tag key={x}>{x}</Tag>)}</div>
        </div>
      ) : null}

      {d.links ? (
        <div className="block">
          <h4>Liens</h4>
          <div className="btnRow">
            {d.links.repo ? (
              <a className="btn ghost" href={d.links.repo} target="_blank" rel="noreferrer">
                Repo
              </a>
            ) : null}
            {d.links.demo ? (
              <a className="btn" href={d.links.demo} target="_blank" rel="noreferrer">
                Démo
              </a>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="block">
        <p className="muted tiny">Type: {type} · ID: {item.id}</p>
      </div>
    </div>
  );
}
