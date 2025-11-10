// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#222';
        nav.style.padding = '0.5rem 0';
    } else {
        nav.style.backgroundColor = '#333';
        nav.style.padding = '1rem 0';
    }
});

// 表单提交
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('留言发送成功！我会尽快回复你。');
    this.reset();
});