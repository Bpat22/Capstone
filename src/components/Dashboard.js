import React, { Component } from 'react'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            items:null
        }
    }
    componentDidMount(){
        fetch('http://localhost:8080/AccountHolders').then((result) =>{
            result.json().then((data) =>{
                console.log("data", data);
                this.setState({items:data})
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.items ?
                    this.state.items.map((item) =>
                        <div>
                            <span>username: {item.username}</span>
                            <span>password: {item.password}</span>
                            <span>active: {item.active}</span>
                            <span>role: {item.role}</span>

                        </div>
                    )
                    :null
                }
            </div>
        )
    }
}
export default Dashboard;
