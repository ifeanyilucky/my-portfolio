export interface ProjectDetailProps {
  title: string;
  about: string;
  link: string;
  cover: string;
  technologies: string[];
  description: string;
  github: string;
}

export interface ISideBarModal {
  show: boolean;
  closeShow: () => void;
  size: string;
  overlayColor: string;
  data: ProjectDetailProps;
  css: Object | any;
}
