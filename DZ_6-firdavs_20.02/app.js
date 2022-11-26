const submit = document.querySelector('#submit')
const login = document.querySelector('#login')
const password = document.querySelector('#password')
console.log(submit,login,password);

const users = [
    {
        user:'Firdaw',
        password: '12345'
    },
    {
        user:'Jacky',
        password: '9876'
    },
    {
        user:'Rack',
        password: '2345'
    }
]
console.log(users);
submit.addEventListener('click',()=>{
    let trueuser = false
   
    users.find((item)=>{
        if(login.value === item.user && password.value === item.password){
            return trueuser = true
        }
 

    })
    if(trueuser===true){
        alert("Success")
    }else{
        alert('false')
    }
    
})