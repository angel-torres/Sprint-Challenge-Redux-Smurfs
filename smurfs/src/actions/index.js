/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const GETTING_SMURFS = 'ADD_SMURF';
export const GOT_SMURFS = 'GOTSMURFS'
export const ADDED_SMURF = 'ADDED_SMURF';


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({type: GETTING_SMURFS})
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => dispatch({type: GOT_SMURFS, payload: res.data}))
  .catch( err => console.log(err) )
}

export const addSmurf = (smurf) => dispatch => {
  dispatch({type: GETTING_SMURFS});
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then( res => dispatch({type: ADDED_SMURF, payload: res.data}))
}