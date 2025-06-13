import { ExperienceCard } from "./ExperienceCard"

export const ExperienceList = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <ExperienceCard
        duration="May 2025 - July 2025"
        companyName="Innoflexion Technologies"
        role="GenAI Intern"
        companyWebsiteLink="https://www.innoflexion.com/"
        techStack={["LangChain", "Gemini", "Python", "Streamlit", "Vector DBs"]}
        desc={<p>Built <strong>AI-first agents</strong> using LangChain and Gemini to simulate personalized tutor experiences. Integrated memory and feedback systems to deliver <strong>context-aware, goal-driven tutoring agents</strong>.</p>}
        jobType="Internship"
      />
    </div>
  )
}
