import axios from 'axios'

const getMembers = async (user) => {
    const url = 'https://us-central1-hanbit-directory-dev.cloudfunctions.net/v1/members';
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
