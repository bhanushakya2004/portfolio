import { ExperienceCard } from "./ExperienceCard"

export const ExperienceList = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <ExperienceCard
            duration="May 2025 - July 2025"
            companyName="Clover IT Services"
            role="Full Stack Developer"
            companyWebsiteLink="https://www.cloveritservices.com/"
            techStack={["Mern","Redux-toolkit","Typescript",]}
            desc={<p>I enhanced system performance by ,<strong>reducing API response times by up to 35% through REST API integration </strong>. Collaborated with a cross-functional team to improve code quality and streamline development.</p>}
            jobType="Internship"
        />
    </div>
  )
}
