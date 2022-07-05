import './home.css';
import Info from "../../components/InfoComponent/info-index";
import Skills from "../../components/SkillsComponent/skills-index";
import Profile from "../../components/ProfileComponent/profile-index";
import Languages from "../../components/LanguagesComponent/languages-index";
import Experience from "../../components/ExperienceComponent/experience-index";

export default function Home() {
  return (
    <body className="page">
      <Info />
      <div className="container">
        <section className="left">
          <Skills />
          <Languages />
        </section>
        <section className="right">
          <Profile />
          <Experience />
        </section>
      </div>
    </body>
  );
};