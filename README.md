# React NHL Logos

![npm](https://img.shields.io/npm/v/react-nhl-logos)

> React components for NHL team logos

![National Hockey League Team Logos](https://user-images.githubusercontent.com/115338/62148345-84566000-b2c7-11e9-8eee-4d9652fc1d7e.png)

## Install

```shell
$ npm install react-nhl-logos
```

## Usage

```js
import React from "react";
import { DET } from "react-nhl-logos";

const Example = () => {
  return <DET />; // Loads the Detroit Red Wings logo
};

export default Example;
```

or include all icons

```js
import React from "react";
import * as NHLLogos from "react-nhl-logos";

const Example = () => {
  return <NHLLogos.DET />; // Loads the Detroit Red Wings logo
};

export default Example;
```

## Configuration

Size can be easily configured (Default of 100px)

```js
import React from "react";
import { DET } from "react-nhl-logos";

const Example = () => {
  return (
    <div>
      <DET size={60} />
      <DET /> // Default of 100px
      <DET size={140} />
    </div>
  );
};

export default Example;
```

Results in

<img width="406" alt="Detroit Red Wings" src="https://user-images.githubusercontent.com/115338/62148533-e1eaac80-b2c7-11e9-98e3-aab73b0e7885.png">

## Credits

React NHL Logos was inspired by [React NBA Logos](https://github.com/ChrisKatsaras/react-nba-logos) by [Christopher Katsaras](https://github.com/ChrisKatsaras)

## Copyrights

NHL and the NHL Shield are registered trademarks of the National Hockey League. All NHL logos and marks and NHL team logos and marks depicted herein are the property of the NHL and the respective teams and may not be reproduced without the prior written consent of NHL Enterprises, L.P. © NHL. All Rights Reserved.
