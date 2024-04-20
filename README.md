
# WebServ (temporary name)

Webserv is a server manager tool that allows you to access your server from anywhere.
It also allows you to use a GUI without the need of Xorg/Wayland and any WM.

# Getting started

First you'll need to generate your personal tokens, simply type :
```bash
$ npm run gensecrets
```

Start the genconfig.sh file :
```bash
$ sudo sh genconfig.sh
```

Add the permitted users to the webserv group :
```bash
$ sudo usermod -aG winserv {myuser}
```
> replace {myuser} with an actual user.

You can now start the program with :
```bash
$ npm run dev
```

# Known bugs

Here's a list of known bugs

- Wallpapers list can be empty for some reason and you'll need to manually change `wallpaper=undefined` to `wallpaper=` in `configs/config.cfg` if you try to change wallpapers in the login page.
- Current wallpaper can be empty too but you just need to refresh.
