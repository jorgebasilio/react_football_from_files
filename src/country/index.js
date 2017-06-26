import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import style from './styles.css'

class Country extends Component {
  constructor() {
    super();
    this.state = {
      options: [],
    }
  }

  componentWillMount() {
    fetch('./../../data_mockup/countries.js')
      .then((response) => response.json())
      .then((options) => {this.setState({options})})
  }


  render() {
    const {value, handleChange, handleLayout} = this.props;
    const { options } = this.state;
    const countries = options.map((value, index) => {
      return <MenuItem value={value.country_id}
                       primaryText={value.country_name}
                       key={index}/>
    })

    return(
      <div className='container'>
        <Card>
          <CardHeader
            title="Paises"
            subtitle="Selecciona un país"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <DropDownMenu
            value={value}
            onChange={handleChange}
            autoWidth={false}
          >
            { countries }
          </DropDownMenu>
          <CardActions>
            <FlatButton label="Siguiente"
                        onClick={() => {handleLayout('leagues')}}/>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Country;
