import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [ 
    {id: 0, description: "Oreo"}, 
    {id: 1, description: "Lollipop"}, 
    {id: 2, description: "Pie"}, 
    {id: 3, description: "KitKat"},
    {id: 4, description: "Apollo"}, 
    {id: 5, description: "Code Talkers"},
    {id: 6, description: "Project 404"},
    {id: 7, description: "Manhattan Project"},
    {id: 8, description: "Angular"},
    {id: 9, description: "X Lab"}],
  homeTitle:"Bienvenido a Project Code Names"
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }
    case ACTIONS.Types.BOOM:{
      console.log(action);
      let newState=_.cloneDeep(state);
      if(state.homeTitle==="Bienvenido a Project Code Names"){
        newState.homeTitle="813N83N1D0 4 PR0J3CT C0D3 N4M3";
      }else{
      newState.homeTitle="Bienvenido a Project Code Names";
      }
      return newState;
    }
    
    default:
      return state;
  }
};

export default todoReducer;