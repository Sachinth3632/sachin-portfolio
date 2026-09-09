import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a
            href="#"
            className="text-xl font-bold tracking-tight"
          >
            Sachin<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400 sm:block"
          >
            Let's Talk
          </a>

        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">

        <div className="absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Hero Content */}
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to Software Engineering Opportunities
            </div>

            <p className="mb-4 text-lg font-medium text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Sachin T H
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-gray-300 sm:text-3xl">
              Software Engineer
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              I build reliable backend systems and solve challenging
              engineering problems using Python, APIs, databases, and strong
              data structures & algorithms fundamentals.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                View My Work
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
                <Mail size={18} />
              </a>

            </div>


            {/* Social Links */}
            <div className="mt-10 flex items-center gap-5">

              <a
                href="https://github.com/Sachinth3632"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 transition hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sachinth3632/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 transition hover:text-cyan-400"
              >
                LinkedIn
              </a>

              <div className="h-5 w-px bg-white/10" />

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={16} />
                Bengaluru, India
              </div>

            </div>

          </div>


          {/* ================= PYTHON CARD ================= */}
          <div className="hidden lg:block">

            <div className="relative mx-auto w-full max-w-sm">

              <div className="absolute -inset-1 rounded-3xl bg-cyan-400/20 blur-xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

                <div className="mb-8 flex items-center gap-3">

                  {/* Python Logo Style */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 font-mono text-xl font-bold text-cyan-400">
                    Py
                  </div>

                  <div>
                    <p className="font-semibold">
                      Software Engineer
                    </p>

                    <p className="text-sm text-gray-500">
                      Python • Backend • DSA
                    </p>
                  </div>

                </div>


                {/* Python Code */}
                <div className="space-y-4 font-mono text-sm">

                  <p className="text-gray-500">
                    <span className="text-purple-400">
                      developer
                    </span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5 text-gray-400">
                    name:{" "}
                    <span className="text-emerald-400">
                      "Sachin T H"
                    </span>
                  </p>

                  <p className="pl-5 text-gray-400">
                    role:{" "}
                    <span className="text-emerald-400">
                      "Software Engineer"
                    </span>
                  </p>

                  <p className="pl-5 text-gray-400">
                    language:{" "}
                    <span className="text-emerald-400">
                      "Python"
                    </span>
                  </p>

                  <p className="pl-5 text-gray-400">
                    focus:{" "}
                    <span className="text-emerald-400">
                      "DSA + Backend"
                    </span>
                  </p>

                  <p className="text-gray-500">
                    {"}"}
                  </p>

                </div>


                <div className="mt-8 border-t border-white/10 pt-6">

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    Currently building
                  </p>

                  <p className="mt-2 text-sm text-gray-300">
                    Scalable software & better solutions.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Scroll */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 transition hover:text-white"
        >
          <ArrowDown size={22} />
        </a>

      </section>


      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            01 — About
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Building with purpose.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I'm a Software Engineer focused on backend development,
            problem solving, and building maintainable software. I enjoy
            understanding systems deeply, debugging complex problems, and
            continuously improving my engineering skills.
          </p>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            02 — Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Where I've worked.
          </h2>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* TCS */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-cyan-400/40">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <h3 className="text-2xl font-semibold">
                    TCS
                  </h3>

                  <p className="mt-2 text-cyan-400">
                    System Engineer • Backend Developer
                  </p>

                </div>

                <span className="text-sm text-gray-500">
                  Feb 2024 — Mar 2026
                </span>

              </div>

              <p className="mt-6 leading-7 text-gray-400">
                Worked on backend development, implementing application
                functionality, debugging issues, and contributing to
                maintainable software solutions.
              </p>

            </div>


            {/* Lincode */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-cyan-400/40">

              <div className="flex items-start justify-between gap-4">

                <div>

                  <h3 className="text-2xl font-semibold">
                    Lincode Labs
                  </h3>

                  <p className="mt-2 text-cyan-400">
                    Associate Software Developer
                  </p>

                </div>

                <span className="text-sm text-gray-500">
                   Apr 2026 — Aug 2026
                </span>

              </div>

              <p className="mt-6 leading-7 text-gray-400">
                Developed and maintained backend services, REST APIs,
                database integrations, scheduled workflows, and application
                functionality while debugging and improving existing systems.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            03 — Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Technical toolkit.
          </h2>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <SkillCard
              title="Languages"
              skills={[
                "Python",
                "SQL",
              ]}
            />

            <SkillCard
              title="Frontend"
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
              ]}
            />

            <SkillCard
              title="Backend"
              skills={[
                "FastAPI",
                "Flask",
                "REST APIs",
                "JWT"
              ]}
            />

            <SkillCard
              title="Databases"
              skills={[
                "MongoDB",
                "PostgreSQL",
                "Redis",
              ]}
            />

            <SkillCard
              title="Engineering"
              skills={[
                "Data Structures & Algorithms",
                "System Design",
                "OOP",
                "Git",
                "Docker",
                "Linux",
                "Postman",
              ]}
            />

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            04 — Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Things I've built.
          </h2>


          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* PROJECT 1 */}
            <ProjectCard
              number="01"
              title="Enterprise E2E Test Automation Framework"
              description="A modular end-to-end test automation framework designed for reliable web application testing, reusable components, maintainability, and automated test execution."
              technologies={[
                "Python",
                "Test Automation",
                "Testing",
              ]}
              github="https://github.com/Sachinth3632/enterprise-e2e-test-automation"
            />


            {/* PROJECT 2 */}
            <ProjectCard
              number="02"
              title="FastAPI + MongoDB + Docker"
              description="A containerized backend application using Python, FastAPI, MongoDB, REST APIs, CRUD operations, validation, and Docker."
              technologies={[
                "Python",
                "FastAPI",
                "MongoDB",
                "Docker",
              ]}
              github="https://github.com/Sachinth3632/FastAPI_MongoDB_Docker_project"
            />


            {/* PROJECT 3 */}
            <ProjectCard
              number="03"
              title="FastAPI JWT Authentication API"
              description="A REST API implementing JWT-based authentication and authorization with protected endpoints and access control."
              technologies={[
                "Python",
                "FastAPI",
                "JWT",
                "REST API",
              ]}
              github="https://github.com/Sachinth3632/fastapi-jwt-authorization-middleware"
            />


            {/* PROJECT 4 */}
            <ProjectCard
              number="04"
              title="ML Internship Project"
              description="A machine learning project developed during an internship, focused on applying data preprocessing, model development, evaluation, and practical machine learning workflows."
              technologies={[
                "Python",
                "Machine Learning",
                "Pandas",
                "Scikit-learn",
              ]}
              github="https://github.com/Sachinth3632/ML-Internship-Project"
            />

          </div>

        </div>

      </section>


      {/* ================= DSA ================= */}
      <section className="border-t border-white/10 px-6 py-32">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            05 — Problem Solving
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Data Structures & Algorithms.
          </h2>


          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8">

            <p className="max-w-3xl text-lg leading-8 text-gray-400">
              Continuously strengthening problem-solving skills through
              algorithmic practice and interview-focused preparation.
            </p>


            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "Arrays",
                "Strings",
                "Two Pointers",
                "Sliding Window",
                "Hashing",
                "Binary Search",
                "Linked Lists",
                "Trees",
                "Graphs",
                "Dynamic Programming",
              ].map((topic) => (

                <span
                  key={topic}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
                >
                  {topic}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= RESUME ================= */}
      <section className="border-t border-white/10 px-6 py-32">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center">

            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Resume
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Want to know more?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-gray-400">
              Download my resume to learn more about my experience,
              technical skills, and projects.
            </p>


            <a
              href="/resume.pdf"
              download="Sachin_T_H_Resume.pdf"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Download Resume
              <ArrowDown size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-32"
      >

        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            06 — Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's connect.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I'm open to Software Engineering opportunities and interesting
            engineering challenges.
          </p>


          <div className="mt-10 flex flex-wrap gap-4">

            {/* Gmail Compose */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sachin.th3632@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              <Mail size={18} />
              Email Me
            </a>


            <a
              href="https://github.com/Sachinth3632"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>


            <a
              href="https://www.linkedin.com/in/sachinth3632/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Sachin T H
          </p>

          <p>
            Built with React + TypeScript
          </p>

        </div>

      </footer>

    </main>
  );
}


/* =========================================================
   SKILL CARD
========================================================= */

type SkillCardProps = {
  title: string;
  skills: string[];
};

function SkillCard({
  title,
  skills,
}: SkillCardProps) {

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">

        {skills.map((skill) => (

          <span
            key={skill}
            className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-400"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}


/* =========================================================
   PROJECT CARD
========================================================= */

type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
};

function ProjectCard({
  number,
  title,
  description,
  technologies,
  github,
}: ProjectCardProps) {

  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">

      <div className="flex items-start justify-between">

        <span className="text-sm font-mono text-cyan-400">
          {number}
        </span>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 transition group-hover:text-cyan-400"
        >
          <ArrowUpRight size={22} />
        </a>

      </div>


      <h3 className="mt-8 text-2xl font-semibold">
        {title}
      </h3>


      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>


      <div className="mt-6 flex flex-wrap gap-2">

        {technologies.map((technology) => (

          <span
            key={technology}
            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500"
          >
            {technology}
          </span>

        ))}

      </div>

    </article>
  );
}


export default App;