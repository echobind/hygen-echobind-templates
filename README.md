## HYGEN ECHOBIND TEMPLATES

### Installation

1. Ensure `hygen` is installed globally. Follow the [quick start guide](http://www.hygen.io/quick-start).

2. Install the `hygen-add` tool that allows us to install `hygen` **generators** from publicly available packages via **npm** or **github**.
- ```bash
    yarn global add hygen-add
    ```
    *or*
- ```bash
    npm i -g hygen-add
    ```
---
### REACT-NATIVE CIRCLECI CONFIG

Generates a compatible configuration for the [circleci-react-native-orb](https://circleci.com/orbs/registry/orb/echobind/react-native).

```bash
hygen generator circleci-config
```
---
### REACT-NATIVE FASTLANE IOS

Generates a fastlane configuration with 4 lane workflows (main/alpha/beta/production).

```bash
hygen generator fastlane-ios
```
---
