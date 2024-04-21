
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

# Creating applications

That's not something most of you will need but here's how to create/modify applications :

first, create a component in `./apps/` (file name must be app name) :
```bash
$ mkdir ./apps/{my_app}/ && touch ./apps/{my_app}/index.tsx
```

> /!\ App name must be in lowercase and spaced with underscores, like "app_name".

Next, create your component.

Finally, add your app name in the list `applications=` in `./configs/config.cfg`.

```cfg
applications=["Settings", "File_Explorer", "{My_App_Name}"]
```

> There's a lot of hooks and server side things you can use in your app.

> TODO : make a tutorial.

# Known bugs

Here's a list of known bugs

- None, I don't know if I should be happy or worried about that.
