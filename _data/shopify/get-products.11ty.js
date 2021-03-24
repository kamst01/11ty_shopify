const user = process.env.SIFYUSER;
const domain = process.env.SIFYDOMAIN;
const token = process.env.SIFYKEY;
module.exports = async function() {
    fetch(`https://${user}:${token}@${domain}/admin/api/2021-01/products.json`, {
        method: 'GET',
        body: JSON.stringify(),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(json => console.log(json));
}