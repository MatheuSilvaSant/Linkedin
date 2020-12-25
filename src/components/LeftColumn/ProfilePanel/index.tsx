import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars1.githubusercontent.com/u/58866229?s=60&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Matheus Silva</h1>
        <h2>Software Engineer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.000.000</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">32.523</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
