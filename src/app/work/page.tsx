import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
// app/layout.tsx or equivalent
import "@/once-ui/styles/index.scss"; // this should already include all the SCSS files
import "@/once-ui/styles/index.scss";

//import pic from "../../../public/images/Image.jpg";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  const work = [
    {
      name: "static website ",
      discription: "the responsive static website for a counsiller",
       pic: "/images/Image.jpg"
    },
    {
      name: "web app for an event",
      discription: "the web app for an event using morden technology ",
      pic: "/images/Image.jpg"
    },
    {
      name: "data base",
      discription: "the web app for an event using morden technology ",
      pic: "/images/Image.jpg"
    },
     {
      name: "data base",
      discription: "the web app for an event using morden technology ",
      pic: "/images/Image.jpg"
    },
    {
      name: "data base",
      discription: "the web app for an event using morden technology ",
      pic: "/images/Image.jpg"
    },
  ];
  return (
    // <Column maxWidth="m">
    //   <Schema
    //     as="webPage"
    //     baseURL={baseURL}
    //     path={work.path}
    //     title={work.title}
    //     description={work.description}
    //     image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
    //     author={{
    //       name: person.name,
    //       url: `${baseURL}${about.path}`,
    //       image: `${baseURL}${person.avatar}`,
    //     }}
    //   />
    //   <Projects />
       <div
      style={{
        padding: "2rem",
        backgroundColor: "#121212",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "white", marginBottom: "1rem" }}>
        Projects
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {work.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "12px",
              padding: "1rem",
              textAlign: "center",
              flex: "1 1 300px",
              maxWidth: "90vw",
              boxSizing: "border-box",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <img
              src={project.pic}
              alt={project.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "1rem",
              }}
            />
            <h2 style={{ color: "white", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              {project.name}
            </h2>
            <p style={{ color: "#ddd", fontSize: "0.95rem" }}>{project.discription}</p>
          </div>
        ))}
      </div>
    </div>
    // </Column>
  );
}
