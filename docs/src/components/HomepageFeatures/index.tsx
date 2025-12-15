// import type {ReactNode} from 'react';
// import clsx from 'clsx';
// import Heading from '@theme/Heading';
// import styles from './styles.module.css';

// type FeatureItem = {
//   title: string;
//   Svg: React.ComponentType<React.ComponentProps<'svg'>>;
//   description: ReactNode;
// };

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({title, Svg, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--4')}>
//       <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div>
//       <div className="text--center padding-horiz--md">
//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// export default function HomepageFeatures(): ReactNode {
//   return (
//     <section className={styles.features}>
//       <div className="container">
//         <div className="row">
//           {FeatureList.map((props, idx) => (
//             <Feature key={idx} {...props} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }






import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  number: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  topics: string[];
  example: string;
  featured?: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    number: '01',
    icon: '🔧',
    title: 'Robotics Foundations',
    tagline: 'Build the Mechanical Brain',
    description: 'Learn core robotics principles including motion mechanics, sensor technologies, and control architectures. Establish the mathematical groundwork for building physical systems.',
    topics: ['Kinematics & Motion', 'Sensor Systems', 'Control Theory'],
    example: 'Precision robotic manipulator with force feedback',
  },
  {
    number: '02',
    icon: '🤖',
    title: 'Learning-Based Systems',
    tagline: 'Teach Robots to Adapt',
    description: 'Build adaptive robots powered by reinforcement learning and neural networks. Master simulation environments and techniques for transferring learned behaviors to real hardware.',
    topics: ['Deep RL', 'Simulation Training', 'Policy Learning'],
    example: 'Bipedal robot learning locomotion through trial and error',
    featured: true,
  },
  {
    number: '03',
    icon: '🧠',
    title: 'Embodied Intelligence',
    tagline: 'Create Thinking Machines',
    description: 'Combine foundation models with robotics to create systems that perceive, reason, and interact naturally. Explore cutting-edge multimodal AI for real-world understanding.',
    topics: ['Vision-Language Models', 'Semantic Understanding', 'Task Planning'],
    example: 'Assistant robot interpreting voice commands and context',
  },
];

function Feature({number, icon, title, tagline, description, topics, example, featured}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.journeyCard, featured && styles.journeyCardFeatured)}>
        {featured && (
          <div className={styles.featuredBadge}>
            <span>📚 Primary Focus</span>
          </div>
        )}
        <div className={styles.cardHeader}>
          <span className={styles.cardNumber}>{number}</span>
          <div className={styles.cardIcon}>{icon}</div>
        </div>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardTagline}>{tagline}</p>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardTopics}>
          {topics.map((topic, idx) => (
            <span key={idx} className={styles.topic}>{topic}</span>
          ))}
        </div>
        <div className={styles.cardExample}>
          <span className={styles.exampleLabel}>Real-world:</span>
          <span>{example}</span>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.spectrumSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Learning Path</span>
          <Heading as="h2" className={styles.sectionTitle}>
            Your Journey Through Physical AI
          </Heading>
          <p className={styles.sectionSubtitle}>
            Progress through three interconnected stages of robotics mastery, from core mechanics to intelligent autonomous systems.
          </p>
        </div>
        
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <div className={styles.journeyFlow}>
          <div className={styles.flowItem}>
            <div className={styles.flowCircle}>
              <span>🎯</span>
            </div>
            <p>Master Fundamentals</p>
          </div>
          <div className={styles.flowConnector}></div>
          <div className={styles.flowItem}>
            <div className={styles.flowCircle}>
              <span>🚀</span>
            </div>
            <p>Apply AI Techniques</p>
          </div>
          <div className={styles.flowConnector}></div>
          <div className={styles.flowItem}>
            <div className={styles.flowCircle}>
              <span>⚡</span>
            </div>
            <p>Build Advanced Systems</p>
          </div>
        </div>
      </div>
    </section>
  );
}