**Copy Path** copies the absolute or relative path of the current file, optionally including the line number and
column number.

For example, a relative path with line and column numbers would look like:

    my-project/dir1/dir2/file.txt:5:22

It can also create a "nova://" URL with an absolute path and optionally a line and column number:

    nova://open?path=/Users/me/my-project/dir1/dir2/file.txt?line=5:22

## Usage

To run Copy Path:

- Select the **Editor → Copy Path** menu item and choose one of the submenu items; or
- Open the command palette and type `Copy Absoulte Path` or `Copy Relative Path`

### Configuration

Assign a keyboard shortcut to one or more of the commands in Nova’s settings. The author uses
`mash-p` (`cmd-opt-ctrl-p`) for "Copy Relative Path with Line Number".

## Other Nova extensions you might like :)

Here is a [list of my other Nova extensions](https://eahanson.com/articles/nova-extensions).

## License, Copyright, Attributions

Copyright 2023 Erik Hanson. See [LICENSE](https://github.com/eahanson/copy-path.novaextension/blob/main/LICENSE).
