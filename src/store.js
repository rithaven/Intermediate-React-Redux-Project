import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { newsApi } from "./features/NewsApiSlice";
import NewsReducer from "./features/NewsSlice";

const store = configureStore({
  reducer: {
    news: NewsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

const Context = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Context;
