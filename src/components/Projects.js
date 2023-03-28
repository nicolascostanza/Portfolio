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
import "./projects.css";

export const Projects = () => {
  const projects = [
    {
      title: (
        <a
          href="https://www.qirapagos.com/"
          target="_blank"
          rel="noreferrer"
        >
          Qira Pagos
        </a>
      ),
      description: "Virtual wallet",
      imgUrl: projImg2,
    },
    {
      title: (
        <a
          href="https://www.qiraglobal.com/"
          target="_blank"
          rel="noreferrer"
        >
          Qira Global
        </a>
      ),
      description:
        "Agro ecommerce and back office with different profiles",
      imgUrl: projImg1,
    },
    {
      title: (
        <a
          href="https://www.syngenta.com.ar/"
          target="_blank"
          rel="noreferrer"
        >
          Syngenta
        </a>
      ),
      description: "Informational page",
      imgUrl: projImg5,
    }
  ];

  return (
    <section className="project" id="tests">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>
                In this section you will find the different projects made by me.
                <li>
                  <b>Qira Pagos </b> is a virtual wallet and financial tool for the agribusiness world.
                </li>
                <li>
                  <b>Qira Global </b> is an application in which we can make various purchases in the field sector.
                </li>
                <li>
                  <b>Syngenta </b> informative website for agricultural science and technology provider.
                </li>
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center classimportan"
                  id="pills-tab"
                >
                    <Nav.Link eventKey="first">Deploy</Nav.Link>
                </Nav>
                <Tab.Content id="slideInUp">
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
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="IMG"></img>
    </section>
  );
};
