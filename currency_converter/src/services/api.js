 string = "fca_live_mny47Rjms5CVRwVkmjTwmfTapeDWW3RKS9EVbgna"

 import currencyapi from '@everapi/currencyapi-js'

const client = new currencyapi(string)
client.historical({
    date: '01-01-2021'
}).then(response => {
    console.log(response)
});
