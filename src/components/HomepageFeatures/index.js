import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who are we?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        WildDrone is an international training network funded by the EU Marie Skłodowska Curie Actions. 
        The network will operate from 1 January 2023 - 31 December 2026. 
      </>
    ),
  },
  {
    title: 'Our mission',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We aim to revolutionize wildlife conservation practices by using autonomous drone technology 
        as a unifying platform to monitor wildlife populations, track their movements, and manage 
        human-wildlife conflicts.
      </>
    ),
  },
  {
    title: 'Doctoral training',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The consortium will train 13 doctoral candidates and equip them with a unique combination of 
        multidisciplinary skills for drone-based ecology and wildlife conservation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
