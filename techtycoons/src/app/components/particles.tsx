'use client';

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const options = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fullScreen: {
    enable: false,
    zIndex: 1
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: {
        min: 1,
        max: 3
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none" as const,
      random: false,
      straight: false,
      outModes: "out" as const
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab" as const
      },
      onClick: {
        enable: true,
        mode: "push" as const
      }
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      }
    }
  }
};

export default function ParticlesComponent() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      console.log("Particles container loaded");
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        className="h-full"
      />
    </div>
  );
}