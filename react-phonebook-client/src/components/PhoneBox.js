import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppActions from '../actions'
import PhoneDataList from './PhoneDataList';
import PhoneFormAdd from './PhoneFormAdd';

class PhoneBox extends Component {
    componentDidMount() {
        this.props.actions.loadPHoneBooks();
    }

    render() {

        const { data, actions } = this.props

        return (
            <div>
                <div className="container text-center">
                    <h4>
                        <font><b>Phone Book Apps</b></font>
                    </h4>
                </div>
                <div style={{ height: '5px' }}><br /></div>
                <PhoneFormAdd onSave={actions.addPHoneBook}/>
                <div style={{ height: '10px' }}><br /></div>
                <PhoneDataList datas={data} actions={actions}/>
            </div>
        )
    }
}

function mapStateToProps(state){
  return{
    data: state.data
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(AppActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneBox)
