<script setup>

import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth=useAuthStore()
const router=useRouter()

const id=ref('')
const password=ref('')

function login(){

const user=auth.login(id.value,password.value)

if(user){

if(user.role==='admin')
router.push('/admin')
else
router.push('/taxpayer')

}

}

</script>

<template>

<div class="auth-container">

<div class="auth-card">

<h2>Login</h2>

<input placeholder="Email or TIN" v-model="id">

<input type="password" placeholder="Password" v-model="password">

<button @click="login">Login</button>

</div>

</div>

</template>