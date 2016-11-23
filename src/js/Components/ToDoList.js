import React,{Component} from 'react';
import ReactDom from 'react-dom';

class ToDoList extends Component {
    render () {
        return (
            <div>
                <ul>
                    {this.props.toDosList.map((item, key) => {
                        return (
                            <li 
                                style={ {textDecoration: item.completed ? 'line-through': 'none'} } 
                                key={item.id} 
                                onClick={ () => {
                                    this.props.onClick(item.id);
                                 }
                                }>
                                {item.text}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
export default ToDoList;