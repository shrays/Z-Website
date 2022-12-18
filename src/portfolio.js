import aboutpic from "./components/Access/profile.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shrays.github.io/Website',
  title: 'SS.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Shray Swarup',
  role: 'A Computer and Data Science Student',
  description:
    'CS Major and Business Minor at Barrett, Arizona State University. Experience in software development, predictive modeling, and data handling tools. Incoming intern at Deloitte.',
  social: {
    linkedin: 'https://www.linkedin.com/in/shrayswarup',
    github: 'https://github.com/shrays',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Crop Yield Predictor',
    description:
      'Prediction models using current USDA crop data, past NOAA and future CMIP6 climate data, and GAEZv4 soil data. Visualize future projected yield data based on different climate emission scenarios using ML techniques.',
    stack: ['Python', 'TensorFlow', 'SQL', 'Supabase', 'USDA API'],
    sourceCode: 'https://github.com/shrays',
    livePreview: 'https://github.com/shrays',
  },
  {
    name: 'University Rankings',
    description:
      'A website designed to visualize and compare world univeristy rankings through a cleaned and structured dataset.',
    stack: ['react', 'npm', 'nodejs', 'localhost','PostgreSQL'],
    sourceCode: 'https://github.com/shrays/University-Rankings',
    livePreview: 'https://github.com/shrays/University-Rankings',
  },
  {
    name: 'Chrome Extension',
    description:
      'Gives any chrome text box speech-to-text capabilities. Developed with a team to win multiple categories at sunhacks 2021 hackathon.',
    stack: ['html5-css3-javascript', 'AssemblyAI API', 'jQuery', 'RecordRTC'],
    sourceCode: 'https://github.com/shrays/sunhacks2021',
    livePreview: 'https://github.com/shrays/sunhacks2021',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C++',
  'Java',
  'R',
  'JavaScript',
  'CSS',
  'HTML',
  'Git',
  'TensorFlow',
  'Sklearn',
  'PostgreSQL',
  'React',
  'AWS',
  'Supabase',
  'Tableau',
  'Adobe Photoshop',
  'Jira',
  'Confluence'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'svswarup@asu.edu',
}

export { header, about, projects, skills, contact }
