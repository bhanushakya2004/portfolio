import { ProjectCard } from "./ProjectCard"

export const ProjectList = () => {
  return (
    <div className="flex flex-col gap-y-6">
        <ProjectCard
            image="https://github.com/RishiBakshii/Baatchit-Modern-Chat-Application/raw/main/images/groupChatCreation.png"
            desc={<p>Baatchit is a secure, real-time messaging app with <strong>end-to-end encryption, private key recovery</strong>, and <strong>push notifications</strong>. It offers features like ,<strong>friends, group chats, message editing, reactions, file sharing, and OAuth integration</strong>, all within a Progressive Web App for a seamless, native-like experience.</p>}
            title="LearnSphere - AI-Powered Educational Platform"
            githubLink="https://github.com/anshul-jain-devx108/LearnSphere---AI-Powered-Educational-Platform-"
            liveLink="https://learn-sphere-ai-powered-educational-platform.vercel.app/"
            techStack={["Mern","Redux-Toolkit","Rtk-Query","Typescript","Cloudinary","Tailwind","Socket.io","AWS","Firebase-push-notifications","Framer-Motion"]}
        />
        <ProjectCard
            image="https://github.com/anshul-jain-devx108/LearnSphere---AI-Powered-Educational-Platform-/blob/main/Screenshot%202025-05-14%20091706.png"
            desc={<p>A full-stack MERN chat application featuring <strong>real-time messaging with Socket.io</strong>, <strong>secure JWT-based authentication</strong>, and <strong>Redis-powered session management</strong>. Users can engage in <strong>one-on-one and group chats</strong>, with features like <strong>typing indicators</strong> and <strong>online/offline status</strong>. Integrated with <strong>Google Gemini AI</strong>, the app offers <strong>AI-assisted responses</strong> and <strong>smart reply suggestions</strong>. Additional functionalities include <strong>user profile customization</strong>, <strong>chat history synchronization</strong>, and <strong>admin controls for user and message management</strong>. Designed with a responsive UI and scalable backend architecture.</p>}
            title="ChatterAI – A Real-Time MERN Chat App with Gemini Integration"
            githubLink="https://github.com/bhanushakya2004/ChatterAI-A-Real-Time-MERN-Chat-App-with-Gemini-Integration"
            liveLink="https://github.com/bhanushakya2004/ChatterAI-A-Real-Time-MERN-Chat-App-with-Gemini-Integration"
            techStack={["MERN", "Socket.io", "Redis", "JWT", "Redux Toolkit", "Material UI", "Google Gemini AI"]}
        />

        
        <ProjectCard
            image="https://github.com/anshul-jain-devx108/LearnSphere---AI-Powered-Educational-Platform-/blob/main/Screenshot%202025-05-14%20091706.png"
            desc={<p>A full-stack MERN chat application featuring <strong>real-time messaging with Socket.io</strong>, <strong>secure JWT-based authentication</strong>, and <strong>Redis-powered session management</strong>. Users can engage in <strong>one-on-one and group chats</strong>, with features like <strong>typing indicators</strong> and <strong>online/offline status</strong>. Integrated with <strong>Google Gemini AI</strong>, the app offers <strong>AI-assisted responses</strong> and <strong>smart reply suggestions</strong>. Additional functionalities include <strong>user profile customization</strong>, <strong>chat history synchronization</strong>, and <strong>admin controls for user and message management</strong>. Designed with a responsive UI and scalable backend architecture.</p>}
            title="ChatterAI – A Real-Time MERN Chat App with Gemini Integration"
            githubLink="https://github.com/bhanushakya2004/GenAI-Chatapp"
            liveLink="https://gen-ai-chatapp.vercel.app/login"
            techStack={["MERN", "Socket.io", "Redis", "JWT", "Redux Toolkit", "Material UI", "Google Gemini AI"]}
        />
    </div>
  )
}
