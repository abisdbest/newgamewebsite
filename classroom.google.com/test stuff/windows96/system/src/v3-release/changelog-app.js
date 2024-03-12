/*
* Windows 96 v3 RunOnce application.
*
* Copyright (C) Windows 96 Team 2022.
*/

class ChangelogApp extends w96.WApplication {
    constructor() {
        super();
    }

    async main(argv) {
        super.main(argv);

        await w96.sys.loader.loadStyleAsync('/system/src/v3-release/app.css')

        const cWnd = this.createWindow({
            body: `
					<article class="text" style="background: white">Fetching...</article>
					<div class="buttons">
						<button class="w96-button ok">OK</button>
					</div>
				`,
            bodyClass: "v3-welc-app-cldlg",
            center: true,
            title: "V3 Update Changelog",
            resizable: false,
            initialWidth: 600,
            initialHeight: 350,
            controlBoxStyle: "WS_CBX_CLOSE"
        }, true);

        const cWndBody = cWnd.getBodyContainer();

        cWndBody.querySelector('.w96-button.ok').addEventListener('click', () => {
            cWnd.close();
        });

        cWnd.show();

        w96.FS.readstr("W:/system/src/v3-release/changelog.md").then(d => {
            var converter = new showdown.Converter();
            cWndBody.querySelector('.text').innerHTML = converter.makeHtml(d);
        });
    }
}

w96.app.register({
    command: "v3-changelog",
    filters: [],
    cls: ChangelogApp
});
