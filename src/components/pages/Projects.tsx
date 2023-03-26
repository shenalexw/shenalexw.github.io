import React, { Component } from "react";
import "../../css/Projects.css";
import ProjectBubble from "../projectbubble/ProjectBubble";
import projectData from "../../data/projects.json";

type Props = {};

type State = {};

export default class Projects extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div className="filler-block" id="projects" />
        <div className="projects">
          <div className="header">Projects</div>
          <div className="projects-content">
            {projectData.map((project) => (
              <ProjectBubble
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                skills={project.skills}
                github={project.github}
                demo={project.demo}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
