import React from 'react';
import PlayerAudio from '../PlayerAudio';
import UserMenu from '../UserMenu';

import './styles.css'

interface LayoutScreenProps {
  route: string
}

const LayoutScreen: React.FC<LayoutScreenProps> = (props) => {
  return (
    <div id="page-layout" >
      <aside>
        <UserMenu page_route={`/${props.route}`} />
      </aside>

      <footer>
        <PlayerAudio />
      </footer>
    </div>
  );
}

export default LayoutScreen;
