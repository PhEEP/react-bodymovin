# react-bodymovin

Forks the fork from [@thefoxjob][] to get the full version of `bodymovin` by default and avoid messing with webpack. This hopefully means that usage in `create-react-app` will be smoother.

A very simple [React][] wrapper for the awesome [bodymovin][] library.

Does the bare minimum to embed an animation within a React application at the moment. If more things are required they can be added later. I assume you're going to build your application with webpack (this may be a bad assumption, if so, sorry), so the library isn't compiled ahead of time. I do run it through babel, but I don't flatten the require statements down or minify since you may want to do something funky there.

## Installation

```bash
npm install --save react-bodymovin
```

## Usage

```js
import React from "react";
import ReactBodymovin from "react-bodymovin";
import animation from "./animation.json";

const App = () => {
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  };

  return (
    <div>
      <ReactBodymovin options={bodymovinOptions} />
    </div>
  );
};

export default App;
```

## File size

Bodymovin is pretty huge, sadly, so you may want to load this dependency optionally somehow if you don't need it on every page. By default this will use the full version.

[react]: https://facebook.github.io/react/
[bodymovin]: https://github.com/bodymovin/bodymovin
[@thefoxjob]: https://github.com/thefoxjob/react-bodymovin
