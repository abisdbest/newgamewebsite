const { Theme } = w96.ui;

/**
 * Shows the shutdown screen.
 */
function show() {
    const logonContainer = document.createElement('div');
    logonContainer.classList.add('logon-container', 'sysfont');
    
    logonContainer.innerHTML = `
        <div class="top"></div>
        <div class="middle">
            <div class="box">
                <div class="image"></div>
                <div class="text">Windows is shutting down...</div>
            </div>
        </div>
        <div class="bottom"></div>
    `;

    document.body.appendChild(logonContainer);

    // Play log off sound
    Theme.playSound("shutdown");

    setTimeout(()=> {
        w96.sys.shutdown();
    }, 3000);
}

module.exports = {
    show
}