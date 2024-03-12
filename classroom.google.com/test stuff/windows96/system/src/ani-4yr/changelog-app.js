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

        await w96.sys.loader.loadStyleAsync('/system/src/ani-4yr/app.css')

        const cWnd = this.createWindow({
            body: `
                    <div class="header"></div>
					<article class="text" style="background: white">Fetching...</article>
					<div class="buttons">
						<button class="w96-button ok">OK</button>
					</div>
				`,
            bodyClass: "ani4-welc-app-cldlg",
            center: true,
            title: "V3.1 Update Changelog",
            initialWidth: 600,
            initialHeight: 380
        }, true);

        const cWndBody = cWnd.getBodyContainer();

        cWndBody.querySelector('.w96-button.ok').addEventListener('click', () => {
            cWnd.close();
        });

        cWnd.show();

        w96.FS.readstr("W:/system/src/ani-4yr/changelog.md").then(d => {
            var converter = new showdown.Converter();
            cWndBody.querySelector('.text').innerHTML = converter.makeHtml(d);
        });
    }
}

w96.app.register({
    command: "ani4yr-changelog",
    filters: [],
    cls: ChangelogApp
});
