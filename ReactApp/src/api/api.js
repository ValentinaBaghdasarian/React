import axios from 'axios';



const url = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '0460488a-b442-4753-9c39-83ab9ef19369'
    }
});


export const usersAPI = {
    getUsers(currentPage, usersCount){
        return instance.get(`users?page=${currentPage}&count${usersCount}`)
            .then(response => {
                return response.data;
            });
    },

};


export const followAPI = {
    getUnfollow(id){
        return instance.delete(`follow/${id}`); 
    },
    getFollow(id){
        return instance.post(`follow/${id}`);
    }
};

export const authAPI = {
    getAuth(){
        return instance.get('auth/me');
    }
};


export const profileAPI = {
    getProfile(userId){
        return instance.get('profile/' + userId);
    },
    getStatus(userId){
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status){
        return instance.put('profile/status', {status: status});
    }
}

