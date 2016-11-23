import React,{Component} from 'react';
import ReactDom from 'react-dom';

class AddToDo extends Component {
    render () {
        return (
            <div>
                <input type='text' ref='Inp'/>
                <button onClick={ () => {
                    this.props.onClick(this.refs.Inp.value)
                }}>Add</button>
            </div>
        )
    }
}
export default AddToDo;