import { createSlice } from "@reduxjs/toolkit";
import data from "../../assets/products.json";
let initialState = {
  products: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    testAction: (state, action) => {
      state.products = action.payload;
    },
    ajoutTest: (state, action) => {
      const payload = action.payload;
      state.products.push({
        ...payload,
      });
    },
    supprimerTest: (state, action) => {
      const payload = action.payload;

      const index = state.products.findIndex((item) => item.id === payload);
      console.log(index);

      state.products.splice(index, 1);
    },
    update: (state, action) => {
      const payload = action.payload;
      const updatedArray = state.products.map((obj) => {
        if (obj.id === payload) {
          return { ...obj, name: "msi" };
        } else {
          return obj;
        }
      });
      state.products = updatedArray;
    },
  },
});

export default testSlice.reducer;

export const { testAction, ajoutTest, supprimerTest, update } =
  testSlice.actions;

// export const selectTest = (state) => state.test.products;

export const addTest = (product) => async (dispatch) => {
  // state.test.products.push(product)
  dispatch(ajoutTest(product));
};
export const getTest = () => async (dispatch) => {
  // state.test.products.push(product)
  dispatch(testAction(data));
};

export const supprimer = (id) => async (dispatch) => {
  // state.test.products.push(product)
  dispatch(supprimerTest(id));
};

export const updateP = (id) => async (dispatch) => {
  // state.test.products.push(product)
  dispatch(update(id));
};
