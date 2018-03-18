import React, {Component} from 'react';
import Game from 'components/Game';

const iconSet = ['fa fa-ambulance', 'fa fa-battery-three-quarters', 'fa fa-blind', 'fa fa-caret-square-left', 'fa fa-cubes', 'fa fa-eye', 'fa fa-paper-plane', 'fa fa-heartbeat', 'fa fa-wrench', 'fa fa-user-secret', 'fa fa-truck', 'fa fa-snowflake', 'fa fa-plane', 'fa fa-moon', 'fa fa-graduation-cap', 'fa fa-coffee', 'fa fa-birthday-cake', 'fa fa-fire-extinguisher', 'fab fa-github-square', 'far fa-user', 'fas fa-user', 'fas fa-bicycle', 'fab fa-fort-awesome', 'far fa-smile', 'fas fa-question'];

export default class App extends Component {
  render() {
    return (
      <div>
        <Game tileCount="36" iconset={iconSet}/>
      </div>
    );
  }
}
