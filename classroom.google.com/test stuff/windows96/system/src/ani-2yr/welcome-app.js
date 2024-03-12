/*
* Windows 96 SP1 2-year Anniversary app.
*
* Copyright (C) Windows 96 Team 2022.
*/

class AnniversaryApp extends w96.WApplication {
	constructor() {
		super();
	}

	main(argv) {
		super.main(argv);

		const params = new w96.WindowParams();

		params.initialWidth = 560;
		params.initialHeight = 420;
		params.title = "SP1 Upgrade Complete";

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
		body.classList.add("sp1-welc-app");
		w96.ui.Theme.cssl("/system/src/ani-2yr/app.css");

		// Use innerHTML to set contents.
		body.innerHTML = `
			<div class="top">
				<div class="trophy"></div>
				<div class="title">
					SP1 Upgrade Complete
				</div>
			</div>

			<div class="content">
				<div class="l">
					<span class="bold-noaa">Windows 96 has upgraded to SP1!</span>
					<br>
					<br>
					Thank you for all the support in the last 2 years that we've been alive!<br>
					<br>
					It's been a great run, and we hope to produce more content for you as long as we exist.<br>
					<br>
					You can check the sidebar to learn about the new changes in this very special anniversary update!
					<br>
					<br>
					You can also close this window to continue using Windows 96 as normal. Note that it will not appear again once its closed.
					<br>
					<br>
					<br>
					<button class="w96-button exitbtn">Continue to Windows 96</button>
				</div>
				<div class="r">
					<span class="bold-noaa">
						Some links here
					</span>
					<a class="w96-button" target="_blank" href="https://github.com/windows-96">GitHub</a>
					<a class="w96-button" target="_blank" href="https://discord.gg/rGyNWA2jWn">Discord</a>
					<a class="w96-button clbtn">Changelog</a>
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
					<textarea class="text w96-textbox" readonly>Fetching...</textarea>
					<div class="buttons">
						<button class="w96-button ok">OK</button>
					</div>
				`,
				bodyClass: "sp1-welc-app-cldlg",
				center: true,
				title: "Update Changelog",
				resizable: false,
				controlBoxStyle: "WS_CBX_CLOSE"
			}, false);

			const cWndBody = cWnd.getBodyContainer();

			cWndBody.querySelector('.w96-button.ok').addEventListener('click', ()=>{
				cWnd.close();
			});

			cWnd.show();

			w96.FS.readstr("W:/system/src/ani-2yr/changelog.txt").then((d)=>{
				cWndBody.querySelector('.text').value = d;
			});
		});
	}
}

registerApp("sp1-welcome", [], function(args) {
	return w96.WApplication.execAsync(new AnniversaryApp(), args);
});
