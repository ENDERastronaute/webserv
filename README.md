
# WebServ (temporary name)

Webserv is a server manager tool that allows you to access your server from anywhere.
It also allows you to use a GUI without the need of any display server.

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

# Todo

1. Add draggable/put down component (files)
2. Add a tutorial
3. Optimize menus ?
4. Add customizable styles

# Known bugs

Here's a list of known bugs

- Sometimes display can bug and apps may need a refresh to be closed.
- Terminal doesn't work.
