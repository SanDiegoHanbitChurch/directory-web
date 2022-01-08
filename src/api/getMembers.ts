import axios from 'axios'
import { User } from '../types';

const getMembers = async (user: User) => {
    const url = process.env.REACT_APP_DIRECTORY_SERVICE_URL as string;
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
    getMembers
}
