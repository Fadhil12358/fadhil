async function checkInbox() {
    const email = document.getElementById("email").textContent;
    const response = await fetch(`https://api.cloudflare.com/client/v4/...`, {
        headers: { "Authorization": "Bearer YOUR_API_KEY" }
    });
    const data = await response.json();
    console.log(data);
}