Amazon URL shortener
====================

Amazon used to offer short links in their ``share`` link on item pages.  But
they stopped.

So here's a Chrome extension which does this for you.  I'd publish it, but
having experience with publishing Android aps, I'm tired of how Google keep
changing the rules every time you want to make a bugfix.  So I probably won't
bother.

No warranty offered, use at your own risk.

Copyright (c) 2019 alertedsnake

Installation
------------

Git clone this package somewhere, or download the zipfile and unpack it.

Next, in Chrome, navigate chrome://extensions/ and turn on ``Developer mode``.

Use the ``Load unpacked`` button to install the extension by providing the
directory with the unpacked extension, this is the directory which *contains*
``manifest.json``, most likely named ``amzn-shrtnr``.

Adjust these instructions as needed - the extension directory may end up buried
in a subdirectory somewhere due to the unzipping process.

Usage
-----

Go to an amazon product page and click the extension's icon.  That's it.
