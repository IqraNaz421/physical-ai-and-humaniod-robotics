// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           Physical AI & Humanoid Robotics Textbook
//         </Heading>
//         <p className="hero__subtitle">Master the Future of Intelligent Machines – From Theory to Real-World Application</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/overview"> {/* Link to your overview page */}
//             Start Learning Now!
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// function HomepageIntroSection(): ReactNode {
//   return (
//     <section className={styles.sectionPadding}>
//       <div className="container text--center">
//         <Heading as="h2" className={styles.sectionTitle}>
//           Welcome to the World of Embodied Intelligence
//         </Heading>
//         <p className="hero__subtitle">
//           Explore comprehensive lessons on the foundational concepts, advanced architectures, and practical applications
//           of physical artificial intelligence and humanoid robotics. Whether you're an aspiring engineer, a seasoned researcher,
//           or simply curious about the future of AI, this textbook provides a guided journey into building and understanding
//           intelligent systems that interact with the physical world.
//         </p>
//         <div className={styles.buttons} style={{marginTop: '20px'}}>
//           <Link
//             className="button button--primary button--outline button--lg"
//             to="/docs/chapter-01-foundations/lesson-01-intro-embodied-intelligence">
//             Dive into Chapter 1
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Home | ${siteConfig.title}`} // Updated title for the home page
//       description="Comprehensive textbook for Physical AI and Humanoid Robotics course. Master the future of intelligent machines.">
//       <HomepageHeader />
//       <main>
//         <HomepageIntroSection /> {/* Add the new intro section */}
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }









import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.tagline}>
              <span className={styles.highlight}>Open Source</span>
              <span className={styles.separator}>•</span>
              <span className={styles.highlight}>Physical AI</span>
              <span className={styles.separator}>•</span>
              <span className={styles.highlight}>Comprehensive</span>
            </div>
            
            <Heading as="h1" className={styles.heroTitle}>
              Physical AI & Humanoid Robotics
            </Heading>
            
            <p className={styles.heroSubtitle}>
              A Comprehensive Guide to Embodied Intelligence and Humanoid Systems
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.icon}>🤖</span>
                <span>From basics to advanced Physical AI</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>🎯</span>
                <span>Build intelligent robotic systems</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.icon}>🚀</span>
                <span>Cutting-edge research & applications</span>
              </div>
            </div>
            
            <div className={styles.heroButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/chapter-01-foundations/lesson-01-intro-embodied-intelligence">
                Start Reading →
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/overview">
                Explore Book 🎓
              </Link>
            </div>
          </div>
          
          <div className={styles.heroImage}>
            <img 
              src="img/new-removebg-preview.png" 
              alt="Humanoid Robot Illustration" 
              className={styles.robotImg}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Comprehensive textbook for Physical AI and Humanoid Robotics course. Master the future of intelligent machines.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}