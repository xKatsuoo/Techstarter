import React from 'react';
import Section from './section';
import './style.css';

const Main = () => {
  return (
    <main >
      <Section title="Willkommen">
        <p>Herzlich willkommen auf meiner einfachen Webseite!</p>
      </Section>
      <Section title="Über mich">
        <p>Hier ist eine kurze Beschreibung über mich und meine Interessen.</p>
      </Section>
      <Section title="Kontakt">
        <p>Bei Fragen oder Anregungen können Sie mich gerne kontaktieren:</p>
        <p>kontakt@meinewebseite.de</p>
      </Section>
    </main>
  );
};




export default Main;
