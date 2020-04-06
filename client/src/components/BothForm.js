import React from 'react'
import DesignerForm from './DesignerForm.js'
import MakerForm from './MakerForm.js'
import axios from 'axios';
// import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'

class BothForm extends React.Component {
  render(){
    return(
      <React.Fragment>
      <MakerForm/>
      
      <DesignerForm/>
      </React.Fragment>
  )
  }
}

export default BothForm
