import { projects } from '../context/projects';

export default function HomeProjects(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        maxWidth: '1088px',
      }}
      className='container'
    >
      <div className='project-wrapper'>
        {projects.slice(0, 2).map((project) => (
          <div className='project-name' key={project.id}>
            <h2>
              {project.title} ● {project.year}
            </h2>
            <p className='text-primary'>{project.description}</p>
            <div className='devices'>
              <figure className='device-mobile rotated-3d-left'>
                <div className='device-mobile-frame'>
                  <img
                    className='device-mobile-img'
                    src={project.cover}
                    alt='Image Description'
                  />
                </div>
              </figure>
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
                    alt='Image Description'
                  />
                </div>
              </figure>
            </div>
          </div>
        ))}
      </div>{' '}
    </div>
  );
}
