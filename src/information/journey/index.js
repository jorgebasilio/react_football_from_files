import React, { Component } from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Journey extends Component {
  render() {
    return(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Jornada</TableHeaderColumn>
            <TableHeaderColumn>Fecha inicio</TableHeaderColumn>
            <TableHeaderColumn>Fecha Fin</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>Employed</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}

export default Journey;
