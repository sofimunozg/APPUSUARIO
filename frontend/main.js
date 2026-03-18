const btn=document.getElementsById('btn');
const nameInput = document.getElementsById('name');
const msg = document.getElementsById('msg');
btn.addEventListener('click', async() => {
    const name = nameInput.value;
    const res = await fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{'Content-Type': 'aplication/json'},
        body: JSON.stringify({ name })
    });
    const data = await res.json();
    msg.texContent = data.message;
})