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
3. Install the `hygen-echobind-templates` package with `hygen-add` tool.
- ```bash
    hygen-add https://github.com/echobind/hygen-echobind-templates
- **TODO**: Publish to NPM and/or set package github repo public.
- When templates are updated in the package, to sync the changes to your local templates, re-run the command above to update your templates folder.
---

### REACT-NATIVE CIRCLECI CONFIG

Generates a compatible configuration for the [circleci-react-native-orb](https://circleci.com/orbs/registry/orb/echobind/react-native).

```bash
hygen generator circleci-config
```
---
### REACT-NATIVE FASTLANE IOS

Generates an iOS fastlane configuration with 4 build/distribution workflows - **main** | **alpha** | **beta** | **production**

```bash
hygen generator fastlane-ios
```
---
### REACT-NATIVE FASTLANE ANDROID

Generates an Android fastlane configuration with 4 build/distribution workflows - **main** | **alpha** | **beta** | **production**

```bash
hygen generator fastlane-android
```
---
