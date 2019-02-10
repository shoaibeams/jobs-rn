import axios from "axios";
import FETCH_JOBS from "./types";
import reverseGeocode from "latlng-to-zip";
import qs from "qs";

const JOB_ROOT_URL = "https://jobs.github.com/positions.json?";
const JOB_QUERY_PARAMS = {
  description: "java"
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, location: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobsAction = region => async dispatch => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let response = await axios.get(url);
    console.log(response);
    dispatch({ type: FETCH_JOBS, payload: response });
  } catch (e) {
    console.log(e);
  }
};
