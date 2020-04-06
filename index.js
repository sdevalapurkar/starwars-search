function getStarted() {
    const location = window.location.pathname;
    let newpath = location.slice(0, -10);
    newpath += "html/login.html";
    window.location.href = newpath;
}
