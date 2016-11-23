import React,{Component} from 'react';
import ReactDom from 'react-dom';
import FilterLink from './FilterLink.js';

class Footer extends Component {
    render () {
        const {onClick} = this.props;
        return (
            <div>
                <FilterLink filterClick={onClick} filter='SHOW_ALL' currentFilter={this.props.currentFilter}>Show All</FilterLink>
                <FilterLink filterClick={onClick} filter='SHOW_COMPLETED' currentFilter={this.props.currentFilter}>Show Completed</FilterLink>
                <FilterLink filterClick={onClick} filter='SHOW_ACTIVE' currentFilter={this.props.currentFilter}>Show Active</FilterLink>
            </div>
        )
    }
}
export default Footer;