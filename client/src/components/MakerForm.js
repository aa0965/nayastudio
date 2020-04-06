import React from 'react'
import axios from 'axios';
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
  { key: 1, value: 'Wood', text: 'Wood' },
  { key: 2, value:'Metal', text: 'Metal' },
  { key: 3, value: 'Glass' , text: 'Glass' },
  { key: 4, value:'Plastic', text: 'Plastic' },
  { key: 5, value: 'Concrete' , text: 'Concrete' },
  { key: 6, value: 'Other', text: 'Other' }

]



var divStyle = {
  padding:'5px'
};
class MakerForm extends React.Component {


handleNumChangem = (e, { value }) =>  this.props.onSelectNum(value);
handleOptionChangem = (e, { value }) =>  this.props.onSelectOption(value)
handleChangem = (e, { value }) =>  this.props.onSelectText(value)

  render(){
    return(
    <div style={divStyle}>

     <Form.Field control={Select} label='How many projects on average do you work on every month?' placeholder='Number Range' options={countryOptions} onChange={this.handleNumChangem}/>


     <Form.Field control={Select} label='What kind of materials can you work with?' placeholder='Choose from Options:' options={countryOption} onChange={this.handleOptionChangem}/>


    <Form.Field


      onChange={this.handleChangem}
    id='form-textarea-control-opinion'
      control={TextArea}
      label='Where are your based out of?'
      placeholder='Where are your based out of?'
    />


    </div>
  )
  }
}

export default MakerForm
