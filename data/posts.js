import { USERS } from './users'

export const POSTS = [
    {
        imageUrl: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
        user: USERS[0].user,
        likes: 6969,
        caption: 'Train ride to Busan',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'peppernazi',
                comment: 'Such a beautiful view!',
            },
            {
                user: USERS[2].user,
                comment: `Cause I'm on top of the world!!`,
            },
            {
                user: USERS[3].user,
                comment: `Another wonderful day for a wonderful man`,
            },
        ]
    },
    {
        imageUrl: 'https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg',
        user: USERS[1].user,
        likes: 6969,
        caption: 'Train ride to Busan',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'peppernazi',
                comment: 'damn your ass is fat!',
            },
        ]
    },
]