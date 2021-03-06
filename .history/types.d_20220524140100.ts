export interface Post {
    _id:string,
    _createdAt:string,
    title:string,
    auther:{
        name:string,
        image:{
            asset:{
                _ref:string
            }
        },
    },
    description:string,
    slug:{
        current:string
    },
    mainImage:{
        asset:{
            _ref:string
        }
    },
    body:[object]
}