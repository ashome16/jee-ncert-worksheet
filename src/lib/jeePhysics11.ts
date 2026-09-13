export type Subtopic = { id: string; title: string };

export const JEE_PHY_11_TOPICS: Record<string, Subtopic[]> = {
  "units-and-measurements": [
    { id: "systems-of-units", title: "Systems of units and SI" },
    { id: "practical-measurement", title: "Vernier, screw gauge, least count" },
    { id: "errors", title: "Accuracy, precision, errors" },
    { id: "significant-figures", title: "Significant figures and rounding" },
    { id: "dimensions", title: "Dimensions and dimensional analysis" },
  ],
  kinematics: [
    { id: "straight-line", title: "Motion in a straight line" },
    { id: "vectors", title: "Vectors (for plane motion)" },
    { id: "projectile", title: "Projectile motion" },
    { id: "circular", title: "Uniform circular motion" },
  ],
  "laws-of-motion": [
    { id: "newtons-laws", title: "Newton’s laws and FBDs" },
    { id: "connected-bodies", title: "Connected bodies, lift, pulleys" },
    { id: "friction", title: "Friction" },
    { id: "circular-dynamics", title: "Circular motion dynamics" },
  ],
  "work-energy-and-power": [
    { id: "work", title: "Work (constant and variable force)" },
    { id: "energy", title: "Energy and work–energy theorem" },
    { id: "power", title: "Power" },
    { id: "collisions", title: "Collisions and vertical circle" },
  ],
  "system-of-particles-and-rotational-motion": [
    { id: "centre-of-mass", title: "Centre of mass" },
    { id: "torque-l", title: "Torque and angular momentum" },
    { id: "moment-of-inertia", title: "Moment of inertia" },
    { id: "rolling", title: "Rolling without slipping" },
  ],
  gravitation: [
    { id: "newtons-law-g", title: "Newton’s law and g" },
    { id: "field-potential", title: "Field, potential, escape speed" },
    { id: "satellites", title: "Kepler, orbits, satellites" },
  ],
  "properties-of-solids-and-liquids": [
    { id: "elasticity", title: "Solids: stress, strain, moduli" },
    { id: "fluids", title: "Fluids: pressure, Bernoulli, viscosity" },
    { id: "thermal", title: "Thermal properties" },
  ],
  thermodynamics: [
    { id: "first-law", title: "First law and processes" },
    { id: "cp-cv", title: "Cp, Cv, adiabatic relations" },
    { id: "second-law", title: "Second law, engines, Carnot" },
  ],
  "kinetic-theory-of-gases": [
    { id: "ideal-gas", title: "Ideal gas and rms speed" },
    { id: "equipartition", title: "Degrees of freedom and γ" },
  ],
  "oscillations-and-waves": [
    { id: "shm", title: "SHM and energy" },
    { id: "pendulum-spring", title: "Spring–mass and pendulum" },
    { id: "waves", title: "Progressive waves and strings" },
    { id: "pipes-beats", title: "Pipes, beats, Doppler" },
  ],
  "experimental-skills-class-11": [
    { id: "vernier-screw", title: "Vernier and screw gauge" },
    { id: "pendulum-ym", title: "Pendulum and Young’s modulus" },
    { id: "fluids-heat-labs", title: "Surface tension, viscosity, calorimetry, resonance tube" },
  ],
};