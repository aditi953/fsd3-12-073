//we use in memory database
let users =[
    {id: 1,name:'Amit Sharma',mob:'98345xxxxxx',email:'amit.example@exam.com'},
    {id:2,name:'aditi',mob:'9887643453',email:'aditi.example@adi.com'},
]
let nextId = 3;
export const getUsers = () => users;

export const addUser = (user)=>{
    user.id = nextId++;
    users.push(user);
    return user;
};