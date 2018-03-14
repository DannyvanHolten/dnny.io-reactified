import React, { PureComponent } from 'react';
import cn from 'classnames';

import Moment from './Moment';

import o from './styles/objects.scss';
import c from './Timeline.scss';
import u from './styles/utilities.scss';

class Timeline extends PureComponent {
  render() {
    const { isExpanded } = this.props;

    return (
      <section className={cn(o.row, o['position-relative'], c.container, isExpanded ? c['is-active'] : u['is-hidden'])}>
        <Moment />
      </section>
    );
  }
}

export default Timeline;