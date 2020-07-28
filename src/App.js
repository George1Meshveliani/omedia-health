import React, { Component } from 'react';
import './App.css';

///import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';*/}

import RegForm from './RegForm/RegForm';
import UserList from './UserList/UserList';
import Headline from './Headline/Headline';
import WeightInfo from './WeightInfo/WeighInfo';
import WeightList from './WeightList/WeightList';
import MealInfo from './MealInfo/MealInfo';
import MealList from './MealList/MealList';
import ActivityInfo from './ActivityInfo/ActivityInfo'
import ActivityList from './ActivityList/ActivtiList'
//import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super();



    this.state = {
      date: '',
      weight: '',

      meal: '',
      calories: '',

      activityType: '',
      burnedCalories: '',

      dmc: '',
      dac: '',
      items: [],
      items1: [],
      items2: [],
      items3: [],
      user: {},
      weights: [],//weight list
      meals: [] //meal list
    }
  };

  handleRegFormSubmit = (form) => {
    console.log("-> SUBMITTED FORM: ", form);

    this.setState({
      user: form
    });

    //e.preventDefault();
  };

  handleFormSubmit1 = (e) => {
    e.preventDefault();

    let items1 = [...this.state.items1];

    items1.push({
      date: this.state.date,
      weight: this.state.weight,
      dw: this.state.dw,
    });

    this.setState({
      items1,
      weight: '',
      date: '',
      dw: ''
    });
  };

  handleFormSubmit2 = (e) => {
    e.preventDefault();

    let items2 = [...this.state.items2];

    items2.push({
      date: this.state.date,
      meal: this.state.meal,
      calories: this.state.calories,

    });

    this.setState({
      items2,
      date: '',
      meal: '',
     /* dw: '',
      dmc: '', */
    });
  };

  handleFormSubmit3 = (e) => {
    e.preventDefault();

    let items3 = [...this.state.items3];

    items3.push({
      date: this.state.date,
      activityType: this.state.activityType,
      burnedCalories: this.state.burnedCalories,

    });

    this.setState({
      items3,
      date: '',
      activityType: '',
      burnedCalories: '',
     /* meal: '',
      dw: '',
      dmc: '', */
    });
  };



  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  /*removeItems = (p) => {
    var array = this.state.items;
    var index = array.indexOf(p.target.value); 
    delete array[index];
  };*/


  render() {

   // if (!this.state.user.username) return <Form onFormSubmit={this.handleRegFormSubmit} />;

    let regForm = this.state.user.username ? <h2>Thank you for Registration</h2>
      : <RegForm onFormSubmit={this.handleRegFormSubmit} />;
   

    return (
      <div className="App">
        <Headline />
        {regForm}
        
        <button id="logout" type="submit" value="Submit1">Log out</button>

        <br></br>
        <UserList userInfo={this.state.user} />

        <WeightInfo handleFormSubmit1={this.handleFormSubmit1}
        handleInputChange1={this.handleInputChange}
        newDate={this.state.date}
        newWeight={this.state.weight}
        newDW={this.state.dw}
        />

        <WeightList weightRecords={this.state.items1} desiredWeight={this.state.user.dw}
        />

        <MealInfo handleFormSubmit2={this.handleFormSubmit2}
          handleInputChange2={this.handleInputChange}
          newDate={this.state.date}
          newMeal={this.state.meal}
          newCalories={this.state.calories}
           />

        <MealList items2={this.state.items2} desiredCalories={this.state.user.dmc}/>

        <ActivityInfo handleFormSubmit3={this.handleFormSubmit3}
          handleInputChange3={this.handleInputChange}
          newDate={this.state.date}
          newActivity={this.state.activityType}
          newBurnedCalories={this.state.burnedCalories}
           />

        <ActivityList items3={this.state.items3} 
        desiredActivities={this.state.user.dac} 
        newActivity1={this.state.activityType}/>

        {/*<Dashboard />*/}
      </div>
    );
  }
}

export default App;