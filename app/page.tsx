const publications = [
  {
    venue: 'FOCS 2026',
    title:
      'Can We Break Fine-Grained and NP-Hardness Barriers if We’ve Seen the Graph Before? The Isomorphic-Priors Model',
    url: null,
    authors:
      'Dani Dorfman, Simon Döring, Martin Herold, Danupon Nanongkai, Daniel Neuen, Joachim Spoerhase, and Zihang Wu',
  },
  {
    venue: 'SoCG 2025',
    title:
      'Sublinear Data Structures for Nearest Neighbor in Ultra High Dimensions',
    url: 'https://arxiv.org/abs/2503.03079',
    authors:
      'Martin G. Herold, Danupon Nanongkai, Joachim Spoerhase, Nithin Varma, and Zihang Wu',
  },
  {
    venue: 'SODA 2023',
    title: 'Maintaining Expander Decompositions via Sparse Cuts',
    url: 'https://arxiv.org/abs/2204.02519',
    authors:
      'Yiding Hua, Rasmus Kyng, Maximilian Probst Gutenberg, and Zihang Wu',
  },
];

const teacherPages = {
  danupon: 'https://sites.google.com/site/dannanongkai/',
  joachim: 'https://sites.google.com/view/joachim-spoerhase',
  maximilian: 'https://sites.google.com/view/maximilianprobst/',
  rasmus: 'https://rasmuskyng.com/',
  zhihua: 'https://math.pku.edu.cn/teachers/zhzhang/',
};

function TeacherLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

const education = [
  {
    institution: 'Max Planck Institute for Informatics',
    place: 'Saarbrücken, Germany',
    degree: 'PhD in Theoretical Computer Science',
    date: '2022–present',
    advisor: (
      <>
        Supervisors:{' '}
        <TeacherLink href={teacherPages.danupon}>Danupon Nanongkai</TeacherLink>{' '}
        and{' '}
        <TeacherLink href={teacherPages.joachim}>Joachim Spoerhase</TeacherLink>
      </>
    ),
  },
  {
    institution: 'ETH Zürich',
    place: 'Zürich, Switzerland',
    degree:
      'MSc in Computer Science · Major in Theoretical Computer Science · Minor in Data Management Systems',
    date: '2020–2022',
    advisor: (
      <>
        Thesis / semester-project supervisors:{' '}
        <TeacherLink href={teacherPages.maximilian}>
          Maximilian Probst Gutenberg
        </TeacherLink>{' '}
        and <TeacherLink href={teacherPages.rasmus}>Rasmus Kyng</TeacherLink>
      </>
    ),
  },
  {
    institution: 'Peking University',
    place: 'Beijing, China',
    degree: 'BSc in Computer Science · Turing Class',
    date: '2016–2020',
    advisor: (
      <>
        Undergraduate advisor:{' '}
        <TeacherLink href={teacherPages.zhihua}>Zhihua Zhang</TeacherLink>
      </>
    ),
  },
];

function AuthorList({ authors }: { authors: string }) {
  const [before, after] = authors.split('Zihang Wu');

  return (
    <>
      {before}
      <em>Zihang Wu</em>
      {after}
    </>
  );
}

export default function Home() {
  return (
    <div className="site-page">
      <header className="site-header">
        <div className="site-header-inner">
          <a className="site-name" href="#top">
            Zihang Wu{' '}
            <span className="site-name-zh" lang="zh-CN">
              (吴子航)
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#publications">Publications</a>
            <a href="#experience">Experience</a>
            <a href="#teaching">Teaching Assistant</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="intro-section" id="about">
          <div className="intro-copy">
            <p>
              I am a fifth-year PhD student in Theoretical Computer Science at the{' '}
              <a href="https://www.mpi-inf.mpg.de/" target="_blank" rel="noreferrer">
                Max Planck Institute for Informatics
              </a>{' '}
              in Saarbrücken, supervised by{' '}
              <TeacherLink href={teacherPages.danupon}>Danupon Nanongkai</TeacherLink>{' '}
              and{' '}
              <TeacherLink href={teacherPages.joachim}>Joachim Spoerhase</TeacherLink>.
              Before starting my PhD, I completed an MSc in Theoretical
              Computer Science at ETH Zürich, where my thesis and semester
              project were supervised by{' '}
              <TeacherLink href={teacherPages.maximilian}>
                Maximilian Probst Gutenberg
              </TeacherLink>{' '}
              and <TeacherLink href={teacherPages.rasmus}>Rasmus Kyng</TeacherLink>.
              I received my BSc in Computer Science from Peking
              University&apos;s Turing Class, where I was advised by{' '}
              <TeacherLink href={teacherPages.zhihua}>Zhihua Zhang</TeacherLink>.
              My research focuses on graph algorithms, especially games on
              graphs such as <em>Büchi</em>, <em>parity</em>, <em>energy</em>,
              and <em>mean-payoff games</em>. I am interested in obtaining
              improved upper bounds and stronger lower bounds, both in the
              classical sequential setting and in other computational models,
              including communication, streaming, and cut-query models. I am
              also interested in nearest-neighbor search and clustering.
              Outside research, I enjoy swimming, windsurfing, and table
              tennis.
            </p>
            <p className="email-contact">
              <span className="email-icon" aria-hidden="true">
                ✉
              </span>
              <span>
                You can reach me at{' '}
                <a href="mailto:wuzihang98@gmail.com">
                  wuzihang98@gmail.com
                </a>
                .
              </span>
            </p>
          </div>

          <aside className="profile-panel" aria-label="Profile photo">
            <div className="profile-image">
              <img src="/zihang-wu-profile.jpg" alt="Zihang Wu" />
            </div>
          </aside>
        </section>

        <section
          className="content-section tinted-section"
          id="publications"
        >
          <div className="standard-heading">
            <h2>Publications</h2>
          </div>

          <ol className="publication-list">
            {publications.map((publication) => (
              <li key={publication.title}>
                <div className="publication-venue-label">
                  {publication.venue}
                </div>
                <div>
                  <h3>
                    {publication.url ? (
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {publication.title}
                      </a>
                    ) : (
                      publication.title
                    )}
                  </h3>
                  <p className="authors">
                    <AuthorList authors={publication.authors} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="content-section" id="experience">
          <div className="standard-heading">
            <h2>Experience</h2>
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

        <section
          className="content-section teaching-section tinted-section"
          id="teaching"
        >
          <div className="standard-heading">
            <h2>Teaching Assistant</h2>
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
          <p>Last updated: September 2026</p>
        </div>
        <div className="footer-links">
          <a href="mailto:wuzihang98@gmail.com">Email</a>
          <a href="https://github.com/zihangwu98">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
