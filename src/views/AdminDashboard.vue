<script setup>

import Sidebar from '@/components/Sidebar.vue'
import DashboardCard from '@/components/DashboardCard.vue'
import { ref, computed } from 'vue'
import { useTaxStore } from '@/stores/tax'
import { useAuthStore } from '@/stores/auth'
import { usePaymentStore } from '@/stores/payment'

const taxStore = useTaxStore()
const auth = useAuthStore()
const paymentStore = usePaymentStore()

const taxName = ref('')
const amount = ref('')

function addTax() {

taxStore.addTax({
  name: taxName.value,
  amount: amount.value
})

taxName.value=''
amount.value=''

}

const taxpayers = computed(() => {
  return auth.users.filter(u => u.role === 'taxpayer')
})

function hasPaid(name) {
  return paymentStore.payments.some(p => p.user === name)
}

</script>
<template>

<div class="layout">

<Sidebar/>

<div class="content">

<h1>Admin Dashboard</h1>

<div class="cards">

<DashboardCard title="Total Taxes" :value="taxStore.taxes.length"/>

</div>

<h2>Create Tax</h2>

<input placeholder="Tax Name" v-model="taxName">
<input placeholder="Amount" v-model="amount">

<button @click="addTax">Add Tax</button>

<h2>Taxes</h2>

<table>

<tr>
<th>Name</th>
<th>Amount</th>
</tr>

<tr v-for="t in taxStore.taxes">
<td>{{t.name}}</td>
<td>{{t.amount}}</td>
</tr>

</table>
<h2>Taxpayers</h2>

<table>

<tr>
<th>Name</th>
<th>TIN</th>
<th>Status</th>
</tr>

<tr v-for="t in taxpayers" :key="t.tin">

<td>{{t.name}}</td>
<td>{{t.tin}}</td>

<td>
<span v-if="hasPaid(t.name)">Paid</span>
<span v-else>Not Paid</span>
</td>

</tr>

</table>

</div>

</div>

</template>