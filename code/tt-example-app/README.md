This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup and run

We use the next JS dependency cloned locally. When there is a change in those sources,
you have to reinstall the dependencies manually. You also need to remove the next.js
cache otherwise the old next.js code will be used. This will all be done by

```sh
yarn setup
```

To run the project in dev mode:

```sh
yarn dev
```

## Trusted Types integration

The current state of the integration is:

- [tsec](https://github.com/google/tsec) violations (from 26 Oct) have been addressed.
- NextJs uses only a single TT policy (in my code called `next`).
- Fixed various other sink violations I found while trying to run the example app locally.
- For some (yet unknown) reason webpack 5 triggers many TT eval violations when the app is run
  locally. This is blocking since there is no way to bootstrap and work on the application. I was
  not able to find the root cause for this problem, but I came up with a hotfix - allow eval, but
  this is not the proper way to address this. I am also buffled why this happens at all since
  [webpack 5 supports TT](https://webpack.js.org/guides/csp/#trusted-types). My intuition says it
  may be some plugin which causes this behaviour.
- Anyway, the example app currently bootstraps without zero errors and can be developed seamlessly
  while nextJs are turned on from the start. The integration is minimal (and hardly complete) but it
  shows that supporting TT at least for the bare minimum is not that hard (which seems to be the
  case in all the integrations I've encountered so far).

The best way to see what changed and how is to look at the git history for the example application https://github.com/Siegrift/master-thesis/commits/master/code/tt-example-app and the forked nextJs history https://github.com/Siegrift/next.js/commits/6c1fb74a9462caf7f2faaf61fce65c0e52d0e2a8.
