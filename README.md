# FPAWIP Grid

## Future Proof Always Work In Progress Grid

This repository contains the grid I’ve developed until now.
I’m still developing the grid and I add new features and fixes every project I develop with this grid.

You can use it, it’s solid and production ready, and if you run in any problem let me know opening an issue.
I’ll do my best to help.

### Technicalities

The grid is built with a Flexbox-first, desktop-first, approach and then with a inline-block fallback for non-modern browsers.
Tested on modern browsers and IE8+. Everything worked fine so far since 2012.

### Size

The generated css varies in size between 3.77KB and 9.68KB according to the settings.
See the `flags` section in the `.grid.scss` file.

### Dependencies

This grid has no dependencies.
It optionally uses the ZeroSpace Font to remove white spaces between inline-block elements, see https://github.com/marcolago/ZeroSpace-Font for more info.

### Use 

No REAL instructions here for now, sorry.
I will write down full instructions one day. I promise!

**But you could check the [example page](https://marcolago.github.io/FPAWIP-Grid/examples/) to look at the code and the effects.**

The grid is neither desktop-first nor mobile-first.
Every size class works only for the specifed breakpoint.
Feel free to develop as you prefer, but mind that if you want to support IE8 (and other browsers with no responsive support) you should ever set the `large--` classes to define the layout (requires a `.no-opacity` or `.lte-ie-8` class on a root parent).
