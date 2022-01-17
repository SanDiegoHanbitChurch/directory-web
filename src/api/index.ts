import axios from 'axios'
import { MemberType, User } from '../types';

const url = process.env.REACT_APP_DIRECTORY_SERVICE_URL as string;

const searchMembers = async (user: User, searchTerm: string): Promise<MemberType[]> => {
    return await callEndpoint(user, `${url}?query=${searchTerm}`);    
}

const getMembers = async (user: User): Promise<MemberType[]> => {
    return await callEndpoint(user, url);    
}

const callEndpoint = async (user: User, url: string): Promise<MemberType[]> => {
    const options = {
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        }
    };
    try {
        const { data } = await axios.get(url, options);
        return data;
    } catch (error) {
        console.log('error', error);
        return [];
    }

}

export {
    getMembers,
    searchMembers
}
