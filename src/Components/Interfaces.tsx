// Home Page:


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

