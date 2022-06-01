export default {
    name:"messages",
    title:"Messages",
    type:"document",
    fields:[
        {
            name:"name",
            type:'string'
        },
        {
            name:"email",
            type:'string'
        },
        {
            title:'Approved',
            name:"Approved",
            type:"boolean"
        },
        {
            name:"message",
            type:'string'
        },
        {
            name:'post',
            type:"reference",
            to:[{type:'post'}]
        }

    ]
}