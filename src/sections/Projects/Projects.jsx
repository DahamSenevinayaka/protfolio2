import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import ProjectCard from '../../assets/common/ProjectCard';

function Projects() {
  return (
  <section id="projects" className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} 
        link="https://github.com/DahamSenevinayaka/mern-course"
        h3="Viberr"
        p="Product Store Application"
        />
        <ProjectCard src={freshBurger} 
        link="https://github.com/DahamSenevinayaka/mern-course"
        h3="Farm Budy"
        p="Farmers product selling Application"
        />
    </div>
    </section>
  )
}

export default Projects