import React, { Component } from 'react';
import PhoneData from './PhoneData';

export default class PhoneFormSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: ''
        }
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
    }

    render() {
        console.log(this.props.actions)
        const { actions, datas } = this.props

        let name = this.state.name.trim().toLowerCase()
        let phone = this.state.phone.trim().toLowerCase()

        let filterData = datas

        if (name !== '' && phone !== '') {
            filterData = datas.filter(item => item.name.toLowerCase().startsWith(name) && item.phone.toLowerCase().startsWith(phone))
        } else if (name !== '') {
            filterData = datas.filter(item => item.name.toLowerCase().startsWith(name))
        } else if (phone !== '') {
            filterData = datas.filter(item => item.phone.toLowerCase().startsWith(phone))
        }

        let dataList = filterData.map((data, index) => {
            console.log(data);
            return (
                <PhoneData
                    key={data.id}
                    index={index+1}
                    data={data}
                    onDelete={() => actions.deletePhoneBook(data.id)}
                    updatePhone={actions.updatePhoneBook}
                />
            )
        })

        return (
            <div>
                <div className="card">
                    <div className="card-header">Search Form</div>
                    <div className="card-body">
                        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Phone</label>
                                <div className="col-sm-3">
                                    <input type="text" className="form-control" placeholder="081999123XXX" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{ height: '10px' }}><br /></div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList}
                    </tbody>
                </table>
            </div>
        )
    }
}
