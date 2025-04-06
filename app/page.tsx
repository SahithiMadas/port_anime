import { Folder, Award, Briefcase } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { AnimatedBackground } from "@/components/animated-background"
import { TypingEffect } from "@/components/typing-effect"
import { SectionTransition } from "@/components/section-transition"
import { SectionHeading } from "@/components/section-heading"
import { StatCard } from "@/components/stat-card"
import { ExperienceCard } from "@/components/experience-card"
import { ProjectCard } from "@/components/project-card"
import { CertificateCard } from "@/components/certificate-card"
import { SkillCard } from "@/components/skill-card"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AnimatedBackground />
      <Navbar />
      <ScrollIndicator />

      {/* Home Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <SectionTransition>
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
                  Sahithi Madas
                </span>
              </h1>

              <div className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl">
                <TypingEffect texts={["Data Engineer Intern", "Data Science Enthusiast"]} />
              </div>

              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Building robust data pipelines and creating insightful visualizations that drive decision-making.
                Passionate about transforming raw data into actionable insights.
              </p>

              <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="https://www.linkedin.com/in/sahithi-madas-24s/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </Button>
                </Link>

                <Link href="mailto:smadas2410@gmail.com">
                  <Button variant="outline" className="rounded-full">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    Email
                  </Button>
                </Link>

                <Link href="tel:+15185998103">
                  <Button variant="outline" className="rounded-full">
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                    Call
                  </Button>
                </Link>

                <Button className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                  </svg>
                  Download Resume
                </Button>
              </div>
            </div>
          </SectionTransition>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="About Me" subtitle="Get to know me better" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <SectionTransition className="md:col-span-1">
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-xl md:h-80 md:w-80">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 blur-md transform -translate-x-2 -translate-y-2" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 blur-md transform translate-x-2 translate-y-2" />
                <div className="absolute inset-0 rounded-xl border-2 border-background" />
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Sahithi Madas"
                  width={400}
                  height={400}
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </SectionTransition>

            <SectionTransition className="md:col-span-2" delay={0.2}>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm a Data Engineer Intern at Albany County Local Government pursuing my Master's in Data Science at
                  the University at Albany, SUNY. My passion lies in building robust data pipelines and creating
                  insightful visualizations that drive decision-making.
                </p>
                <p className="text-muted-foreground">
                  With experience across government agencies, health care and educational institutions, I've developed a
                  strong foundation in data engineering, cloud infrastructure, and full-stack development. I specialize
                  in designing automated systems that improve data quality, enhance operational efficiency, and deliver
                  actionable insights.
                </p>
                <p className="text-muted-foreground">
                  My approach combines technical expertise with a deep understanding of business needs, allowing me to
                  create data solutions that deliver real value.
                </p>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.3}>
              <StatCard
                icon={<Folder className="h-6 w-6 text-blue-500" />}
                count={4}
                title="TOTAL PROJECTS"
                description="Innovative data solutions crafted"
                href="#projects"
              />
            </SectionTransition>

            <SectionTransition delay={0.4}>
              <StatCard
                icon={<Award className="h-6 w-6 text-purple-500" />}
                count={7}
                title="CERTIFICATES"
                description="Professional skills validated"
                href="#certificates"
              />
            </SectionTransition>

            <SectionTransition delay={0.5}>
              <StatCard
                icon={<Briefcase className="h-6 w-6 text-pink-500" />}
                count={2}
                title="YEARS OF EXPERIENCE"
                description="Continuous learning journey"
                href="#experience"
              />
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading title="Education" subtitle="My academic journey" />

          <div className="space-y-8">
            <SectionTransition>
              <div className="rounded-xl border bg-background p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Master of Science in Data Science</h3>
                    <p className="text-lg text-blue-500">University at Albany, SUNY</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="text-sm text-muted-foreground">Expected May 2025</p>
                    <div className="mt-2 inline-block rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-3 py-1 text-xs font-medium text-foreground">
                      In Progress
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground mb-3">Key Coursework:</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "Advanced Database Systems",
                      "Machine Learning",
                      "Big Data Analytics",
                      "Data Visualization",
                      "Cloud Computing",
                      "Statistics",
                      "TDA",
                    ].map((course, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-medium text-foreground mb-3">Roles & Achievements:</p>
                  <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                    <li className="text-sm">Graduate Fellow at Albany County Local Government</li>
                    <li className="text-sm">
                      Graduate Student Assistant at University Libraries, Digital Scholarship Lab
                    </li>
                    <li className="text-sm">Student Advisory Board Member, University Library</li>
                    <li className="text-sm">Member, UAlbanyGO</li>
                    <li className="text-sm">Dean's Merit Scholarship</li>
                  </ul>
                </div>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.2}>
              <div className="rounded-xl border bg-background p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Bachelor of Technology in Computer Science</h3>
                    <p className="text-lg text-blue-500">Andhra University College of Engineering</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="text-sm text-muted-foreground">August 2019 - May 2023</p>
                    <div className="mt-2 inline-block rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 px-3 py-1 text-xs font-medium text-foreground">
                      Completed
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-foreground mb-3">Key Coursework:</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      "Data Structures",
                      "Algorithms",
                      "Database Warehousing",
                      "Web Development",
                      "Cryptography & Data Security",
                      "Software Engineering",
                    ].map((course, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-medium text-foreground mb-3">Roles & Achievements:</p>
                  <ul className="ml-5 list-disc space-y-1 text-muted-foreground">
                    <li className="text-sm">Council Member, The Communicons Club</li>
                    <li className="text-sm">Full Stack Web Development Intern at APSSDC</li>
                    <li className="text-sm">Participated in coding competitions</li>
                  </ul>
                </div>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Skills" subtitle="My technical expertise" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              category="Programming Languages"
              skills={[
                { name: "Python" },
                { name: "Java" },
                { name: "R" },
                { name: "C#" },
                { name: "Go" },
                { name: "JavaScript" },
                { name: "HTML & CSS" },
              ]}
              index={0}
            />

            <SkillCard
              category="Databases"
              skills={[
                { name: "MySQL" },
                { name: "MongoDB" },
                { name: "Oracle" },
                { name: "AWS RDS" },
                { name: "AWS S3" },
                { name: "AWS Lambda" },
                { name: "Azure" },
                { name: "GCP" },
              ]}
              index={1}
            />

            <SkillCard
              category="Web Development"
              skills={[{ name: "React" }, { name: "Angular" }, { name: "Node.js" }, { name: "D3.js" }]}
              index={2}
            />

            <SkillCard
              category="Software Tools & IDE"
              skills={[
                { name: "Cursor AI" },
                { name: "Oracle Cloud Infrastructure" },
                { name: "AWS" },
                { name: "Kubernetes" },
                { name: "Docker" },
                { name: "Terraform" },
                { name: "Helm" },
                { name: "API Gateway" },
                { name: "Databricks" },
                { name: "Power BI" },
                { name: "Tableau" },
                { name: "Microsoft Excel" },
              ]}
              index={3}
            />

            <SkillCard
              category="Monitoring & Debugging"
              skills={[{ name: "DataDog" }, { name: "Splunk" }, { name: "Databricks" }, { name: "Prometheus" }]}
              index={4}
            />

            <SkillCard
              category="Testing & CI/CD"
              skills={[
                { name: "JUnit" },
                { name: "PyTest" },
                { name: "Selenium" },
                { name: "Jenkins" },
                { name: "GitHub Actions" },
                { name: "CI/CD pipelines" },
                { name: "Circle CI" },
                { name: "TravisCI" },
                { name: "DevOps" },
              ]}
              index={5}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Experience" subtitle="My professional journey" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ExperienceCard
              title="Data Engineer Intern, Graduate Fellow"
              company="Albany County Local Government – Division of Information Services"
              location="Albany, New York"
              period="September 2024 - Present"
              description={[
                "Engineered an Excel-based automated grading pipeline with dynamic visualizations, streamlining coursework evaluation for 500+ students across HCI, DBMS, Data Structures, and Intro to Computing, significantly improving grading efficiency.",
                "Developed a student performance tracking system that leveraged real-time analytics to monitor engagement and academic progress, enabling targeted interventions through 50+ one-on-one sessions and enhancing learning outcomes.",
                "Contributing to IT Policies Review Project evaluating and enhancing data management policies, ensuring compliance with security and privacy regulations.",
                "Collaboration with IT teams to optimize data architectures, support data pipeline design, and integrate best practices in data governance.",
              ]}
              index={0}
            />

            <ExperienceCard
              title="Data Engineer Student Intern"
              company="New York State – Department of Health (Environment Protection)"
              location="Glens Falls, New York"
              period="May 2024 - August 2024"
              description={[
                "Developed a Data Integrity Validation Framework leveraging SQL-based anomaly detection to automate quality checks across 10000+ Prescription Monitoring Program (PMP) records, improving data accuracy by 35% and enhancing policy-driven decision-making.",
                "Engineered an Interactive Health Insights Platform by designing 15+ dynamic Tableau dashboards, integrating real-time SQL-based analytics.",
                "Built an Automated Comparative Analytics Engine to track statewide PDMP trends across 62 counties, accelerating stakeholder insights.",
                "Designed an SQL-Driven Data Cleansing Pipeline to enhance data reliability, automating the detection and correction of spurious transactions, improving dataset completeness by 30% and reducing manual intervention in audits.",
              ]}
              index={1}
            />

            <ExperienceCard
              title="Software Development Engineer, Graduate Student Assistant"
              company="University at Albany"
              location="Albany, New York"
              period="February 2024 - Present"
              description={[
                "Developed an Automated Procurement Optimization System, leveraging data-driven vendor analysis to reduce costs by 20%, integrating Power BI insights to streamline supplier selection and enhance financial decision-making.",
                "Engineered a Dynamic Academic Workflow Intelligence Dashboard, automating 1,000+ MIS data entries, improving operational efficiency by 45%, and optimizing academic process tracking with real-time Power BI visualizations.",
                "Designed a Data-Driven Performance Monitoring Framework, utilizing predictive analytics to enhance institutional decision-making, reducing workflow bottlenecks by 30%, enabling proactive academic resource allocation.",
                "Provided dedicated support for creative and diverse projects, with Python (Pandas, Dask, PySpark) use case Projects for Data Analysis using VR Project.",
              ]}
              index={2}
            />

            <ExperienceCard
              title="Full Stack Web Developer Intern"
              company="APSSDC"
              location="Andhra Pradesh, India"
              period="May 2021 - July 2021"
              description={[
                "Engineered an Automated Data Intelligence Pipeline integrating SQL, Python, and Looker, streamlining compliance monitoring and decision analytics. Optimized data retrieval processes, improving query execution time by 60% and reducing manual reporting efforts.",
                "Developed a Scalable Business Performance Dashboard, leveraging Power BI and backend API integrations to unify cross-functional insights, enhancing audit readiness by 30% and dividing 15% cost savings through predictive financial analytics.",
                "Applied expertise in HTML, JavaScript, Python, and CSS to contribute to an impactful project crafting a dynamic and user-friendly website.",
              ]}
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Projects" subtitle="My recent work" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProjectCard
              title="AutoPrice Predictor"
              description={[
                "Built a predictive analytics tool for used cars resale prices with high-precision Regression model using achieving 79.20% test accuracy.",
                "Optimized ETL workflows and feature engineering pipelines, leveraging PySpark, Pandas, and advanced encoding techniques.",
                "Implemented multiple regression models (Linear Regression, Ridge Regression, Random Forest) for dynamic valuation of used cars.",
              ]}
              technologies={["Python", "Machine Learning", "PySpark", "Pandas", "Random Forest", "ETL"]}
              index={0}
            />

            <ProjectCard
              title="Analysis of Natural Disaster and Risk Management"
              description={[
                "Using statistical tests (Kruskal-Wallis, ANOVA) performed EDA, geospatial analysis with Python.",
                "Developed a Regression based predictive model to assess disaster likelihood, providing recommendations to targeted interventions based on historical and geographical patterns.",
                "Performed geospatial analysis on natural disasters (1953-2023) in the U.S. using Python, and developed a Random Forest Classification based predictive model.",
              ]}
              technologies={[
                "Python",
                "Statistical Analysis",
                "Geospatial Analysis",
                "Random Forest",
                "Data Visualization",
              ]}
              index={1}
            />

            <ProjectCard
              title="Road Lane Detection System using Machine Learning"
              description={[
                "Developed a comprehensive Data pipeline with Python, focusing on image processing, feature extraction, and CNN model.",
                "Optimised model accuracy, validated results and addressed real-time implementation challenges, contributing to the field of Computer Vision for automation.",
              ]}
              technologies={["Python", "Computer Vision", "CNN", "Image Processing", "Machine Learning"]}
              index={2}
            />

            <ProjectCard
              title="Gram Panchayat (Village Council) Website"
              description={[
                "Managed database and ensured data security, optimising the website for enhanced user accessibility.",
                "Developed a robust website using HTML, CSS, JavaScript, and Python.",
                "Implemented user-friendly interfaces and secure data management systems for local government operations.",
              ]}
              technologies={["HTML", "CSS", "JavaScript", "Python", "Database Management", "Web Development"]}
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Certificates" subtitle="My professional certifications" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <CertificateCard
              title="Google Data Analytics Professional Certificate"
              issuer="Google"
              date="February 2025"
              link="https://www.coursera.org/account/accomplishments/specialization/certificate/WEZKMG172VI9"
              index={0}
            />

            <CertificateCard
              title="Introduction to Tableau"
              issuer="DataCamp"
              date="March 2025"
              link="https://www.datacamp.com/statement-of-accomplishment/course/904cedafb9ed8767b0390a637e69920999a8afff?raw=1"
              index={1}
            />

            <CertificateCard
              title="Model Data in Power BI"
              issuer="Microsoft"
              date="February 2025"
              link="https://learn.microsoft.com/en-us/users/madassahithi-9752/achievements/ha6gemp8"
              index={2}
            />

            <CertificateCard
              title="Becoming AWS Cloud Practitioner"
              issuer="AWS Digital Training"
              date="March 2025"
              additionalImages={[
                {
                  title: "AWS Cloud Practitioner - Part 1",
                  url: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "AWS Cloud Practitioner - Part 2",
                  url: "/placeholder.svg?height=400&width=600",
                },
              ]}
              index={3}
            />

            <CertificateCard
              title="Secure Azure AI Services Badge"
              issuer="Microsoft Learn"
              date="January 2025"
              link="https://learn.microsoft.com/en-us/users/madassahithi-9752/achievements/9x46kgau?ref=https%3A%2F%2Fwww.linkedin.com%2F"
              index={4}
            />

            <CertificateCard
              title="Google Analytics"
              issuer="Google Analytics Academy"
              date="August 2023"
              additionalImages={[
                {
                  title: "Google Analytics Academy Certificate",
                  url: "/placeholder.svg?height=400&width=600",
                },
              ]}
              index={5}
            />

            <CertificateCard
              title="Introduction to Machine Learning"
              issuer="AWS"
              date="April 2024"
              additionalImages={[
                {
                  title: "Intro to ML - AWS Certificate",
                  url: "/placeholder.svg?height=400&width=600",
                },
              ]}
              index={6}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Contact Me" subtitle="Let's get in touch" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <SectionTransition>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
                <p className="text-muted-foreground">
                  Feel free to reach out if you're looking for a data engineer, have a question, or just want to
                  connect.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                      <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <a href="mailto:smadas2410@gmail.com" className="text-sm text-blue-500 hover:underline">
                        smadas2410@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                      <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <a href="tel:+15185998103" className="text-sm text-blue-500 hover:underline">
                        +1 (518) 599-8103
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                      <svg className="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Albany, New York</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20">
                      <svg className="h-5 w-5 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/sahithi-madas-24s/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:underline"
                      >
                        linkedin.com/in/sahithi-madas-24s
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SectionTransition>

            <SectionTransition delay={0.2}>
              <div className="rounded-xl border bg-background p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-foreground">Send Me a Message</h3>
                <ContactForm />
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Sahithi Madas. All rights reserved.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sahithi-madas-24s/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="mailto:smadas2410@gmail.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

              <a
                href="tel:+15185998103"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Phone"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

