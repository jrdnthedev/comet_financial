export default function changeToCurrency (amount: number){
    return '$' + amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}