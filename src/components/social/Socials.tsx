import { Github } from "../ui/icons/Github"
import { HashNodeIcon } from "../ui/icons/HashNodeIcon"
import { LeetCodeIcon } from "../ui/icons/LeetCodeIcon"
import { Linkedin } from "../ui/icons/Linkedin"
import { Twitter } from "../ui/icons/Twitter"

export const Socials = () => {
  return (
    <div className="flex gap-x-4 items-center">

        <a target="_blank" href="https://github.com/bhanushakya2004">
          <Github size={40}/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/bhanu-shakya-081a8a212/">
          <Linkedin size={40}/>
        </a>
        <a target="_blank" href="https://leetcode.com/u/Bhanu_Shakya/">
          <LeetCodeIcon size={35}/>
        </a>
        <a target="_blank" href="https://hashnode.com/@Bhanu2102">
          <HashNodeIcon size={35}/>
        </a>
        <a target="_blank" href="https://x.com/bhanushakya2004?s=21">
          <Twitter size={33}/>
        </a>
    </div>
  )
}
