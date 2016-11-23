import React,{Component} from 'react';
import ReactDom from 'react-dom';

class FilterLink extends Component {
    render() {
        if (this.props.currentFilter === this.props.filter) {
            return (<span>{this.props.filter}</span>);
        }else {
            
            // 点击该按钮的时候 只需要把该组件的filter传入去dispatch以下就可以
            return (
                <a href='#' onClick={() => {
                    this.props.filterClick(this.props.filter);
                }}>
                    {this.props.filter}
                </a>
            )
        }
    }
}

export default FilterLink;