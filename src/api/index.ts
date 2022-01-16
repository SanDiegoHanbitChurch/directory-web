import axios from 'axios'
import { User } from '../types';

const url = process.env.REACT_APP_DIRECTORY_SERVICE_URL as string;

const searchMembers = async (user: User, searchTerm: string) => {
    return callEndpoint(user, `${url}?query=${searchTerm}`);    
}

const getMembers = async (user: User) => {
    return callEndpoint(user, url);    
}

const callEndpoint = async (user: User, url: string) => {
    const options = {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    };
    try {
        const { data } = await axios.get(url, options);
        return data;
    } catch (error) {
        console.log('error', error)
    }

}

export {
    getMembers,
    searchMembers
}
