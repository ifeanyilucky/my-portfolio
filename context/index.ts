import { createContext } from 'react';
import { projects } from './projects';

const AppContext = createContext();

export const ProjectsContext = createContext(projects);
