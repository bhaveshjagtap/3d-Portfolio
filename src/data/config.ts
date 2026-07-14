const config = {
  title: "Bhavesh Jagtap | Cloud & DevOps Engineer",
  description: {
    long: "Explore the portfolio of Bhavesh Jagtap, a Cloud & DevOps Engineer specializing in scalable cloud infrastructure, CI/CD automation, and MLOps. Discover my latest work, including automated system monitors and AWS deployments. Let's build robust infrastructure together!",
    short:
      "Discover the portfolio of Bhavesh Jagtap, a Cloud & DevOps Engineer architecting scalable and automated infrastructure.",
  },
  keywords: [
    "Bhavesh Jagtap",
    "portfolio",
    "Cloud Engineer",
    "DevOps Engineer",
    "AWS",
    "Linux",
    "Terraform",
    "Ansible",
    "CI/CD",
    "MLOps",
    "Infrastructure as Code",
    "Node.js",
    "Bash Scripting",
    "Pune",
    "Mumbai",
  ],
  author: "Bhavesh Jagtap",
  email: "bhavesh.jagtap1011@gmail.com", // <-- ADD YOUR ACTUAL EMAIL HERE
  site: "https://bhaveshjagtap.vercel.app", // You will get a link like this when you publish

  // for github stars button
  //githubUsername: "bhaveshjagtap", // <-- ADD YOUR GITHUB USERNAME HERE
  //githubRepo: "3d-portfolio", // You can leave this as is for now

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/bhaveshjagtap19", // <-- UPDATE OR DELETE
    linkedin: "https://www.linkedin.com/in/bhavesh-j10/", // <-- ADD YOUR LINKEDIN
    instagram: "https://www.instagram.com/__bhavesh__10", // <-- UPDATE OR DELETE
    //facebook: "https://www.facebook.com/your-profile/", // <-- UPDATE OR DELETE
    github: "https://github.com/bhaveshjagtap", // <-- ADD YOUR GITHUB
  },
};
export { config };