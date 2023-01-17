const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

    switch(action.type){
        case  ADD_POST:
            let newPosts = {
                id: 6,
                src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312564812_658788478950885_8062167258836811753_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=wF-3heRTHxwAX_r5DxV&_nc_ht=scontent.fevn5-1.fna&oh=00_AfBsgRBEnL2RnMY10iFYRk6LfIBO7u3o6w_6buzYQAq41Q&oe=63BE712E',
                text: state.newPostText,
                commentsData: [
                    {
                        id: 4,
                        name: "Andrea Csuta",
                        comment: 'I am so grateful that you show this gorgeous world trough your eyes to us ! 🙏❤️',
                        src: 'https://scontent.fevn5-1.fna.fbcdn.net/v/t39.30808-6/312792756_650196539810079_453434720747196609_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=JDV4AnCoQcEAX8EPjmK&tn=Tr_cLuVJIKPhxOK3&_nc_ht=scontent.fevn5-1.fna&oh=00_AfDL5_BjLiA3SG44hbD71dVH_Gu88N00fb5_8YxCBmCdqw&oe=63BF8408',
                    }
                ],  
            };   
            state.postsData.unshift(newPosts);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
};

export default profileReducer;