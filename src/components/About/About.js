import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';

export default function About() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="about">
        <h1>{t('aboutTitle')}</h1>
        <p>{t('aboutParagraph1')}</p>
        <br />
        <p>{t('aboutParagraph2')}
         
          {t('aboutList', { returnObjects: true }).map((item, index) => (
            <React.Fragment key={index}>
              <br />⁃ {item}
            </React.Fragment>
          ))}
        </p>
      </div>
    </main>
  );
}
