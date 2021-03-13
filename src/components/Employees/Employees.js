import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: 1, name: "Joanna Sowa", age: 45, salary: 6000, position: "headmaster" },
                { id: 2, name: "Anna Kowalska", age: 50, salary: 3000, position: "secretary" },
                { id: 3, name: "Zofia Nowak", age: 22, salary: 2500, position: "teacher" },
                { id: 4, name: "Joanna Walach", age: 45, salary: 4000, position: "teacher" }
            ]
        }
    }

    renderTableData() {
        return this.state.data.map((data, index) => {
            const { id, name, age, salary, position } = data;
            return (
                <tr className="table" key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>age: {age}</td>
                    <td>salary: {salary}</td>
                    <td>position: {position}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>My table</h1>
                <table>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;

