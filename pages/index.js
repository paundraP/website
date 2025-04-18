import { useRef, useState } from "react";
import Head from "next/head";
import { Press_Start_2P, Russo_One } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Analytics } from "@vercel/analytics/react";

const pressStart2p = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin-ext"],
});

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = (modalType) => {
    setActiveModal(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("");
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

      // Send the email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          to_name: "Paundra",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Paundra Pujo Darmawan</title>
        <meta
          name="description"
          content="Paundra Pujo Darmawan personal website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/retro-32.png" />
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <span>Paundra Pujo Darmawan</span>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="https://x.com/paundrapujo" target="_blank">
            X
          </a>
          <a
            href="https://www.linkedin.com/in/paundra-pujo-darmawan"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://instagram.com/paundra.pujo" target="_blank">
            Instagram
          </a>
          <a href="https://github.com/paundrap" target="_blank">
            Github
          </a>
        </div>
      </nav>

      <div className={`${styles.page} ${pressStart2p.variable}`}>
        <div className={styles.iconGrid}>
          <div
            className={styles.iconWindow}
            onClick={() => openModal("aboutme")}
          >
            <Image
              src="/images/about-me.png"
              alt="About Me"
              width={80}
              height={80}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>About Me</span>
          </div>

          <div
            className={styles.iconWindow}
            onClick={() => openModal("projects")}
          >
            <Image
              src="/images/projects.png"
              alt="Projects"
              width={80}
              height={80}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Projects</span>
          </div>

          <div
            className={styles.iconWindow}
            onClick={() => openModal("experiences")}
          >
            <Image
              src="/images/experiences.png"
              alt="Experiences"
              width={80}
              height={80}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Experiences</span>
          </div>

          <div className={styles.iconWindow} onClick={() => openModal("blogs")}>
            <Image
              src="/images/blogs.png"
              alt="Blogs"
              width={80}
              height={80}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Blogs</span>
          </div>

          <div
            className={styles.iconWindow}
            onClick={() => openModal("langandtools")}
          >
            <Image
              src="/images/langandtools.png"
              alt="Languages & Tools"
              width={80}
              height={80}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Languages & Tools</span>
          </div>

          <div
            className={styles.iconWindow}
            onClick={() => openModal("contactme")}
          >
            <Image
              src="/images/contactme.png"
              alt="Contact Me"
              width={80}
              height={80}
              className={styles.iconImage}
            />
            <span className={styles.iconLabel}>Contact Me</span>
          </div>
        </div>

        {activeModal == "aboutme" && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalTitleBar}>
                <span>About Me</span>
                <div className={styles.windowControls}>
                  <div
                    className={`${styles.windowButton} ${styles.minimizeButton}`}
                  >
                    _
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.maximizeButton}`}
                  >
                    □
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.closeButton}`}
                    onClick={closeModal}
                  >
                    ×
                  </div>
                </div>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.aboutMeContent}>
                  <div className={styles.aboutMeImage}>
                    <Image
                      src="/images/profilepict.png"
                      alt="Profile Photo"
                      width={200}
                      height={200}
                      className={styles.profileImage}
                    />
                  </div>
                  <div className={styles.aboutMeText}>
                    <h2 className={styles.aboutMeTitle}>
                      Hello, I&apos;m Paundra Pujo Darmawan
                    </h2>
                    <p className={styles.aboutMeParagraph}>
                      I&apos;m a passionate backend developer with expertise in
                      building robust and scalable applications. With a strong
                      foundation in multiple programming languages and
                      frameworks, I specialize in creating some backend stuff,
                      like an API, design and managing database,
                      troubleshooting, writing server-side-code, and sometimes
                      be a devops.
                    </p>
                    <p className={styles.aboutMeParagraph}>
                      My journey in technology began when im in my final year in
                      junior high school and have the final project for
                      information technology subject. Since then, I&apos;ve
                      worked on various projects ranging from the plain html css
                      js, to more advance projects i follow at my college.
                      I&apos;m particularly interested in backend development
                      and cyber security (blue team enjoyer) and always looking
                      for new challenges to expand my knowledge.
                    </p>
                    <p className={styles.aboutMeParagraph}>
                      When I&apos;m not coding, you can find me on X. I believe
                      in continuous learning and staying updated with the latest
                      technologies in the ever-evolving tech landscape.
                    </p>
                  </div>
                </div>
                <button
                  className={styles.closeModalButton}
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {activeModal == "projects" && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalTitleBar}>
                <span>Projects</span>
                <div className={styles.windowControls}>
                  <div
                    className={`${styles.windowButton} ${styles.minimizeButton}`}
                  >
                    _
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.maximizeButton}`}
                  >
                    □
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.closeButton}`}
                    onClick={closeModal}
                  >
                    ×
                  </div>
                </div>
              </div>
              <div className={styles.modalBody}>
                <h2 className={styles.modalTitle}>My Projects</h2>
                <div className={styles.projectCards}>
                  {/* Project Card 1 */}
                  <div className={styles.projectCard}>
                    <div className={styles.projectCardHeader}>
                      <div className={styles.projectIcon}>🌐</div>
                      <div className={styles.projectTitle}>Weather API</div>
                    </div>
                    <div className={styles.projectDescription}>
                      A Weather API use Golang to see how the weather of a city
                      in the world
                    </div>
                    <div className={styles.projectTech}>
                      <span className={styles.techTag}>Golang</span>
                      <span className={styles.techTag}>HTMX</span>
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/paundraP/Weather-Tracker"
                        className={styles.projectLink}
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Project Card 2 */}
                  <div className={styles.projectCard}>
                    <div className={styles.projectCardHeader}>
                      <div className={styles.projectIcon}>🌐</div>
                      <div className={styles.projectTitle}>
                        Golang Starter Template
                      </div>
                    </div>
                    <div className={styles.projectDescription}>
                      This is a backend template built with Golang and the Fiber
                      web framework. Have Integrated Payment Gateway use
                      Midtrans and storage management use AWS S3 Bucket
                    </div>
                    <div className={styles.projectTech}>
                      <span className={styles.techTag}>Golang</span>
                      <span className={styles.techTag}>Fiber</span>
                      <span className={styles.techTag}>HTML</span>
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/paundraP/Go-Starter-Template"
                        className={styles.projectLink}
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Project Card 3 */}
                  <div className={styles.projectCard}>
                    <div className={styles.projectCardHeader}>
                      <div className={styles.projectIcon}>🌐</div>
                      <div className={styles.projectTitle}>
                        Spotify Look-Like
                      </div>
                    </div>
                    <div className={styles.projectDescription}>
                      This is my Final Project for my Programming Technique and
                      Algorithms course. The requirements is to make a playlist
                      app like spotify use C Language
                    </div>
                    <div className={styles.projectTech}>
                      <span className={styles.techTag}>C</span>
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/paundraP/Final-Project-ATP-2024"
                        className={styles.projectLink}
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Project Card 4 */}
                  <div className={styles.projectCard}>
                    <div className={styles.projectCardHeader}>
                      <div className={styles.projectIcon}>🌐</div>
                      <div className={styles.projectTitle}>Bookshelf API</div>
                    </div>
                    <div className={styles.projectDescription}>
                      This is one of the projects that I worked on for the final
                      project submission in the Learning to Make Back-End
                      Applications for Beginners course on the Dicoding
                      platform.
                    </div>
                    <div className={styles.projectTech}>
                      <span className={styles.techTag}>Javascript</span>
                      <span className={styles.techTag}>ExpressJS</span>
                    </div>
                    <div className={styles.projectLinks}>
                      <a
                        href="https://github.com/paundraP/Bookshelf-API"
                        className={styles.projectLink}
                        target="_blank"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  className={styles.closeModalButton}
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {activeModal == "experiences" && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalTitleBar}>
                <span>Work Experience</span>
                <div className={styles.windowControls}>
                  <div
                    className={`${styles.windowButton} ${styles.minimizeButton}`}
                  >
                    _
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.maximizeButton}`}
                  >
                    □
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.closeButton}`}
                    onClick={closeModal}
                  >
                    ×
                  </div>
                </div>
              </div>
              <div className={styles.modalBody}>
                <h2>Professional Journey</h2>
                <div className={styles.experienceTimeline}>
                  {/* Experience 1 */}
                  <div className={styles.experienceCard}>
                    <div className={styles.experienceDot}></div>
                    <div className={styles.experienceDate}>
                      JAN 2025 - Present
                    </div>
                    <div className={styles.experienceTitle}>
                      Backend Developer
                    </div>
                    <div className={styles.experienceCompany}>TEDxITS 2025</div>
                    <div className={styles.experienceDescription}>
                      Use Golang and Gin Framework to create and manage API that
                      can be used perfectly for the front end.
                    </div>
                    <div className={styles.experienceSkills}>
                      <span className={styles.experienceSkill}>Golang</span>
                      <span className={styles.experienceSkill}>Gin Gonic</span>
                      <span className={styles.experienceSkill}>PostgreSQL</span>
                      <span className={styles.experienceSkill}>Teamwork</span>
                    </div>
                  </div>

                  {/* Experience 2 */}
                  <div className={styles.experienceCard}>
                    <div className={styles.experienceDot}></div>
                    <div className={styles.experienceDate}>
                      NOV 2024 - Present
                    </div>
                    <div className={styles.experienceTitle}>
                      Backend Developer
                    </div>
                    <div className={styles.experienceCompany}>
                      A Renewal Agent 6.0
                    </div>
                    <div className={styles.experienceDescription}>
                      Using NestJS and Prisma to create a backend service for
                      the annual event of my department.
                    </div>
                    <div className={styles.experienceSkills}>
                      <span className={styles.experienceSkill}>Typescript</span>
                      <span className={styles.experienceSkill}>NestJS</span>
                      <span className={styles.experienceSkill}>PostgreSQL</span>
                    </div>
                  </div>

                  {/* Experience 3 */}
                  <div className={styles.experienceCard}>
                    <div className={styles.experienceDot}></div>
                    <div className={styles.experienceDate}>
                      OCT 2024 - Present
                    </div>
                    <div className={styles.experienceTitle}>
                      Backend Developer
                    </div>
                    <div className={styles.experienceCompany}>
                      Petroleum Integrated Days 2025
                    </div>
                    <div className={styles.experienceDescription}>
                      Using Golang and Gin Gonic to create a backend service for
                      international-scaled competition held by Society of
                      Petroleum Engineers Institut Teknologi Sepuluh Nopember
                      Student Chapter (SPE ITS SC)
                    </div>
                    <div className={styles.experienceSkills}>
                      <span className={styles.experienceSkill}>Golang</span>
                      <span className={styles.experienceSkill}>Gin Gonic</span>
                      <span className={styles.experienceSkill}>PostgreSQL</span>
                    </div>
                  </div>

                  {/* Experience 4 */}
                  <div className={styles.experienceCard}>
                    <div className={styles.experienceDot}></div>
                    <div className={styles.experienceDate}>
                      OCT 2024 - MAR 2025
                    </div>
                    <div className={styles.experienceTitle}>
                      Backend Developer
                    </div>
                    <div className={styles.experienceCompany}>
                      Ini Lho ITS 2025!
                    </div>
                    <div className={styles.experienceDescription}>
                      INI LHO ITS 2025 is An annual event helps high school
                      students explore academic programs aligned with their
                      interests. Highlights include OPEN CAMPUS SEPULUH
                      NOPEMBER, TRY OUT WELCOME SEPULUH NOPEMBER, and
                      EXPEDITION! Each offering engaging activities to discover
                      ITS and your future. For this project, I was responsible
                      to creating some API&apos;s, managing the database, and
                      some other stuff.
                    </div>
                    <div className={styles.experienceSkills}>
                      <span className={styles.experienceSkill}>Golang</span>
                      <span className={styles.experienceSkill}>Gin Gonic</span>
                      <span className={styles.experienceSkill}>PostgreSQL</span>
                      <span className={styles.experienceSkill}>Leadership</span>
                      <span className={styles.experienceSkill}>Teamwork</span>
                    </div>
                  </div>

                  {/* Experience 5 */}
                  <div className={styles.experienceCard}>
                    <div className={styles.experienceDot}></div>
                    <div className={styles.experienceDate}>
                      SEPT 2024 - DEC 2024
                    </div>
                    <div className={styles.experienceTitle}>
                      Backend Developer
                    </div>
                    <div className={styles.experienceCompany}>
                      MABA CUP ITS 2024
                    </div>
                    <div className={styles.experienceDescription}>
                      MABA CUP ITS is a competition event held to develop the
                      skills of ITS new students, especially in Arts,
                      Linguistics, Music, and Sports. MABA CUP ITS is organized
                      by Lembaga Minat Bakat Institut Teknologi Sepuluh Nopember
                      (LMB ITS). For this project, I was responsible to create
                      the website to inform the competition details.
                    </div>
                    <div className={styles.experienceSkills}>
                      <span className={styles.experienceSkill}>Golang</span>
                      <span className={styles.experienceSkill}>Gin Gonic</span>
                      <span className={styles.experienceSkill}>PostgreSQL</span>
                      <span className={styles.experienceSkill}>Leadership</span>
                      <span className={styles.experienceSkill}>Teamwork</span>
                    </div>
                  </div>
                </div>
                <button
                  className={styles.closeModalButton}
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {activeModal == "blogs" && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalTitleBar}>
                <span>Blog Posts</span>
                <div className={styles.windowControls}>
                  <div
                    className={`${styles.windowButton} ${styles.minimizeButton}`}
                  >
                    _
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.maximizeButton}`}
                  >
                    □
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.closeButton}`}
                    onClick={closeModal}
                  >
                    ×
                  </div>
                </div>
              </div>
              <div className={styles.modalBody}>
                <h2 className={styles.modalTitle}>Latest Articles</h2>
                <div className={styles.blogCards}>
                  {/* Blog Card 1 */}
                  <div className={styles.blogCard}>
                    <div className={styles.blogDate}>January 17, 2025</div>
                    <h3 className={styles.blogTitle}>
                      Write Up Cyber Jawara National 2024
                    </h3>
                    <p className={styles.blogExcerpt}>
                      A deep dive explanation about the Cyber Jawara National
                      Forensic challenge.
                    </p>
                    <div className={styles.blogTags}>
                      <span className={styles.blogTag}>Cyber Security</span>
                      <span className={styles.blogTag}>Digital Forensics</span>
                      <span className={styles.blogTag}>CTF</span>
                    </div>
                    <a
                      href="https://paundrapujo.notion.site/Cyber-Jawara-2024-17e6458077f08091aa39c62a713d90fd"
                      className={styles.blogLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <button
                  className={styles.closeModalButton}
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {activeModal == "langandtools" && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalTitleBar}>
                <span>Languages & Tools</span>
                <div className={styles.windowControls}>
                  <div
                    className={`${styles.windowButton} ${styles.minimizeButton}`}
                  >
                    _
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.maximizeButton}`}
                  >
                    □
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.closeButton}`}
                    onClick={closeModal}
                  >
                    ×
                  </div>
                </div>
              </div>
              <div className={styles.modalBody}>
                <h2 className={styles.modalTitle}>Technical Skills</h2>

                <div className={styles.sectionTitle}>Programming Languages</div>
                <div className={styles.langToolsGrid}>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/go.svg"
                      alt="golang"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>Golang</div>
                    <div className={styles.langToolType}>Language</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/cpp.svg"
                      alt="C++"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>C++</div>
                    <div className={styles.langToolType}>Language</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/clang.svg"
                      alt="C"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>C</div>
                    <div className={styles.langToolType}>Language</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/javascript.svg"
                      alt="Javascript"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>JavaScript</div>
                    <div className={styles.langToolType}>Language</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/typescript.svg"
                      alt="Typescript"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>TypeScript</div>
                    <div className={styles.langToolType}>Language</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/rust.svg"
                      alt="Rust"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>Rust</div>
                    <div className={styles.langToolType}>Language</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/swift.svg"
                      alt="Swift"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>Swift</div>
                    <div className={styles.langToolType}>Language</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/python.svg"
                      alt="Python"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>Python</div>
                    <div className={styles.langToolType}>Language</div>
                  </div>
                </div>

                <div className={styles.sectionTitle}>Frameworks</div>
                <div className={styles.langToolsGrid}>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/gin.png"
                      alt="Gin Gonic Framework"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>Gin</div>
                    <div className={styles.langToolType}>Framework</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/fiber.svg"
                      alt="GoFiber Framework"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>Fiber</div>
                    <div className={styles.langToolType}>Framework</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/nextjs.png"
                      alt="NextJS"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>Next.js</div>
                    <div className={styles.langToolType}>Framework</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/nestjs.svg"
                      alt="NestJS"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>Nest.js</div>
                    <div className={styles.langToolType}>Framework</div>
                  </div>
                  <div className={styles.langToolCard}>
                    <Image
                      src="/langandtool/expressjs.png"
                      alt="ExpressJS"
                      width={48}
                      height={48}
                      className={styles.langToolIcon}
                    />
                    <div className={styles.langToolName}>Express.js</div>
                    <div className={styles.langToolType}>Framework</div>
                  </div>
                </div>

                <button
                  className={styles.closeModalButton}
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {activeModal === "contactme" && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalTitleBar}>
                <span>Contact Me</span>
                <div className={styles.windowControls}>
                  <div
                    className={`${styles.windowButton} ${styles.minimizeButton}`}
                  >
                    _
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.maximizeButton}`}
                  >
                    □
                  </div>
                  <div
                    className={`${styles.windowButton} ${styles.closeButton}`}
                    onClick={() => {
                      setActiveModal(null);
                      setFormStatus("");
                      setFormData({ name: "", email: "", message: "" });
                    }}
                  >
                    ×
                  </div>
                </div>
              </div>
              <div className={styles.modalBody}>
                <h2 className={styles.modalTitle}>Get in Touch</h2>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>To:</label>
                    <input
                      type="text"
                      value="Paundra Pujo Darmawan"
                      className={styles.emailDisplay}
                      readOnly
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="name">
                      From:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="email">
                      With Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} htmlFor="message">
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.formTextarea}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {formStatus && (
                    <div
                      className={`${styles.formStatus} ${styles[formStatus]}`}
                    >
                      {formStatus === "success"
                        ? "Message sent successfully! I should get back to you soon."
                        : "There was an error sending your message. Please try again later."}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Analytics />
    </>
  );
}
