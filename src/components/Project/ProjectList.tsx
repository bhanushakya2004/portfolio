import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-y-6">

      <ProjectCard
        title="LearnSphere – AI-Powered Educational Platform"
        desc={<p>Built an AI-first platform that automates <strong>grading, scheduling, and performance analytics</strong> for educators. Integrated <strong>Google APIs (Calendar, Gmail, Sheets)</strong> with <strong>OAuth 2.0</strong>, deployed on GCP Cloud Run.</p>}
        githubLink="https://github.com/anshul-jain-devx108/LearnSphere---AI-Powered-Educational-Platform-"
        liveLink="https://learn-sphere-ai-powered-educational-platform.vercel.app/"
        techStack={["MERN", "Google Cloud", "OAuth 2.0", "Firebase", "Tailwind", "Framer Motion"]}
      />

      <ProjectCard
        title="ChatterAI – Real-Time Chat App with Gemini AI"
        desc={<p>A production-ready MERN chat app with <strong>real-time messaging</strong>, <strong>JWT auth</strong>, and <strong>Redis sessions</strong>. Integrated <strong>Gemini AI</strong> and LangChain for <strong>smart replies with short-term memory</strong>.</p>}
        githubLink="https://github.com/bhanushakya2004/GenAI-Chatapp"
        liveLink="https://gen-ai-chatapp.vercel.app/login"
        techStack={["MERN", "Socket.io", "Redis", "JWT", "LangChain", "Google Gemini"]}
      />

      <ProjectCard
        title="ThinkTogether – AI-Powered Brainstorming Assistant"
        desc={<p>Developed a platform that lets users <strong>ideate, refine, and expand ideas</strong> using GenAI agents (LangChain + Gemini). Features <strong>smart idea clustering</strong>, feedback loops, and a clean Streamlit UI.</p>}
        githubLink="https://github.com/bhanushakya2004/ThinkTogether"
        liveLink="https://thinktogether.streamlit.app"
        techStack={["Python", "Streamlit", "LangChain", "Gemini", "OpenRouter"]}
      />

      <ProjectCard
        title="Cold Email Generator Pro – AI Career Tool"
        desc={<p>A professional AI tool that generates <strong>personalized cold emails</strong> for job applications. Features <strong>resume parsing</strong>, <strong>job description analysis</strong>, and <strong>Gemini-based email generation</strong>.</p>}
        githubLink="https://github.com/bhanushakya2004/Cold-Email-Generator-Pro"
        liveLink="https://coldemailgenpro.streamlit.app"
        techStack={["LangChain", "Streamlit", "Gemini", "OpenRouter", "Python"]}
      />

    </div>
  )
}
