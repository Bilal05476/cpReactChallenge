/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Bilal Ahmed",
  title: "Hi all, I'm Bilal",
  subTitle: emoji(
    "A passionate React Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink: "#",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bilal05476",
  linkedin: "https://www.linkedin.com/in/bilal-ahmed-b75125184/",
  gmail: "bilalahmed6551@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100007545697355",
  instagram: "https://www.instagram.com/bilal_ahmed_05/",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY REACT STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Iqra University",
      logo: require("./assets/images/iqraLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - April 2023",
      desc: "",
      descBullets: [],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Front End Developer",
      company: "BaTechnos",
      companylogo: require("./assets/images/batechnosLogo.png"),
      date: "Aug 2020 – Present",
      desc:
        "I am a Lead Developer to plan and execute the projects requirements with my super pumped team!",
      descBullets: [
        "Building web applications",
        "Coaching",
        "Making Content on YouTube",
        "Learning",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "bilal05476", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Quick Projects",
  subtitle:
    "SOME PROJECTS I HAVE MADE FOR MY PRACTICE PURPOSE TO LEARN NEW THINGS ABOUT MY STACK",
  projects: [
    {
      image: require("./assets/images/AmazonLogo.jpg"),
      projectName: "Amazon Clone",
      projectDesc:
        "Amazon Clone Using ReatcJs and Firebase! Functionalities: Google Auth and Ecommerce",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amazonclone-clone.surge.sh/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/netflixLogo.jpg"),
      projectName: "Netflix Clone",
      projectDesc:
        "Netflix Clone Using ReatcJs and Firebase! Functionalities: Fetch data from API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflixclone-clone.surge.sh/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/coronaLogo.jpg"),
      projectName: "Corona Tracker",
      projectDesc:
        "Corona Tracker Using ReatcJs! Functionalities: Fetch Corona data from API",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://trackerproject.surge.sh/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/hotelLogo.png"),
      projectName: "Hotel Website",
      projectDesc: "Hotel website with pure Html, Css and Media Queries",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hotel-project.netlify.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/organicLogo.png"),
      projectName: "Organic Food Store",
      projectDesc:
        "Food Store Using ReactJs and Firebase! Functionalities: User Auth with Google and email, password. Fetch data from Database(firestore)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://skillsme-81986.web.app/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/whatsAppLogo.jpg"),
      projectName: "WhatsApp Clone",
      projectDesc:
        "WhatsApp Clone Using ReatcJs and Firebase! Functionalities: Google Auth and Fetch data from Databse(firestore)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mywhatsapp-clone-project.web.app/",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Full Stack Web Development with React",
      subtitle:
        "In this specialization you learnt to (1) Design a full-fledged Web client application using Bootstrap 4 and React, (2) Design a hybrid mobile application using React Native, and (3) Develop server-side support for the web application using Node.js, ExpressJS together with database support using MongoDB..",
      image: require("./assets/images/courseraLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/f20b20f0f1b709b16ea9bb2333b6126b",
        },
      ],
    },
    {
      title: "Crash Course on Python",
      subtitle:
        "In this course you learnt Understand how to use the basic Python structures: strings, lists, and dictionaries, Write short Python scripts to perform automated actions, Create your own Python objects..",
      image: require("./assets/images/courseraLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/321cf4d18d52e1d1fadf23f90418f2f8",
        },
      ],
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      subtitle:
        "In this course you learnt to Html, Css, Bootstrap, Media Queries, Javascript, Jquery and much more amazing stuff..",
      image: require("./assets/images/courseraLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/80ef899539eee50148e86e974ad70c11",
        },
      ],
    },
    {
      title: "Design Thinking for Innovation",
      subtitle:
        "In this course you learnt How to use design thinking to generate innovative ideas, How to prepare to see and take action when opportunity arises, How to take the many ideas you generate and determine which ones are likely to produce specific, desired outcomes..",
      image: require("./assets/images/courseraLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/36bf663010a17b95fae9c4404115c739",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+92) 335 003 7583 ",
  email_address: "bilalahmed6551@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
