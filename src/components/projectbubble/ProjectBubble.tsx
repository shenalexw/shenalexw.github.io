import React, { Component } from "react";
import { FiLink, FiGithub } from "react-icons/fi";

type Props = {
  title: string;
  description: string;
  image: string;
  skills: string[];
  github: string;
  demo: string | undefined;
};

type State = {};

export default class ProjectBubble extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="projects-bubble">
        <div className="project-bubble-text-half">
          <div className="project-bubble-title">{this.props.title}</div>
          <div className="project-bubble-description">
            {this.props.description}
          </div>
          <div className="project-bubble-skills">
            Tech:{" "}
            {this.props.skills.map(function (skill, index, list) {
              if (list.length - 1 === index) {
                return `${skill}`;
              }
              return `${skill}, `;
            })}
          </div>
          <div className="project-bubble-links">
            <button
            //   className="icons"
              onClick={() => window.open(this.props.github)}
            >
              <FiGithub />
            </button>

            {this.props.demo && (
              <button
                // className="icons"
                onClick={() => window.open(this.props.demo)}
              >
                <FiLink />
              </button>
            )}
          </div>
        </div>
        <div className="project-bubble-image-half">
          <img
            alt="project"
            className="project-bubble-image"
            src={this.props.image}
          ></img>
        </div>
      </div>
    );
  }
}
