import React, { Component } from 'react';

export default class PhoneFormAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addButton: true,
            name: this.props.name || '',
            phone: this.props.phone || ''

        }
    }

    handleButtonAdd() {
        this.setState({ addButton: false })
    }

    handleButtonCancel() {
        this.setState({ addButton: true })
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handlePhoneChange(e) {
        this.setState({ phone: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = this.state.name.trim();
        let phone = this.state.phone.trim();
        if(!name || !phone) {
            return;
        }
        this.props.onSave(name, phone);
        this.setState({ name: '', phone: ''})
    }

    render() {
        return (
            <div>
                {
                    this.state.addButton ?
                    <button type="button" className="btn btn-primary" onClick={this.handleButtonAdd.bind(this)}>
                    <i className="fas fa-plus"></i> Add
                    </button>
                    :
                    <div className="card">
                        <div className="card-header">Adding Form</div>
                        <div className="card-body">
                            <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="Name" onChange={this.handleNameChange.bind(this)} value={this.state.name} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 col-form-label">Phone</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control" placeholder="081999123XXX" onChange={this.handlePhoneChange.bind(this)} value={this.state.phone} required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success"><i className="fas fa-save"></i> Save</button>
                                &nbsp;
                                <button type="button" className="btn btn-warning" onClick={this.handleButtonCancel.bind(this)}><i className="fas fa-ban"></i> Cancel</button>
                            </form>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
