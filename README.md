# B-Side-Collective

## Overview

An online marketplace where users can buy and sell vinyl records. Users can browse through a collection of albums. Users can create an account to register their own albums for sale.

## Logo

```
                      <>
        .-"""-.       ||::::::==========
       /= ___  \      ||::::::==========
      |- /~~~\  |     ||::::::==========
      |=( '.' ) |     ||================
      \__\_=_/__/     ||======Spicy=====
       {_______}      ||================
     /` *       `'--._||
    /= .     [] .     { >
   /  /|ooo     |`'--'||
  (   )\_______/      ||
   \``\/       \      ||
    `-| ==    \_|     ||
      /         |     ||
     |=   >\  __/     ||
     \   \ |- --|     ||
      \ __| \___/     ||
 jgs  _{__} _{__}     ||
     (    )(    )     ||
 ^^~  `"""  `"""  ~^^^~^^~~~^^^~^^^~^^^~^^~^
```

## Schema

```js
const Album = new Schema(
  {
    album: { type: String, required: true },
    artist: { type: String, required: true },
    release_date: { type: Number, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    genre: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const User = new Schema(
  {
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
);
```

## Figma

[Figma](https://www.figma.com/file/FNwcmg8zPFwMtm5vyOwIjW/B-Side-Collective?node-id=0%3A1)

## Whimsical

[Whimsical](https://whimsical.com/b-side-collective-project-WPFEXSHpq4hhU3JVhkz3L8)

## Team Expectations

[Expectations](https://docs.google.com/document/d/1qlzS-lRrUwBAwI8beWR9QkYfYXrUnc1lBDsXenOJqQw/edit?usp=sharing)

## Projects Board

[Projects-Board](https://github.com/navedrahim/b-side-collective/projects/1)

## Post MVP

- Search bar/function
- Shopping Cart
- Sorting of albums
- Ownership of album
