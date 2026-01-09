import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetails from "../components/ItemDetails";

import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { hobbies } from "../data/hobbies";

function getCollection(type) {
  switch (type) {
    case "project": return projects;
    case "experience": return experience;
    case "education": return education;
    case "hobby": return hobbies;
    default: return [];
  }
}

export default function ItemPage() {
  const { type, id } = useParams();

  const item = useMemo(() => {
    const col = getCollection(type);
    return col.find((x) => x.id === id) || null;
  }, [type, id]);

  return (
    <div className="container">
      <div className="pageTop">
        <Link className="btn ghost" to="/">← Retour</Link>
      </div>

      <div className="card">
        {item ? (
          <>
            <h2 style={{ marginTop: 0 }}>{item.title}</h2>
            <ItemDetails item={item} type={type} />
          </>
        ) : (
          <>
            <h2 style={{ marginTop: 0 }}>Introuvable</h2>
            <p className="muted">Aucun item {type}/{id}.</p>
          </>
        )}
      </div>
    </div>
  );
}
