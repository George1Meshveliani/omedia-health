import React, { Component } from 'react';

import './Info.css';
class Info extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>During the registration, please consider following: desired weight-DW, desired meal calories per day-
            DMC, desired activity calories per day-DAC</h3>  
        <form className="UserForm" /*onSubmit={this.props.handleFormSubmit}*/>
          <label htmlFor="username">
          Weight:
          <input id="username" /*value={this.props.newUsername} */
            type="text" name="username"
           /* onChange={this.props.handleInputChange} *//>
          </label>
         {/*} <label for="password">
          Password:
          <input id="password" value={this.props.newPassword} 
            type="password" name="password"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="email">
          Email:
          <input id="email" value={this.props.newEmail} 
            type="email" name="email"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="dw">
          DW:
          <input id="dw" value={this.props.newDW} 
            type="number" name="dw"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="dmc">
          DMC:
          <input id="dmc" value={this.props.newDMC} 
            type="number" name="dmc"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="dac">
          DAC:
          <input id="dac" value={this.props.newDAC} 
            type="number" name="dac"
            onChange={this.props.handleInputChange} />
    </label> */}
          <button type="submit" value="Submit">Add</button>
          <br></br>
          
        </form>
      </div>
    );
  }
}

export default Info;