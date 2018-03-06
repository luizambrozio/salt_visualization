import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pagaHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://172.23.227.114:3001/Softplan/TSACMethods/SALT/'
const URLSIS = 'http://172.23.227.114:3001/Softplan/TSACMethods/sistema'


export default class Todo extends Component {
    
    constructor(props){
        super(props)
        this.state = { month: '', showSubmit: false, court: '', system: '', checked: false, checkedHML: false , list: [], sist: [] }

        this.handleChangeMonth = this.handleChangeMonth.bind(this)
        this.handleChangedtEnd = this.handleChangedtEnd.bind(this)
        this.handleChangeCourt = this.handleChangeCourt.bind(this)
        this.handleChangeSystem = this.handleChangeSystem.bind(this)
        this.handleChangeChecked = this.handleChangeChecked.bind(this)
        this.refresh = this.refresh.bind(this)
        this.clear = this.clear.bind(this)
        
        
    }

    componentWillMount(){
        this.getClients()
    }

    refresh(){
       axios.get(`${URL}${this.state.system}/${this.state.month}`)
            .then(resp => this.setState({...this.state, list : resp.data}))
    }

    clear(){
        this.setState({...this.state, month: '', showSubmit: false, court: '', system: '', list: [] })
    }

    
    getClients(){
                        
        axios.get(URLSIS)
        .then(resp => this.setState({...this.state , sist : resp.data.Result}))
    }


    handleChangeMonth(e) {
        this.setState({...this.state, month: e.value}) 
        //console.log(e.value)
    }

    handleChangedtEnd(e) {
        this.setState({...this.state, dtEnd: e.target.value})     
    }

    handleChangeCourt(e) {
        this.setState({...this.state, court: e.target.value})
    }

    handleChangeChecked(e) {
        if(this.state.checked == 'on'){
            this.setState({...this.state, checked: false})
        } else {
            this.setState({...this.state, checked: e.target.value})
        }
        
    }

    handleChangeCheckedHML(e) {
        if(this.state.checked == 'on'){
            this.setState({...this.state, checkedHML: false})
        } else {
            this.setState({...this.state, checkedHML: e.target.value})
        }
        
    }
    
    handleChangeSystem(e) {
        this.setState({...this.state, system: e.target.value})
    }
    
    render(){
        return (
            <div>
                <PageHeader name='Salts' small='TJ'></PageHeader>
                <TodoForm 
                    month={ this.state.month }
                    court={this.state.court}
                    system={this.state.system}
                    refresh={this.refresh}
                    clear={this.clear}
                    checked = {this.state.checked}
                    sist = {this.state.sist}
                    handleChangeSystem={this.handleChangeSystem}
                    handleChangeChecked={this.handleChangeChecked}
                    handleChangeCheckedHML={this.handleChangeCheckedHML} 
                    handleChangeCourt={this.handleChangeCourt}
                    handleChangeMonth={this.handleChangeMonth}
                    handleChangedtEnd={this.handleChangedtEnd}/>
                
                <TodoList
                    list = {this.state.list}
                    checked = {this.state.checked}
                    />
            </div>
        )
    }
}