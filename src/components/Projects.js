import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/m5.png";
import projImg2 from "../assets/img/m4.png";
import projImg3 from "../assets/img/m6.png";
import projImg4 from "../assets/img/m10.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Fem Tutor",
      description: "Design & Development",
      imgUrl: projImg1,
      url: "https://www.figma.com/proto/vd4xa2VXf3V9gaDK49YFv0/portfolio-projects?page-id=0%3A1&type=design&node-id=1-432&viewport=129%2C911%2C0.06&t=UCAgdXswohLRfxdl-1&scaling=min-zoom&starting-point-node-id=1%3A1297", // Replace with your dynamic URL
    },
    {
      title: "AgroAlley",
      description: "Design & Development",
      imgUrl: projImg2,
      url: "https://www.figma.com/proto/vd4xa2VXf3V9gaDK49YFv0/portfolio-projects?page-id=0%3A1&type=design&node-id=1-756&viewport=129%2C911%2C0.06&t=UCAgdXswohLRfxdl-1&scaling=min-zoom&starting-point-node-id=1%3A1297", // Replace with your dynamic URL
    },
    {
      title: "Fitwood",
      description: "Design & Development",
      imgUrl: projImg3,
      url: "https://www.figma.com/proto/vd4xa2VXf3V9gaDK49YFv0/portfolio-projects?page-id=0%3A1&type=design&node-id=148-4105&viewport=129%2C911%2C0.06&t=UCAgdXswohLRfxdl-1&scaling=min-zoom&starting-point-node-id=1%3A1297", // Replace with your dynamic URL
    },
    {
      title: "Coming Soon",
      description: "Design & Development",
      imgUrl: projImg4,
      url: "", // Replace with your dynamic URL
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects</h2>
                  <p>
                  Welcome to my UX/UI design showcase, where creativity knows no bounds.Step into a world of exceptional design solutions that enhance user experiences.Each project in my portfolio is a testament to my passion for crafting intuitive and visually appealing interfaces
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="g-4">
                          {projects.map((project, index) => (
                            <Col key={index} md={6}>
                              <div className="card p-2">
                                <ProjectCard {...project} />
                                <a href={project.url}>
                                  <button className="button-63 mt-2">VIEW PROJECT</button>
                                </a>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                        Design isn't just my profession; it's my passion and the driving force behind every pixel I craft.

In a digital world where first impressions are paramount, I specialize in creating designs that captivate and convert.

My goal is to make the complex feel simple, the mundane look extraordinary, and the user's journey a delight.

From empathizing with users to delivering delightful prototypes, my process is a symphony of user-centricity.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                        Join me on a visual journey where creativity meets strategy and every click is a step closer to excellence.

As you explore my work, you'll find solutions that not only look beautiful but also enhance user engagement.

Your success is my priority, and I'm here to turn your design dreams into interactive realities.

Let's collaborate to redefine user experiences and create digital masterpieces that leave a lasting impact.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
