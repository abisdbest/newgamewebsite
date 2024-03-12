# Windows 96 Version 3.0
## Update Changelog // 28/07/2022

&zwnj;

We know, it's been a substantial amount of time since the last update ...

But we bring to you today lots of changes, both internal and external, to truly make this the most advanced WebOS out there.

&zwnj;

### + General QoL updates
  - 9x style vastly improved. Put a Windows 98 screenshot next to Windows 96, we dare you! 

### + Apps In FS
  - All apps are now inside of your root filesystem!
  - $BSPEC format specifies application properties
  - Apps can be edited and loaded on the fly
  - No longer in the kernel bundle - faster load times!

### + New Terminal Application
  - Now XTerm compatible
  - Works with all kinds of ANSI codes
  - Full command set integrated from previous releases
  - Can execute local applications
  - Full API available

### + SCM (System Config Manager)
  - Complete new API for storing application configuration (no more JSON files!)
  - Works similarly to the Registry
  - System Config Manager application allows you to edit parameters
  - ``scmc`` command-line tool allows modifications

### + Completely new shell
  - While it may look similar, the desktop is now finally a file view, just like Explorer!
  - You can now select multiple icons and drag them from any location to any location!

### + NoTRON Scanner
  - The NoTRON AV Scanner works now
  - Open the NoTRON AV application and click on Scan to proceed.
  - If you discover malware, tell us on our Discord! We'll add it to the NoTRON malware database. 

### + File management improvements
  - New prompts and progress bars when deleting, copying & moving files/folders
  - Renaming now directly in File Explorer
  - Explorer now has a toolbar!

### + BoxedWine
  - Is now built in to Windows 96!
  - Can select multiple versions and compatibility is improved.

### + Automatic ZIP mounter
  - Double click on a ZIP file to mount it as a virtual Disk within Windows 96!

### + WMBox Runner
  - WMBox is the new virtualization solution for Windows 96
  - Full UI is not available yet, however WMX files are able to be run
  - For more examples, check out the PkMgr package "WMBox Sample VMs"

### + Linux (BETA)
  - Now runs in the command-line.
  - Full filesystem now residing in Windows 96
  - Please note, this application is in BETA, some bugs are still to be worked out.

### + Service Worker for Filesystem access
  - Accessible via the ``/_/`` path
  - For example, for the C:/ drive, it's ``/_/C/``
  - Or, for cat.jpg, it's ``/_/C/user/documents/cat.jpg``

### + SuperTerm
  - A terminal designed for P3 communication via the RTOP protocol
  - Much simpler and lighter weight than the full blown XTerm terminal.

### + PDF Reader
  - It reads PDFs. What else did you expect?!

### + Out Of Box Experience
  - Can be triggered with ALT+O on startup.
  - Setup wizard allows you to download either Lite or Full root images

### + Full Disk Encryption
  - That's right, you can now encrypt your Windows 96 disk.
  - Prompts for password on startup
  - Can be enabled via Control Panel -> Disk Encryption
  - If the password is forgotten, it's completely unrecoverable!

### + WEX (W96 C/C++ API)
  - New C/C++ bindings for use with Emscripten, very rudimentary at the moment, only basic terminal apps
  - More updates coming soon!

### + OSX Snow Leopard Icon Theme
  - Stay tuned, full theme coming soon

### + New Wiki
  - Wiki is now based on MediaWiki, anyone can edit it!
  - Check it out <a target="_blank" href="https://w96.wiki">here</a>!

### + Task Manager
  - Kill misbehaving apps with ease
  - Performance panel coming soon!

### + Media Player
  - Replaces the old "Video Player"
  - Completely redone from scratch

### + 3D Pinball - Space Cadet
  - No further explanation needed, I think.

### + Version Browser
  - Go back in time to older Windows 96 versions!
  - Replaces older "VM" app

### + InternetE
  - The new generation of Internet Exploder!
  - Rebuilt from the ground up to be more authentic and less buggy!

### + Filesystem API improvements
  - The filesystem is now fully asynchronous. This makes networked filesystems much easier to implement!

### + P3FS
  - A functional network filesystem over P3!

### - The Aero theme
  - This theme was becoming unmaintainable, we put it on the shelf to explore another time.

### - Tons of Bugs
  - Do you think no bugs were fixed this whole time?

We hope you'll enjoy this update, we put a lot of hard work into it. - stay tuned, we're not done yet!