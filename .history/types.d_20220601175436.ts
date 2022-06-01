export interface Post {
    _id:string,
    _createdAt?:string,
    title:string,
    author:{
        name:string,
        image:{
            asset:{
                _ref:string
            }
        },
    },
    'comments':{
        message:string,
        map:function name(params:type) {
            
        }
    }
    ,
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