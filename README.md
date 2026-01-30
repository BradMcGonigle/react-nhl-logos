# React NHL Logos

![npm](https://img.shields.io/npm/v/react-nhl-logos)

> React components for NHL team logos

![National Hockey League Logos](https://user-images.githubusercontent.com/115338/62236549-4cb9e780-b39d-11e9-9562-a7173ec08c68.jpg)

## Install

```shell
npm install react-nhl-logos
```

## Usage

```tsx
import { DET } from "react-nhl-logos";

const Example = () => {
  return <DET />; // Loads the Detroit Red Wings logo
};

export default Example;
```

or include all logos

```tsx
import * as NHLLogos from "react-nhl-logos";

const Example = () => {
  return <NHLLogos.DET />; // Loads the Detroit Red Wings logo
};

export default Example;
```

## Configuration

Size can be easily configured (Default of 100px)

```tsx
import { DET } from "react-nhl-logos";

const Example = () => {
  return (
    <div>
      <DET size={60} />
      <DET /> {/* Default of 100px */}
      <DET size={140} />
    </div>
  );
};

export default Example;
```

Results in

<img width="406" alt="Detroit Red Wings" src="https://user-images.githubusercontent.com/115338/62148533-e1eaac80-b2c7-11e9-98e3-aab73b0e7885.png">

## TypeScript

This package includes TypeScript definitions. The `LogoProps` type is exported for use in your projects:

```tsx
import type { LogoProps } from "react-nhl-logos";
```

## Available Teams

All 32 NHL teams are supported, plus the NHL league logo:

| Team | Code | Team | Code |
|------|------|------|------|
| Anaheim Ducks | `ANA` | New Jersey Devils | `NJD` |
| Arizona Coyotes | `ARI` | Nashville Predators | `NSH` |
| Boston Bruins | `BOS` | New York Islanders | `NYI` |
| Buffalo Sabres | `BUF` | New York Rangers | `NYR` |
| Carolina Hurricanes | `CAR` | Ottawa Senators | `OTT` |
| Columbus Blue Jackets | `CBJ` | Philadelphia Flyers | `PHI` |
| Calgary Flames | `CGY` | Pittsburgh Penguins | `PIT` |
| Chicago Blackhawks | `CHI` | Seattle Kraken | `SEA` |
| Colorado Avalanche | `COL` | San Jose Sharks | `SJS` |
| Dallas Stars | `DAL` | St. Louis Blues | `STL` |
| Detroit Red Wings | `DET` | Tampa Bay Lightning | `TBL` |
| Edmonton Oilers | `EDM` | Toronto Maple Leafs | `TOR` |
| Florida Panthers | `FLA` | Utah Mammoth | `UTA` |
| Los Angeles Kings | `LAK` | Vancouver Canucks | `VAN` |
| Minnesota Wild | `MIN` | Vegas Golden Knights | `VGK` |
| Montréal Canadiens | `MTL` | Winnipeg Jets | `WPG` |
| NHL Logo | `NHL` | Washington Capitals | `WSH` |

## Credits

React NHL Logos was inspired by [React NBA Logos](https://github.com/ChrisKatsaras/react-nba-logos) by [Christopher Katsaras](https://github.com/ChrisKatsaras)

## Copyrights

NHL and the NHL Shield are registered trademarks of the National Hockey League. All NHL logos and marks and NHL team logos and marks depicted herein are the property of the NHL and the respective teams and may not be reproduced without the prior written consent of NHL Enterprises, L.P. © NHL. All Rights Reserved.
