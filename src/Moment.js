import React, { PureComponent } from 'react';
import cn from 'classnames';

import o from './styles/objects.scss';
import c from './Moment.scss';

class Moment extends PureComponent {
  render() {
    const { isExpanded, isRight } = this.props;

    return (
      <div className={cn(o.column, o['column-6'], o['position-relative'], c.container, isRight && o['align-right'])}>
        <article className={cn(o['bg-light-color'], c.article)} />
      </div>
    );
  }
}

export default Moment;