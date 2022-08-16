import { configureStore } from '@reduxjs/toolkit';
import  buttonTabBarReducer  from '../features/buttonTabBar/buttonTabBarSlice';
import  tableReducer  from '../features/table/tableSlice';
import newRodPageReducer  from '../features/newRodPage/newRodPageSlice';
export const store = configureStore({
  reducer: {
    buttonTabBar: buttonTabBarReducer,
    table:tableReducer,
    data:newRodPageReducer,
  },
});
