# react-native-template
Use this project as a base for any react-native projects. Keep existing project structure and follow example files logic and principles while extending it. For more info check [Notion page](https://www.notion.so/React-Native-project-initialisation-aea5ad3c29d1424b80f6df18de63b8dc)

## Prerequisites

> Min node.js version **18.17.1**

## Installation

```
cp .env.example .env
yarn
```

### Pods install
Navigate to the ios directory and run the following:

```
# from `ios` directory
bundle install && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install
```

### Pods update
You'll need to reinstall your pods by running pod install with the right flag:

```
# Run pod install with the flag:
RCT_NEW_ARCH_ENABLED=1 bundle exec pod install
```

## How to run

```
yarn ios
yarn android
```

## Release

### Install dependencies

```
sudo gem install bundler
sudo bundle install
```

### Create new release (manual)

> Configuration is stored inside **.releaserc.json** file

> Make sure you are on **master** branch
```
yarn release
```

### Create new release (CI/CD)

> Configuration is stored inside **.releaserc.json** file

> Semantic release update is getting triggered when we are pushing to **master** branch according to current CI configuration

> After project init uncomment **release** job in .github/workflows/release.yml

### Upload to stores

> Make sure you correctly fill the environment variables inside  **fastlane/env.staging**

#### IOS
> Make sure you fill the correct _Bundle identifier of your app_, _Apple Developer Portal username_, _App Store Connect Team ID_, _Developer Portal Team ID_ inside **fastlane/Appfile** file

> Make sure you fill the correct _Project workspace_, _Project scheme_ inside **fastlane/Fastfile** file

> After the first build make sure that the correct provisioning profile "_match AppStore {{bundleId}}_" is setup for project

```
yarn deploy:ios:staging
```

#### Android
> Make sure you put the correct _release-key.keystore_ and _service-account-key.json_ files inside **android** folder

> Checkout https://github.com/nozomi-health/app-store-keys to store required android keys for your project

> Make sure you fill the correct _Package name_ inside **fastlane/Appfile** file

```
yarn deploy:android:staging
```

## Project renaming

After installing dependencies run 
```
yarn rename <NewProjectName> <BundleIdForAndroid>
```
BundleIdForAndroid is custom Bundle Identifier like com.reactnativetemplate

After the script has finished running search in your IDE old project`s name and replace to new one manually. There are a few places where script cannot replace namings automatically. Red ones should be on lowercase and match your BundleIdForAndroid and yellow ones should match your NewProjectName
