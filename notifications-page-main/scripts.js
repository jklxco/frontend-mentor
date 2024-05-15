const btnMarkAllRead = document.querySelector('.mark-all');
const unreadPosts = document.querySelectorAll('.post.unread');
const notificationCounter = document.querySelector('.notification-counter');
notificationCounter.textContent = unreadPosts.length;

btnMarkAllRead.addEventListener('click', () => {
    unreadPosts.forEach(post => {
        post.classList.remove('unread');
        notificationCounter.textContent = '0'
    })
})

