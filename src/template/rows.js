import React, { Component } from 'react'

export default class Rows extends Component {
    
    toColor(data){
        const colorAst = data.indexOf("*")
        if(colorAst>= 0){
            return 'green'
        }         
        return 'white'
    }


    render(){
        const getColor = this.toColor(this.props.getColor || '')
        return (
            <td bgcolor = {getColor} >
                {this.props.children}
            </td>
        )
    }
}