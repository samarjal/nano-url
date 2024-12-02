async function shortenUrl() {
    const originalUrl = document.getElementById("originalUrl").value;
    const shortenedUrlElement = document.getElementById("shortenedUrl");

    shortenedUrlElement.innerText = "Shortening URL...";

    try {
        const response = await fetch('http://127.0.0.1:5000/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: originalUrl })
        });

        console.log('Response status:', response.status); 

        if (response.ok) {
            const data = await response.json();

            console.log('Data received:', data);
            
            shortenedUrlElement.innerText = `Shortened URL: ${data.shortened_url}`;
        } else {
            shortenedUrlElement.innerText = "Error: Unable to shorten URL.";
        }
    } catch (error) {
        shortenedUrlElement.innerText = "Error: Unable to shorten URL.";
        console.error('Fetch error:', error);
    }
}
