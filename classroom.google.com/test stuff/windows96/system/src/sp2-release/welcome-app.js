/*
* Windows 96 SP2 RunOnce application.
*
* Copyright (C) Windows 96 Team 2022.
*/

const LOCK_PATH = 'c:/user/appdata/sp2.lock';
const LOCK_EXISTS = w96.FS.exists(LOCK_PATH);

if(!LOCK_EXISTS)
	w96.ui.Theme.registeredThemes[w96.ui.Theme.currentTheme].sounds.start = null;

class WelcomeApp extends w96.WApplication {
	constructor() {
		super();
	}

	async main(argv) {
		super.main(argv);

		if(!LOCK_EXISTS)
			w96.FS.writestr(LOCK_PATH, '1');

		this.audio = new Audio('/system/src/sp2-release/welcome.mp3');
		this.audio.play();

		const params = new w96.WindowParams();

		params.initialWidth = 560;
		params.initialHeight = 420;
		params.title = "SP2 Upgrade Complete";

		// Create a new window with parameters and set it as an application window.
		this.wnd = this.createWindow(params, true);

		// Register our window and taskbar item
		this.wnd.registerWindow();
		this.wnd.registerAppBar();

		// Set the contents
		// Create body reference for easy access
		const body = this.wnd.getBodyContainer();

		// Add a CSS class
		// It will not be styled here.
		this.wnd.wndObject.classList.add("sp2-welc-app-win");
		body.classList.add("sp2-welc-app");
		await w96.sys.loader.loadStyleAsync('/system/src/sp2-release/app.css')


		// Use innerHTML to set contents.
		// maybe we should not use br so much lol
		body.innerHTML = `
			<div class="top">
				<div class="trophy"></div>
				<div class="title">
					<h2>SP2 Upgrade Complete</h2>
				</div>
			</div>

			<div class="content">
				<div class="l">
					<span class="bold-noaa">Wowza! Windows 96 has upgraded to SP2!</span>
					<br>
					<br>
					Over the last month, we've been hard at work to bring you an amazing new update.<br>
					Windows 96 Service Pack Two brings you many improvements to features brought in by SP1, as well as new features and apps!<br>
					<br>
					Check out the changelog below for more information about this awesome update. Or if you don't want to, check the Start menu for anything new.<br>
					Some of the highlights include a brand new Windows 7 aero theme, more developer tools, a new Control Panel, improved APIs,
					and tons more tiny bug fixes.
					<br>
					<br>
					You can also close this window to continue using Windows 96 as normal. Note that it will not appear again once its closed.
					<br>
					<br>
					<br>
					<br>
					<a class="w96-button clbtn">Changelog</a>
					<button class="w96-button exitbtn">Continue to Windows 96</button>
				</div>
				<div class="r">
					<span class="bold-noaa">
						More Stuff
					</span>
					<a class="w96-button" target="_blank" href="https://github.com/windows-96">GitHub</a>
					<a class="w96-button" target="_blank" href="https://discord.gg/rGyNWA2jWn">Discord</a>
				</div>
			</div>`;

		// Show and center the window.
		this.wnd.show();
		this.wnd.center();

		// Assign some events

		body.querySelector(".exitbtn").addEventListener('click', ()=>{
			this.wnd.close();
		});

		body.querySelector(".clbtn").addEventListener('click', ()=>{
			const cWnd = this.createWindow({
				body: `
					<article class="text" style="background: white">Fetching...</article>
					<div class="buttons">
						<button class="w96-button ok">OK</button>
					</div>
				`,
				bodyClass: "sp2-welc-app-cldlg",
				center: true,
				title: "Update Changelog",
				resizable: false,
				initialWidth: 600,
				initialHeight: 350,
				controlBoxStyle: "WS_CBX_CLOSE"
			}, false);

			const cWndBody = cWnd.getBodyContainer();

			cWndBody.querySelector('.w96-button.ok').addEventListener('click', ()=>{
				cWnd.close();
			});

			cWnd.show();

			w96.FS.readstr("W:/system/src/sp2-release/CHANGELOG.md").then(d=>{
				var converter = new showdown.Converter();
				cWndBody.querySelector('.text').innerHTML = converter.makeHtml(d);
			});
		});
	}

	ontermination() {
		this.audio.pause();
		this.audio = null;
	}
}

registerApp("sp2-welcome", [], function(args) {
	return w96.WApplication.execAsync(new WelcomeApp(), args);
});
