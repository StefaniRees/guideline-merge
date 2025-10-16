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
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      {/* ⬇️ centraliza tudo */}
      <div className={clsx('container', styles.heroInner)}>
        <Heading as="h1" className={clsx('hero__title', 'text--center')}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', 'text--center')}>
          {siteConfig.tagline}
        </p>

        <nav className={styles.buttons} aria-label="Seções principais">
          <Link className="button button--secondary button--lg" to="/docs/roles">Roles</Link>
          <Link className="button button--secondary button--lg" to="/docs/activities">Activities</Link>
          <Link className="button button--secondary button--lg" to="/docs/tools">Tools</Link>
          <Link className="button button--secondary button--lg" to="/docs/guidelines">Guidelines</Link>
          <Link className="button button--secondary button--lg" to="/docs/artifacts">Artifacts</Link>
          <Link className="button button--secondary button--lg" to="/docs/phases">Phases</Link>
        </nav>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Documentação e guia do processo de merge">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
