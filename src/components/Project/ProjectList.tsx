import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <ProjectCard
        title="ThinkTogether – AI-Powered Collaboration Platform"
        desc={
          <p>
            Architected full-stack real-time messaging application with <strong>LangChain</strong> for intelligent conversations. 
            Enabled <strong>WebSocket</strong>, <strong>JWT auth</strong>, <strong>Redis memory</strong> for session persistence, and 
            integrated <strong>AI-enhanced messaging</strong> in a dynamic React UI.
          </p>
        }
        githubLink="https://github.com/bhanushakya2004/ThinkTogether"
        liveLink="https://thinktogether.streamlit.app"
        techStack={["LangChain", "React.js", "Redis", "JWT", "WebSockets", "Node.js"]}
      />
      
      <ProjectCard
        title="LearnSphere – AI-Driven Educational Management System"
        desc={
          <p>
            Developed an AI-powered platform automating student evaluation using <strong>Gemini API</strong>. Integrated <strong>Google Calendar</strong>, 
            <strong>Gmail APIs</strong>, and <strong>OAuth 2.0</strong>. Designed with <strong>microservices in Node.js</strong> and deployed via <strong>Cloud Run</strong>, 
            cutting educator effort by 40%.
          </p>
        }
        githubLink="https://github.com/anshul-jain-devx108/LearnSphere---AI-Powered-Educational-Platform-"
        liveLink="https://learn-sphere-ai-powered-educational-platform.vercel.app/"
        techStack={["MERN", "Gemini API", "OAuth 2.0", "Google APIs", "Cloud Run", "Microservices"]}
      />

      <ProjectCard
        title="Cold Email Generator Pro – Personalized Outreach Tool"
        desc={
          <p>
            Built an AI-based tool for generating personalized emails from job descriptions and resumes. Used <strong>LangChain</strong>, 
            <strong>Groq API</strong>, <strong>Streamlit</strong> for parsing, analysis, and content generation. Supports <strong>PDF upload</strong> 
            and works with diverse job platforms.
          </p>
        }
        githubLink="https://github.com/bhanushakya2004/Cold-Email-Generator-Pro"
        liveLink="https://cold-email-generator-pro.streamlit.app/"
        techStack={["LangChain", "Groq API", "Streamlit", "Python", "PDF Parsing"]}
      />

      <ProjectCard
        title="NewsBot – Intelligent News Research Assistant"
        desc={
          <p>
            AI-powered assistant that extracts and analyzes news from live sources using <strong>LangChain</strong> and <strong>OpenRouter</strong>. 
            Performs <strong>vector similarity search via FAISS</strong> and generates insights with citations in a <strong>Streamlit chat UI</strong>.
          </p>
        }
        githubLink="https://github.com/bhanushakya2004/NewsBot-AI-News-Research-Assistant"
        liveLink="https://newsbot-intelligent-news.streamlit.app/"
        techStack={["LangChain", "OpenRouter", "FAISS", "Streamlit", "Python"]}
      />
    </div>
  )
}
