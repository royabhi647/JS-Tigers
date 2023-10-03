import { configureStore } from "@reduxjs/toolkit";
import perPageData from "./Features/perPageData";

const store = configureStore({
  reducer: {
    pageLimitedData: perPageData,
  },
});

export default store;
