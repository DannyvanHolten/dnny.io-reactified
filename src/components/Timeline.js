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

    console.log(moments);
    return (
      <section
        className={cn(
          o.row,
          o['position-relative'],
          o['padding-vertical-medium'],
          o['align-justify'],
          c.container,
          isExpanded ? c['is-active'] : u['show-for-sr'],
        )}
      >
        {moments.map(moment => <Moment key={moment.date} {...moment} />)}
      </section>
    );
  }
}

export default Timeline;