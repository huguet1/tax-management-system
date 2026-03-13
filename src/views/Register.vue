<script setup>

import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router=useRouter()
const auth=useAuthStore()

const role=ref('taxpayer')
const name=ref('')
const email=ref('')
const tin=ref('')
const password=ref('')

function register(){

auth.register({

name:name.value,
email:email.value,
tin:tin.value,
password:password.value,
role:role.value

})

router.push('/login')

}

</script>

<template>

<div class="auth-container">

<div class="auth-card">

<h2>Register</h2>

<select v-model="role">
<option value="admin">Admin</option>
<option value="taxpayer">Taxpayer</option>
</select>

<input v-if="role==='admin'" placeholder="Email" v-model="email">

<input v-if="role==='taxpayer'" placeholder="TIN" v-model="tin">

<input placeholder="Name" v-model="name">

<input type="password" placeholder="Password" v-model="password">

<button @click="register">Register</button>

</div>

</div>

</template>