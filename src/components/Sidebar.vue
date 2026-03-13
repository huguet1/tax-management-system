<script setup>

import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router=useRouter()
const auth=useAuthStore()

function logout(){

auth.logout()
router.push('/login')

}

</script>

<template>

<div class="sidebar">

<h2>Tax System</h2>

<button @click="$router.push('/')">Home</button>

<button @click="logout">Sign Out</button>

</div>

</template>