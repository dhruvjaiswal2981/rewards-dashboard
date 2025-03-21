import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchActivities, logActivity } from './activityAPI';

export const getActivities = createAsyncThunk('activities/getActivities', async () => {
  const response = await fetchActivities();
  return response.data;
});

export const addActivity = createAsyncThunk('activities/addActivity', async (activityData) => {
  const response = await logActivity(activityData);
  return response.data;
});

const activitiesSlice = createSlice({
  name: 'activities',
  initialState: {
    activities: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getActivities.pending, (state) => {
        state.loading = true;
      })
      .addCase(getActivities.fulfilled, (state, action) => {
        state.loading = false;
        state.activities = action.payload;
      })
      .addCase(getActivities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addActivity.fulfilled, (state, action) => {
        state.activities.push(action.payload);
      });
  },
});

export default activitiesSlice.reducer;
