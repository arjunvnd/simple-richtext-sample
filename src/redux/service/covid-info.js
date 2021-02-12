import axios from "axios";
import {
  getCovidInfoStart,
  getCovidInfoSuccess,
  getCovidInfoFail
} from "../actions/index";
const baseUrl = "https://api.covid19india.org/state_district_wise.json";

const transformResponse = data => {
  const transformedData = Object.keys(data)
    .map(item => ({
      district: item,
      ...data[item],
      newCases: data[item].delta.confirmed,
      newDeaths: data[item].delta.deceased,
      newRecoveries: data[item].delta.recovered
    }))
    .filter(item => item.district !== "Other State");
  return transformedData;
};

export const fetchCovidData = () => async dispatch => {
  dispatch(getCovidInfoStart());
  try {
    const response = await axios.get(baseUrl);
    if (response.status !== 200) {
      dispatch(getCovidInfoFail());
    } else {
      dispatch(
        getCovidInfoSuccess(
          transformResponse(response.data.Kerala.districtData)
        )
      );
    }
  } catch (error) {
    console.log(error);
    dispatch(getCovidInfoFail());
  }
};
