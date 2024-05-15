const btnMarkAllRead = document.querySelector('.mark-all');
const unreadPosts = document.querySelectorAll('.post.unread');

btnMarkAllRead.addEventListener('click', () => {
    unreadPosts.forEach(post => {
        post.classList.remove('unread');
    })
})