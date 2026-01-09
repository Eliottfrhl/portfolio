export default function Navbar({ profile }) {
  const { links } = profile;
  
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header className="nav">
      <div className="navInner">
        <a className="logo" href="#/">
          <span className="logoDot" />
          <span>{profile.name}</span>
        </a>

        <nav className="navLinks">
          <a href="#/" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>Projets</a>
          <a href="#/" onClick={(e) => { e.preventDefault(); scrollTo('experience'); }}>Expériences</a>
          <a href="#/" onClick={(e) => { e.preventDefault(); scrollTo('education'); }}>Études</a>
          <a href="#/" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Compétences</a>
          <a href="#/" onClick={(e) => { e.preventDefault(); scrollTo('hobbies'); }}>Hobbies</a>
          <a href="#/" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a>
        </nav>

        <div className="navCta">
          <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href={links.cvPdf}>CV PDF</a>
        </div>
      </div>
    </header>
  );
}
