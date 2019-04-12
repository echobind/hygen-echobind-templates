module.exports = [
  {
    type: "toggle",
    name: "circleci",
    message: "Are you using CircleCI to run fastlane commands to build and distribute your app?",
    footer: 'Note: You are still able to run fastlane commands locally when using CircleCI.'
  },
  {
    type: "toggle",
    name: "cocoapods",
    message: "Are you or will you be using Cocoapods to manage any native iOS dependencies?",
  },
  {
    type: "toggle",
    name: "carthage",
    message: "Are you or will you be using Carthage to manage any native iOS dependencies?",
  },
];
