import Github from "./github.svg"
import Linkedin from "./linkedin.svg"
import Instagram from "./instagram.svg"

const components = {
  instagram: Instagram,
  github: Github,
  linkedin: Linkedin,
}

const SocialIcon = ({ kind, href, size = 24 }) => {
  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600 "
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
