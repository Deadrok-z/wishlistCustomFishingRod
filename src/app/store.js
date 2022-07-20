import { configureStore } from '@reduxjs/toolkit';
import  buttonTabBarReducer  from '../features/buttonTabBar/buttonTabBarSlice';
import  tableReducer  from '../features/table/tableSlice';
export const store = configureStore({
  reducer: {
    buttonTabBar: buttonTabBarReducer,
    table:tableReducer,
  },
});
