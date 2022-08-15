import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/accesibility.png";
import projImg2 from "../assets/img/testplan.jpg";
import projImg3 from "../assets/img/testcases.png";
import projImg4 from "../assets/img/automation1.png";
import projImg5 from "../assets/img/accesibilityautomation.png";
import projImg6 from "../assets/img/automation2.png";
import projImg7 from "../assets/img/automation3.png";
import projImg8 from "../assets/img/manual1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: (
        <a
          href="https://alfonso-trackgenix-app.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Trackgenix App
        </a>
      ),
      description: "",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="tests">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In this section you will find the different projects made by
                    me.
                    <li>
                      <b>TRACKGENIX </b> is an App created for companies that are looking to hierarchize their company, manage their projects and have a control of the hours worked by each employee.
                    </li>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Manual Testing</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Automation Testing
                        </Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='IMG'></img>
    </section>
  );
};
