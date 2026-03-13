import { defineStore } from 'pinia'

export const useTaxStore = defineStore('tax',{

state:()=>({

taxes:[
{name:'Income Tax',amount:20000},
{name:'Property Tax',amount:150000}
]

}),

actions:{

addTax(tax){
this.taxes.push(tax)
}

}

})