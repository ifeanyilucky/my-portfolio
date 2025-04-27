import { projects } from '../context/projects';
import Link from 'next/link';

export default function HomeProjects(): JSX.Element {
  return (
    <section className='featured-projects'>
      <div className='section-header'>
        <h2>Featured Projects</h2>
        <Link href='/work'>
          <a className='view-all-link'>View all projects <span className='arrow'>→</span></a>
        </Link>
      </div>

      <div className='project-grid'>
        {projects.slice(0, 2).map((project) => (
          <div className='project-card' key={project.id}>
            <div className='project-info'>
              <h3 className='project-title'>
                {project.title} <span className='project-year'>● {project.year}</span>
              </h3>
              <p className='project-description'>{project.description}</p>

              <div className='project-tech'>
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className='tech-tag'>{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className='tech-more'>+{project.technologies.length - 3} more</span>
                )}
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link'>
                View Project <span className='arrow'>→</span>
              </a>
            </div>

            <div className='project-preview'>
              <div className='devices'>
                <figure className='device-browser'>
                  <div className='device-browser-header'>
                    <div className='device-browser-header-btn-list'>
                      <span className='device-browser-header-btn-list-btn'></span>
                      <span className='device-browser-header-btn-list-btn'></span>
                      <span className='device-browser-header-btn-list-btn'></span>
                    </div>
                    <div className='device-browser-header-browser-bar'>
                      {project.link}
                    </div>
                  </div>
                  <div className='device-browser-frame'>
                    <img
                      className='device-browser-img'
                      src={project.cover}
                      alt={`Screenshot of ${project.title} website`}
                      loading="lazy"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
