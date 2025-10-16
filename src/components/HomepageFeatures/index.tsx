import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Templates',
    Svg: require('@site/static/img/pair-programming.svg').default,
    description: <>Modelos prontos que facilitam a padronização do processo de merge.</>,
    link: '/docs/templates',
  },
  {
    title: 'Get Started',
    // coloque o arquivo em static/img/undraw_checklist.svg (ou renomeie)
    Svg: require('@site/static/img/vc-amico.svg').default,
    description: <>Da teoria à prática: entenda o MergeTrace e configure-o em poucos passos.</>,
    link: '/docs/welcome/introduction', // ajuste se preferir outra página índice
  },
  {
    title: 'Políticas & Guias',
    // coloque o arquivo em static/img/undraw_preferences.svg (ou outro)
    Svg: require('@site/static/img/version-control.svg').default,
    description: <>Branch/PR, critérios de aceite, quality gates e boas práticas.</>,
    link: '/docs/guidelines', // ajuste para a sua rota
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.cardLink}>
        <div className={styles.card}>
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
