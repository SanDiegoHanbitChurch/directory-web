import axios from 'axios'

const getMembers = async (user) => {
    const url = process.env.REACT_APP_DIRECTORY_SERVICE_URL;
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
