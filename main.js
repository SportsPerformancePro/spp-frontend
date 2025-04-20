document.getElementById('upload-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const sport = document.getElementById('sport').value;
    const videos = document.getElementById('videos').files;
    const prompt = document.getElementById('prompt').value;
    const formData = new FormData();
    formData.append('sport', sport);
    formData.append('prompt', prompt);
    for (let i = 0; i < videos.length; i++) {
        formData.append('videos', videos[i]);
    }

    try {
        const response = await fetch('https://web-production-0f9b2.up.railway.app/analyze', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        document.getElementById('response').textContent = JSON.stringify(data, null, 2);
    } catch (err) {
        document.getElementById('response').textContent = 'Error contacting server.';
    }
});