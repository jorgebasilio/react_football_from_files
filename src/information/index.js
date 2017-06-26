import React, { Component } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {Tabs, Tab} from 'material-ui/Tabs';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Team from './team/';
import Match from './match/';
import Journey from './journey/';

import style from './../country/styles.css'

class Information extends Component {

  render() {
    const { handleLayout } = this.props;

    return(
      <div className='container'>
        <Card>
          <CardHeader
            title="Informacion de la liga"
            actAsExpander={true}
            showExpandableButton={true}
          />

          <Tabs>
            <Tab label="Equipos" >
              <Team />
            </Tab>
            <Tab label="Partidos">
              <Match/>
            </Tab>
            <Tab label="Jornadas" >
              <Journey/>
            </Tab>
          </Tabs>

          <CardActions>
            <FlatButton label="Atras"
                         onClick={() => {handleLayout('leagues')}} />
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default Information;
