import { Github, Mail, Linkedin, ExternalLink, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="text-lg font-bold">DevPortfolio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/Adithya404" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://linkedin.com/in/adithya-galipelli" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32 space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="space-y-4 flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="text-primary">Adithya</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer specializing in building exceptional digital experiences
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View my work</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Avatar className="h-64 w-64">
              <AvatarImage src="/avatar.JPG" alt="Developer portrait" />
              <AvatarFallback>DEV</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/40 py-16 md:py-24">
        <div className="container space-y-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate programmer and science enthusiast. I enjoy
                solving complex problems and turning ideas into reality through elegant code.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in software development began at Jawahrlal Nehru Technological University where I earned my Bachelor's degree
                in Information Technology. Since then, I've been working on various technologies and projects and constantly honing my skills to deliver
                high-quality software solutions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-lg">Location</h3>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Experience</h3>
                  <p className="text-muted-foreground">Fresher</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Education</h3>
                  <p className="text-muted-foreground">B.Tech. Information Technology</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Employment</h3>
                  <p className="text-muted-foreground">Wayvo, India</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <a href="/RESUME_ADITHYA_certs.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24">
        <div className="container space-y-12">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <SkillCategory title="Frontend" skills={["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML/CSS"]} />
            <SkillCategory title="Backend" skills={["Node.js", "Express"]} />
            <SkillCategory title="Database" skills={["PostgreSQL", "mySQL"]} />
            <SkillCategory title="Programming Languages" skills={["C", "Java", "Python"]} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/40 py-16 md:py-24">
        <div className="container space-y-12">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Home Automation & Security"
              description="Leverages IoT technologies to create a smart, secure living environment."
              tags={["Embedded C", "Firebase", "MIT App Inventor"]}
              image="/proj-1.jpg"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
            <ProjectCard
              title="Transcription of Hand-written Text to Digital for Indian Scripts"
              description="Converting ancient Indian scripts to digital formats preserve our cultural heritage."
              tags={["Python", "CV2", "Keras","TensorFlow","Gradio"]}
              image="/proj-2.png"
              demoUrl="https://example.com"
              repoUrl="https://github.com"
            />
          </div>

          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View More Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container max-w-4xl space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:galipelliadithya02@gmail.com" className="hover:text-primary transition-colors">
                    galipelliadithya02@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/Adithya404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/Adithya404
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://linkedin.com/in/adithya-galipelli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/username
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code2 className="h-5 w-5" />
            <span className="font-medium">DevPortfolio</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Adithya Galipelli. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://github.com/Adithya404" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/adithya-galipelli" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:galipelliadithya02@gmail.com">
              <Mail className="h-5 w-5 hover:text-primary transition-colors" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for skill category
function SkillCategory({ title, skills }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-medium">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}

// Component for project card
function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {/* <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            Demo
          </a>
        </Button>
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
      </CardFooter> */}
    </Card>
  )
}

