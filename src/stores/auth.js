import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {

state: () => ({
users: JSON.parse(localStorage.getItem('users')) || [],
currentUser: JSON.parse(localStorage.getItem('currentUser')) || null
}),

actions: {

register(user) {

this.users.push(user)

localStorage.setItem('users', JSON.stringify(this.users))

},

login(id,password){

const user=this.users.find(u=>
(u.email===id || u.tin===id) && u.password===password
)

if(user){

this.currentUser=user
localStorage.setItem('currentUser', JSON.stringify(user))
return user

}

return null

},

logout(){

this.currentUser=null
localStorage.removeItem('currentUser')

}

}

})