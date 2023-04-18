let data=[
    {title:'vue single page project'},
    {title:'react single page management system'}
]


export default {
    //method url 
    "get /api/goods" :function(req,res){
        setTimeout(()=>{
            res.json({result:data})
        },1000)
    }
}