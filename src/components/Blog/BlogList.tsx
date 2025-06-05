import { BlogCard } from "./BlogCard"

export const BlogList = () => {
  return (
    <div className="flex flex-col gap-y-6">
            <BlogCard
                desc={<p>Built a full-stack farmer marketplace and customer app during <strong>Smart India Hackathon 2024</strong>, where we were selected as <strong>Top 6 Finalists</strong> at <strong>IIT Hyderabad</strong>. Developed with <strong>React Native</strong>, the solution included <strong>AI-powered features like price prediction</strong> to support farmers and buyers with real-time insights.</p>}

                image="https://media.geeksforgeeks.org/wp-content/uploads/20240609133931/WhatsApp-Image-2024-06-09-at-133844.jpeg"
                liveLink="https://www.linkedin.com/posts/bhanu-shakya-081a8a212_smartindiahackathon2024-iithyderabad-agritech-activity-7274058865606848512-kq1b?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXoo-EBY3Bf0agvaOtAxi7O3Rfx2jnKzt4"
                title="Smart India Hackathon Finalist"
            />
            <BlogCard
                desc={<p>Developed a full-stack <strong>MERN feedback system</strong> as a <strong>finalist in the Rajasthan Police Hackathon</strong>, after clearing internal rounds and mentorship sessions. Integrated <strong>Google Cloud Sentiment Analysis</strong> and <strong>Translation API</strong> to analyze and localize user feedback for better public service insights.</p>}

                image="https://i.ytimg.com/vi/OY0CGSZdMuU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBVdGbcohVML50W8EJenPTru20WAA"
                liveLink="https://www.linkedin.com/posts/bhanu-shakya-081a8a212_hackathonsuccess-teamcollaboration-techinnovation-activity-7154870846954635264-rTJv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXoo-EBY3Bf0agvaOtAxi7O3Rfx2jnKzt4"
                title="Rajasthan Police Hackthon Finalist"
            />
    </div>
  )
}
