// thoda zada ts ho gya idhar, but we are fully DevOps now! 🚀
export enum SkillNames {
  PYTHON = "python",
  BASH = "bash",
  ANSIBLE = "ansible",
  TERRAFORM = "terraform",
  BATCH = "batch",
  CRON = "cron",
  YAML = "yaml",
  EC2 = "ec2",
  NODEJS = "nodejs",
  JENKINS = "jenkins",
  DOCKER = "docker",
  KUBERNETES = "kubernetes",
  ACTIONS = "actions",
  GIT = "git",
  GITHUB = "github",
  ARGOCD = "argocd",
  NPM = "npm",
  UBUNTU = "ubuntu",
  GITLAB = "gitlab",
  LINUX = "linux",
  NGINX = "nginx",
  AWS = "aws",
  VERCEL = "vercel",
  LEARN = "learn",
  // Keeping these two for your Experience section so it doesn't break!
  SQL = "sql",
  MACHINE_LEARNING = "machinelearning"
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Scripting, automation, and data processing. 🐍🔥",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  [SkillNames.BASH]: {
    id: 2,
    name: "bash",
    label: "Bash",
    shortDescription: "automating the boring stuff since forever, no cap! 💻🔥",
    color: "#4EAA25",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  },
  [SkillNames.ANSIBLE]: {
    id: 3,
    name: "ansible",
    label: "Ansible",
    shortDescription: "configuration management going dummy hard. 🤖💨",
    color: "#EE0000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
  },
  [SkillNames.TERRAFORM]: {
    id: 4,
    name: "terraform",
    label: "Terraform",
    shortDescription: "infrastructure but make it code, respectfully. 🏗️✨",
    color: "#7B42BC",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
  },
  [SkillNames.BATCH]: {
    id: 5,
    name: "batch",
    label: "Batch Scripts",
    shortDescription: "cmd.exe said hold my beer, deadass! 🍺🪟",
    color: "#4d4d4d",
    icon: "https://img.icons8.com/color/96/console.png",
  },
  [SkillNames.CRON]: {
    id: 6,
    name: "cron",
    label: "Cron Jobs",
    shortDescription: "time-traveling task scheduler, it hits different! ⏰🚀",
    color: "#1E1E1E",
    icon: "https://img.icons8.com/color/96/time.png",
  },
  [SkillNames.YAML]: {
    id: 7,
    name: "yaml",
    label: "YAML",
    shortDescription: "spacing is everything, one tab and it's over 💀📜",
    color: "#CB171E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg",
  },
  [SkillNames.EC2]: {
    id: 8,
    name: "ec2",
    label: "AWS EC2",
    shortDescription: "servers in the sky living rent free ☁️💸",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.JENKINS]: {
    id: 10,
    name: "jenkins",
    label: "Jenkins",
    shortDescription: "the old reliable butler of CI/CD pipelines 👨‍💼🛠️",
    color: "#D24939",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 11,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization, shipping code like a boss! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.KUBERNETES]: {
    id: 12,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "container orchestration go brrrr, sheesh! ☸️🚢",
    color: "#326CE5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  },
  [SkillNames.ACTIONS]: {
    id: 13,
    name: "githubactions",
    label: "GitHub Actions",
    shortDescription: "automating workflows effortlessly, purr 💅🐙",
    color: "#2088FF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  [SkillNames.GIT]: {
    id: 14,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 15,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.ARGOCD]: {
    id: 16,
    name: "argocd",
    label: "ArgoCD",
    shortDescription: "GitOps doing the most, fr fr! 🦑🔄",
    color: "#EF7B4D",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg",
  },
  [SkillNames.NPM]: {
    id: 17,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#CB3837",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.UBUNTU]: {
    id: 18,
    name: "ubuntu",
    label: "Ubuntu",
    shortDescription: "Debian's cool kid, 10/10 would sudo again 🐧🔥",
    color: "#E95420",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
  },
  [SkillNames.GITLAB]: {
    id: 19,
    name: "gitlab",
    label: "GitLab",
    shortDescription: "stepping up the CI/CD repo game 🦊⚔️",
    color: "#FCA121",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 20,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
  [SkillNames.VERCEL]: {
    id: 23,
    name: "vercel",
    label: "Vercel",
    shortDescription: "The triangle company, helps you deploy and go touch grass! 🚀🌿",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  [SkillNames.LEARN]: {
    id: 24,
    name: "learn",
    label: "Learning",
    shortDescription: "And More things still left to learn 📚🌱",
    color: "#A9A9A9",
    icon: "https://img.icons8.com/fluency/96/graduation-cap.png",
  },
  [SkillNames.SQL]: {
    id: 25,
    name: "sql",
    label: "SQL",
    shortDescription: "Database management and complex querying.",
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  [SkillNames.MACHINE_LEARNING]: {
    id: 26,
    name: "machinelearning",
    label: "Machine Learning",
    shortDescription: "Predictive modeling and large-scale data analysis.",
    color: "#FF6F00",
    icon: "https://img.icons8.com/color/96/artificial-intelligence.png",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "July 2025",
    endDate: "Present",
    title: "IT Engineer",
    company: "Kanthwal Services (Co Vanderlande Logistics)",
    description: [
      "Data Automation: Scripted Python tools to automate the collection and analysis of system logs, significantly reducing the manual data processing effort.",
      "Cloud Infrastructure: Configured and monitored AWS resources for log storage and backup automation, ensuring data integrity for mission-critical applications.",
      "Deployment Pipelines: Assisted in setting up CI/CD pipelines (GitHub Actions) and Docker environments to streamline the deployment of internal data dashboards.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.LINUX,
      SkillNames.ACTIONS,
      SkillNames.TERRAFORM,
      SkillNames.ANSIBLE,
      SkillNames.AWS,
    ],
  },
  {
    id: 2,
    startDate: "Jan 2024",
    endDate: "Jul 2024",
    title: "Financial Market Analyst Intern",
    company: "Futures First",
    description: [
      "Algorithm Development: Developed and implemented algorithms for market trend analysis using Python and SQL, resulting in a 15% improvement in forecast accuracy.",
      "Large-Scale Data Analysis: Analyzed complex datasets that exceed 10M+ records using Machine Learning techniques to identify patterns and reduce risk-related losses by 20%.",
      "Statistical Modeling: Utilized predictive modeling to interpret market fluctuations and provide actionable business insights.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.SQL,
      SkillNames.MACHINE_LEARNING,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};