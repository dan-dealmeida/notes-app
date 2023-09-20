# notes-app
**README.md**

## Notes App

This is a simple command-line notes app. It can be used to add, remove, list, and read notes.

## Usage

To use the notes app, simply run the following command:

```
node notes.js <command>
```

where `<command>` is one of the following:

* `add`: Add a new note.
* `remove`: Remove a note.
* `list`: List all notes.
* `read`: Read a note.

### Add Command

To add a new note, run the following command:

```
node notes.js add --title <title> --body <body>
```

where `<title>` is the title of the note and `<body>` is the body of the note.

### Remove Command

To remove a note, run the following command:

```
node notes.js remove --title <title>
```

where `<title>` is the title of the note to remove.

### List Command

To list all notes, run the following command:

```
node notes.js list
```

### Read Command

To read a note, run the following command:

```
node notes.js read --title <title>
```

where `<title>` is the title of the note to read.


### Edit Command

To edit a note, run the following command:

```
node notes.js edit --title <title>
```

where `<title>` is the title of the note to edit.

## Example

The following example shows how to use the notes app to edit a note:

```
# Edit a note
node notes.js edit --title "My first note"


## Example

The following example shows how to use the notes app to add a new note, list all notes, and read a note:

```
# Add a new note
node notes.js add --title "My first note" --body "This is the body of my first note."

# List all notes
node notes.js list

# Read a note
node notes.js read --title "My first note"
```

