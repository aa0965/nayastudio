import React from 'react'
import axios from 'axios';
import MakerForm from './MakerForm.js'
import DesignerForm from './DesignerForm.js'
import BothForm from './BothForm.js'

import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'
var flag=false;
const initialState= {num:'',what:'',makerOption:'',makerText:''}
class LoginForm extends React.Component {

  state = {numm:'',numd:'',what:'',makerOption:'',makerText:'',designOption:'',designText:''}

  handleChange = (e,{value}) => this.setState({ what:value })
  handleNumChangem= (value) => this.setState({numm:value})
  handleOptionChangem= (value) => this.setState({makerOption:value})
  handleTextChangem= (value) => this.setState({makerText:value})
  handleNumChanged= (value) => this.setState({numd:value})
  handleOptionChanged= (value) => this.setState({designOption:value})
  handleTextChanged= (value) => this.setState({designText:value})
  handleSubmit(e){
          e.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const makerCapacity = this.state.numm;
          const designCapacity = this.state.numd;
          const  material= this.state.makerOption;
          const  designerType= this.state.designOption;
          const location = this.state.makerText;
          const   training = this.state.designText;


          const userObject = {name:name,email:email,password:password,makerCapacity:makerCapacity,designCapacity:designCapacity, material: material,designerType:designerType,location:location,training:training}
          axios.post('/Users', {userObject})
           .then((res) => {
               console.log(res.data)

           }).catch((error) => {
               console.log(error)
           });
           flag=true;
            document.getElementById('contact-form').reset();
            this.setState(initialState)

      }


  render(){
      const { what } = this.state
      var loginForm;
if (this.state.what==='mk') {
  console.log('mk')
  loginForm = <MakerForm onSelectNum={this.handleNumChangem} onSelectOption={this.handleOptionChangem} onSelectText={this.handleTextChangem}/>;
} else if(this.state.what === 'dg') {
  console.log('dg')
  loginForm = <DesignerForm onSelectNum={this.handleNumChanged} onSelectOption={this.handleOptionChanged} onSelectText={this.handleTextChanged}/>;
}
else if(this.state.what === 'bt'){
  console.log('bt')
  loginForm=(<div><MakerForm onSelectNum={this.handleNumChangem} onSelectOption={this.handleOptionChangem} onSelectText={this.handleTextChangem}/>
               <DesignerForm onSelectNum={this.handleNumChanged} onSelectOption={this.handleOptionChanged} onSelectText={this.handleTextChanged}/></div>);
}
    return(<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='black' textAlign='center'>
           Register to Naya Studio
        </Header>
        <Form size='large' onSubmit={this.handleSubmit.bind(this)} method='POST' id='contact-form'>
          <Segment stacked>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='name'
           id ='name'
          />
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' id='email'/>
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              id='password'
            />
            <Form.Group inline>
            <label>What are you ?</label>
            <Form.Radio
              label='Maker'
              value='mk'
              checked={what === 'mk'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Designer'
              value='dg'
              checked={what === 'dg'}
              onChange={this.handleChange}
            />
            <Form.Radio
              label='Both'
              value='bt'
              checked={what === 'bt'}
              onChange={this.handleChange}
            />

          </Form.Group>
          {loginForm}
          <Form.Field
    id='form-button-control-public'
    control={Button}
    content='Register to Naya Studio'
    label=''
    fluid
    color='black'
  />

          </Segment>
        </Form>
        {flag ? (
          <Message
         success
         header='Form Completed'
         content="You're all signed up for the newsletter"
       />
       ) : (
         <Message

        content="Please Sign up"
      />
       )}
      </Grid.Column>
    </Grid>)
  }

}

export default LoginForm
