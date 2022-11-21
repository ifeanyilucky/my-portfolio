import { projects } from './projects';
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
        {projects.slice(0, 3).map((project) => (
          <div className='project-name' key={project.id}>
            <h2>
              {project.title} ● {project.year}
            </h2>
            <p className='text-primary'>{project.description}</p>
            <div className='project-cover'>
              <img src={project.cover} alt={project.title} />
            </div>
          </div>
        ))}
      </div>{' '}
    </div>
  );
}
