import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyThemeDevToHack from './theme';

import Country from './../country/';
import League from './../league/';
import Information from './../information/';

import style from './style.css';

import leaguesData from './../../data_mockup/countries';

const propTypes = {
  children: PropTypes.object,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLayout: 'countries',

      country_selected: "1",

      league_selected: "1"
    }
    this.handleChangeCountry = this.handleChangeCountry.bind(this);
    this.handleChangeLeague = this.handleChangeLeague.bind(this);
    this.handleChangeLayout = this.handleChangeLayout.bind(this);
  }
  getChildContext() {
      return {
        muiTheme: getMuiTheme(MyThemeDevToHack)
      }
  }

  handleChangeCountry(event, index, country_selected) {
    this.setState({country_selected});
  }

  handleChangeLeague(event, index, league_selected) {
    this.setState({league_selected});
  }

  handleChangeLayout(currentLayout) {
    this.setState({currentLayout});
  }

  render() {
    const {
      currentLayout,
      country_selected,
      league_selected
    } = this.state;
    let layout;
    switch (currentLayout) {
      case "countries":
        layout = <Country value={country_selected}
                        handleChange={this.handleChangeCountry}
                        handleLayout={this.handleChangeLayout}/>
        break;
      case "leagues":
        layout = <League value={league_selected}
                        country_selected={country_selected}
                        handleChange={this.handleChangeLeague}
                        handleLayout={this.handleChangeLayout}/>
        break;
      case "information":
        layout = <Information handleLayout={this.handleChangeLayout}/>
        break;
    }
    return(
      <div>
        <AppBar title='Football'/>
        { layout }
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

App.propTypes = propTypes;

export default App;
