# master-thesis

TODO: Introduction about the thesis topic

## Folder structure

The thesis consists of two parts - `code` and `thesis`. The former contains all of the code related
to the thesis, the latter contains the thesis text sources in latex.

### Code

At first, the initial target was intergrating Trusted Types into nextJs. I've decided to create the following folder structure:

- `next.js` is submodule of the forked
  [nextJs](https://github.com/Siegrift/next.js?organization=Siegrift&organization=Siegrift)
  repository. This allows me to experiment with nextJs and Trusted Types while being able to pull
  the latest updates on the original nextJs repository.
- `tt-example-app` is a very basic nextJs application, which uses the forked nextJs as a local
  dependency using `"next": "file:../next.js/packages/next"` (yarn feature). Unfortunately, for
  every nextJs repository you need to recompile the it, force install the dependencies, remove cache
  and restart the example app - however, I don't think there is a way to avoid this. This is actually not that hard and I've written a short script for this - see the [README](./code/tt-example-app/README.md) of the example application for details.
- `webpack5-react-boilerplate` is a folder which contains an example project with webpack5. It is
  unrelated to the two folders already mentioned. I used it to test webpack5 and Trusted Types
  integration at some point.

### Thesis

The `pdf` of the thesis is always compiled as part of pre-commit hook. This means that you can
download the most up to date version just from github.
