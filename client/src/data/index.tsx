import { FaBullhorn } from "react-icons/fa";
import googleImage from "../assets/google.png";
import { GrDocumentText, GrDocumentVerified } from "react-icons/gr";
import { FaDisplay } from "react-icons/fa6";
import avatar1 from "../assets/avatar/avatar-7.png";
import avatar2 from "../assets/avatar/avatar-8.png";
import avatar3 from "../assets/avatar/avatar-9.png";
const companies = [
  {
    name: "Google",
    image: googleImage,
  },
  {
    name: "Google",
    image: googleImage,
  },
  {
    name: "Google",
    image: googleImage,
  },
  {
    name: "Google",
    image: googleImage,
  },
  {
    name: "Google",
    image: googleImage,
  },
  {
    name: "Google",
    image: googleImage,
  },
];

const jobsSlider = [
  {
    title: "Digital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia!",
    subDescription: "1k+ job posted",
    icon: <FaBullhorn className="h-8 w-8 -rotate-[30deg]" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia!",
    subDescription: "1k+ job posted",
    icon: <FaBullhorn className="h-8 w-8 -rotate-[30deg]" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia!",
    subDescription: "1k+ job posted",
    icon: <FaBullhorn className="h-8 w-8 -rotate-[30deg]" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia!",
    subDescription: "1k+ job posted",
    icon: <FaBullhorn className="h-8 w-8 -rotate-[30deg]" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia!",
    subDescription: "1k+ job posted",
    icon: <FaBullhorn className="h-8 w-8 -rotate-[30deg]" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, mollitia!",
    subDescription: "1k+ job posted",
    icon: <FaBullhorn className="h-8 w-8 -rotate-[30deg]" />,
  },
];

const workingPoints = [
  {
    title: "Build Your Resume",
    desc: "Create a standout resume with your skills",
    icon: <GrDocumentText className="h-12 w-12" />,
  },
  {
    title: "Apply for Job",
    desc: "Find and apply jobs that matches your skills",
    icon: <FaDisplay className="h-12 w-12" />,
  },
  {
    title: "Get Hired",
    desc: "Connect with employers and start your new job",
    icon: <GrDocumentVerified className="h-12 w-12" />,
  },
];

const reviews = [
  {
    name: "John Doe",
    review:
      "Great product, really satisfied with the quality and delivery time.",
    image: avatar1,
    rating: 4.7,
  },
  {
    name: "Jane Smith",
    review: "The item was good but not as expected. Could be improved.",
    image: avatar2,
    rating: 3.5,
  },
  {
    name: "Emily Johnson",
    review: "Excellent service and product quality. Highly recommend!",
    image: avatar3,
    rating: 5.0,
  },
  {
    name: "Michael Brown",
    review: "Product arrived late, but the quality is good.",
    image: avatar1,
    rating: 3.8,
  },
];

const footerLinks = [
  {
    title: "Product",
    links: ["Find Jobs", "Find Company", "Find Employee"]
  },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"]
  },
  {
    title: "Support",
    links: ["Help & Support", "Feedback", "FAQs"]
  }
];

export { companies, jobsSlider, workingPoints, reviews, footerLinks };
