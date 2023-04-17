export default {
    //route configure
    routes: [
        {path:"/",component:"./index"},
        {path:"/login",component:"./login"},
        {
            path:"/about",component:"./about",
            wrappers:["@/wrappers/auth"],
        },
        {
            path:"/users",component:"./users/_layout",
            routes:[
                {path:"/users/",component:"./users/index"},
                {path:"/users/:name",component:"./users/[name].js"},

            ]
        },
        {component:"./notfound"}
    ]
}