export const projectsData = [
  {
    id: 1,
    title: 'AI-Based Virtual Classroom',
    description: 'An AI-assisted classroom platform where teachers share lecture videos and students access learning materials and provide feedback. Sentiment analysis and keyword detection turn feedback into insights that help teachers improve their courses.',
    highlights: [
      'Role-based teacher and student accounts',
      'Lecture video uploading and streaming',
      'Ratings, emoji reactions, and written feedback',
      'Sentiment analysis, keyword detection, and reply suggestions',
      'Teacher analytics dashboard',
      'Caption and sign-language overlay support'
    ],
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'NLP', 'Recharts'],
    role: 'Full-Stack Developer',
    github: 'https://github.com/Dinesh-G035/virtual-classroom',
    live: 'https://virtual-classroom-1sfv.vercel.app/',
    featured: true,
    projectType: 'software',
    category: 'Full Stack & AI'
  },
  {
    id: 2,
    title: 'Gym Management System',
    description: 'A centralized web application for gym administration, bringing membership records, trainer allocation, subscriptions, renewals, and inquiries into one place.',
    highlights: [
      'Member registration and management',
      'Trainer and membership plan management',
      'Subscription renewal tracking',
      'Customer inquiry management',
      'Authentication and administrative dashboard'
    ],
    tech: ['Java', 'Spring Boot', 'React', 'Tailwind CSS', 'MySQL', 'Hibernate', 'JPA', 'REST API'],
    role: 'Full-Stack Developer',
    github: 'https://github.com/Dinesh-G035/Gym-Management-System',
    featured: true,
    projectType: 'software',
    category: 'Java Full Stack'
  },
  {
    id: 3,
    title: 'Customer Relationship Management (CRM)',
    description: 'A Java application for organizing customer records and interactions in a centralized database, making customer information easier to maintain and retrieve.',
    highlights: [
      'Customer registration and information management',
      'Search and retrieve customer records',
      'Create, update, and delete customer information',
      'Centralized database storage'
    ],
    tech: ['Java', 'SQL', 'OOP', 'Database Management'],
    role: 'Java Developer',
    github: 'https://github.com/Dinesh-G035/Customer-Relationship-Management',
    featured: true,
    projectType: 'software',
    category: 'Java & Database Management'
  },
  {
    id: 4,
    title: 'Solve for Shakthi',
    description: 'An industry-oriented project developing responsive frontend solutions and reusable components for business requirements, with a focus on usability and user experience.',
    highlights: [
      'Responsive user interface and frontend layouts',
      'Reusable React components',
      'User experience improvements',
      'Team collaboration, debugging, and testing'
    ],
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Project-SFS/Project_SFS',
    role: 'Frontend Developer',
    organization: 'Shakthi Auto Limited Components',
    duration: 'January 2025 - May 2025',
    featured: true,
    projectType: 'software',
    category: 'Industrial Frontend Development'
  },
  {
    id: 5,
    title: 'APT Behaviour Monitoring and Early Threat Detection System - IITM Pravartak',
    description: 'A cybersecurity research project with the IIT Madras Pravartak PBR Team, exploring behaviour-based detection of suspicious system and database activity associated with Advanced Persistent Threats.',
    highlights: [
      'Security event and database activity monitoring',
      'Behaviour-based identification of suspicious activity',
      'AI-assisted threat detection and classification across attack stages',
      'Security alerts and proposed automated response mechanisms',
      'Research informed by the MITRE ATT&CK Framework'
    ],
    tech: ['PostgreSQL', 'C', 'Python', 'Docker', 'Deep Q-Network (DQN)', 'MITRE ATT&CK'],
    organization: 'IIT Madras Pravartak - PBR Team',
    github: 'https://github.com/Dinesh-G035/APT_Guard',
    featured: true,
    projectType: 'software',
    category: 'Cybersecurity & AI'
  },
  {
    id: 6,
    title: 'Fin-Quest - Gamified Financial Learning Platform',
    description: 'A gamified financial education platform that makes topics such as savings, budgeting, investments, and money management engaging and accessible for students and beginners.',
    highlights: [
      'Interactive financial learning modules',
      'Quizzes, challenges, and financial awareness activities',
      'Rewards and achievement systems',
      'Learning progress tracking',
      'User-friendly learning experience'
    ],
    tech: ['React','Tailwind CSS','Node.js','Express.js','MongoDB'],
    role: 'Frontend Developer',
    github: 'https://github.com/Clusters-Config/Fin-Quest',
    featured: true,
    projectType: 'software',
    category: 'FinTech & Gamification'
  },
  {
    id: 7,
    title: 'Online Reservation System',
    description: 'A menu-driven Java command-line application for creating, retrieving, and cancelling reservations, with input validation and exception handling.',
    highlights: [
      'User information and reservation management',
      'Reservation creation, lookup, and cancellation',
      'Input validation',
      'Object-oriented programming with classes and encapsulation'
    ],
    tech: ['Java', 'OOP', 'CLI Application Development'],
    role: 'Java Developer',
    github: 'https://github.com/Dinesh-G035/virtual-classroom',
    featured: true,
    projectType: 'software',
    category: 'Java Application'
  },
  {
    id: 8,
    title: 'Library Management System',
    description: 'A Java application for maintaining library book records and managing the everyday process of searching, issuing, and returning books.',
    highlights: [
      'Add and manage book records',
      'Search for available books',
      'Issue and return books',
      'Track availability and display book records'
    ],
    tech: ['Java', 'OOP', 'Data Management'],
    role: 'Java Developer',
    github: 'https://github.com/Dinesh-G035/virtual-classroom',
    featured: true,
    projectType: 'software',
    category: 'Java Application'
  },
  {
    id: 9,
    title: 'IoT-Based Distance Monitoring System',
    description: 'An IoT system that measures the distance to an object with an ultrasonic sensor and sends readings over Wi-Fi to ThingSpeak for remote monitoring and visualization.',
    highlights: [
      'Real-time ultrasonic distance measurement',
      'ESP8266 wireless data transmission',
      'Cloud data storage and graphical visualization with ThingSpeak',
      'Continuous remote sensor monitoring'
    ],
    tech: ['ESP8266', 'Ultrasonic Sensor', 'ThingSpeak', 'Embedded Programming', 'Wi-Fi'],
    featured: true,
    projectType: 'hardware',
    category: 'IoT & Cloud Computing'
  },
  {
    id: 10,
    title: 'Smart Dustbin',
    description: 'A sensor-controlled waste bin concept for contactless disposal. An ultrasonic sensor detects a nearby object and signals a servo motor to open and then close the lid.',
    highlights: [
      'Automatic object detection and lid control',
      'Contactless, sensor-based waste disposal',
      'Timed lid closing to reduce manual handling',
      'Typical hardware: Arduino or ESP8266, ultrasonic sensor, and servo motor'
    ],
    tech: ['Arduino / ESP8266 (typical)', 'Ultrasonic Sensor', 'Servo Motor', 'Embedded C/C++'],
    featured: true,
    projectType: 'hardware',
    category: 'IoT & Embedded Systems'
  }
];
