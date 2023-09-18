//all the buttons for create and delete

const newPost = async (event) => {//creates a new post
    event.preventDefault();

    const title = document.querySelector('#newPost').value;
    const content = document.querySelector('#blogPost').value;

    if (title && content) {
        const response = await fetch('/api/blog/', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to write blog post');
        }
    }
}
const profile = document.querySelector('.newPost');
profile.addEventListener('submit', newPost);