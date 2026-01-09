import { useMemo, useState } from "react";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import Tag from "../components/Tag";
import Modal from "../components/Modal";
import ItemDetails from "../components/ItemDetails";
import Timeline from "../components/Timeline";

import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { skills, languages } from "../data/skills";
import { hobbies } from "../data/hobbies";

function Card({ title, subtitle, tags, onOpen }) {
  return (
    <button className="card cardBtn" onClick={onOpen}>
      <div className="cardTop">
        <h3>{title}</h3>
        <p className="muted">{subtitle}</p>
      </div>
      {tags?.length ? (
        <div className="tagRow">
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      ) : null}
      <div className="cardHint muted">Cliquer pour détails</div>
    </button>
  );
}

export default function Home() {
  const [modal, setModal] = useState({ open: false, item: null, type: null });

  const open = (type, item) => setModal({ open: true, item, type });
  const close = () => setModal({ open: false, item: null, type: null });

  const heroBadges = useMemo(() => profile.badges ?? [], []);
  
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      {/* HERO */}
      <div className="hero" id="top">
        <div className="heroLeft">
          <p className="kicker">{profile.location}</p>
          <h1>{profile.headline}</h1>
          <p className="lead">{profile.intro}</p>

          <div className="badgeRow">
            {heroBadges.map((b) => <span className="badge" key={b}>{b}</span>)}
          </div>

          <div className="btnRow">
            <button className="btn" onClick={() => scrollTo('projects')}>Voir les projets</button>
            <a className="btn ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="heroRight">
          <div className="glass">
            <h3>À propos</h3>
            <p className="muted">
              Je vise des rôles où l’on livre des systèmes réels : perception, contrôle, intégration ROS2,
              validation et outillage logiciel.
            </p>
            <div className="btnRow">
              <a className="btn ghost" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn" href={profile.links.cvPdf}>CV PDF</a>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Projets"
        subtitle="Cartes visuelles, clic = détails (contexte, actions, résultats, liens)."
      >
        <CardGrid cols={2}>
          {projects.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              subtitle={p.short}
              tags={p.tags}
              onOpen={() => open("project", p)}
            />
          ))}
        </CardGrid>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        title="Expériences"
        subtitle="Timeline cliquable."
      >
        <Timeline items={experience} onOpen={(it) => open("experience", it)} />
      </Section>

      {/* EDUCATION */}
      <Section
        id="education"
        title="Études"
        subtitle="Parcours et points clés."
      >
        <CardGrid cols={2}>
          {education.map((e) => (
            <Card
              key={e.id}
              title={e.title}
              subtitle={`${e.period} — ${e.short}`}
              onOpen={() => open("education", e)}
            />
          ))}
        </CardGrid>
      </Section>

      {/* SKILLS + LANGUAGES */}
      <Section
        id="skills"
        title="Compétences"
        subtitle="Lisible en 10 secondes."
      >
        <CardGrid cols={3}>
          {skills.map((s) => (
            <div className="card" key={s.group}>
              <h3>{s.group}</h3>
              <div className="tagRow">
                {s.items.map((x) => <Tag key={x}>{x}</Tag>)}
              </div>
            </div>
          ))}
        </CardGrid>

        <div style={{ height: 14 }} />

        <div className="card">
          <h3>Langues</h3>
          <div className="langRow">
            {languages.map((l) => (
              <div className="lang" key={l.name}>
                <div className="langName">{l.name}</div>
                <div className="muted">{l.level}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* HOBBIES */}
      <Section
        id="hobbies"
        title="Passions / Hobbies"
        subtitle="Donner de la personnalité au profil."
      >
        <CardGrid cols={3}>
          {hobbies.map((h) => (
            <Card
              key={h.id}
              title={h.title}
              subtitle={h.short}
              onOpen={() => open("hobby", h)}
            />
          ))}
        </CardGrid>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Le but : te joindre vite."
      >
        <div className="card contact">
          <div>
            <h3>Discutons.</h3>
            <p className="muted">Email direct ou LinkedIn.</p>
          </div>
          <div className="btnRow">
            <a className="btn" href={`mailto:${profile.email}`}>Email</a>
            <a className="btn ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </Section>

      <Modal
        open={modal.open}
        title={modal.item?.title ?? "Détails"}
        onClose={close}
      >
        {modal.item ? <ItemDetails item={modal.item} type={modal.type} /> : null}
      </Modal>
    </div>
  );
}
