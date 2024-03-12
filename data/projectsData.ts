interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Windows Dev Guide',
    description: `What if you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/static/images/projects/dev.webp',
    href: 'https://github.com/Vets-Who-Code/windows-dev-guide',
  },
  {
    title: 'Portfolio',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/projects/team-gen-min.jpg',
    href: 'https://stephanlamoureux.netlify.app',
  },
]

export default projectsData
