import React from 'react'

import { Button, Form, Grid, Header, Message, Segment, Select, TextArea} from 'semantic-ui-react'

const countryOptions = [
  { key: 1, value: '1', text: '1' },
  { key: 2, value: '2', text: '2' },
  { key: 3, value: '3', text: '3' },
  { key: 4, value: '4', text: '4' },
  { key: 5, value: '5', text: '5' },
  { key: 6, value: '6', text: '6' },
  { key: 7, value: '7', text: '7' },
  { key: 8, value: '8', text: '8' },
  { key: 9, value: '9', text: '9' },
  { key: 10, value: '10', text: '10' },
  { key: 11, value: '10+', text: '10+' }

]

const countryOption = [
  { key: 1, value: 'Furniture Designer', text: 'Furniture Designer' },
  { key: 2, value:'Architect', text: 'Architect' },
  { key: 3, value: 'Interior Designer' , text: 'Interior Designer' },
  { key: 4, value:'Industrial Designer', text: 'Industrial Designer' },
  { key: 5, value: 'Designer Maker' , text: 'Designer Maker' },
  { key: 6, value: 'Other', text: 'Other' }

]

var divStyle = {
  padding:'5px'
};

class DesignerForm extends React.Component {


handleNumChanged = (e, { value }) =>  this.props.onSelectNum(value);
handleOptionChanged = (e, { value }) =>  this.props.onSelectOption(value)
handleChanged = (e, { value }) =>  this.props.onSelectText(value)


  render(){
    return(
      <div style={divStyle}>

       <Form.Field control={Select} label='How much time can you spend on Naya projects per week?' placeholder='Number Range' options={countryOptions} onChange={this.handleNumChanged}/>


       <Form.Field control={Select} label=' Which of the following best describes you?' placeholder='Choose from Options:' options={countryOption} onChange={this.handleOptionChanged}/>


      <Form.Field


        onChange={this.handleChanged}
      id='form-textarea-control-opinion'
        control={TextArea}
        label='education level/type'
        placeholder='education level/type'
      />


      </div>
  )
  }
}

export default DesignerForm
