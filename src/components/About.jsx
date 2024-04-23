import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am Navneet, a passionate full stack developer expert in  crafting dynamic web
            solutions. 
            I have delivered impactful projects for clients. My approach emphasizes clean code,
            agile methodologies, and user-centric design, ensuring optimal
            performance and user experience. Let's collaborate on your next tech
            endeavor - reach out via LinkedIn to start a
            conversation!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
