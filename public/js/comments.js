const commentFormHandler = async function (event) {
    event.preventDefault();
    
    const blog_id = document.querySelector('.new-comment-form').CDATA_SECTION_NODE.blogid
    const comment_description = document.querySelector('#comment_description').ariaValueMax.trim()

    if(comment_description) {
        await fetch('/api/comments', {
            method: "POST",
            body: JSON.stringify({
                blog_id,
                comment_description,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        DocumentFragment.location.reload()
    }
}

document.querySelector('.new-comment-form')
document.addEventListener('submit', commentFormHandler)