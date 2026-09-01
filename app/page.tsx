const publications = [
  {
    year: '2026',
    venue: 'FOCS 2026',
    title:
      'Can We Break Fine-Grained and NP-Hardness Barriers if We’ve Seen the Graph Before? The Isomorphic-Priors Model',
    authors:
      'Dani Dorfman, Simon Döring, Martin Herold, Danupon Nanongkai, Daniel Neuen, Joachim Spoerhase, and Zihang Wu',
  },
  {
    year: '2025',
    venue: 'SoCG 2025',
    title:
      'Sublinear Data Structures for Nearest Neighbor in Ultra High Dimensions',
    authors:
      'Martin G. Herold, Danupon Nanongkai, Joachim Spoerhase, Nithin Varma, and Zihang Wu',
  },
  {
    year: '2023',
    venue: 'SODA 2023',
    title: 'Maintaining Expander Decompositions via Sparse Cuts',
    authors:
      'Yiding Hua, Rasmus Kyng, Maximilian Probst Gutenberg, and Zihang Wu',
  },
];

const education = [
  {
    institution: 'Max Planck Institute for Informatics',
    place: 'Saarbrücken, Germany',
    degree: 'PhD in Theoretical Computer Science',
    date: '2022–present',
    advisor: 'Supervisor: Danupon Nanongkai',
  },
  {
    institution: 'ETH Zürich',
    place: 'Zürich, Switzerland',
    degree: 'MSc in Theoretical Computer Science',
    date: '2020–2022',
    advisor: 'Thesis / semester-project supervisor: Maximilian Probst Gutenberg',
  },
  {
    institution: 'Peking University',
    place: 'Beijing, China',
    degree: 'BSc in Computer Science · Turing Class',
    date: '2016–2020',
    advisor: 'Undergraduate advisor: Zhihua Zhang',
  },
];

function AuthorList({ authors }: { authors: string }) {
  const [before, after] = authors.split('Zihang Wu');

  return (
    <>
      {before}
      <strong>Zihang Wu</strong>
      {after}
    </>
  );
}

export default function Home() {
  return (
    <div className="site-page">
      <header className="site-header">
        <a className="site-name" href="#top">
          <span>Zihang Wu</span>
          <span className="site-name-zh" lang="zh-CN">
            吴子航
          </span>
        </a>
        <span className="title-rule" aria-hidden="true" />
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#publications">Publications</a>
          <a href="#experience">Experience</a>
          <a href="#teaching">Teaching</a>
        </nav>
      </header>

      <main id="top">
        <section className="intro-section" id="about">
          <div className="intro-copy">
            <p>
              I am a fifth-year PhD student in Theoretical Computer Science at the{' '}
              <a href="https://www.mpi-inf.mpg.de/" target="_blank" rel="noreferrer">
                Max Planck Institute for Informatics
              </a>{' '}
              in Saarbrücken, supervised by Danupon Nanongkai. My research focuses
              on graph algorithms, especially games on graphs such as{' '}
              <em>Büchi</em>, <em>parity</em>, <em>energy</em>, and{' '}
              <em>mean-payoff games</em>. I am interested in obtaining improved
              upper bounds and stronger lower bounds, both in the classical
              sequential setting and in other computational models, including
              communication, streaming, and cut-query models. I am also
              interested in nearest-neighbor search and clustering. Outside
              research, I enjoy swimming, windsurfing, and table tennis. You
              can reach me at{' '}
              <a href="mailto:wuzihang98@gmail.com">
                wuzihang98@gmail.com
              </a>
              .
            </p>
          </div>

          <aside className="profile-panel" aria-label="Profile photo">
            <div className="profile-image">
              <img src="/zihang-wu.jpg" alt="Zihang Wu" />
            </div>
          </aside>
        </section>

        <section className="content-section" id="publications">
          <div className="standard-heading">
            <h2>Publications</h2>
            <span aria-hidden="true" />
          </div>
          <p className="section-note">
            In theoretical computer science, results are often published in
            peer-reviewed conference proceedings.
          </p>

          <ol className="publication-list">
            {publications.map((publication) => (
              <li key={publication.title}>
                <div className="publication-year">{publication.year}</div>
                <div>
                  <h3>{publication.title}</h3>
                  <p className="authors">
                    <AuthorList authors={publication.authors} />
                  </p>
                  <p className="venue">{publication.venue}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section" id="experience">
          <div className="standard-heading">
            <h2>Experience</h2>
            <span aria-hidden="true" />
          </div>

          <div className="timeline-list experience-list">
            {education.map((item) => (
              <article key={item.institution}>
                <div>
                  <h3>{item.institution}</h3>
                  <p>{item.degree}</p>
                  <p className="advisor-note">{item.advisor}</p>
                  <p className="place">{item.place}</p>
                </div>
                <time>{item.date}</time>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section teaching-section" id="teaching">
          <div className="standard-heading">
            <h2>Teaching</h2>
            <span aria-hidden="true" />
          </div>
          <ul>
            <li>
              Algorithms and Data Structures, Saarland University, Spring 2026
            </li>
            <li>
              Algorithms and Data Structures (Block Course), Saarland
              University, Spring 2024
            </li>
            <li>Optimization for Data Science, ETH Zürich, Spring 2022</li>
          </ul>
        </section>
      </main>

      <footer>
        <div>
          <p className="footer-name">Zihang Wu</p>
          <p>Fifth-year PhD student · Theoretical Computer Science</p>
        </div>
        <div className="footer-links">
          <a href="mailto:wuzihang98@gmail.com">Email</a>
          <a href="https://github.com/zihangwu98">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
