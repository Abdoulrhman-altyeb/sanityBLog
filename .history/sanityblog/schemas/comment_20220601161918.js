export default {
    name:"comment",
    title:"Comment",
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
            name:"approved",
            type:"boolean",
            description:"Comment won't show on the title without approval"
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