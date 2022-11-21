import { NextPage } from 'next';
import Page from '../components/Page';

const development = [
  'I use Visual Studio Code as my code editor, with the Atom One Dark theme and JetBrains Mono as my typeface of choice.',
  'Brave is main browser for both development and general use.',
  'React is my front end Javascript library of choice. The component-centric mental model is the first that that first made sense to me as a frontend developer.',
  'For CSS i have used a myriad pre-processors and css-in-js solutions like styled-components, but these days i am using vanilla CSS with Sass. ',
  'For Javascript animations i use GSAP, its a great way scroll animations to react.',
  'Talmabout backend, Node JS is my fave Javascript framework, but im currently learning Django',
];
const design = [
  'Figma is my primary tool for design these days. I use it mostly for illustration and custom icon design.',
];
const Uses: NextPage = () => {
  return (
    <div>
      <Page
        metaContent='I enjoy building interfaces that are a joy to use and support inclusive visions.'
        metaName='About me'
        title='About me'
      />
      <div className='container'>
        <div className='about-box'>
          <div className='about-section'>
            <h1>Uses</h1>
            <p className='text-primary'>
              A somewhat comprehensive list of tools, apps, and more that i use
              on a daily basis to code things and sometimes design.
            </p>
          </div>
          <div className='about-section'>
            <h2>Development</h2>
            <ul>
              {development.map((dev, index) => (
                <li className='text-primary' key={index}>
                  {dev}
                </li>
              ))}
            </ul>
          </div>
          <div className='about-section'>
            <h2>Design</h2>
            <ul>
              {design.map((des, index) => (
                <li className='text-primary' key={index}>
                  {des}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uses;
