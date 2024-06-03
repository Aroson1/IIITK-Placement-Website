// components/LogoGrid.js
import styles from "../styles/LogoGrid.module.css";

const logos = [
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
  "1200pxinfosys-logo-1@2x.png",
];

const LogoGrid = () => {
  return (
    <div className={styles.grid}>
    {logos.map((logo, index) => (
      <div key={index} className={styles.hex}>
        <div className={styles.circle}>
          <img src={logo} alt={`Logo ${index + 1}`} />
        </div>
      </div>
    ))}
  </div>
  );
};

export default LogoGrid;
