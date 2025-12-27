import { NextPage } from "next";
import Page from "../components/Page";
import { PageWrapper } from "../components/PageWrapper";

const development = [
  "I use Visual Studio Code as my code editor, with the Atom One Dark theme and JetBrains Mono as my typeface of choice.",
  "Brave is my main browser for both development and general use.",
  "React is my front end Javascript library of choice.",
  "For CSS I enjoy using pre-processors and css-in-js solutions like styled-components. ",
  "For Javascript animations I use GSAP.",
  "NodeJS is currently my favorite javascript framework for backend.",
];
const design = [
  "Figma is my primary tool for design these days. I use it mostly for illustration and custom icon design.",
];
const Uses: NextPage = () => {
  return (
    <div>
      <Page
        metaContent="I enjoy building interfaces that are a joy to use and support inclusive visions."
        metaName="About me"
        title="Uses"
      />
      <div className="container">
        <PageWrapper>
          <div className="row">
            <div className="col-md-8 col-12 mx-auto">
              <div className="about-section">
                <h1>Uses</h1>
                <p className="text-primary">
                  A somewhat comprehensive list of tools, apps, and more that I
                  use on a daily basis to code things and sometimes design. I
                  hope you find some useful resources here
                </p>
              </div>
              <div className="about-section">
                <h2>Development</h2>
                <ul>
                  {development.map((dev, index) => (
                    <li className="text-primary" key={index}>
                      {dev}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about-section">
                <h2>Design</h2>
                <ul>
                  {design.map((des, index) => (
                    <li className="text-primary" key={index}>
                      {des}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>
    </div>
  );
};

export default Uses;
