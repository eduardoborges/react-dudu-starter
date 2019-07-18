/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
import authActions from "./authActions";
import todoActions from "./todoActions";

const combineActions = (...actions) => store => {
  const all = {};
  for (let i = 0; i < actions.length; i++) {
    const obj = actions[i](store);
    for (const p in obj) all[p] = obj[p];
  }
  return all;
};

export { authActions, todoActions, combineActions };
