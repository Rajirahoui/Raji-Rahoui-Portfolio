import styles from './ProjectsStyles.module.css';
import shooter from '../../assets/shooter.png';
import calculatrice from '../../assets/calculatrice.png';
import toDoList from '../../assets/to-do-list.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projets</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={shooter}
          link="https://github.com/Rajirahoui/SHOOTER"
          h3="Shooter"
          p="Python"
        />
        <ProjectCard
          src={calculatrice}
          link="https://github.com/Rajirahoui/Calculatrice-"
          h3="Calculatrice"
          p="HTML/Javascript"
        />
        <ProjectCard
          src={toDoList}
          link="https://github.com/Rajirahoui/To-do-list-Vanilla-Javascript"
          h3="To do List"
          p="HTML/CSS - Javascript"
        />
      </div>
    </section>
  );
}

export default Projects;
