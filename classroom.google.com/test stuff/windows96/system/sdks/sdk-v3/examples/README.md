# Windows 96 version 3.1 SDK examples

This folder contains SDK examples for Windows 96 SDK V3.1.

All examples have their code unminified and can be ran directly as bins when double clicking.

## Building

Currently, the development tools are very rough, we recommend you to simply minify the code. Make sure the WRT header (//!wrt ...) is present at the top of the file after minification!

## About .wrt files

The .wrt extension denotes that the file is executable. Most apps, however, do not need this extension, since the WRT header is read and parsed. Using the .wrt extension was needed since W:/ is not capable of peeking files.