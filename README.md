# Clock

This is a Next.js project bootstrapped with create-next-app and TypeScript.

The only thing it does is show the current time in hours, minutes, seconds and milliseconds.

Why? Because the default clock on my phone looks ugly.

<br>

## Getting Started

```bash
git clone https://github.com/Fx64b/clock.git
cd clock
```

This project uses [pnpm](https://pnpm.io/installation) as a package manager but you can also just use npm.

```bash
pnpm i
```

Development
```bash
pnpm dev
```

Build
```bash
pnpm build
```
<br>

**Build mobile app**
```bash
pnpm build
pnpm next export
pnpm cap sync
pnpm cap open android
pnpm cap open ios
```

<br>

## Todo
- [x] Add support for ios
- [ ] Improve text size
- [ ] Create better todo list
