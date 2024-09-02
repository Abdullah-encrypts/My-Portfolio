export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently diving into the world of AI",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Blog Site",
      des: "An intuitive personal Blog Site. Where the words are brought to life.",
      img: "/nextblog.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/fm.svg"],
      link: "https://nextjs-blog-abdullah-encrypts.vercel.app",
    },
    {
      id: 2,
      title: "Recipe - Your Cooking buddy",
      des: "A Recipe App that helps you find the perfect recipe for your meal.",
      img: "/recipe.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://recipe-iota-amber.vercel.app",
    },
    {
      id: 3,
      title: "Socially- A Social Media App",
      des: "A modern and simple UI of Social Media App that connects you with the world.",
      img: "/social-media.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://social-media-xi-six.vercel.app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Abdullah was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abdullah's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "I am here to motivate myself, being a fresh graduate and a self-taught developer, I wanted to be a testimonial of myself.",
      name: "Muhammad Abdullah",
      title: "Director of DravenVerse Technologies",
    },
    {
      quote:
        "A testimonial dedicated to Mr. Abdullah, who is a pleasure to be a friend of. He is a great computer engineer and software developer. I would recommnet to anyone looking for an honest work!",
      name: "Mubashir ur Rehamn",
      title: "CEO of Style Sage",
    },
    {
      quote:
        "Abdullah as my FYP partner was a please to work with, he always prefered smart work over hard work. He is a great developer and a great friend.",
      name: "Muhammad Maaz Khalid",
      title: "Vice president of Softdesk",
    },
    {
      quote:
        "Looking for a friendly and professional web developer who can provide you great performance in this AI era? Abdullah is a person who has proved his self in the domain using AI as a buddy, instead of a competitor.",
      name: "Syed Muhammad Mehdi Jaffri",
      title: "Associate Software Engineer at JinTech Pvt. Ltd.",
    },
  ];

  export const imgs = [
    {
      img: "/profile.svg",
    },
    {
      img: "/tail.svg",
    },
    {
      img: "/ts.svg",
    },
    {
      img: "/three.svg",
    },
    {
      img: "/fm.svg",
    },
  ]
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Devloper - Style Sage",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity at Style Sage.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - Final Year Project",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance Projects",
      desc: "Led the projects of multiple domains, inlcuding web services, and AI automation tasks.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Full Stack Developer",
      desc: "Developed and maintained personal projects to practice and improve my skills.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Abdullah-encrypts"
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://www.google.com"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/muhammadabdullahawan/"
    },
  ];