import React, {Component} from 'react';
import Data from '../Data/data';
import Card from './Card';
import data from '../Data/data';
class UserInfoDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: Data[0],
            index: 0,
        }
    }

    changeEmployee(num) {
            let newIndex = this.state.index + num;
            if (newIndex >= Data.length) newIndex = 0;
            if (newIndex < 0) newIndex = Data.length - 1;
            this.setState({
                employee: Data[newIndex],
                index: newIndex
            })
        }
    

    deleteEmployee = () => {
        let newIndex = this.state.index;
        Data.splice(this.state.index, 1);
        console.log(Data.length, this.state.index)
        if (Data.length <= this.state.index) newIndex -= 1;
        this.setState({
            employee: Data[newIndex],
            index: newIndex
        })
    
    }




    render() {
        return (
            <div className='userDisplay'>
                <Card employee={this.state.employee} index={this.state.index+1} amount={data.length}/>
                <div className='buttons'>
                    <button onClick={() => this.changeEmployee(-1)} className='new-employee'>{'<'} Previous</button>
                    <div className='change-buttons'>
                        <button>Edit</button>
                        <button onClick={this.deleteEmployee}>Delete</button>
                        <button>New</button>
                    </div>
                    <button onClick={() => this.changeEmployee(1)} className='new-employee'>Next {'>'}</button>
                </div>
            </div>

        )
    }
}

export default UserInfoDisplay;