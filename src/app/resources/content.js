import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Harshad",
  lastName: "sadath",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software developer",
  avatar: "/images/image.jpg",
  email: "hsadath07@gmail.com",
  location: "Asia/kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hrdsadath",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/harshad-sadath-sadath-a1614834b/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <> Connecting user needs to smart solutions through clean code.</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Web app for event company</strong>
      </>
    ),
     href: "",
  },
  subline: (
    <>
      I'm Sadath, a full stack developer 
   
      , where I Create intactive and responsive 
      <br /> web applications. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com/harshad-sadath-ysmsty/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Harshad Sadath is a Kerala-based MERN stack developer passionate about
        building efficient, scalable, and user-centric web applications. With a
        background in sales and a strong focus on backend development, he
        bridges business understanding with technical expertise. His work spans
        dynamic APIs, full-stack web solutions, and the seamless integration of
        design and functionality—driven by a deep interest in solving real-world
        problems through technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelancer",
        timeframe: "2022 - Present",
        role: "Full stack developer",
        achievements: [
         <>
    Built and deployed a full-stack e-commerce application using the MERN stack,
    improving customer order processing time by 40% and increasing user retention by 25%.
  </>,
  <>
    Integrated third-party APIs and implemented JWT-based authentication,
    enhancing security and streamlining the user login experience across platforms.
  </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/Image.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "IGNOU University",
        description: <>Bachelor of Computer Applications.</>,
        status:"on going"
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
   skills: [
  {
    title: "React",
    description: (
      <>
        Proficient in developing fast, scalable, and component-based user interfaces using React. Experienced in using hooks, Context API, and integrating state management tools like Redux.
      </>
    ),
    images: [
      {
        src: "/images/projects/react-ui.jpg",
        alt: "React project UI",
        width: 16,
        height: 9,
      },
    ],
  },
  {
    title: "Next.js",
    description: (
      <>
        Experienced in building server-side rendered and static websites using Next.js. Proficient in API routes, dynamic routing, App Router, and seamless integration with tools like Supabase and Tailwind CSS.
      </>
    ),
    images: [
      {
        src: "/images/projects/nextjs-app.jpg",
        alt: "Next.js app",
        width: 16,
        height: 9,
      },
    ],
  },
  {
    title: "HTML & CSS",
    description: (
      <>
        Solid foundation in semantic HTML and modern CSS techniques. Capable of creating accessible, responsive, and SEO-friendly layouts.
      </>
    ),
    images: [
      {
        src: "/images/projects/html-css.jpg",
        alt: "HTML and CSS layout design",
        width: 16,
        height: 9,
      },
    ],
  },
  {
    title: "JavaScript",
    description: (
      <>
        Skilled in vanilla JavaScript including ES6+ features, DOM manipulation, asynchronous programming (Promises, async/await), and functional programming principles.
      </>
    ),
    images: [
      {
        src: "/images/next.png",
        alt: "JavaScript logic implementation",
        width: 16,
        height: 9,
      },
    ],
  },
  {
    title: "Tailwind CSS",
    description: (
      <>
        Creating beautiful and highly responsive UI components with Tailwind CSS. Experienced in utility-first design systems and custom theming.
      </>
    ),
    images: [
      {
        src: "/images/css.png",
        alt: "Tailwind UI preview",
        width: 16,
        height: 9,
      },
    ],
  },
  {
    title: "MongoDB",
    description: (
      <>
        Building flexible and scalable NoSQL databases with MongoDB. Experienced in schema design using Mongoose and managing relationships for real-world applications.
      </>
    ),
    images: [
      {
        src: "/images/projects/mongodb-schema.jpg",
        alt: "MongoDB schema",
        width: 16,
        height: 9,
      },
    ],
  },
  {
    title: "PostgreSQL",
    description: (
      <>
        Proficient in writing optimized SQL queries and managing relational databases with PostgreSQL. Experienced in using joins, indexes, and schema migrations.
      </>
    ),
    images: [
      {
        src: "/images/postgelsql.png",
        alt: "PostgreSQL dashboard",
        width: 16,
        height: 9,
      },
    ],
  },
],

  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
