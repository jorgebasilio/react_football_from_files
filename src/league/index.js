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

import style from './../country/styles.css'

class League extends Component {
  constructor() {
    super();
    this.state = {
      options: []
    }
  }

  componentWillMount() {
    fetch('./../../data_mockup/leagues.js')
      .then((response) => response.json())
      .then((result) => {
        result.map((value, index) => {
          if (value.country_id === this.props.country_selected) {
            this.setState({options: value.leagues})
          }
        })
      })
  }

  render() {
    const {value, handleChange, handleLayout} = this.props;
    const { options } = this.state;

    const leagues = options.map((value, index) => {
      return <MenuItem value={value.league_id}
                       primaryText={value.league_name}
                       key={index}/>
    })

    return(
      <div className='container'>
        <Card>
          <CardHeader
            title="Ligas"
            subtitle="Selecciona una liga"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <DropDownMenu
            value={value}
            onChange={handleChange}
            autoWidth={false}
          >
            { leagues }
          </DropDownMenu>
          <CardActions>
            <FlatButton label="Atras"
                         onClick={() => {handleLayout('countries')}} />
            <FlatButton label="Siguiente"
                        onClick={() => {handleLayout('information')}} />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default League;
