import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Match extends Component {
  render() {
    return(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Fecha</TableHeaderColumn>
            <TableHeaderColumn>Hora</TableHeaderColumn>
            <TableHeaderColumn>Equipo visitante</TableHeaderColumn>
            <TableHeaderColumn>Equipo visitante score</TableHeaderColumn>
            <TableHeaderColumn>Equipo local score</TableHeaderColumn>
            <TableHeaderColumn>Equipo local</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default Match;
