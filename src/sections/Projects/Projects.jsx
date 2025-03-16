import styles from './ProjectsStyles.module.css';
import shooter from '../../assets/shooter.png';
import calculatrice from '../../assets/calculatrice.png';
import ToDoList from '../../assets/to-do-list.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projets</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={shooter}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Shooter"
          p="Python Game"
        />
        <ProjectCard
          src={calculatrice}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="calculatrice"
          p="HTML/CSS/JS"
        />
        <ProjectCard
          src={ToDoList}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="To Do List"
          p="HTML/CSS/JS"
        />
      </div>
    </section>
  );
}

export default Projects;
