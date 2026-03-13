import { defineStore } from 'pinia'

export const usePaymentStore = defineStore('payment', {

state: () => ({
payments: JSON.parse(localStorage.getItem('payments')) || []
}),

actions: {

pay(user, taxes){

const record = {
user: user.name,
taxes: taxes,
date: new Date().toLocaleDateString()
}

this.payments.push(record)

localStorage.setItem('payments', JSON.stringify(this.payments))

}

}

})