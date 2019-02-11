import axios from "axios";
import { FETCH_JOBS, LIKE_JOB, CLEAR_LIKED_JOBS } from "./types";
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

export const fetchJobsAction = (region, callback) => async dispatch => {
  try {
    let zip = await reverseGeocode(region);
    const url = buildJobsUrl(zip);
    let { data } = await axios.get(url);
    console.log(data);
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (e) {
    callback();
    console.log(e);
  }
};

export const likeJobAction = job => {
  return {
    payload: job,
    type: LIKE_JOB
  };
};

export const clearLikedJobsAction = () => {
  return { type: CLEAR_LIKED_JOBS };
};
