// Home Page:

export interface IResponse{
    posts: []
}


export interface CarouselProps {
    
}


// Login & Register
export interface IUser{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    admin: boolean,
}

export interface IUserProps{
    token: string | null,
}

export interface ILogin{
    email: string,
    password: string,
}


// Admin
export interface IPost{
    date: string,
    time: string,
    location: string,
    title: string,
    content: string,
    category: string,
    imageURL: string,
    owner: string,

}

export interface IState{
    props: []
}

// User
export interface IComment{
    like: boolean,
    comment: string
}

export interface IInfo{
    postId: string,
    userId: string
}
