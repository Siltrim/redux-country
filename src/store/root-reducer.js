import { combineReducers } from 'redux';
import { themeReducer } from './theme/theme-actions';
import { countriesReducer } from './countries/countries-reducer';
import { controlsReducer } from './controls/conrols-reducer';
import { detailsReducer } from './details/details-reducer';

export const rootReducuer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controlsReducer,
  details: detailsReducer,
});
