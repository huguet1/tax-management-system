<script setup>

import Sidebar from '@/components/Sidebar.vue'
import { ref, computed } from 'vue'
import { useTaxStore } from '@/stores/tax'
import { useAuthStore } from '@/stores/auth'
import { usePaymentStore } from '@/stores/payment'

const taxStore = useTaxStore()
const auth = useAuthStore()
const paymentStore = usePaymentStore()

const selected = ref([])

const total = computed(() => {
  return selected.value.reduce((sum, t) => sum + Number(t.amount), 0)
})

function pay() {

  paymentStore.pay(auth.currentUser, selected.value)

  selected.value = []

  alert("Payment Successful")

}

</script>

<template>

<div class="layout">

<Sidebar/>

<div class="content">

<h1>Taxpayer Dashboard</h1>

<h2>Select Taxes</h2>

<div v-for="t in taxStore.taxes">

<label>

<input type="checkbox" :value="t" v-model="selected">

{{t.name}} - {{t.amount}}

</label>

</div>

<h3>Total: {{total}}</h3>

<button @click="pay">Pay</button>

</div>

</div>

</template>