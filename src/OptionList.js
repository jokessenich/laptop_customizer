import React from 'react'
import OptionItem from'./OptionItem'

class OptionList extends React.Component{


    render(){

        return(
    
    <section className="main__form">
    <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
    <OptionItem features={this.props.features} selected={this.props.selected} onSelect={this.props.onSelect}></OptionItem>
  </section>
  )
}}

export default OptionList