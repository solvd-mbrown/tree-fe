import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  treeData: [],
  loading: false,
  error: null
};

const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    fetchTreeRequest: (state) => {
      state.loading = true;
    },
    fetchTreeSuccess: (state, action: PayloadAction<any>) => {
      state.treeData = action.payload;
      state.loading = false;
    },
    fetchTreeFailure: (state, action: PayloadAction<string>) => {

      state.loading = false;
    }
  }
});

export const { fetchTreeRequest, fetchTreeSuccess, fetchTreeFailure } = treeSlice.actions;

export const fetchTreeData = (treeId: any) => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
  dispatch(fetchTreeRequest());
  try {
    const response = await axios.get(`/api/trees/${treeId}`);
    dispatch(fetchTreeSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchTreeFailure(error.message));
  }
};

export default treeSlice.reducer;
