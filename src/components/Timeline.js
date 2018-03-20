import React, { PureComponent } from 'react';
import cn from 'classnames';
import moments from '../data/moments.json';
import Moment from './Moment';

import o from '../styles/objects.scss';
import c from './Timeline.scss';
import u from '../styles/utilities.scss';

class Timeline extends PureComponent {
  render() {
    const { isExpanded } = this.props;

    return (
      <section
        className={cn(
          o.row,
          c.container,
          isExpanded ? c['is-active'] : u['show-for-sr'],
        )}
      >

        <aside className={cn(o.area, o['padding-medium'])} style={{ gridRowEnd: 'span 70' }}>
          <h2><span className={o['color-primary-300']}>HELLO WORLD! I AM</span><br />DANNY VAN HOLTEN</h2>
          <p>
            And I am very pleased to see you here.
            Looking for a web developer specialized in front-end?
            Look no further for I am your man.
          </p>
        </aside>

        {moments.map((moment, index) => <Moment key={moment.date} {...moment} />)}
      </section>
    );
  }
}

export default Timeline;