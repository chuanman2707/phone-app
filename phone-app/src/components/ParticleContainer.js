import React, { Component } from "react";
import Particles from "react-particles-js";

export default class ParticleContainer extends Component {
  render() {
    return (
      <div style={styles.root}>
        <Particles
          params={{
            particles: {
              line_linked: {
                color: "#FFFFFF"
              },
              number: {
                value: 150
              },
              size: {
                value: 5
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
      </div>
    );
  }
}
const styles = {
  root: {
    height: "100vh",
    width: "100vw",
    background: "#c4e0e5",
    position: "fixed",
    margin: "0",
    padding: "0"
  }
};
