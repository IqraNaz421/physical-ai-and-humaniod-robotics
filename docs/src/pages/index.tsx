
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
//     <header className={styles.heroSection}>
//       <div className="container">
//         <div className={styles.heroContent}>
//           <div className={styles.heroText}>
//             <div className={styles.tagline}>
//               <span className={styles.highlight}>Open Source</span>
//               <span className={styles.separator}>•</span>
//               <span className={styles.highlight}>Physical AI</span>
//               <span className={styles.separator}>•</span>
//               <span className={styles.highlight}>Comprehensive</span>
//             </div>
            
//             <Heading as="h1" className={styles.heroTitle}>
//               Physical AI & Humanoid Robotics
//             </Heading>
            
//             <p className={styles.heroSubtitle}>
//               The Definitive Curriculum: Bridging Theory and Practice in the Synthesis of Advanced Embodied Intelligence, Next-Generation Humanoid Systems, and Real-Time Autonomous Action.
//             </p>
            
//             <div className={styles.features}>
//               <div className={styles.feature}>
//                 <span className={styles.icon}>🤖</span>
//                 <span>From basics to advanced Physical AI</span>
//               </div>
//               <div className={styles.feature}>
//                 <span className={styles.icon}>🎯</span>
//                 <span>Build intelligent robotic systems</span>
//               </div>
//               <div className={styles.feature}>
//                 <span className={styles.icon}>🚀</span>
//                 <span>Cutting-edge research & applications</span>
//               </div>
//             </div>
            
//             <div className={styles.heroButtons}>
//               <Link
//                 className="button button--primary button--lg"
//                 to="/docs/chapter-01-foundations/lesson-01-intro-embodied-intelligence">
//                 Start Reading →
//               </Link>
//               <Link
//                 className="button button--secondary button--lg"
//                 to="/docs/overview">
//                 Explore Book 🎓
//               </Link>
//             </div>
//           </div>
          
//           <div className={styles.heroImage}>
//             <img 
//               src="img/new-removebg-preview.png" 
//               alt="Humanoid Robot Illustration" 
//               className={styles.robotImg}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default function Home(): ReactNode {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Home | ${siteConfig.title}`}
//       description="Comprehensive textbook for Physical AI and Humanoid Robotics course. Master the future of intelligent machines.">
//       <HomepageHeader />
//       <main>
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
        {/* Layout: Text on Left, Image on Right */}
        <div className={styles.heroContent}>
          
          {/* Hero Text Section (Left) */}
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
              The Definitive Curriculum: Bridging Theory and Practice in the Synthesis of Advanced Embodied Intelligence, Next-Generation Humanoid Systems, and Real-Time Autonomous Action.
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
          
          {/* Hero Image Section (Right) */}
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