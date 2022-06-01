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
            type:"boolean",
            description:"Comment won't show on the title without approbal"
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