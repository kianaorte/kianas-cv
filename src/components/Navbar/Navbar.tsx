import { useNavigate } from "react-router";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  onNavigate: (ref: React.RefObject<HTMLElement | null>) => void;
  sections: {
    [key: string]: React.RefObject<HTMLElement | null>;
  };
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, sections }) => {
  const navigate = useNavigate();
  return (
    <nav className={styles.nav}>
      <button
        className={styles.btn}
        onClick={() => {
          onNavigate(sections.home);
          navigate("/");
        }}
      >
        <h2>Kiana Ortega</h2>
      </button>
      <div className={styles.spacer} />
      <button
        className={styles.btn}
        onClick={() => {
          onNavigate(sections.home);
          navigate("/");
        }}
      >
        Home
      </button>

      <button
        className={styles.btn}
        onClick={() => {
          onNavigate(sections.cv);
          navigate("/cv");
        }}
      >
        CV
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          onNavigate(sections.projects);
          navigate("/projects");
        }}
      >
        Projects
      </button>
    </nav>
  );
};
export default Navbar;
