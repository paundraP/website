import { useRef, useState } from "react";
import Head from "next/head";
import { Press_Start_2P, Russo_One } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";

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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
          <span>Paundra Pujo Darmawan</span>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="#">YouTube</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
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
              alt="About Me Icon"
              width={200}
              height={200}
              className={styles.iconImage}
            />
          </div>
          <div
            className={styles.iconWindow}
            onClick={() => openModal("projects")}
          >
            <Image
              src="/images/projects.png"
              alt="About Me Icon"
              width={200}
              height={200}
              className={styles.iconImage}
            />
          </div>
          <div
            className={styles.iconWindow}
            onClick={() => openModal("experiences")}
          >
            <Image
              src="/images/experiences.png"
              alt="About Me Icon"
              width={200}
              height={200}
              className={styles.iconImage}
            />
          </div>
          <div className={styles.iconWindow} onClick={() => openModal("blogs")}>
            <Image
              src="/images/blogs.png"
              alt="About Me Icon"
              width={200}
              height={200}
              className={styles.iconImage}
            />
          </div>
          <div
            className={styles.iconWindow}
            onClick={() => openModal("langandtools")}
          >
            <Image
              src="/images/langandtools.png"
              alt="About Me Icon"
              width={200}
              height={200}
              className={styles.iconImage}
            />
          </div>
          <div
            className={styles.iconWindow}
            onClick={() => openModal("contactme")}
          >
            <Image
              src="/images/contactme.png"
              alt="About Me Icon"
              width={200}
              height={200}
              className={styles.iconImage}
            />
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
                <h2>About Me</h2>
                <p>Some details about me...</p>
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
                <h2>My Projects</h2>
                <div className={styles.projectCards}>
                  {/* Project Card 1 */}
                  <div className={styles.projectCard}>
                    <div className={styles.projectCardHeader}>
                      <div className={styles.projectIcon}>📱</div>
                      <div className={styles.projectTitle}>
                        Mobile App Development
                      </div>
                    </div>
                    <div className={styles.projectDescription}>
                      A cross-platform mobile application built with React
                      Native, featuring real-time data synchronization and
                      offline capabilities.
                    </div>
                    <div className={styles.projectTech}>
                      <span className={styles.techTag}>React Native</span>
                      <span className={styles.techTag}>Firebase</span>
                      <span className={styles.techTag}>Redux</span>
                    </div>
                    <div className={styles.projectLinks}>
                      <a href="#" className={styles.projectLink}>
                        View Demo
                      </a>
                      <a href="#" className={styles.projectLink}>
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Project Card 2 */}
                  <div className={styles.projectCard}>
                    <div className={styles.projectCardHeader}>
                      <div className={styles.projectIcon}>🌐</div>
                      <div className={styles.projectTitle}>Web Dashboard</div>
                    </div>
                    <div className={styles.projectDescription}>
                      An interactive web dashboard for data visualization and
                      analytics, built with modern web technologies.
                    </div>
                    <div className={styles.projectTech}>
                      <span className={styles.techTag}>React</span>
                      <span className={styles.techTag}>D3.js</span>
                      <span className={styles.techTag}>Node.js</span>
                    </div>
                    <div className={styles.projectLinks}>
                      <a href="#" className={styles.projectLink}>
                        Live Demo
                      </a>
                      <a href="#" className={styles.projectLink}>
                        GitHub
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
                <h2>Latest Articles</h2>
                <div className={styles.blogCards}>
                  {/* Blog Card 1 */}
                  <div className={styles.blogCard}>
                    <div className={styles.blogDate}>March 15, 2024</div>
                    <h3 className={styles.blogTitle}>
                      Building a Retro Portfolio with Next.js
                    </h3>
                    <p className={styles.blogExcerpt}>
                      A deep dive into creating a nostalgic 90&apos;s inspired
                      portfolio website using modern web technologies. Learn how
                      to combine the best of both worlds...
                    </p>
                    <div className={styles.blogTags}>
                      <span className={styles.blogTag}>Web Development</span>
                      <span className={styles.blogTag}>Next.js</span>
                      <span className={styles.blogTag}>Design</span>
                    </div>
                    <a
                      href="https://www.notion.so/your-blog-post-1"
                      className={styles.blogLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>

                  {/* Blog Card 2 */}
                  <div className={styles.blogCard}>
                    <div className={styles.blogDate}>March 10, 2024</div>
                    <h3 className={styles.blogTitle}>
                      The Evolution of Web Design
                    </h3>
                    <p className={styles.blogExcerpt}>
                      Exploring how web design has evolved from the early days
                      of the internet to modern responsive design. A journey
                      through time and technology...
                    </p>
                    <div className={styles.blogTags}>
                      <span className={styles.blogTag}>Web Design</span>
                      <span className={styles.blogTag}>History</span>
                      <span className={styles.blogTag}>UI/UX</span>
                    </div>
                    <a
                      href="https://www.notion.so/your-blog-post-2"
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
                <h2>Technical Skills</h2>

                <div className={styles.sectionTitle}>Programming Languages</div>
                <div className={styles.langToolsGrid}>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>🐹</div>
                    <div className={styles.langToolName}>Golang</div>
                    <div className={styles.langToolType}>Language</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.expert}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>⚡</div>
                    <div className={styles.langToolName}>C++</div>
                    <div className={styles.langToolType}>Language</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.advanced}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>🔧</div>
                    <div className={styles.langToolName}>C</div>
                    <div className={styles.langToolType}>Language</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.advanced}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>📜</div>
                    <div className={styles.langToolName}>JavaScript</div>
                    <div className={styles.langToolType}>Language</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.expert}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>📘</div>
                    <div className={styles.langToolName}>TypeScript</div>
                    <div className={styles.langToolType}>Language</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.expert}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>🦀</div>
                    <div className={styles.langToolName}>Rust</div>
                    <div className={styles.langToolType}>Language</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.intermediate}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>🍎</div>
                    <div className={styles.langToolName}>Swift</div>
                    <div className={styles.langToolType}>Language</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.intermediate}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>🐍</div>
                    <div className={styles.langToolName}>Python</div>
                    <div className={styles.langToolType}>Language</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.advanced}`}
                    ></div>
                  </div>
                </div>

                <div className={styles.sectionTitle}>Frameworks</div>
                <div className={styles.langToolsGrid}>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>🌿</div>
                    <div className={styles.langToolName}>Gin</div>
                    <div className={styles.langToolType}>Framework</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.expert}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>🧵</div>
                    <div className={styles.langToolName}>Fiber</div>
                    <div className={styles.langToolType}>Framework</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.advanced}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>⏭️</div>
                    <div className={styles.langToolName}>Next.js</div>
                    <div className={styles.langToolType}>Framework</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.expert}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>🪺</div>
                    <div className={styles.langToolName}>Nest.js</div>
                    <div className={styles.langToolType}>Framework</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.advanced}`}
                    ></div>
                  </div>
                  <div className={styles.langToolCard}>
                    <div className={styles.langToolIcon}>🚂</div>
                    <div className={styles.langToolName}>Express.js</div>
                    <div className={styles.langToolType}>Framework</div>
                    <div
                      className={`${styles.langToolLevel} ${styles.expert}`}
                    ></div>
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
                  <div className={styles.experienceDate}>2022 - Present</div>
                  <div className={styles.experienceTitle}>
                    Senior Frontend Developer
                  </div>
                  <div className={styles.experienceCompany}>
                    Tech Innovations Inc.
                  </div>
                  <div className={styles.experienceDescription}>
                    Leading the frontend development team in creating modern web
                    applications using React and Next.js.
                  </div>
                  <div className={styles.experienceSkills}>
                    <span className={styles.experienceSkill}>React</span>
                    <span className={styles.experienceSkill}>Next.js</span>
                    <span className={styles.experienceSkill}>TypeScript</span>
                    <span className={styles.experienceSkill}>
                      Team Leadership
                    </span>
                  </div>
                  <div className={styles.experienceAchievements}>
                    <div className={styles.experienceAchievement}>
                      Led the migration of legacy systems to modern React
                      architecture
                    </div>
                    <div className={styles.experienceAchievement}>
                      Implemented CI/CD pipelines reducing deployment time by
                      40%
                    </div>
                    <div className={styles.experienceAchievement}>
                      Mentored junior developers and conducted weekly tech
                      workshops
                    </div>
                  </div>
                </div>

                {/* Experience 2 */}
                <div className={styles.experienceCard}>
                  <div className={styles.experienceDot}></div>
                  <div className={styles.experienceDate}>2020 - 2022</div>
                  <div className={styles.experienceTitle}>
                    Frontend Developer
                  </div>
                  <div className={styles.experienceCompany}>
                    Digital Solutions Co.
                  </div>
                  <div className={styles.experienceDescription}>
                    Developed and maintained multiple web applications, focusing
                    on user experience and performance optimization.
                  </div>
                  <div className={styles.experienceSkills}>
                    <span className={styles.experienceSkill}>JavaScript</span>
                    <span className={styles.experienceSkill}>Vue.js</span>
                    <span className={styles.experienceSkill}>CSS3</span>
                    <span className={styles.experienceSkill}>REST APIs</span>
                  </div>
                  <div className={styles.experienceAchievements}>
                    <div className={styles.experienceAchievement}>
                      Optimized application performance, reducing load time by
                      60%
                    </div>
                    <div className={styles.experienceAchievement}>
                      Implemented responsive designs for mobile-first approach
                    </div>
                    <div className={styles.experienceAchievement}>
                      Collaborated with UX team to improve user engagement
                      metrics
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.closeModalButton} onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
