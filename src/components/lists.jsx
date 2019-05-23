import React, { Component } from 'react';
import { thisTypeAnnotation } from '@babel/types';

class TodoList extends Component {
    state = {
        item_input:'',
        tags: ['item1', 'item2']
    }

    // concept of 2 way data binding

    // update the state with new value of text box
    update = (event) => {
        this.setState({
            item_input: event.target.value
        })
    }

    add = () => {
        this.setState(prev => {
            return {
                item_input : '',
                tags: prev.tags.concat(prev.item_input)
            };
        });
    }

    render() { 
        return (
            <div>
                <h4>To do list ({this.state.tags.length}) items </h4>
                <ul> 
                    {this.state.tags.map((item,i) => <li key={item}>{item}</li>)}
                </ul>

                <input type="text" className="ml-2" value={this.state.item_input} onChange={this.update}></input>
                <button type="button" className="btn btn-primary ml-2" onClick={this.add}>Add item</button>
                <h2 className="ml-2">{this.state.item_input}</h2>
            </div>  
        );
    }
}
 
export default TodoList;