fetch("https://random-word-api.vercel.app/api?words=1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));