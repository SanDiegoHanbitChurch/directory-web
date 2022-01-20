import axios from "axios";
import { MemberType, User } from "../types";

const BASEURL = process.env.REACT_APP_DIRECTORY_SERVICE_URL as string;

const callEndpoint = async (user: User, url: string): Promise<MemberType[]> => {
  const options = {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  try {
    const { data } = await axios.get(url, options);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("error", error);
    return [];
  }
};

const searchMembers = (user: User, searchTerm: string): Promise<MemberType[]> =>
  callEndpoint(user, `${BASEURL}?query=${searchTerm}`);

const getMembers = async (user: User): Promise<MemberType[]> =>
  callEndpoint(user, BASEURL);

export { getMembers, searchMembers };
