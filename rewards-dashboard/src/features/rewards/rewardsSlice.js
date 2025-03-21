import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRewards } from './rewardsAPI';

export const getRewards = createAsyncThunk('rewards/getRewards', async () => {
  const response = await fetchRewards();
  return response.data;
});

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState: {
    rewards: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRewards.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRewards.fulfilled, (state, action) => {
        state.loading = false;
        state.rewards = action.payload;
      })
      .addCase(getRewards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default rewardsSlice.reducer;