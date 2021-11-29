import FadeInWhenVisibleCardNoHover from '../../../animations/fadeInWhenVisibleCardNoHover'

export default function GetRecentTechnologies({technologies}) {
  return (
    <FadeInWhenVisibleCardNoHover>
      <ul className="w-full xl:w-full mt-4 dark:text-white ml-4 grid grid-cols-3 gap-4">
        {technologies.map(tech => (
          tech.recent && (
            <li 
              key={tech.title}
              className="discs"
            >
              <i className={tech.icon}></i>
              {tech.title}
            </li>
          )
        ))}
      </ul>
    </FadeInWhenVisibleCardNoHover>
  )
}