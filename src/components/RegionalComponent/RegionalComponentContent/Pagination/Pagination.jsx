import React, { Component } from 'react';
import '../../RegionalComponent.scss';

class Pagination extends Component {
  state = {
  };

  render() {
    return <div className='pagination-card'>
        <ul>
            <li onClick={() => this.props.changePagination('prev', this.props.type)}><span> &#60; </span></li>
            <li onClick={() => this.props.changePagination(1, this.props.type)} className={this.props.active === 1 && 'active'}><span>1</span></li>
            <li onClick={() => this.props.changePagination(2, this.props.type)} className={this.props.active === 2 && 'active'}><span>2</span></li>
            <li onClick={() => this.props.changePagination(3, this.props.type)} className={this.props.active === 3 && 'active'}><span>3</span></li>
            <li onClick={() => this.props.changePagination(4, this.props.type)} className={this.props.active === 4 && 'active'}><span>4</span></li>
            <li onClick={() => this.props.changePagination('next', this.props.type)} className={this.props.active === 5 && 'active'}><span> &#62; </span></li>
        </ul>
    
        
    </div>;
  }
}

export default Pagination;
