import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


const initialState = [
  {
    text: 'Учить JS',
    done: true
  },
  {
    text: 'Выучить React',
    done: true
  },
  {
    text: 'Стать богатым',
    done: false
  }

]

const reducer = (state = initialState, action) =>{
  switch(action.type){
      case 'delete' :
          return state.filter((item, index) => {
              if(action.payload === index){
                  return false
              }else{
                  return true
              }
          })

      default:
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);