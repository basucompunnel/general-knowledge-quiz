// Physics & Forces Questions
// Current: 30 questions
// Target: 30 questions (10 easy: 7 MC + 3 T/F, 10 medium: 7 MC + 3 T/F, 10 hard: 7 MC + 3 T/F)

import type { QuizQuestion } from "@/types/quiz";

export const physicsForcesQuestions: QuizQuestion[] = [
  // EASY QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "physics-forces-easy-1",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the force that pulls objects toward Earth?",
    options: ["Magnetism", "Gravity", "Friction", "Inertia"],
    correctAnswer: 1,
    explanation: "Gravity is the force that attracts objects toward the center of Earth at 9.8 m/s²."
  },
  {
    id: "physics-forces-easy-2",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the speed of light in a vacuum?",
    options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
    correctAnswer: 0,
    explanation: "Light travels at approximately 299,792 km/s (about 300,000 km/s) in a vacuum."
  },
  {
    id: "physics-forces-easy-3",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is friction?",
    options: ["The force between objects in motion", "The resistance to motion between surfaces", "The acceleration of an object", "The weight of an object"],
    correctAnswer: 1,
    explanation: "Friction is a contact force that opposes the motion of objects sliding against each other."
  },
  {
    id: "physics-forces-easy-4",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does acceleration measure?",
    options: ["The distance traveled", "The speed of an object", "The rate of change of velocity", "The force applied"],
    correctAnswer: 2,
    explanation: "Acceleration is the rate at which an object's velocity changes over time."
  },
  {
    id: "physics-forces-easy-5",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is the SI unit of velocity?",
    options: ["m/s²", "m/s", "km/h", "mph"],
    correctAnswer: 1,
    explanation: "The SI unit of velocity is meters per second (m/s)."
  },
  {
    id: "physics-forces-easy-6",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What is momentum?",
    options: ["The force on an object", "Mass times velocity", "Energy of motion", "Rate of change of force"],
    correctAnswer: 1,
    explanation: "Momentum (p = mv) is the product of an object's mass and velocity."
  },
  {
    id: "physics-forces-easy-7",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "easy",
    question: "What does Newton's First Law state?",
    options: ["F = ma", "An object in motion stays in motion unless acted upon by a force", "For every action there's an equal and opposite reaction", "Time is relative"],
    correctAnswer: 1,
    explanation: "Newton's First Law (law of inertia) states that objects maintain their state of motion unless external forces act on them."
  },
  {
    id: "physics-forces-easy-8",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Velocity and speed are the same thing.",
    correctAnswer: 0,
    explanation: "False. Speed is a scalar (magnitude only), while velocity is a vector (magnitude and direction)."
  },
  {
    id: "physics-forces-easy-9",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "Weight and mass are the same thing.",
    correctAnswer: 0,
    explanation: "False. Mass is a measure of matter, while weight is the force of gravity acting on mass."
  },
  {
    id: "physics-forces-easy-10",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "easy",
    question: "A feather and a hammer fall at the same rate in a vacuum.",
    correctAnswer: 1,
    explanation: "True. Without air resistance, all objects fall with the same acceleration (9.8 m/s²)."
  },

  // MEDIUM QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "physics-forces-medium-1",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What formula represents Newton's Second Law?",
    options: ["F = ma", "v = d/t", "E = mc²", "P = W/t"],
    correctAnswer: 0,
    explanation: "Newton's Second Law is F = ma, where force equals mass times acceleration."
  },
  {
    id: "physics-forces-medium-2",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the SI unit of force?",
    options: ["Joule", "Newton", "Watt", "Pascal"],
    correctAnswer: 1,
    explanation: "The Newton (N) is the SI unit of force, equal to 1 kg·m/s²."
  },
  {
    id: "physics-forces-medium-3",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is kinetic energy?",
    options: ["Energy of position", "Energy of motion", "Energy of heat", "Energy of light"],
    correctAnswer: 1,
    explanation: "Kinetic energy is the energy possessed by an object due to its motion (KE = ½mv²)."
  },
  {
    id: "physics-forces-medium-4",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What does the term 'Newton's Third Law' describe?",
    options: ["F = ma", "For every action, there's an equal and opposite reaction", "Objects maintain their motion", "Acceleration depends on velocity"],
    correctAnswer: 1,
    explanation: "Newton's Third Law states that forces always come in pairs: for every action, there's an equal and opposite reaction."
  },
  {
    id: "physics-forces-medium-5",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is the SI unit of energy?",
    options: ["Newton", "Joule", "Watt", "Volt"],
    correctAnswer: 1,
    explanation: "The Joule (J) is the SI unit of energy and work, equal to 1 kg·m²/s²."
  },
  {
    id: "physics-forces-medium-6",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What is potential energy?",
    options: ["Energy in motion", "Energy stored due to position or state", "Energy of heat", "Energy of light"],
    correctAnswer: 1,
    explanation: "Potential energy is the energy stored due to an object's position or state (PE = mgh)."
  },
  {
    id: "physics-forces-medium-7",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "medium",
    question: "What does the law of conservation of energy state?",
    options: ["Energy can be created", "Energy cannot be destroyed", "Energy is conserved; it can only be converted from one form to another", "Energy always decreases"],
    correctAnswer: 2,
    explanation: "The law of conservation of energy states that energy cannot be created or destroyed, only converted."
  },
  {
    id: "physics-forces-medium-8",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Newton's First Law states that an object in motion stays in motion unless acted upon by an external force.",
    correctAnswer: 1,
    explanation: "True. This is the law of inertia and demonstrates why objects need a force to change their motion."
  },
  {
    id: "physics-forces-medium-9",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "Power and energy are the same thing.",
    correctAnswer: 0,
    explanation: "False. Power is the rate at which energy is transferred (P = W/t), measured in Watts."
  },
  {
    id: "physics-forces-medium-10",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "medium",
    question: "The acceleration due to gravity is the same everywhere on Earth.",
    correctAnswer: 0,
    explanation: "False. Gravity varies slightly by latitude and elevation - it's approximately 9.8 m/s² but varies from 9.78 to 9.83 m/s²."
  },

  // HARD QUESTIONS (10 total: 7 MC + 3 T/F)
  {
    id: "physics-forces-hard-1",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the relationship between work and energy?",
    options: ["They are unrelated", "Work is the transfer of energy", "Energy causes work", "Work prevents energy transfer"],
    correctAnswer: 1,
    explanation: "Work is the transfer of energy from one place to another (W = F × d)."
  },
  {
    id: "physics-forces-hard-2",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the Doppler effect?",
    options: ["Change in wavelength due to motion", "Change in temperature", "Change in pressure", "Change in density"],
    correctAnswer: 0,
    explanation: "The Doppler effect is the change in frequency/wavelength of waves due to the relative motion of the source and observer."
  },
  {
    id: "physics-forces-hard-3",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is escape velocity?",
    options: ["Speed needed to orbit a planet", "Minimum speed to escape gravitational pull", "Speed of light", "Terminal velocity"],
    correctAnswer: 1,
    explanation: "Escape velocity is the minimum speed an object needs to escape a planet's gravitational field (11.2 km/s for Earth)."
  },
  {
    id: "physics-forces-hard-4",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is impulse?",
    options: ["Force times distance", "Force times time", "Mass times velocity", "Energy per second"],
    correctAnswer: 1,
    explanation: "Impulse is the change in momentum caused by a force applied over a time interval (J = F × Δt)."
  },
  {
    id: "physics-forces-hard-5",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the principle of superposition in physics?",
    options: ["Objects can't occupy the same space", "Multiple forces combine to produce a net effect", "Energy is conserved", "Time travels forward"],
    correctAnswer: 1,
    explanation: "The superposition principle states that multiple forces or waves combine to produce a net effect."
  },
  {
    id: "physics-forces-hard-6",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is the SI unit of pressure?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    correctAnswer: 2,
    explanation: "The Pascal (Pa) is the SI unit of pressure, equal to 1 Newton per square meter (N/m²)."
  },
  {
    id: "physics-forces-hard-7",
    topicId: "physics-forces",
    categoryId: "science",
    type: "multiple-choice",
    difficulty: "hard",
    question: "What is angular momentum?",
    options: ["Linear momentum of rotating objects", "Rotational equivalent of linear momentum", "Force applied in circles", "Energy of spinning objects"],
    correctAnswer: 1,
    explanation: "Angular momentum is the rotational equivalent of linear momentum, conserved in rotating systems (L = Iω)."
  },
  {
    id: "physics-forces-hard-8",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Einstein's E=mc² shows that mass and energy are interchangeable.",
    correctAnswer: 1,
    explanation: "True. This equation demonstrates mass-energy equivalence - mass can be converted to energy and vice versa."
  },
  {
    id: "physics-forces-hard-9",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "Quantum entanglement violates Newton's laws.",
    correctAnswer: 1,
    explanation: "True. Quantum entanglement involves correlations that seem to violate classical physics, operating at quantum scales."
  },
  {
    id: "physics-forces-hard-10",
    topicId: "physics-forces",
    categoryId: "science",
    type: "true-false",
    difficulty: "hard",
    question: "The center of mass of an object must always be within the object itself.",
    correctAnswer: 0,
    explanation: "False. The center of mass can be outside an object's physical material (e.g., a ring's center of mass is in the empty space)."
  }
] satisfies QuizQuestion[];
