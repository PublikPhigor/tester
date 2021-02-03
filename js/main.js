const navBtn = document.querySelector('.burger');
const navbar = document.querySelector('.mobile-navbar');
const overlay = document.querySelector('.overlay');

navBtn.addEventListener('click', ()=> {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    navBtn.classList.toggle('active');
});

let i = 0;
const blogCont = document.querySelector('.blog-cont');
const posts = document.querySelectorAll('.xtra-post');
const footer = document.querySelector('footer').offsetHeight;

blogCont.onscroll = ()=> {
    if (blogCont.scrollTop === post[0].offsetHeight * 5 ){
        posts.forEach(post => {
            post.classList.remove('d-none');
            console.log('works');
        });
    } else {
        posts.forEach(post => {
            post.classList.add('d-none');
        });
    }
};

// const showPosts = (extraPosts, posts)=> {
//     if (document.body.scrollTop > posts[0].offsetHeight * 5 + lp.offsetHeight){
//         for(i = 0; i >= 5; i++) {
//             posts[i].style.display = "block";
//         }
//     }
// };