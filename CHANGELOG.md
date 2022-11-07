

## [1.0.0-alpha.7](https://github.com/adaptui/react-native-tailwind/compare/1.0.0-alpha.6...1.0.0-alpha.7) (2022-11-07)


### Bug Fixes

* **avatar:** :ambulance: remove deleted file common export ([7c3fad6](https://github.com/adaptui/react-native-tailwind/commit/7c3fad6d556f71176c9d585ce47a8761db993376))
* **button:** :ambulance: update imports of types from the component file ([45bcb49](https://github.com/adaptui/react-native-tailwind/commit/45bcb494667d5f80307f979062becb0e57f15daf))
* **deps:** ⬆️ update dependency twrnc to v3.4.0 ([6523ccb](https://github.com/adaptui/react-native-tailwind/commit/6523ccbb3af23284cb775f110c002dae9b78531f))
* **deps:** ⬆️ update prod dependencies (minor) ([91e90f2](https://github.com/adaptui/react-native-tailwind/commit/91e90f2440ef09a83b3342d77c63b68d17a5149a))
* **deps:** ⬆️ update prod dependencies (minor) ([295eb1c](https://github.com/adaptui/react-native-tailwind/commit/295eb1c5cf93f547c042080e244b2c91a493389d))
* divider style ([5c9aa33](https://github.com/adaptui/react-native-tailwind/commit/5c9aa3389ab2a63612894517ab8beff2b1351ca7))
* refactor divider component ([30ad937](https://github.com/adaptui/react-native-tailwind/commit/30ad937aea3c433c784f5f170da0d5577cfa110b))
* refactor divider component and add extra prop to style the divider line ([b239136](https://github.com/adaptui/react-native-tailwind/commit/b239136800f7c4fb3cec1bada8648f743285c979))
* **slider:** :label: fix typescript issues ([35e6eeb](https://github.com/adaptui/react-native-tailwind/commit/35e6eeb7e1ae52e2a3373dac938a0632969561f0))


### Build Updates

* :package: add react-dom and react-aria/focus packages ([5c214fa](https://github.com/adaptui/react-native-tailwind/commit/5c214fa243ca6364978a25f1b0d81252691f8bfa))
* **kodiak:** :building_construction: remove rebase method ([a7fe4f5](https://github.com/adaptui/react-native-tailwind/commit/a7fe4f5933548949dfcbd6acc6fa2d892656aee6))


### Documentation Changes

* :pencil2: add `js` in md for all code snippets ([9c27611](https://github.com/adaptui/react-native-tailwind/commit/9c27611c6cdeaadfa03d258c9bd257f041913607))
* **readme:** :memo: fix code rendering component docs ([92feaed](https://github.com/adaptui/react-native-tailwind/commit/92feaedd9f87f464eb76d3a91fc0052dc85ad56d))


### Updates Reverted

* :rewind: move babel-loader  to older version to make the web app work ([5527684](https://github.com/adaptui/react-native-tailwind/commit/55276845aece257f4d433e9f0df07b2aa31e7d03))


### Feature Updates

* added divider component ([056fdb6](https://github.com/adaptui/react-native-tailwind/commit/056fdb6d4d0676e7741ce1e02db825c937e38d5f))
* **button:** :sparkles: refactor button component ([b74769f](https://github.com/adaptui/react-native-tailwind/commit/b74769f8113a40606fbe5d331a1d364ce0ddb9fe))
* **checkbox:** :lipstick: restructure checkbox theme in order of theme -> interaction -> element ([9eb6a9d](https://github.com/adaptui/react-native-tailwind/commit/9eb6a9d539df6750deb3efc5ec25f16e85667c60))
* **checkbox:** :sparkles: wrap checkbox component ([9413d94](https://github.com/adaptui/react-native-tailwind/commit/9413d940f378c462238ef5ac2be34f6f811aa6d7))
* **input:** :sparkles: wrap Input component ([c68c246](https://github.com/adaptui/react-native-tailwind/commit/c68c246b30fd2c089d9201490a58a61e62a29181))
* **radio:** :art: add orientation based styling ([eac0646](https://github.com/adaptui/react-native-tailwind/commit/eac06463cf25a7130bfda5a66d78038c19267c27))
* **radio:** :sparkles: wrap radio group component ([196bc86](https://github.com/adaptui/react-native-tailwind/commit/196bc860cc993ba2d6c0297896999d2ed5124dbf))
* **tag:** :sparkles: add web functionalities like hover & focus, also added accessible props ([16098d8](https://github.com/adaptui/react-native-tailwind/commit/16098d86fac0d77b311758465c68f4fe00214aaa))
* **utils:** :tada: add util functions ([e3ea3cd](https://github.com/adaptui/react-native-tailwind/commit/e3ea3cd07e7a7b3ef0a182a4ae28693f81be739d))


### Code Refactors

* :pencil2: change TailwindThemeProvider to AdaptUIProvider ([1265a2a](https://github.com/adaptui/react-native-tailwind/commit/1265a2a34bf426f29c5f953f94b2ffac13a00557))
* :recycle: use border-[1.5px] instead of { borderWidth: 1.5 } ([5865689](https://github.com/adaptui/react-native-tailwind/commit/5865689968d425c64bdaffa31b40ba0a0dbab02a))
* **avatar:** :recycle: remove usage of useAvatarProps hook, ([873e8b9](https://github.com/adaptui/react-native-tailwind/commit/873e8b935bab6e47a8e477e8879a59829d197508))
* **button:** :fire: move button props type to the component file itself ([732d529](https://github.com/adaptui/react-native-tailwind/commit/732d5295ff9764c08caccba6f7cf27fe24e87975))
* divider subheader prop type ([7e9ac71](https://github.com/adaptui/react-native-tailwind/commit/7e9ac71652c3b4f65cf1b6f1d6eed28f8112b4df))
* **divider:** :bug: fix dashed style divider ([9b83533](https://github.com/adaptui/react-native-tailwind/commit/9b8353397ad1fa0b05332df89cbd5a24c5f0489e))
* **radio:** :heavy_minus_sign: remove param from function call ([ef93ce8](https://github.com/adaptui/react-native-tailwind/commit/ef93ce8060acf4ba59ee52c3e65eb096e3ae8e8e))
* **radio:** :pencil2: add preventDefault() to onKeyDown ([93aa2d4](https://github.com/adaptui/react-native-tailwind/commit/93aa2d40a8b5af599b23838d448525fbc917c98c))
* **radio:** :recycle: group web props together in a place ([7c67071](https://github.com/adaptui/react-native-tailwind/commit/7c67071085557bdfc442a09095cb9b1c2ca374ab))
* **switch:** :art: fix switch component sizing and translate values ([f994bf8](https://github.com/adaptui/react-native-tailwind/commit/f994bf82e7ed5df49d05d99d789af3516cb08e30))
* **tailwind-config:** :truck: change tailwind config .js to .ts file ([79f468e](https://github.com/adaptui/react-native-tailwind/commit/79f468e77201978e773bb63b69c992a383662db7))
* **utils:** :recycle: change touchState as optional param resulting in better usage of function ([9c94941](https://github.com/adaptui/react-native-tailwind/commit/9c949419284e2aeab15cefafb0b6116bb33156c5))


### Maintanance Updates

* :package: update twrnc package to latest version ([a33d332](https://github.com/adaptui/react-native-tailwind/commit/a33d33279a9196aa94ce33f8107fe2098d9113e7))
* :wrench: add divider to vscode scope ([68f6aeb](https://github.com/adaptui/react-native-tailwind/commit/68f6aebb29584b340398cc87587f2b26c3c8f016))
* :wrench: add docs folder ([c9a1756](https://github.com/adaptui/react-native-tailwind/commit/c9a1756b9a652f46ef0f4af2f22d3958a7e415af))
* :wrench: add kodiak to vscode scopes ([bd29f15](https://github.com/adaptui/react-native-tailwind/commit/bd29f15190e30fc56676319075ce28d5f987753b))
* :wrench: add utils to vscode scope ([2f4ce63](https://github.com/adaptui/react-native-tailwind/commit/2f4ce634f7de4c8e375a203b98d61455324beb08))
* add basic divider example ([c456d3e](https://github.com/adaptui/react-native-tailwind/commit/c456d3ee63131f7867e0307b6599063829155baa))
* **deps:** ⬆️ update dependency babel-loader to v9 ([8518199](https://github.com/adaptui/react-native-tailwind/commit/85181994a07950cd297808b3c709da998322b768))
* **deps:** ⬆️ update dependency expo-cli to v6 ([4e6fff8](https://github.com/adaptui/react-native-tailwind/commit/4e6fff811360611a9375a32a9b6dd1257c988a39))
* **deps:** ⬆️ update dependency react-error-overlay to v6.0.11 ([08f468b](https://github.com/adaptui/react-native-tailwind/commit/08f468bc6c6104da25b66229418ae5a92163e628))
* **deps:** ⬆️ update dev dependencies (major) ([96fe9eb](https://github.com/adaptui/react-native-tailwind/commit/96fe9eb014fc90c8694fe87a8a3cc51964083ad5))
* **deps:** ⬆️ update dev dependencies (minor) ([34abcec](https://github.com/adaptui/react-native-tailwind/commit/34abcecd429a9521ea60e04a2c2e183d4244b758))
* **deps:** pin dependency babel-loader to 8.2.5 ([d1e0ff3](https://github.com/adaptui/react-native-tailwind/commit/d1e0ff3aa1b69416d880d05ee6f04d5ddf76d69f))
* **example-app:** :sparkles: add dashed divider customized component ([68c4b6e](https://github.com/adaptui/react-native-tailwind/commit/68c4b6e5708428bd5ea3eff484ab8f6800919dfe))
* **example-app:** :zap: update example app with different variants of Button ([c118749](https://github.com/adaptui/react-native-tailwind/commit/c118749b386155cd5d05576db878bce5b6185d14))
* **example-app:** :zap: update example app with new CheckboxComponent ([7e96316](https://github.com/adaptui/react-native-tailwind/commit/7e963161ace6a6a752acf89742f463dd632f87bc))
* **example-app:** :zap: update example app with Radio Group Example ([b077947](https://github.com/adaptui/react-native-tailwind/commit/b077947324fc093f6443510f528ad6da90e2fc5c))
* **example-app:** :zap: update tag component screen with ([b503164](https://github.com/adaptui/react-native-tailwind/commit/b5031640dc73379edbd9ec5136c1817a260c7cd9))

## [1.0.0-alpha.6](https://github.com/adaptui/react-native-tailwind/compare/1.0.0-alpha.5...1.0.0-alpha.6) (2022-06-27)


### Code Refactors

* **circular-progress:** :sparkles: wrap circular progress component ([23d0dfd](https://github.com/adaptui/react-native-tailwind/commit/23d0dfd51f9f88bba3ccee8fb55e2ce46cb7a051))


### Maintanance Updates

* **example-app:** :sparkles: add component examples to Circular Progress screen ([7859dcc](https://github.com/adaptui/react-native-tailwind/commit/7859dccdba49132f0fefe43729c51b0fd1af1e38))


### Documentation Changes

* **circular-progress:** :memo: update circular-progress.md file ([482c418](https://github.com/adaptui/react-native-tailwind/commit/482c418cd3c075a7db5ac09a2537bd1cd6b9c48c))


### Build Updates

* :rocket: release v1.0.0-alpha.5 ([ff47b1c](https://github.com/adaptui/react-native-tailwind/commit/ff47b1c14449484ea8077b071e0af2273e91c72e))

## [1.0.0-alpha.5](https://github.com/adaptui/react-native-tailwind/compare/1.0.0-alpha.4...1.0.0-alpha.5) (2022-06-27)


### Code Refactors

* **icons:** :bento: add Delete Icon, fix Add icon sizing ([08c012f](https://github.com/adaptui/react-native-tailwind/commit/08c012f775c79bcca793e56a8cbaf6eeaf09c583))


### Maintanance Updates

* :wrench: add icons to vscode scope ([e1b1d1e](https://github.com/adaptui/react-native-tailwind/commit/e1b1d1eb42349b9559838079c8a3f97e9a9eca7c))


### Feature Updates

* **icons:** :bento: add Error icon ([6e1dc8c](https://github.com/adaptui/react-native-tailwind/commit/6e1dc8c610e1f635c89525e166a1fa6d31c4b9bd))


### Documentation Changes

* :memo: add avatar & avatar-group file ([276aefb](https://github.com/adaptui/react-native-tailwind/commit/276aefb2387d28aec0dfc3eaf37e2f7cc324f092))
* :memo: add badge doc file ([217aa36](https://github.com/adaptui/react-native-tailwind/commit/217aa36805061b3d7b1a36e82b445780479fff7e))
* :memo: add button doc file ([0a858e4](https://github.com/adaptui/react-native-tailwind/commit/0a858e4b2e5c1c8e4b913b172e83f1d0a79e747b))
* :memo: add checkbox doc file ([ddf54b0](https://github.com/adaptui/react-native-tailwind/commit/ddf54b08b308f57b90bbc45f0e388b92d76f543c))
* :memo: add checkbox group doc file ([2561cf1](https://github.com/adaptui/react-native-tailwind/commit/2561cf1a94dbba45c4ffc744e476d3987cad407d))
* :memo: add circular progress doc file ([62a9ffa](https://github.com/adaptui/react-native-tailwind/commit/62a9ffac26053c035d2ddf65fc18bc28919221c5))
* :memo: add getting-started file ([75c28d9](https://github.com/adaptui/react-native-tailwind/commit/75c28d92293445d4b8198c694fca4e208e291ead))
* :memo: add input doc file ([5a79364](https://github.com/adaptui/react-native-tailwind/commit/5a79364cb16c18762463275e4fd27cf39603ab97))
* :memo: add meter component doc file ([d90eb94](https://github.com/adaptui/react-native-tailwind/commit/d90eb94a40b02a745575ac0979182370dba21888))
* :memo: add progress bar doc file ([0165e09](https://github.com/adaptui/react-native-tailwind/commit/0165e09ef3a352d7025c8467f154cd855ba1a39a))
* :memo: add Radio component doc file ([c7ca581](https://github.com/adaptui/react-native-tailwind/commit/c7ca5811d7aa7903eb233a45944f116d67cba43e))
* :memo: add slider component doc file ([16ffe71](https://github.com/adaptui/react-native-tailwind/commit/16ffe7158d97f0dc53d8c30fb7a60db41f8e4bce))
* :memo: add spinner component doc file ([3cf5b08](https://github.com/adaptui/react-native-tailwind/commit/3cf5b081aaf5405cfaa20af03f1bc95f6f059ed4))
* :memo: add switch component doc file ([2d999c1](https://github.com/adaptui/react-native-tailwind/commit/2d999c1c01f1195a1913c460ca4b3c6202af0809))
* :memo: add Tag component doc file ([6cedfd9](https://github.com/adaptui/react-native-tailwind/commit/6cedfd9b4205e40f21dfbe05b55067ba75fb212b))
* :memo: add tooltip component doc file ([d4a3281](https://github.com/adaptui/react-native-tailwind/commit/d4a32816165f3801bc1dbf62d216c7285b35b287))
* :memo: update component and getting-started docs ([cc11ffb](https://github.com/adaptui/react-native-tailwind/commit/cc11ffb0bd979204bb7ba1f6cf147e0311c6f26f))
* :memo: update README.md ([2e9c517](https://github.com/adaptui/react-native-tailwind/commit/2e9c51752bba262cab6817574cf276123b97b440))
* :pencil2: add desc to radio doc ([f39da77](https://github.com/adaptui/react-native-tailwind/commit/f39da773680d824915095d4aae8cb978f646bfab))
* :pencil2: change style header to variants ([efcb038](https://github.com/adaptui/react-native-tailwind/commit/efcb0381cc8d695c34b75f141ba8bd6101f548c2))
* :pencil2: change ViewProps to TouchableProps ([6306052](https://github.com/adaptui/react-native-tailwind/commit/6306052d7d8c6e2aab369c602ab68e767907c206))
* :pencil2: fix typos ([9ac68fa](https://github.com/adaptui/react-native-tailwind/commit/9ac68fa32654a84b30bfe506fe3b4c33cd499cc0))
* :recycle: add info regarding CheckboxGroup component ([04937ac](https://github.com/adaptui/react-native-tailwind/commit/04937ac784d1ee877ff362b31e6beb226e17eb9d))
* :recycle: change avatar doc similar to other component docs ([6c9a808](https://github.com/adaptui/react-native-tailwind/commit/6c9a8086ced106daff83ef3e1a9a507d7bdd7011))
* :recycle: change avatar-group doc similar to other component docs ([4d196d3](https://github.com/adaptui/react-native-tailwind/commit/4d196d3c4874f73356ff9ca29b99d63d29e9f24b))
* :recycle: refactor code snippets in button doc ([cd001c5](https://github.com/adaptui/react-native-tailwind/commit/cd001c5b1a9662dd072fd1150b38703464918720))
* :truck: rename progress doc file ([5e028fe](https://github.com/adaptui/react-native-tailwind/commit/5e028fe02f0cf25da8c64bd2d59674be1691f540))
* 📝 Update avatar-group.md ([a8601f5](https://github.com/adaptui/react-native-tailwind/commit/a8601f51c275bb636afdfc4fd06efa8383977ca4))
* 📝 Update avatar.md ([d6dbd6a](https://github.com/adaptui/react-native-tailwind/commit/d6dbd6a1e8f2ede3ee1fd773b2a383d618626a22))
* 📝 Update badge.md ([a005986](https://github.com/adaptui/react-native-tailwind/commit/a00598625679a1ff1281a3c9bf10948895ceb883))
* 📝 Update button.md ([d810960](https://github.com/adaptui/react-native-tailwind/commit/d810960ef2aae71ec8398e3d1baf0f236104dc77))
* 📝 Update button.md ([b76a012](https://github.com/adaptui/react-native-tailwind/commit/b76a0125a2677fdca740f1f2203020525418b955))
* 📝 Update checkbox-group.md ([7064e1f](https://github.com/adaptui/react-native-tailwind/commit/7064e1f3ce03018ca79bdbb4e3b5f0e2eff25229))
* 📝 Update checkbox.md ([19c7714](https://github.com/adaptui/react-native-tailwind/commit/19c7714b9de33a7eacd2af32139954e01213821a))
* 📝 Update checkbox.md ([177edfc](https://github.com/adaptui/react-native-tailwind/commit/177edfc2a39f1f5abcfda8a8477870238750bf3e))

## [1.0.0-alpha.4](https://github.com/adaptui/react-native-tailwind/compare/1.0.0-alpha.3...1.0.0-alpha.4) (2022-06-21)


### Bug Fixes

* **checkbox:** :art: add common label text style ([f5613de](https://github.com/adaptui/react-native-tailwind/commit/f5613de92f9c944ab832d4a255bfcee382e8d118))
* **checkbox:** 🩹 add optional chaining ([1e1cf3e](https://github.com/adaptui/react-native-tailwind/commit/1e1cf3e5932cd601dfc8ef3d933723a0d3b16e7a))
* **checkbox:** 🩹 fix providing invalid style strings ([503aab6](https://github.com/adaptui/react-native-tailwind/commit/503aab6bdb0e5832c3dd3c9206f9a992cc96a5f2))
* **deps:** pin dependency react-native-popper to 0.3.2 ([0303e84](https://github.com/adaptui/react-native-tailwind/commit/0303e84a0d83aed63f28587cbb4e0a703f3abb50))


### Feature Updates

* **circular-progress:** :sparkles: wrap circular-progress ([c142d5a](https://github.com/adaptui/react-native-tailwind/commit/c142d5a7618ab12012a7c9106d0e8718c217523e))
* **input:** :sparkles: wrap input component ([1649594](https://github.com/adaptui/react-native-tailwind/commit/1649594bdf31340a903b3c5ee7df80fe7b4ad70e))
* **progress-bar:** :sparkles: add label and description to progress bar ([9a92f43](https://github.com/adaptui/react-native-tailwind/commit/9a92f438e2ef72e600b271d2798ff82f86b80dd4))
* **radio:** :sparkles: wrap radio component ([8aab41d](https://github.com/adaptui/react-native-tailwind/commit/8aab41dc3a0ba75e3ff6df78d74f5db5b29f345c))
* **slider:** :sparkles: wrap slider component ([3b3d8f3](https://github.com/adaptui/react-native-tailwind/commit/3b3d8f33fb944ce3b6bbc88ba4a88b4950588557))
* **switch:** :sparkles: add `label` and `description` props, ([f1f632e](https://github.com/adaptui/react-native-tailwind/commit/f1f632e74ce42b89bc11886f85c599327642c59b))
* **switch:** :sparkles: wrap switch component ([2742774](https://github.com/adaptui/react-native-tailwind/commit/274277423c7132da35e0c48028f4734815143f22))


### Maintanance Updates

* :wrench: add circular-progress to vscode scope ([a32a688](https://github.com/adaptui/react-native-tailwind/commit/a32a6884fceeb70f4c218634e933fae5b51e7e22))
* :wrench: add input to vscode scope ([b400c7b](https://github.com/adaptui/react-native-tailwind/commit/b400c7b64af32727a68e053f923024f8316cb07e))
* :wrench: add progress-bar to vscode scope ([43cb99d](https://github.com/adaptui/react-native-tailwind/commit/43cb99de0cc0f61e9de5a0e3d6fa2eb248fbb797))
* :wrench: add radio to vscode scope ([874d99b](https://github.com/adaptui/react-native-tailwind/commit/874d99b8dc77ca0aa46764a2c2c3c284864f2ead))
* :wrench: add slider to vscode scope ([51d9113](https://github.com/adaptui/react-native-tailwind/commit/51d91139e37beb3cc48e3a0a8669254ad839e145))
* :wrench: add switch to vscode scope ([7cfdc85](https://github.com/adaptui/react-native-tailwind/commit/7cfdc854740350092dfd5b6bb836446a9a7cf744))
* :wrench: add tag to vscode scope ([c751878](https://github.com/adaptui/react-native-tailwind/commit/c7518785168fc7da1ebdedb129a167a975363a0c))
* :wrench: add tooltip scope ([10d479c](https://github.com/adaptui/react-native-tailwind/commit/10d479c03587ab9412f4dd50fde005f74f4dd4f6))
* **checkbox:** :art: restructure checkbox theme and add optional chaining for tailwind classnames ([1ba2fa9](https://github.com/adaptui/react-native-tailwind/commit/1ba2fa9fc100988515765a023def070cada2dfc9))
* **example-app:** :package: add react native popper package ([d671fa6](https://github.com/adaptui/react-native-tailwind/commit/d671fa65daacf114ee36ad47eb10be3348f36468))
* **example-app:** :sparkles: add Circular Progress screen with examples ([4092367](https://github.com/adaptui/react-native-tailwind/commit/4092367db62c6c150f381e9f55a65c7dc8b96d2b))
* **example-app:** :sparkles: add popups module, create tooltip component screen with examples ([651ef1b](https://github.com/adaptui/react-native-tailwind/commit/651ef1bb0aa22b7510608192d5a4c149afbf1e90))
* **example-app:** :sparkles: add slider component screen with examples ([c0951a4](https://github.com/adaptui/react-native-tailwind/commit/c0951a407fb2cfe4ea989dc1f47f4e8419e6b116))
* **example-app:** :sparkles: add Switch Component Screen with examples ([fdbc62c](https://github.com/adaptui/react-native-tailwind/commit/fdbc62c602c3e131117bf31c910bbaabe87ac7b4))
* **example-app:** :sparkles: create Progress Bar component screen with examples ([fcdb6c1](https://github.com/adaptui/react-native-tailwind/commit/fcdb6c10729f3102122ad4694ab1f52df75c131b))
* **example-app:** :sparkles: create Tag component screen with examples ([d273f05](https://github.com/adaptui/react-native-tailwind/commit/d273f05d9d2406ea9ddbb0e957d5bb398cd135fb))
* **example-app:** :truck: move meter component and spinner to feedback folder ([627c3eb](https://github.com/adaptui/react-native-tailwind/commit/627c3eb4c8b2a4d0da875fe8a04c0b795098b30a))
* **example-app:** :zap: add CheckboxGroup component screen with examples ([79dea75](https://github.com/adaptui/react-native-tailwind/commit/79dea75b9260b4901ce3c1b9c685e759a5f1c810))
* **example-app:** :zap: add Input component Screen with examples ([2fd73e0](https://github.com/adaptui/react-native-tailwind/commit/2fd73e004fe434494a7d5a72e3dadbfce7148db3))
* **example-app:** :zap: add ProgressBar example ([6956de5](https://github.com/adaptui/react-native-tailwind/commit/6956de52a51b25132f0ab9f2cc157676710fc963))
* **example-app:** :zap: add Radio component Screen with examples ([a3eca48](https://github.com/adaptui/react-native-tailwind/commit/a3eca480a79bd06feedb7961388ad82519255455))
* **progress-bar:** :lipstick: wrap tailwind classnames with cx ([28dd0f9](https://github.com/adaptui/react-native-tailwind/commit/28dd0f9baaffcdf63b39eea9cd125e5d3867f8f0))
* **progress-bar:** :sparkles: wrap progress bar component ([3f17bcf](https://github.com/adaptui/react-native-tailwind/commit/3f17bcf9df6ea93711e167b2203a926787b7fef7))
* **tag:** :sparkles: add themeColor for tag, remove TagProps hook, restructured tag render ([9bb582a](https://github.com/adaptui/react-native-tailwind/commit/9bb582a8babce5d7b4913d325eeaefd504d72926))
* **tag:** :zap: wrap tailwind classnames with cx, wrap textStyle inside styleAdapter ([2135f8d](https://github.com/adaptui/react-native-tailwind/commit/2135f8d58f2669b9a725f5eb329bdbb7f37ffb1f))
* **tooltip:** :lipstick: updated tooltip theme ([51b13dc](https://github.com/adaptui/react-native-tailwind/commit/51b13dcf62ee27966517ba3da47d294754086593))
* **tooltip:** :mute: remove console.log ([6e99612](https://github.com/adaptui/react-native-tailwind/commit/6e99612802dcae4bf53fd4b76830ca6b55ed92b8))
* **tooltip:** :sparkles: wrap tailwind classnames with `cx`, move arrow style into tooltip theme ([d06fb5a](https://github.com/adaptui/react-native-tailwind/commit/d06fb5ad29176d86b67530ca96f4d668f2c8e2e9))
* **tooltip:** :tada: wrap tooltip component ([ed7d80c](https://github.com/adaptui/react-native-tailwind/commit/ed7d80c95d1c1b3a34c5b1f5ff676cd09b549dfc))


### Code Refactors

* :recycle: change "" to `text-transparent` to avoid tailwind classname warning ([8b7b50c](https://github.com/adaptui/react-native-tailwind/commit/8b7b50c007949ae838ed0b1095fd69d854a30c1e))
* **checkbox:** :recycle: change onChange callback return type to void ([4379078](https://github.com/adaptui/react-native-tailwind/commit/43790784ecc83853d950aa0fc3a2d45be7a175a1))
* **components:** ♻️ update styles & optional chaining ([dd3edd2](https://github.com/adaptui/react-native-tailwind/commit/dd3edd2e9c419782c54bcbb8666bd4588a4540f4))
* **input:** :recycle: remove style from icon which is added to prefix and suffix wrapper ([f72b8b4](https://github.com/adaptui/react-native-tailwind/commit/f72b8b462f95368c89e256f4f0dd339b2b143f37))
* **input:** :see_no_evil: wrap tailwind classnames with cx in missed places ([2d78105](https://github.com/adaptui/react-native-tailwind/commit/2d7810512addb4f3fc5c307bd6089c921ff206d6))
* **slider:** :zap: combined two useAnimatedStyle style hook for the knob into one ([2cfad02](https://github.com/adaptui/react-native-tailwind/commit/2cfad02ad2bc6b46e99d3a6adee45c15ea95ca1e))
* **switch:** :label: extend SwitchProps with BoxProps enabling style prop for customising ([399814b](https://github.com/adaptui/react-native-tailwind/commit/399814b304eea8050470860d768ab9d21a43842a))
* **switch:** :recycle: fix Switch with desc from overflowing out of the screen ([d9d95fe](https://github.com/adaptui/react-native-tailwind/commit/d9d95fe0eb84e2cb60517a076675d257850d8fa8))
* **switch:** :sparkles: add disabled style to label ([93906aa](https://github.com/adaptui/react-native-tailwind/commit/93906aada4384f3630f7599731b7128561769f1e))

## [1.0.0-alpha.3](https://github.com/adaptui/react-native-tailwind/compare/1.0.0-alpha.2...1.0.0-alpha.3) (2022-06-16)

### Feature Updates

* **progress-bar:** :lipstick: wrap tailwind classnames with cx ([f39de78](https://github.com/adaptui/react-native-tailwind/commit/f39de78ae72ef4b265d8a0faf32faacc6ebcbe11))
* **progress-bar:** :sparkles: wrap progress bar component ([aa84ad2](https://github.com/adaptui/react-native-tailwind/commit/aa84ad21099560378f50528d5e0e15c9952344f7))
* **tag:** :sparkles: add themeColor for tag, remove TagProps hook, restructured tag render ([d760493](https://github.com/adaptui/react-native-tailwind/commit/d760493f395b91e357521172129a8ffb44a17b05))
* **tag:** :zap: wrap tailwind classnames with cx, wrap textStyle inside styleAdapter ([b5defc9](https://github.com/adaptui/react-native-tailwind/commit/b5defc987b09c4454049f88fe9f9c0439159e3e0))
* **tooltip:** :lipstick: updated tooltip theme ([bdc26c2](https://github.com/adaptui/react-native-tailwind/commit/bdc26c29dafdca5f7df5e0b71a84a8012e2c290e))
* **tooltip:** :mute: remove console.log ([98fa76f](https://github.com/adaptui/react-native-tailwind/commit/98fa76f0bf103a4e4429f50c3dca9c428a60b720))
* **tooltip:** :sparkles: wrap tailwind classnames with `cx`, move arrow style into tooltip theme ([edf65bd](https://github.com/adaptui/react-native-tailwind/commit/edf65bd8717cbf677df8174531050c6333b91eb7))
* **tooltip:** :tada: wrap tooltip component ([f3c4c53](https://github.com/adaptui/react-native-tailwind/commit/f3c4c53abea46b28e0388b8e405ad076943e35fc))

### Maintanance Updates

* :wrench: add .vscode folder ([00011fe](https://github.com/adaptui/react-native-tailwind/commit/00011fe1aee63ce911c2b0dc90f4f83fc67ce205))
* :wrench: add progress-bar to vscode scope ([69fba26](https://github.com/adaptui/react-native-tailwind/commit/69fba26281037848d688a73cce807181574da2a8))
* :wrench: add tag to vscode scope ([f503c9b](https://github.com/adaptui/react-native-tailwind/commit/f503c9b696cd0052e800acfcaf9efa7eff034eb1))
* :wrench: add tooltip scope ([7904b2a](https://github.com/adaptui/react-native-tailwind/commit/7904b2a241a19700ea2288f102363ad3fbb2ef28))
* **changelog:** 🔊 update changelog & kodiak merge logic ([d95a535](https://github.com/adaptui/react-native-tailwind/commit/d95a5358823f93de677dfa9d75046101df7e29a5))

* **example-app:** :package: add react native popper package ([3c2abd4](https://github.com/adaptui/react-native-tailwind/commit/3c2abd4fa2a80d2409f579b5f533de8f0289747f))
* **example-app:** :sparkles: add popups module, create tooltip component screen with examples ([05864a3](https://github.com/adaptui/react-native-tailwind/commit/05864a33f172a8b2190890ef9ecf36d2c01673d7))
* **example-app:** :sparkles: create Progress Bar component screen with examples ([5b8592f](https://github.com/adaptui/react-native-tailwind/commit/5b8592f6d937442bb453ca2398076ac412d68e88))
* **example-app:** :sparkles: create Tag component screen with examples ([8c9e89f](https://github.com/adaptui/react-native-tailwind/commit/8c9e89f9de74d66c6130177bce040709e34eb931))

### Bug Fixes

* **deps:** ⬆️ update dependency react-native-web to v0.18.1 ([da8c34a](https://github.com/adaptui/react-native-tailwind/commit/da8c34a7a589227e793b5a22a8e5889921881f61))


## [1.0.0-alpha.2](https://github.com/adaptui/react-native-tailwind/compare/1.0.0-alpha.1...1.0.0-alpha.2) (2022-06-14)


### Bug Fixes

* **meter:** :bug: set default value for themeColor

### Code Refactors

* **checkbox:** :recycle: wrapped tailwind classnames inside `cx`
* **badge:** :art: improve theme structure
* **button:** :recycle: wrap Button Component
* **button:** :recycle: wrap button component

### Maintanance Updates

* **deps:** ⬆️ update dependency lint-staged to v13.0.1 ([#46](https://github.com/adaptui/react-native-tailwind/issues/46)) ([2f24edd](https://github.com/adaptui/react-native-tailwind/commit/2f24edd935b226105ae5b1e4f4c375ad35450d33))
* **avatar:** :lipstick: update active status bg color
* **badge:** :art: add theme and set default theme to base
* **button:** :art: add button theme, add themeColor prop & set to `base`
* **button:** :lipstick: add active styles from figma to pressed state
* **example-app:** :sparkles: add different Button variant component to Screen
* **checkbox:** :lipstick: update checkbox theme to have updated colors and other theming
* **checkbox:** :heavy_minus_sign: removed invalid utility class select-none
* **checkbox:** :sparkles: wrap checkbox component
* **example-app:** :sparkles: add Checkbox component screen
* **spinner:** :sparkles:  wrap spinner component
* **example-app:** :bug: changed icon prop to iconOnly
* **example-app:** :sparkles: add Spinner Component Screen
* **avatar:** :lipstick: update bg of typing container & change font weight of avatar initials
* **meter:** :sparkles: wrap meter component, add theming to meter & restructured theme
* **meter:** :adhesive_bandage: change order of props
* **badge:** :ambulance: fix outline text color, add vertical padding to badge container
* **example-app:** :sparkles: add outline badge variants to example app
* **example-app:** :recycle: add common component export, add MeterComponent to drawer screen
* **spinner:** :adhesive_bandage: change `h-14px` tailwind classname to `h-3.5`
* **primitives:** :truck: change primitives folder name (#51)
* **spinner:** :bug: change border-2 tailwind classname to { borderWidth: 1.5 }
* **checkbox:** :ambulance: add optional chaining for null check
* **button:** :art: move `opacity-0` tailwind classname to button theme
* **badge:** :fire: remove badge keys

## [1.0.0-alpha.1](https://github.com/adaptui/react-native-tailwind/compare/1.0.0-alpha.0...1.0.0-alpha.1) (2022-06-08)


### Bug Fixes

* **deps:** ⬆️ update dependency @chakra-ui/hooks to v2 ([#44](https://github.com/adaptui/react-native-tailwind/issues/44)) ([23c34e6](https://github.com/adaptui/react-native-tailwind/commit/23c34e621cb1c53b35cc565a037f68f548d3d954))


### Documentation Changes

* **readme:** :memo: add build badge ([ba0c046](https://github.com/adaptui/react-native-tailwind/commit/ba0c046a34bfaf77239840b4f72df97d4137b88a))

## 1.0.0-alpha.0 (2022-06-08)


### Bug Fixes

* :adhesive_bandage: removed negative margin to the 1st avatar child in Avatar Group ([0254062](https://github.com/adaptui/react-native-tailwind/commit/025406281b7bcfd8eb9c8d16470dc453b0b8c81f))
* :ambulance: added conditional render of prefix and suffix in icon only case ([c935b25](https://github.com/adaptui/react-native-tailwind/commit/c935b25ddf39f9179e3851db37066fb4831c15a1))
* :ambulance: fixed import path ([3043b50](https://github.com/adaptui/react-native-tailwind/commit/3043b5034c43f05add11c297b2d66d310c9736bb))
* :ambulance: fixed wrong prop name being assigned to SVG Path ([bad4bab](https://github.com/adaptui/react-native-tailwind/commit/bad4baba768a7e6e124a396cc402920fa63f07d4))
* :ambulance: removed a prop internally shared between components from the AvatarProps type ([ade20a5](https://github.com/adaptui/react-native-tailwind/commit/ade20a5f99a9aa267885df1b6e3f626426aba4f5))
* :ambulance: style fix overriding ring style by default border radius ([8bb5a41](https://github.com/adaptui/react-native-tailwind/commit/8bb5a413a64dce184470e34faf8642eb720283ce))
* :art: fixed hint text alignment ([78cda17](https://github.com/adaptui/react-native-tailwind/commit/78cda17019fdd56981e64d0c5d7860089954f455))
* :bug: changed 'radios' -> 'radio' in control type for stories ([3b0caf9](https://github.com/adaptui/react-native-tailwind/commit/3b0caf96ccce762d2ad3986846594d21a5ff435c))
* :bug: ficed tailwind-merge import ([220cdd9](https://github.com/adaptui/react-native-tailwind/commit/220cdd969652a1b4070b6e7a54247a95a2dcebca))
* :bug: fixed on/off color prop ([05fcc3f](https://github.com/adaptui/react-native-tailwind/commit/05fcc3f0f37d038df1254e224e55f3adf980f6d5))
* :bug: handled suffix/prefix undefined error ([84da67e](https://github.com/adaptui/react-native-tailwind/commit/84da67eb032a6a34b3991c4503e23d3664eec357))
* :bug: removed aspectRatio which enables the component to act like a slot for Button ([b1b62fd](https://github.com/adaptui/react-native-tailwind/commit/b1b62fdc2294c13919a362490a46bf7dc408fb1a))
* :green_heart: possible fix for the small pixel jump when between loading states of button ([9461977](https://github.com/adaptui/react-native-tailwind/commit/9461977820ee02088e1d3f954bcf94b86d777f78))
* :label: fixed type import issue ([62e16c1](https://github.com/adaptui/react-native-tailwind/commit/62e16c13dd4287856850ef70d9557ed967b67f05))
* :pencil2: changed stroke prop to fill ([8c80ea5](https://github.com/adaptui/react-native-tailwind/commit/8c80ea5d280e1ae2c87969f506cc7d6f09ea3dc7))
* :rotating_light: fixed {} being used as a type lint error ([5bd965f](https://github.com/adaptui/react-native-tailwind/commit/5bd965fe94833a16bb89c5b4719b07088b567a41))
* :rotating_light: fixed lint issues and added return types to functions ([960ce0b](https://github.com/adaptui/react-native-tailwind/commit/960ce0b0961f4f5c4f3f42b9bdf1751a57e8b982))
* :truck: fixed file imports ([6525d72](https://github.com/adaptui/react-native-tailwind/commit/6525d72988da503b8501870c08b29142b3651bc9))
* :truck: fixed file imports ([cf46575](https://github.com/adaptui/react-native-tailwind/commit/cf465754b2726977897e3ab99f36f58d29560c83))
* :truck: fixed import path to avoid "Require cycle:" warning ([ff1c9ea](https://github.com/adaptui/react-native-tailwind/commit/ff1c9ea4c8d97dd18be7fc0748f50245840315fa))
* :zap: added size based borderRadius value using default theme ([eb20299](https://github.com/adaptui/react-native-tailwind/commit/eb2029921f144cd1670550664afcb81fb54c1b6c))
* :zap: fixed android gesture failing ([a7a0f34](https://github.com/adaptui/react-native-tailwind/commit/a7a0f3452795ab6ef7a33e37568499f6f725b2d3))
* :zap: fixed storybook react-native package issue ([86d34d9](https://github.com/adaptui/react-native-tailwind/commit/86d34d9536b9849a1efcef220196655c385a47b6))


### Updates Reverted

* :rewind: reverted npm test script ([e396893](https://github.com/adaptui/react-native-tailwind/commit/e396893a1939af6f36aa4e7348ffbb439b1789bc))


### Test Updates

* :camera_flash: updated primitive component snapshots ([26c1bb6](https://github.com/adaptui/react-native-tailwind/commit/26c1bb6eb1cbe72125017fa0812220aef4b59888))
* :camera_flash: updated test snapshots ([10003f2](https://github.com/adaptui/react-native-tailwind/commit/10003f2ece8f6d3118f642af5c624715b79ee2b8))


### Build Updates

* :building_construction: updated dependencies to latest version ([a21194a](https://github.com/adaptui/react-native-tailwind/commit/a21194a904d93c5ebafd56a82a7ab2c1a5b724c7))
* :green_heart: added lodash types as dev dependency ([b659c7d](https://github.com/adaptui/react-native-tailwind/commit/b659c7d5c2102be1228e846d3aa513dcd7aa0faa))
* :green_heart: added lodash, tailwind-merge and update version of twrnc ([70986af](https://github.com/adaptui/react-native-tailwind/commit/70986afd3f9dbbf54367bdc276f56e763a2812d6))
* :green_heart: updated tailwind, tailwind-merge and tailwind-react-native packages ([9b57d24](https://github.com/adaptui/react-native-tailwind/commit/9b57d24cd02f1e3c3f8d47e2695f53113494ef26))
* :pushpin: yarn install changes ([7afeab1](https://github.com/adaptui/react-native-tailwind/commit/7afeab1543ca801ab0941a3a049189ae3083d79e))
* :zap: added chakra ui hook dependency and removed unwanted peer dependencies ([0a1fb61](https://github.com/adaptui/react-native-tailwind/commit/0a1fb6185643199eebf88347848473587efcfeda))


### Feature Updates

* :art: added default Button library theme ([6768c6d](https://github.com/adaptui/react-native-tailwind/commit/6768c6d764cff9a4a5fba017df41760e7f2adee5))
* :art: added progress bar theme to default theme context ([3710c72](https://github.com/adaptui/react-native-tailwind/commit/3710c7221873b3ba4b5ccb498ae64e9215d4d14e))
* :art: added switchTheme to defaultTheme ([be2abc0](https://github.com/adaptui/react-native-tailwind/commit/be2abc07aae4816a56ce84b306de29f4056a7d1e))
* :art: added thumb shadow style ([f062df5](https://github.com/adaptui/react-native-tailwind/commit/f062df535d0fe5a1b54fe48724bc5e9d78da5410))
* :fire: added slider range option ([0719e25](https://github.com/adaptui/react-native-tailwind/commit/0719e25f8d165763e84d2427e619f5a48e2e0ff0))
* :fire: changed multiple conditional icons into a one single scalable icon ([c32328a](https://github.com/adaptui/react-native-tailwind/commit/c32328a1472bd6490eb515875e6a41f0d1f458e4))
* :fire: wrapped progress bar component ([800a7b0](https://github.com/adaptui/react-native-tailwind/commit/800a7b0f7eddb1051873da9f0397ba4a6511df67))
* :label: added avatar component types ([8484279](https://github.com/adaptui/react-native-tailwind/commit/8484279516af4d2ae2615fe7439de9539bf70ead))
* :label: added Button prop types and keys ([d0083a8](https://github.com/adaptui/react-native-tailwind/commit/d0083a8ad63acb70b9dab6899f4c9d9bbd9ac3d2))
* :label: added DeepDictionary and DeepPartial common types ([7088635](https://github.com/adaptui/react-native-tailwind/commit/7088635f90696bd06751ae0467cd07b97c2e18da))
* :label: created a generalised Dict for objects ([8830cbb](https://github.com/adaptui/react-native-tailwind/commit/8830cbb410b854ecc33b7bae2782794185c282c9))
* :lipstick: added avatar group theme ([840beff](https://github.com/adaptui/react-native-tailwind/commit/840beffc62d34909dab5cb544d8d99650d717063))
* :package: added example expo app related dependencies ([3b4bcba](https://github.com/adaptui/react-native-tailwind/commit/3b4bcbaecdd436286b79ae4ad76b06a12296f817))
* :pencil2: added avatar component prop keys ([5b8b254](https://github.com/adaptui/react-native-tailwind/commit/5b8b2542e9b3f513416f19391203ceefaf503150))
* :recycle: refactored Avatar Status ([1309e19](https://github.com/adaptui/react-native-tailwind/commit/1309e19cf6bedc1332ff9df2b63f0f3e2173bc69))
* :rocket: wrapped button component with use of <Icon/>, new prefix and suffix slots ([ccf5ca7](https://github.com/adaptui/react-native-tailwind/commit/ccf5ca77dc4ef9c03606652bbaada97a892771c0))
* :sparkles: added avatar basic theme to context with active and away status ([14e23ed](https://github.com/adaptui/react-native-tailwind/commit/14e23ed35a386c1caf3b12a4dfd2d7549261b3a7))
* :sparkles: added circular prop to Avatar ([c4bdd79](https://github.com/adaptui/react-native-tailwind/commit/c4bdd7961acde7c8d68d2086bfcf81c03a471d88))
* :sparkles: added create Box Element hook ([bb7cab6](https://github.com/adaptui/react-native-tailwind/commit/bb7cab6530d3f80e035b609ccd07e6bacbdd6fa5))
* :sparkles: added create element and component util functions ([c9d60a2](https://github.com/adaptui/react-native-tailwind/commit/c9d60a25bae7e71b2b87934e2f4bd319ea89da64))
* :sparkles: added create Text Element hook ([d1a87da](https://github.com/adaptui/react-native-tailwind/commit/d1a87daed14f26b2cc43f80dada3bebb094d8522))
* :sparkles: added default tailwind config for styling ([0583fbf](https://github.com/adaptui/react-native-tailwind/commit/0583fbfa37a9d447a6598bf937f105c4cab1e168))
* :sparkles: added icon style option to createButtonIcon function ([eed573f](https://github.com/adaptui/react-native-tailwind/commit/eed573f3ed75b9a0557a4c3bda8d872fd1aff2f8))
* :sparkles: added isFunction helper ([2c2c5bc](https://github.com/adaptui/react-native-tailwind/commit/2c2c5bc40c206aaaf01f2d2f8d8ed3e53271cefb))
* :sparkles: added isString, isUndefined util functions ([09ffc8b](https://github.com/adaptui/react-native-tailwind/commit/09ffc8b0c379b173ec54f2fc6d31fc9b44f66f30))
* :sparkles: added min, max and hint  to Circular Progress Component ([0b1e8fa](https://github.com/adaptui/react-native-tailwind/commit/0b1e8fa46c5e87af92dd6df808efac53fa2a1ffa))
* :sparkles: added progress bar component ([949fafd](https://github.com/adaptui/react-native-tailwind/commit/949fafd01e0b2c7f64799be09f29bbf729e69bb4))
* :sparkles: added showRing and ringColor props to AvatarGroup ([de9f12b](https://github.com/adaptui/react-native-tailwind/commit/de9f12bf00958732ae7a34132debc8932623630f))
* :sparkles: added thumbTintColor Switch Component ([55a3a12](https://github.com/adaptui/react-native-tailwind/commit/55a3a12bf6ffd1668cbbc76024fb8cae44e697c2))
* :sparkles: added track color props for progress bar customization ([7417653](https://github.com/adaptui/react-native-tailwind/commit/7417653ac80470c5d5412f9de49913c8c65fe8ea))
* :sparkles: added typing animation to Avatar Status ([62fa3b9](https://github.com/adaptui/react-native-tailwind/commit/62fa3b99fcd1f3ca2fdedf8a8be57ae2081878d9))
* :sparkles: added useAvatarProps hook ([d57df86](https://github.com/adaptui/react-native-tailwind/commit/d57df860f089c00dc30ad068f0a139de3a366b40))
* :sparkles: added useSpinnerProps hook ([2be93ed](https://github.com/adaptui/react-native-tailwind/commit/2be93ed281a94d314f314e4ea4625333c4099c59))
* :sparkles: created a common Theme Context using default tailwind functions ([bd9b991](https://github.com/adaptui/react-native-tailwind/commit/bd9b991f927f935e300541dc666e63b64208bc91))
* :sparkles: created Animated Box component ([eeb7cfc](https://github.com/adaptui/react-native-tailwind/commit/eeb7cfc7eb9d60bf726fc5e329157dd15ee9d72e))
* :sparkles: created basic single value Slider component ([7489341](https://github.com/adaptui/react-native-tailwind/commit/748934138d4abd2294d6594bdeec448cf9ca0a49))
* :sparkles: created Box component ([ba356c2](https://github.com/adaptui/react-native-tailwind/commit/ba356c2db17627986c11fa1a55e923356043fbc6))
* :sparkles: created Switch component ([b27b489](https://github.com/adaptui/react-native-tailwind/commit/b27b4899923cf426ec661a65d7bdc297b64c098b))
* :sparkles: created Text component ([4a15dfb](https://github.com/adaptui/react-native-tailwind/commit/4a15dfb69da3930688cdd7148827259d927f70ed))
* :sparkles: created Touchable component ([cfce698](https://github.com/adaptui/react-native-tailwind/commit/cfce698c6b95fbe964446512d2e95a944e44c0a3))
* :sparkles: created TouchableWithoutFeedback component ([b18ff7d](https://github.com/adaptui/react-native-tailwind/commit/b18ff7d2768320308746b37da303ffa2d3fd9bfd))
* :sparkles: updated Button component with prefix, suffix and its loading states ([9eedfbb](https://github.com/adaptui/react-native-tailwind/commit/9eedfbb1cc7384a26b9d043c1f4ae774d6ae4544))
* :sparkles: used <Icon /> and createIcon for prefix and suffix slots ([2faeba4](https://github.com/adaptui/react-native-tailwind/commit/2faeba41969ec86e02f6d32b4dd893504af33d7c))
* :sparkles: wrapped storybook inside TailwindThemeProvider ([914a2d7](https://github.com/adaptui/react-native-tailwind/commit/914a2d77f49a5eee0b5172dfd74783e97646e78c))
* :tada: added ButtonSpinner as loading component for Button ([3653303](https://github.com/adaptui/react-native-tailwind/commit/3653303b9e866a91f1140cbff1294aed9ab8868e))
* :tada: added createIcon function' ([82ada09](https://github.com/adaptui/react-native-tailwind/commit/82ada09e952dbdf6f7490d3d5318c4d1e7e1c782))
* :tada: added useTagProps hook ([3b463af](https://github.com/adaptui/react-native-tailwind/commit/3b463af51d2ef1d002d4e6f9a929f0866c2cfa83))
* :tada: created AvatarGroup component ([c57abd8](https://github.com/adaptui/react-native-tailwind/commit/c57abd81c60c07b7cfe18e8d564c345471b85c45))
* :tada: created AvatarImage component ([aca4f3d](https://github.com/adaptui/react-native-tailwind/commit/aca4f3d27ce526e55fa743cbc5e1442ce3522e2b))
* :tada: created badge component ([e201b37](https://github.com/adaptui/react-native-tailwind/commit/e201b37f0c66b2a6b3a6fd211f86446254aa1b6e))
* :tada: created basic button component ([b32453f](https://github.com/adaptui/react-native-tailwind/commit/b32453fb13a7e8f1ff27db7e7ed751d20b812627))
* :tada: created basic Tooltip component ([723cc89](https://github.com/adaptui/react-native-tailwind/commit/723cc89c662cc0bf6b6db0159f9e8060d80e7e6c))
* :tada: created ButtonPrefix and ButtonSuffix components ([0506291](https://github.com/adaptui/react-native-tailwind/commit/050629146f067ea4085b4f384f7981d649211c5b))
* :tada: created Circular Progress component ([80e0312](https://github.com/adaptui/react-native-tailwind/commit/80e03124cc52a3e6644369eaff6c9d46728105be))
* :tada: created Icon Wrapper Component ([df30762](https://github.com/adaptui/react-native-tailwind/commit/df307628bc372e4c5e179c9dec7fa425fd3d8f71))
* :tada: created Spinner Component ([85fb19c](https://github.com/adaptui/react-native-tailwind/commit/85fb19c454c88af2f80042fd1dcc556c0cf41355))
* :tada: created Tag Component ([a4c6342](https://github.com/adaptui/react-native-tailwind/commit/a4c63424b17e7fd9b66fd7713680206a30136956))
* :zap: added <Spinner /> for loading button ([2e3b685](https://github.com/adaptui/react-native-tailwind/commit/2e3b685ccdcfe487d75a3b3e97de383e14cdde83))
* :zap: added circular theme for avatar ([643703a](https://github.com/adaptui/react-native-tailwind/commit/643703a043433b834c72cd2086f284b4dbd903da))
* :zap: added createContext util function ([0c68b9a](https://github.com/adaptui/react-native-tailwind/commit/0c68b9a64f9135721be8f4005798dcf64c2d4757))
* :zap: added prefix and suffix as button options ([a596b35](https://github.com/adaptui/react-native-tailwind/commit/a596b352c5a7a529aba93be58a5d122bd00a939e))
* :zap: added useButtonProps hook ([6c763b0](https://github.com/adaptui/react-native-tailwind/commit/6c763b0b5e66d0031628cb03e5342e971b431115))
* :zap: created basic Avatar component with status(Active, away, sleep) ([948d310](https://github.com/adaptui/react-native-tailwind/commit/948d3107c41f6b333a2ea8c841f3d9b788530c64))
* :zap: created useBadgeProps hook ([d3343bb](https://github.com/adaptui/react-native-tailwind/commit/d3343bb1b5bc9086d7912522d01612de50959bfd))
* :zap: fixed type issue with createComponent util function ([a6b427c](https://github.com/adaptui/react-native-tailwind/commit/a6b427c24e8af6bc33c06ba1e70722ccd350959c))
* added avatar component ([cc139d4](https://github.com/adaptui/react-native-tailwind/commit/cc139d40bc4db6ce0b2ed4603a9eac6332a8d34b))


### Other Changes

* :art: added circular progress default theme ([9ac5aed](https://github.com/adaptui/react-native-tailwind/commit/9ac5aedbf15066677332d688356530aa16468f43))
* :art: added hint based and default sizes for circular progress ([ec1f551](https://github.com/adaptui/react-native-tailwind/commit/ec1f551e603615340ce374b23027fb07cde16a11))
* :art: added icon sizes and loading spinner sizes ([68bd1d9](https://github.com/adaptui/react-native-tailwind/commit/68bd1d9473ed9bbf9becd0b40e6a22480866223d))
* :art: added icon styles to default theme ([95af08d](https://github.com/adaptui/react-native-tailwind/commit/95af08d4fabb072ba6c153c9991c5fa2b4f1d9a6))
* :art: added prefix default styles to input theme ([bb3ffe8](https://github.com/adaptui/react-native-tailwind/commit/bb3ffe864b975586edd8394a96c0e6305c331262))
* :art: added spinner styles for loading button ([ffeee8c](https://github.com/adaptui/react-native-tailwind/commit/ffeee8cf5b0ced22cfa75ae674351a3dd5b5a444))
* :art: added spinner styles to default theme ([c442051](https://github.com/adaptui/react-native-tailwind/commit/c442051bb1333918252fee3f1a3e4ae3b2aacba0))
* :art: added suffix slot styles and changed closable slot style ([35393af](https://github.com/adaptui/react-native-tailwind/commit/35393af4a511f7be69e8ddf8bdca979ff6cd1a10))
* :art: added tag styles to default theme ([cc25996](https://github.com/adaptui/react-native-tailwind/commit/cc25996718cb9e8859c88d40cb5de71e93512040))
* :art: added typing style to default theme ([881a52d](https://github.com/adaptui/react-native-tailwind/commit/881a52d26ca3d589b367aceca36bbc5b7da7f0c9))
* :art: changed width style to min width for prefix and suffix containers ([7b754ff](https://github.com/adaptui/react-native-tailwind/commit/7b754ff3ba118873aa6595593f7e0327e9e0cab6))
* :art: changed width to min-width for prefix and suffix style ([8ef2a17](https://github.com/adaptui/react-native-tailwind/commit/8ef2a17cf1fc6b6492946899a37f7bec3f889c30))
* :art: extended default tailwind config with new colors and fontSize ([a5b160f](https://github.com/adaptui/react-native-tailwind/commit/a5b160fa75634652ba017657219c56a8ccfe5b72))
* :art: fixed icon container styling for prefix and suffix ([ebf6cd1](https://github.com/adaptui/react-native-tailwind/commit/ebf6cd116ccffaaef42003d03c5c6388f74dce48))
* :art: split size dependent styling into specific container and text styles ([0be6c76](https://github.com/adaptui/react-native-tailwind/commit/0be6c7674bc1c8e164fe6ccf94dc83d26bca88c1))
* :art: updated Avatar status styles ([28b793d](https://github.com/adaptui/react-native-tailwind/commit/28b793d6110b022ff8f13407fc3bcc7057ac5b8e))
* :art: updated color palette ([dd35d6f](https://github.com/adaptui/react-native-tailwind/commit/dd35d6f053e71cedf8156ec1266e3de8c158af02))
* :pencil2: changed key size -> spacing in avatar wrapper theme ([1077d09](https://github.com/adaptui/react-native-tailwind/commit/1077d0973742441c98b3acd6fdbc9171e8a9597d))
* :pencil2: fixed ghost input focus text color ([d61ff87](https://github.com/adaptui/react-native-tailwind/commit/d61ff87a5fc941f03292bd31101f81d79b0b9fb5))


### Code Refactors

* :art: changed style px[6px] -> px-1.5 ([9cfeda3](https://github.com/adaptui/react-native-tailwind/commit/9cfeda317045968957b31dc4a00f789b10d98c63))
* :coffin: removed react native storybook loader ([0202e8f](https://github.com/adaptui/react-native-tailwind/commit/0202e8fa3a86b1d60319eb3bb3af839b1f1aaaf0))
* :coffin: removed switch styles which has been moved to theme ([12bfd2c](https://github.com/adaptui/react-native-tailwind/commit/12bfd2c1aa93cc0ec6c48bf5aaa9be34b4a56900))
* :fire: removed unwanted code ([2478545](https://github.com/adaptui/react-native-tailwind/commit/247854559397d5e92a5abf0e45bc2b966683d925))
* :heavy_minus_sign: removed base and added ringStyle to avatar wrapper style ([b47d30f](https://github.com/adaptui/react-native-tailwind/commit/b47d30f6b58992d19f007823fc09149855b8b3bd))
* :heavy_minus_sign: removed box/text element create functions and stories related to it ([c063e4d](https://github.com/adaptui/react-native-tailwind/commit/c063e4dbd19f71a211fd3884acf609e0cc0ec656))
* :heavy_minus_sign: removed console log ([e0ef5f7](https://github.com/adaptui/react-native-tailwind/commit/e0ef5f7c06e52d76148a1066aaf76b7127d04e89))
* :heavy_minus_sign: removed unnecessary files ([ef8dc66](https://github.com/adaptui/react-native-tailwind/commit/ef8dc6601484ed0e2c019e552b8545138a3c0d9e))
* :label: added proper types to the TailwindThemeProvider props ([44ee3a1](https://github.com/adaptui/react-native-tailwind/commit/44ee3a181482e4d32a3c393abfe1b0c7d19466cd))
* :label: updated avatar status type ([adc7120](https://github.com/adaptui/react-native-tailwind/commit/adc71200a595af4195c7a371543b46234d6a0b35))
* :recycle: added commentsa and fixed variable names ([8f29a32](https://github.com/adaptui/react-native-tailwind/commit/8f29a32110e6aaf10b6cbe53590f846bba565e9d))
* :recycle: added container and text style prop, integrated with useBadgeProps hook ([54fd144](https://github.com/adaptui/react-native-tailwind/commit/54fd14452f55e7d4ac84e34705a4969ec7045c3d))
* :recycle: added cx to tailwind classnames, removed usage of lodash pick ([7d05891](https://github.com/adaptui/react-native-tailwind/commit/7d05891fee600b96a40301b39a9a5e97c16c3dea))
* :recycle: added useProgressBarProps hook for handling props ([a2a9efd](https://github.com/adaptui/react-native-tailwind/commit/a2a9efdbc41d13ef6a6f9dbffcfd617e0c96cefa))
* :recycle: avatar comp refactored to work with props hook and also under AvatarGroup ([0f53937](https://github.com/adaptui/react-native-tailwind/commit/0f539370a13947887fe649a0e42bfa07e51f6a10))
* :recycle: destructuring of props to assign default values ([b4ed58c](https://github.com/adaptui/react-native-tailwind/commit/b4ed58cb27f0f1be9b0e4a98d5b0441396c530ca))
* :recycle: made suffix to work as slot, better prop names with desc and fixed all imports ([f0ec055](https://github.com/adaptui/react-native-tailwind/commit/f0ec05567e9ee4b4d80a0ed4868337cd0198019b))
* :recycle: moved prefix and suffix to separate conditional renders ([3d8c860](https://github.com/adaptui/react-native-tailwind/commit/3d8c86025cc39e087f9151fdd68a0187fe45d4be))
* :recycle: moved switch related constants to switch Theme ([2c31c2f](https://github.com/adaptui/react-native-tailwind/commit/2c31c2f0f1579c8b6fe3f51dca4aa8e5651a148a))
* :recycle: refactored create component and element util function ([13fff7b](https://github.com/adaptui/react-native-tailwind/commit/13fff7b2edd03c28366a2709f8d06eb55d831394))
* :recycle: refactored structure of Touchable primitive component ([a65dc95](https://github.com/adaptui/react-native-tailwind/commit/a65dc9513522f1c9ed980db637cac326f03ec1ed))
* :recycle: refactored Text component ([5358e6a](https://github.com/adaptui/react-native-tailwind/commit/5358e6a44245adb40600e4034ebc7bf119053807))
* :recycle: removed useBadgeProps hook, added prefix & box style, text style overiding case ([83876b8](https://github.com/adaptui/react-native-tailwind/commit/83876b8f5a88e5548afd9c7503cba77acfd20152))
* :recycle: switch component final refactor ([39681ef](https://github.com/adaptui/react-native-tailwind/commit/39681ef3155e74edcff827e0ab8dbc86228084f2))
* :recycle: updated AnimatedBox component with common export ([f57ddb5](https://github.com/adaptui/react-native-tailwind/commit/f57ddb5b6f961e16dfd57a7eb06c60d546493c23))
* :recycle: updated avatar styles with status(Active, away, sleep) ([781c04b](https://github.com/adaptui/react-native-tailwind/commit/781c04b710a65103e4507b4c8ad17b48a1b7c830))
* :recycle: updated component with default theme styling from context ([fce5ff8](https://github.com/adaptui/react-native-tailwind/commit/fce5ff87915db877430ade2f3af6f59eaedf0cc2))
* :recycle: used simple prop destructuring to Avatar Status ([def1c80](https://github.com/adaptui/react-native-tailwind/commit/def1c8010ba2b0645fe744c9892106c046ba8538))
* :rewind: removed white bg and changed namings of knob style ([cc6ed1a](https://github.com/adaptui/react-native-tailwind/commit/cc6ed1a27accc9bad7c6059860b4dd5c35451465))
* :sparkles: fixed imports and tweaked typing transition animation ([87527b7](https://github.com/adaptui/react-native-tailwind/commit/87527b705dc5950ae39c5ec2151bc9dbab9cf36e))
* :truck: renamed switchStyles to switchConstants ([bf2c74b](https://github.com/adaptui/react-native-tailwind/commit/bf2c74b96fef3f8437649af0efc0ae12ab1423af))
* :zap: added prop details, default value for state, knob color ([e4c7578](https://github.com/adaptui/react-native-tailwind/commit/e4c757864c8d4f83fb6bef52485bca6816f30529))
* :zap: wrapped DefaultUser inside Icon component with Avatar size based styling ([688fc01](https://github.com/adaptui/react-native-tailwind/commit/688fc019913971ebe0e6abf518f7f9a318bf5a81))


### CI Changes

* **apps:** 💚 add actions, renovate and kodiak ([#38](https://github.com/adaptui/react-native-tailwind/issues/38)) ([8f10f21](https://github.com/adaptui/react-native-tailwind/commit/8f10f21344d115857c2dc24f47f0508c6c0a28b3))
* **deps:** ➖ remove react native apps auto updates ([#40](https://github.com/adaptui/react-native-tailwind/issues/40)) ([b1dbad3](https://github.com/adaptui/react-native-tailwind/commit/b1dbad3e86e0d23a7138d373f205aa7b19bae069))


### Maintanance Updates

* :adhesive_bandage: sorted imports ([e1ab51e](https://github.com/adaptui/react-native-tailwind/commit/e1ab51ea236576b01ff26af9f89b35b3afbf1ff6))
* :alien: added drawer navigation with Avatar and Button component screen ([04bd2a2](https://github.com/adaptui/react-native-tailwind/commit/04bd2a2bc168247f3661a64ad95587154f582803))
* :alien: moved example project to expo ([542e747](https://github.com/adaptui/react-native-tailwind/commit/542e747157310eb4b200944c2a613629dc7f9b38))
* :art: added 'absolute' to knob position style ([9b24deb](https://github.com/adaptui/react-native-tailwind/commit/9b24deba92ef1a47b6f128c0b93a1c1d121ac68a))
* :art: added border color and removed border width from knob styles ([b69e546](https://github.com/adaptui/react-native-tailwind/commit/b69e5464161865f6d367f2f629be8f539e19d80e))
* :art: added checkbox default theme ([5ec92a8](https://github.com/adaptui/react-native-tailwind/commit/5ec92a8cfbebb91fa202c0f7cac76a20d7b3461f))
* :art: added conditional filled bar style for flat borders ([f036d70](https://github.com/adaptui/react-native-tailwind/commit/f036d707099b3eaad1e8a7c9195b6c9885931a60))
* :art: added controllable args to Default Avatar Group story ([fe498ac](https://github.com/adaptui/react-native-tailwind/commit/fe498accbdb033f5c69371e868927d62e09b1968))
* :art: added default input component theme ([4316d9e](https://github.com/adaptui/react-native-tailwind/commit/4316d9e2ac08c96cd46090eb72cd84ddf2501773))
* :art: added disabled and knobIcon styles ([8f0f066](https://github.com/adaptui/react-native-tailwind/commit/8f0f0660075b8f24bb0f77b3039484def034c2b1))
* :art: added focusWeb key for web specific theme ([5f2a755](https://github.com/adaptui/react-native-tailwind/commit/5f2a755ed716b9d2b3c046e11f5497b36b397428))
* :art: added meter styles to default theme object ([6c529d8](https://github.com/adaptui/react-native-tailwind/commit/6c529d8c98a4ddd69d48ca61e1e4e4dc3bd59691))
* :art: added pressed/hovered style for the radio ([1a9362e](https://github.com/adaptui/react-native-tailwind/commit/1a9362e8e5f36bf0583f3468602993daa70d87a7))
* :art: added select styles to default theme ([d5adf67](https://github.com/adaptui/react-native-tailwind/commit/d5adf67ae6dca5d4913298238543da476b4e197e))
* :art: added size based borderRadius value to avatar theme ([890a322](https://github.com/adaptui/react-native-tailwind/commit/890a3227df8fe91d0d2971cfb47a26fa1e29fe18))
* :art: added slider style to default theme ([42d8969](https://github.com/adaptui/react-native-tailwind/commit/42d89697876aad000589083d096f4daed9f29fcb))
* :art: added spinner and suffix default styles ([144bb44](https://github.com/adaptui/react-native-tailwind/commit/144bb44fe83c9b346f06092da6db8aa68036f892))
* :art: added storybook web config ([b11f35c](https://github.com/adaptui/react-native-tailwind/commit/b11f35c94928c47894e40954b4305990f1cbf99d))
* :art: added storybook web scripts and other dependencies ([a5ba80a](https://github.com/adaptui/react-native-tailwind/commit/a5ba80aaebb32e4cb26d1c4e4b1737167f0c7174))
* :art: added tooltip styling to default theme ([3dea302](https://github.com/adaptui/react-native-tailwind/commit/3dea3029a6c1b57b09274e688ac051e34e36c65d))
* :art: changed default fill color ([26c6368](https://github.com/adaptui/react-native-tailwind/commit/26c6368919333515487a714a7fafd9651ad6dcd0))
* :art: fixed badge stack container style ([de6c689](https://github.com/adaptui/react-native-tailwind/commit/de6c6895a583e86241983b3f385636cc5380fbb4))
* :art: fixed text style ([2031617](https://github.com/adaptui/react-native-tailwind/commit/20316177dea82de4b4e2dcbcf692debcaafa85c6))
* :art: moved colors to extend in tailwind config ([b7945e7](https://github.com/adaptui/react-native-tailwind/commit/b7945e762f042e6bf88225693cd797ffb20c3f77))
* :art: updated adapt ui colors ([3223f40](https://github.com/adaptui/react-native-tailwind/commit/3223f406155631706ec3cd97ac64669c842d4cba))
* :art: updated avatar style based on new colors ([5b3cd7d](https://github.com/adaptui/react-native-tailwind/commit/5b3cd7dd5a5d1178b371dd060b5c4c0cc68350b4))
* :art: updated button theme ([125095a](https://github.com/adaptui/react-native-tailwind/commit/125095ab69ef65106393eef7376ef6ccf45667b4))
* :art: updated colors in badge theme ([10f9bfd](https://github.com/adaptui/react-native-tailwind/commit/10f9bfd2a355a7367f854498412ce3a35924e280))
* :art: updated Icon component to use color prop as svg fill color ([7a1a0ce](https://github.com/adaptui/react-native-tailwind/commit/7a1a0ce947a8c706f44b08a9d658271263de9b21))
* :art: updated prefix and suffix container styles ([e581022](https://github.com/adaptui/react-native-tailwind/commit/e58102259a8702e03bdf33b330b733f70f7dd8c8))
* :art: updated primitive component stories ([9050a42](https://github.com/adaptui/react-native-tailwind/commit/9050a42e39db47f57f4d52a2e9069d17712d5915))
* :art: updated track styles and knob position ([38996ee](https://github.com/adaptui/react-native-tailwind/commit/38996eeb4166196b0faee36377d99a737f8b7317))
* :bento: added avatar component svg assets ([63be5c9](https://github.com/adaptui/react-native-tailwind/commit/63be5c9f155b39ffa9b1f06e002f0f3dab37140c))
* :bento: added Close icon as svg ([b8e5700](https://github.com/adaptui/react-native-tailwind/commit/b8e5700a8869574d19bee6f2e35e331b48ade6e5))
* :bento: added Equals icon svg ([d1409f8](https://github.com/adaptui/react-native-tailwind/commit/d1409f8c11aacf0917731c31cc85e7276098a7f7))
* :bento: added new set of icons ([41c35a5](https://github.com/adaptui/react-native-tailwind/commit/41c35a5caf9102befd2379d6ebf751dc29981cdc))
* :bento: added Search icon ([53578ad](https://github.com/adaptui/react-native-tailwind/commit/53578adddbd218114c4fe81f6a2582d9594acd5f))
* :bento: added svg assets for Avatar Component ([7cf8a27](https://github.com/adaptui/react-native-tailwind/commit/7cf8a27ce4c7da37104ad7e602e3fa6022034771))
* :bento: added svg icon assets ([5225bef](https://github.com/adaptui/react-native-tailwind/commit/5225befa31e011faac73c7bd5f00316289c5a5ce))
* :bento: added tooltip arrow ([a6150af](https://github.com/adaptui/react-native-tailwind/commit/a6150af4de31c24d9fda2c61abc834013f57ed27))
* :bug: changed file import from storybook-react to storybook-react-native ([1c744fd](https://github.com/adaptui/react-native-tailwind/commit/1c744fdf3ea40ad65cc218b841c914cb377424a3))
* :bug: changed value to defaultValue ([c21b970](https://github.com/adaptui/react-native-tailwind/commit/c21b970c18e6520b49ae78f2a26acda895c005df))
* :coffin: deleted component stories ([d15f953](https://github.com/adaptui/react-native-tailwind/commit/d15f9538447b9383ad99dfc218876283739d3bb9))
* :coffin: removed example project ([9ec1916](https://github.com/adaptui/react-native-tailwind/commit/9ec1916dc647ea50b026d9d7e048a372466b6880))
* :coffin: removed example project ([5560949](https://github.com/adaptui/react-native-tailwind/commit/5560949ef64a28772b79bebe28d9c482d73df196))
* :coffin: removed importsNotUsedAsValues rule ([958a715](https://github.com/adaptui/react-native-tailwind/commit/958a715ae9ba0eff958b534eb6d72d8942563537))
* :coffin: removed stories ([fc3a0fe](https://github.com/adaptui/react-native-tailwind/commit/fc3a0fe80139cef27506dcb5d8f1da6c6dc24153))
* :coffin: removed storybook ([5681b17](https://github.com/adaptui/react-native-tailwind/commit/5681b177d5a853b35ca24caac17d11d5dae8a024))
* :dizzy: added Animated Box component to storybook ([c47a4eb](https://github.com/adaptui/react-native-tailwind/commit/c47a4eb97cf6fe27cd31b3fea87dbf24e5a9738f))
* :dizzy: added Default Progress Component story ([f4fa540](https://github.com/adaptui/react-native-tailwind/commit/f4fa5400cd4fad0c124dc4bda779e501768358e8))
* :dizzy: integrated library default theme with context ([4a2e3c2](https://github.com/adaptui/react-native-tailwind/commit/4a2e3c235b265bf9926130ec51ebc48e54be3d79))
* :dizzy: integrated rn-gesture handler and reanimated with Android ([1e8fc09](https://github.com/adaptui/react-native-tailwind/commit/1e8fc097607ff5e79db1e4d7e79728bbdf79593b))
* :dizzy: update switch component stories ([22336d9](https://github.com/adaptui/react-native-tailwind/commit/22336d96567fb97f14f6f0247680f8601b4ca5a0))
* :egg: added common export files ([38c0231](https://github.com/adaptui/react-native-tailwind/commit/38c02310997514a1bfaa3da43f027ca83cd767d4))
* :fire: removed babel config ([d47fb3a](https://github.com/adaptui/react-native-tailwind/commit/d47fb3a08e61c170bc70d412e44eab28479a4366))
* :fire: removed unused style object ([444b3d2](https://github.com/adaptui/react-native-tailwind/commit/444b3d230b2d0a38e567308a8c40b0b55d28db6d))
* :green_heart: updated dependencies to latest version ([a716e95](https://github.com/adaptui/react-native-tailwind/commit/a716e9568cef95e37c47771ced89b5053e1a0cba))
* :green_heart: updated package dependencies ([72c8656](https://github.com/adaptui/react-native-tailwind/commit/72c8656ab66412753e9e0ced0c363690f2c02b11))
* :heavy_minus_sign: removed createButtonIcon function ([72a9067](https://github.com/adaptui/react-native-tailwind/commit/72a90671aa696d2e148a0802d589d21dfe877103))
* :heavy_minus_sign: removed SleepIndicator svg ([6a0445b](https://github.com/adaptui/react-native-tailwind/commit/6a0445b3ebae52687cdfe833e95fbcb1a6682d23))
* :heavy_minus_sign: removed withDelay function which wrapped withRepeat animation ([9fd5f54](https://github.com/adaptui/react-native-tailwind/commit/9fd5f5498672d1962d7d84895760259062863cfa))
* :heavy_plus_sign: added button component ([3e0bec0](https://github.com/adaptui/react-native-tailwind/commit/3e0bec0db6c7b741f98151448ad5077449a9cb6e))
* :heavy_plus_sign: added reanimated and gesture handler libraries ([c647ccd](https://github.com/adaptui/react-native-tailwind/commit/c647ccde668114139e282dd4b9e043c049b521a6))
* :label: added 'min' and 'hint' as props types ([2db3be2](https://github.com/adaptui/react-native-tailwind/commit/2db3be289b21f48921e180072083b3fdab1fd7e0))
* :label: added circluar progress props hook with default values ([7ba6864](https://github.com/adaptui/react-native-tailwind/commit/7ba6864c57a7b9b3dd9b59e25128175746249f9c))
* :label: added icon and spinner as button option props ([d7e8e15](https://github.com/adaptui/react-native-tailwind/commit/d7e8e15d2437ff1c7c4d372f7bb7a02c01a8466e))
* :label: added loading key to Button props ([3e6ec88](https://github.com/adaptui/react-native-tailwind/commit/3e6ec88e3e0d2412f054dc425ec9895ca14e04c0))
* :label: added prefix and suffix props as Button Options ([e3d41c7](https://github.com/adaptui/react-native-tailwind/commit/e3d41c7fd5a1aaa780e5bd1c6e324385ce12d374))
* :label: added prefix, suffix and closable as tag options ([af48e0a](https://github.com/adaptui/react-native-tailwind/commit/af48e0aebaa4b3c8808ed47bdca6671242771b00))
* :label: added RenderPropType, RenderProp and IconProps types ([504ef1d](https://github.com/adaptui/react-native-tailwind/commit/504ef1d152677fd6b7ccb8aa943555a3a53dc097))
* :label: added size and parentsBackground properties to AvatarStatusProp type ([8a996b3](https://github.com/adaptui/react-native-tailwind/commit/8a996b38dd3d5d7c762aa79a386f2a3782805e32))
* :label: added size prop to AvatarImage component for borderRadius value ([dbedfc5](https://github.com/adaptui/react-native-tailwind/commit/dbedfc5b6924e4d62b03ffbc15374606c4e8ec73))
* :label: assigned IconProps to SVG PathProps ([12d8c23](https://github.com/adaptui/react-native-tailwind/commit/12d8c232773d4aee354b38362d4cb8517e72652e))
* :label: fixed type import from Animated package ([cef947d](https://github.com/adaptui/react-native-tailwind/commit/cef947d742d3801f93e842bd01a11d03c275df64))
* :label: replaced any with unknown type ([9bfd03c](https://github.com/adaptui/react-native-tailwind/commit/9bfd03c59a6ecf0fadc7b6606812df22adc9d0e9))
* :mag: refactored import statements ([84fe67e](https://github.com/adaptui/react-native-tailwind/commit/84fe67ea503dda47e27d21ad34c5551eb3403f8b))
* :memo: added Avatar component to Storybook ([f8cfe75](https://github.com/adaptui/react-native-tailwind/commit/f8cfe75ff2fd3abc7329b84ee695f86d1ce5ea31))
* :memo: added more specific Button Component stories ([eaa5943](https://github.com/adaptui/react-native-tailwind/commit/eaa594397f130baf35494619de8de4b364cc0ddb))
* :memo: updated README.md ([3969cb5](https://github.com/adaptui/react-native-tailwind/commit/3969cb512b53d773724a779ed5e6251c971c30e8))
* :memo: updated README.md ([ed086e2](https://github.com/adaptui/react-native-tailwind/commit/ed086e242eb652393e4819aa7b4f5585f60c4347))
* :package: added @react-native-aria/overlays ([fde2b36](https://github.com/adaptui/react-native-tailwind/commit/fde2b36f17d51373bb3961912a744a0a78adbca4))
* :package: added bottom sheet ([6c74f16](https://github.com/adaptui/react-native-tailwind/commit/6c74f16bd6f182f3f7de452c91eb97489e0a8c47))
* :package: added lodash types package ([18eb285](https://github.com/adaptui/react-native-tailwind/commit/18eb285cc85da14a90a8c7a5c65d1afa3f29db1c))
* :package: added react aria visually hidden package ([f2a69e4](https://github.com/adaptui/react-native-tailwind/commit/f2a69e4a4722ed424df2f48b2b126d142b920996))
* :package: added react aria visually hidden package ([587cc18](https://github.com/adaptui/react-native-tailwind/commit/587cc1864fdb54f3a1d27979095a3b663f1f36a8))
* :package: added react native aria checkbox hooks ([2033c90](https://github.com/adaptui/react-native-tailwind/commit/2033c90609a348753ba30313d64a6fa3c40203b6))
* :package: added react native aria checkbox hooks ([d931f50](https://github.com/adaptui/react-native-tailwind/commit/d931f50a0d594b0427122c9dedbeb17f20bb5587))
* :package: added react native aria interactions, react stately overlays packages ([5244071](https://github.com/adaptui/react-native-tailwind/commit/52440711e63e038c3a34623a1ed7b3d6702a67f2))
* :package: added react native popper ([55882bc](https://github.com/adaptui/react-native-tailwind/commit/55882bc9cbeb07a6a20ae3490d41f4bc86fc3f90))
* :package: added react native tailwind package and included ts build configs ([81d81c5](https://github.com/adaptui/react-native-tailwind/commit/81d81c51396da7a5b6dc627217b1ff9d302c03ad))
* :package: added react-native-gesture-handler as dependency ([49eb6d5](https://github.com/adaptui/react-native-tailwind/commit/49eb6d54db95bd6ae6158b541df00191234f9595))
* :package: added react-native-popper package ([ace5933](https://github.com/adaptui/react-native-tailwind/commit/ace59336ccd507209053a4c68f60249cd9bcbcc3))
* :package: added react-native-svg dependency ([f097d12](https://github.com/adaptui/react-native-tailwind/commit/f097d126df6dab42d0e5894a5da21c46c8bb9441))
* :package: added react-native-svg package ([af8687e](https://github.com/adaptui/react-native-tailwind/commit/af8687e1f40d53dfb4f7741bbc6d8e1a8f2bc48e))
* :package: added reanimated as a dependency ([782fe28](https://github.com/adaptui/react-native-tailwind/commit/782fe288cb3890c3a50fef7c3af9c7093079aa54))
* :package: changed order of package dependencies ([e8288bf](https://github.com/adaptui/react-native-tailwind/commit/e8288bf30d7e21d2dc1960d714fe7f6249596e4c))
* :package: changed versions of reanimated and gesture-handler supported by expo ([b9f0704](https://github.com/adaptui/react-native-tailwind/commit/b9f0704f9ade82772b53997a05322cffef726fe7))
* :package: fixed reanimated and gesture-handler versions ([726d808](https://github.com/adaptui/react-native-tailwind/commit/726d8081d300447e11923453b6a8ddc7ff9972ac))
* :package: moved some packages to devDependencies ([57f50b9](https://github.com/adaptui/react-native-tailwind/commit/57f50b90b15cd77ebb8b0d56618887e048b01e13))
* :package: rebase changes ([4324d5e](https://github.com/adaptui/react-native-tailwind/commit/4324d5efaf36c1228cf1f64d749ffe893831182f))
* :package: rebase changes ([6226f10](https://github.com/adaptui/react-native-tailwind/commit/6226f1057c695867ea9f20e6f9c5a531c25c5054))
* :package: removed react types ([a37ffff](https://github.com/adaptui/react-native-tailwind/commit/a37ffff57f18c23b37d509a9e08096d97084b86a))
* :package: removed unnecessary scripts ([b30e8b6](https://github.com/adaptui/react-native-tailwind/commit/b30e8b6f5833f77645100908ed814e3398e7c787))
* :package: updated dependenciest to their latest versions ([2b1ddb3](https://github.com/adaptui/react-native-tailwind/commit/2b1ddb3015c769a8b500e77b3dee46036ea4013e))
* :package: updated expo ([0e02103](https://github.com/adaptui/react-native-tailwind/commit/0e0210306093ba03acaf25661b02366541e6135b))
* :package: updated expo ([54b9ab5](https://github.com/adaptui/react-native-tailwind/commit/54b9ab5b391f0d3fa24513b1b9fc5d78d9d1b842))
* :package: updated packages to support expo ([76f1fae](https://github.com/adaptui/react-native-tailwind/commit/76f1faedeedbac2a04a282873915fe0d8e09fecf))
* :package: updated reanimated and expo ([c9a0fd1](https://github.com/adaptui/react-native-tailwind/commit/c9a0fd1f1ff56a72be0cb9e6212dc070dccfe363))
* :package: updated reanimated package ([514878e](https://github.com/adaptui/react-native-tailwind/commit/514878e187a675eae3959ab76ba71add46d5ac5c))
* :package: updated tailwind and tailwind react native packages ([53542a4](https://github.com/adaptui/react-native-tailwind/commit/53542a467ee686ab4b707e7a1102a4d7d8f79183))
* :pencil2: changed name from spinnerProps to spinnerLibProps ([d6738a7](https://github.com/adaptui/react-native-tailwind/commit/d6738a78172be9ea056031fb15d8d95f7b3ea5b2))
* :pencil2: changed placement to side prop name ([10be382](https://github.com/adaptui/react-native-tailwind/commit/10be3827cbaa0fb06764fca0d7e1198b90b1b631))
* :pencil2: renamed stroke prop to track ([c561486](https://github.com/adaptui/react-native-tailwind/commit/c5614863a8322b16de695db49e24455b1d4a5582))
* :pencil2: warning message typo fix ([45ef5dd](https://github.com/adaptui/react-native-tailwind/commit/45ef5ddb741264cbf3108c51e4239bd47c22ccb6))
* :recycle: replaced useTailwindThemeContext with useTheme ([d89caf7](https://github.com/adaptui/react-native-tailwind/commit/d89caf797777191298871a52967069040d3d638b))
* :rocket: created expo build ([df391a4](https://github.com/adaptui/react-native-tailwind/commit/df391a431783592315ccaf964963b860eda93796))
* :rocket: removed usage of react-native-system in imports ([759bdd7](https://github.com/adaptui/react-native-tailwind/commit/759bdd7bd07c6f6b0de2a7572c07c9046a0e498b))
* :rotating_light: fixed linter/ts errors ([7f00d02](https://github.com/adaptui/react-native-tailwind/commit/7f00d020c2a0ffa647cedf96e07753254ae9b25f))
* :see_no_evil: added a eslint disable comment for no-var-requires ([dfe7fc6](https://github.com/adaptui/react-native-tailwind/commit/dfe7fc6a5cbf2420f301bb16c4356d22a6b9097d))
* :sparkles: added a styled box story ([da2c943](https://github.com/adaptui/react-native-tailwind/commit/da2c943a1b84051389e142316c4a89172dcf0092))
* :sparkles: added arrow positioning, and web specific tooltip which appears on hover ([3f00927](https://github.com/adaptui/react-native-tailwind/commit/3f00927192c86431001ad25d4c3004bd25073ea5))
* :sparkles: added Avatar and Button examples ([37d895c](https://github.com/adaptui/react-native-tailwind/commit/37d895cbf04e489a28154421e0c130eb81302870))
* :sparkles: added Avatar component stories ([ac88587](https://github.com/adaptui/react-native-tailwind/commit/ac8858744f3ddc82b535055f76dff91fe261c8fe))
* :sparkles: added avatar group export ([220aeac](https://github.com/adaptui/react-native-tailwind/commit/220aeac80baae4f16fc2dfa0be8e349fce868661))
* :sparkles: added AvatarGroup stories ([4fd1b3f](https://github.com/adaptui/react-native-tailwind/commit/4fd1b3fdda4c622be0ef9f39b375a1b93e68855b))
* :sparkles: added Badge component stories ([ca60a29](https://github.com/adaptui/react-native-tailwind/commit/ca60a29b29b3ff5ea8df04859c78781f595ffd4d))
* :sparkles: added BadgeScreen component ([e4b9644](https://github.com/adaptui/react-native-tailwind/commit/e4b96446e22ed2b66a9b502c511229dbe7e31f37))
* :sparkles: added basic meter component ([2c72df4](https://github.com/adaptui/react-native-tailwind/commit/2c72df42e8c246869511892712ef21190cbef74f))
* :sparkles: added Button component stories ([c17f607](https://github.com/adaptui/react-native-tailwind/commit/c17f6074a360e33898a7ade1e4504f929702879e))
* :sparkles: added button example ([355826c](https://github.com/adaptui/react-native-tailwind/commit/355826c513a6210f9311ac5a18e14fe8c59aa263))
* :sparkles: added ButtonStack story ([0ec5c93](https://github.com/adaptui/react-native-tailwind/commit/0ec5c932658afb050e281d85321f44dee5db88e5))
* :sparkles: added Check icon ([9d0d392](https://github.com/adaptui/react-native-tailwind/commit/9d0d392e2349063e97fcb5d2ffc9ae63dd2cf255))
* :sparkles: added Checkbox, CheckboxGroup components ([4f40e5f](https://github.com/adaptui/react-native-tailwind/commit/4f40e5f71d559b2c6208da1460368aeb35bd73ea))
* :sparkles: added Circular Progress component stories ([f887b0d](https://github.com/adaptui/react-native-tailwind/commit/f887b0d3af4f3da4daa5802a32ddb36b719392e2))
* :sparkles: added comments, animated knob active and other refactoring ([3afaeb9](https://github.com/adaptui/react-native-tailwind/commit/3afaeb9a5ec8cacec11acf758ae3661840a247b3))
* :sparkles: added createButtonIcon and included textstyles as a prop for button ([7a4fbd4](https://github.com/adaptui/react-native-tailwind/commit/7a4fbd49b32478251007f41bc729672a1426d08a))
* :sparkles: added customised and default spinnner stories ([4f68e27](https://github.com/adaptui/react-native-tailwind/commit/4f68e27fcf46d1dc1371b0f6a0e7c04a0c89a07f))
* :sparkles: added customised Button story ([947e1a1](https://github.com/adaptui/react-native-tailwind/commit/947e1a1f7f78fa770ec0aeb44abccec118ad159c))
* :sparkles: added cx and styleAdapter util functions ([7eb84a9](https://github.com/adaptui/react-native-tailwind/commit/7eb84a9caa202b7382f46ebd70d6c6edd81682ff))
* :sparkles: added Dash icon ([8ae635a](https://github.com/adaptui/react-native-tailwind/commit/8ae635ae6240af396cd57ff6d167a29733983f20))
* :sparkles: added expo ts config to existing config ([5eeeb3e](https://github.com/adaptui/react-native-tailwind/commit/5eeeb3eb7ef918b3224bb825fd5fa155fc2f5cdb))
* :sparkles: added gesture handler global import ([14b6186](https://github.com/adaptui/react-native-tailwind/commit/14b6186b85a2e9c035ef3fdda1614b4557ba7888))
* :sparkles: added getValidChildren util function ([d34e057](https://github.com/adaptui/react-native-tailwind/commit/d34e0570847ad0976a90bb662c0d6e85b1620ec6))
* :sparkles: added hover state to Select Component ([e9458b9](https://github.com/adaptui/react-native-tailwind/commit/e9458b9b42000e8901be8d4ee8895dabc904a805))
* :sparkles: added hover/pressed style for specific web/mobile ([e0814fb](https://github.com/adaptui/react-native-tailwind/commit/e0814fb2a327a9bb055fe609c9fd8b31bb478e1d))
* :sparkles: added Input component stories ([39e368c](https://github.com/adaptui/react-native-tailwind/commit/39e368c4f690199bd30231df7c89d8e0583e549b))
* :sparkles: added InputPrefix wrapper component ([b325831](https://github.com/adaptui/react-native-tailwind/commit/b325831cc2cb4a5de5cee7177cd4b497e3e77ff0))
* :sparkles: added knobIcon and disabled props ([46c5377](https://github.com/adaptui/react-native-tailwind/commit/46c5377f4ab38c839ff1683ab3d0771f03df716a))
* :sparkles: added label/desc wrapper style ([51555ff](https://github.com/adaptui/react-native-tailwind/commit/51555fffc7b09b85d7ed821d9dbb00872b415fa6))
* :sparkles: added mergeRefs and composeEventHandlers util functions ([c03bc02](https://github.com/adaptui/react-native-tailwind/commit/c03bc0214b2a6ac1206e1a10dd0dba41b82d841f))
* :sparkles: added navigation/drawer container to the example app ([df49841](https://github.com/adaptui/react-native-tailwind/commit/df49841e2cede0ce5bf712af89552575397bb47a))
* :sparkles: added prefix option ([852136a](https://github.com/adaptui/react-native-tailwind/commit/852136a8fc06cb9c58c581327ecfc4fbf8e03941))
* :sparkles: added pressed/hovered styles based on platform ([8a581f9](https://github.com/adaptui/react-native-tailwind/commit/8a581f9e3983a2f78011f995eadc543863dcbe55))
* :sparkles: added Progress bar component ([6bf303a](https://github.com/adaptui/react-native-tailwind/commit/6bf303aef65d317ce0a547ee200afd127ddf4c50))
* :sparkles: added Progress Bar to Storybook example ([33114cd](https://github.com/adaptui/react-native-tailwind/commit/33114cde71d63bb8feee0ea0c0b731d7ffecec9c))
* :sparkles: added Progress Component storybook preview ([49c557f](https://github.com/adaptui/react-native-tailwind/commit/49c557f5f1819d3ab0b7a1c55e0a2081a06d786e))
* :sparkles: added Radio and RadioGroup components ([f6c174f](https://github.com/adaptui/react-native-tailwind/commit/f6c174f3097e95691103be5e00e8ac856237ac9c))
* :sparkles: added radio style to default theme ([073e338](https://github.com/adaptui/react-native-tailwind/commit/073e338090c95eac9dcb66f2a3a5522d1f774100))
* :sparkles: added script to supress require cycle warning ([a5f281a](https://github.com/adaptui/react-native-tailwind/commit/a5f281a8f83ec587b30ac758cb8ae9458684190d))
* :sparkles: added Select component ([c7177e7](https://github.com/adaptui/react-native-tailwind/commit/c7177e7b00ddfafa70e85a7cdb8ff772e0288f79))
* :sparkles: added select icon ([c4e24b0](https://github.com/adaptui/react-native-tailwind/commit/c4e24b0b5bba533f2f29e588637e83e56de47e42))
* :sparkles: added separate tooltip arrow component ([7c57607](https://github.com/adaptui/react-native-tailwind/commit/7c57607b791f28ffe84c141600d84dc99fb7a62c))
* :sparkles: added showTooltip prop ([5ce38ab](https://github.com/adaptui/react-native-tailwind/commit/5ce38ab1173695ca51445f227e5ea677963b656b))
* :sparkles: added size based positioning of tooltip ([c52a412](https://github.com/adaptui/react-native-tailwind/commit/c52a412af4cc9306376c513ebfda1982bafa67fd))
* :sparkles: added slider and sorted the exports ([6f3b597](https://github.com/adaptui/react-native-tailwind/commit/6f3b5977d54184a37a111119ce16002170ca10fa))
* :sparkles: added snap when step value is provided ([d8ca963](https://github.com/adaptui/react-native-tailwind/commit/d8ca963a216417444f7e14dad9ec51370a0e8904))
* :sparkles: added Spinner component preview to Storybook ([43c1093](https://github.com/adaptui/react-native-tailwind/commit/43c1093544b63fd6b8aa5a2fedff75dfc5b3a287))
* :sparkles: added spinner library prop keys ([d304168](https://github.com/adaptui/react-native-tailwind/commit/d30416829eab0f08da94728d88e8eeb8df07e5db))
* :sparkles: added suffix and prefix props, refactored TextInput props ([3f8542d](https://github.com/adaptui/react-native-tailwind/commit/3f8542dd1dcafa664ede53a09a716ad790bfad47))
* :sparkles: added suffix option and loading states ([ed316d6](https://github.com/adaptui/react-native-tailwind/commit/ed316d6789fbeb0529c032f09aa7b0bcc70ec900))
* :sparkles: added Switch component stories ([08c62b5](https://github.com/adaptui/react-native-tailwind/commit/08c62b5d546e9b03c89ed2dce1f0ba345ee963eb))
* :sparkles: added Tag component stories ([41d478f](https://github.com/adaptui/react-native-tailwind/commit/41d478f2c68339729aa0562f600a90f3e76aa8ec))
* :sparkles: added tailwindcss and latest tailwind react native classnames ([057f17e](https://github.com/adaptui/react-native-tailwind/commit/057f17e9c05d26b6a31b228ac59be06faa37ac95))
* :sparkles: added tooltip folder export ([3cc58af](https://github.com/adaptui/react-native-tailwind/commit/3cc58af3eda0079a92606ded0592ccda91640fa8))
* :sparkles: added tooltip on dragging state and other refactoring ([92f3a56](https://github.com/adaptui/react-native-tailwind/commit/92f3a569d5d3208c996dec84c6e832ad72cc475b))
* :sparkles: added Tooltip stories ([63fce91](https://github.com/adaptui/react-native-tailwind/commit/63fce918f679cd691ba4aa2c74c7884729af6419))
* :sparkles: added util functions ([de789b1](https://github.com/adaptui/react-native-tailwind/commit/de789b1ac27a7eaeff55fb0a0c0f47005e955f37))
* :sparkles: added web based focus/hover styling ([de6c03a](https://github.com/adaptui/react-native-tailwind/commit/de6c03aa34682a64b9cd4a6e0f9c98f232848aac))
* :sparkles: addesd --reset-cache to react native start command ([b5b7da7](https://github.com/adaptui/react-native-tailwind/commit/b5b7da78846e63f96c41579538e9ee22ce72b10b))
* :sparkles: changed prop key stroke to track ([e951f06](https://github.com/adaptui/react-native-tailwind/commit/e951f06bd82014925b59b1826f54e5980f1459ef))
* :sparkles: configured project using react-native-builder-bob ([76b2572](https://github.com/adaptui/react-native-tailwind/commit/76b2572ae3119d6e75f0d1faeaf403cb1e0d9864))
* :sparkles: created Button component stories ([fc0e981](https://github.com/adaptui/react-native-tailwind/commit/fc0e98199f30a9a74255012fa1c6f16f5a07612b))
* :sparkles: created InputSuffix component ([c538044](https://github.com/adaptui/react-native-tailwind/commit/c538044656f7ede6ba5629d2ddf3ca88d41baa2b))
* :sparkles: created Slider Filled Track component ([3f11507](https://github.com/adaptui/react-native-tailwind/commit/3f11507c8c04cbe6a1633b746443c13a16a3e694))
* :sparkles: created Slider Track component ([732a9b4](https://github.com/adaptui/react-native-tailwind/commit/732a9b495d510f5709904845427694bbc24cc956))
* :sparkles: created SliderTooltip ([50b2e91](https://github.com/adaptui/react-native-tailwind/commit/50b2e911bb36c84027aa9ec59346da19287fff36))
* :sparkles: fixed default switch component colour animation issue ([6ae2930](https://github.com/adaptui/react-native-tailwind/commit/6ae29300f4ae10bca73e8413df3ecfb6d4265fd1))
* :sparkles: fixed knob and tooltip position ([a8a4e94](https://github.com/adaptui/react-native-tailwind/commit/a8a4e943913c47bcc7ff6fd76e6ade3e11093fce))
* :sparkles: fixed slider tooltip position ([08f2b97](https://github.com/adaptui/react-native-tailwind/commit/08f2b97f43250b56e5147235fbe6dcaed169e1aa))
* :sparkles: fixed the story loader module issue ([0346f54](https://github.com/adaptui/react-native-tailwind/commit/0346f54cb3b90941ca3a849a1ec0cba125927926))
* :sparkles: listed all stories ([a329255](https://github.com/adaptui/react-native-tailwind/commit/a329255ed5fe383e846ba2d440b38ea9ff4f171c))
* :sparkles: made storybook example app work in both mobile and web ([0c8357e](https://github.com/adaptui/react-native-tailwind/commit/0c8357ec58ca2038f21f000d4f2708b62d1b2ec6))
* :sparkles: passed Animated.View to createComponent function to enable ref ([2d5b535](https://github.com/adaptui/react-native-tailwind/commit/2d5b53515d71aed8661900414f76d23b22d98ca6))
* :sparkles: passed size to SliderTooltip, repositioned knob, changed filled track styles ([c78160f](https://github.com/adaptui/react-native-tailwind/commit/c78160f3fa869b9087dbd9f20f48b856aa1c074c))
* :sparkles: refactored Avatar and AvatarGroup component ([dd0bd17](https://github.com/adaptui/react-native-tailwind/commit/dd0bd17547850c9bd408eae5427e54b4ea87dd58))
* :sparkles: refactored to work with the web ([88f63ac](https://github.com/adaptui/react-native-tailwind/commit/88f63acf34daa295858ae3b22ed02de3ca7a6c8f))
* :sparkles: removed position styles for track ([166c878](https://github.com/adaptui/react-native-tailwind/commit/166c878dbf8b721e3e1db26dcea511e4816ba422))
* :sparkles: replaced old create function with the new createComponent util function ([a5f0bc4](https://github.com/adaptui/react-native-tailwind/commit/a5f0bc4f5bb1aa999df639f45f0361defa8110cf))
* :sparkles: replaced Touchable in place of Box to enable touch events on prefix and suffix ([c95a86a](https://github.com/adaptui/react-native-tailwind/commit/c95a86a5a7a406e8b6534ed3922a4c978ad6da27))
* :sparkles: tweaked progress state hook to accept step up value as another param ([8701dd8](https://github.com/adaptui/react-native-tailwind/commit/8701dd8caeac150da75628ccf17f5e374204f589))
* :sparkles: updated Avatar component related stories ([072fdb6](https://github.com/adaptui/react-native-tailwind/commit/072fdb6ed302e668a3d4cc3dcbc043c14baac0c5))
* :sparkles: updated Avatar story with Avatar in background ([59bc0f0](https://github.com/adaptui/react-native-tailwind/commit/59bc0f0ef140af7597f1a248b5083a6aca70a8ab))
* :sparkles: updated circular progress with a different step up value ([abce92b](https://github.com/adaptui/react-native-tailwind/commit/abce92b3649fcf94e3f4af2944b63a3c5dba621b))
* :sparkles: updated example app ([b32ee7d](https://github.com/adaptui/react-native-tailwind/commit/b32ee7d23b5d0bd60fb1cdf7d45975846672de27))
* :sparkles: updated fontsize ([b126f7b](https://github.com/adaptui/react-native-tailwind/commit/b126f7bb6ad4a360b4d95909c1b30ea24c200820))
* :sparkles: updated imports and enabled components to receive ref as props ([5f6a548](https://github.com/adaptui/react-native-tailwind/commit/5f6a5483d03e7f28590ad65fcb580c203fa5a253))
* :sparkles: updated track style and added tooltip text style ([680b449](https://github.com/adaptui/react-native-tailwind/commit/680b449e95b1655fb82ab7c52a24c109a995c8d7))
* :sparkles: updated version of react-native-gesture-handler ([8c0d9f7](https://github.com/adaptui/react-native-tailwind/commit/8c0d9f74d54ef9dbf003c848454c3802938dacb3))
* :sparkles: wrapped <Story/> inside OverlayProvider ([a7c850b](https://github.com/adaptui/react-native-tailwind/commit/a7c850b7b6468fc6cee95cec257e3b8878f7c861))
* :sparkles: wrapped Tooltip component ([0738fc2](https://github.com/adaptui/react-native-tailwind/commit/0738fc2ef57fd974de6cef0b94f25673c70d5e1d))
* :tada: added Avatar Group Stack to storybook ([f87ae23](https://github.com/adaptui/react-native-tailwind/commit/f87ae237989f6d26b1b9e61d2d1551b3bc3be846))
* :tada: added loading button stories ([faaf277](https://github.com/adaptui/react-native-tailwind/commit/faaf2772f1123574fa7ed076d0a6b128bde0200b))
* :tada: created basic Input component ([c903499](https://github.com/adaptui/react-native-tailwind/commit/c9034999396eff21141c1fdc38d4d647321da21a))
* :tada: created TextInput primitive ([b8149d5](https://github.com/adaptui/react-native-tailwind/commit/b8149d5460868f81eafb6963a28c1bea39608a79))
* :triangular_flag_on_post: added Avatar component to storybook example ([63d9fc8](https://github.com/adaptui/react-native-tailwind/commit/63d9fc839374733a29b274544f20b773510d6a77))
* :truck: added common export for createIcon function ([8990a31](https://github.com/adaptui/react-native-tailwind/commit/8990a31d83d510eedb43c5061fcf90a87b693f95))
* :truck: added common export for switch ([850ac3c](https://github.com/adaptui/react-native-tailwind/commit/850ac3cfcfc168a684dd9fae00d45bc43568999d))
* :truck: added default export of createContext ([dfc5343](https://github.com/adaptui/react-native-tailwind/commit/dfc534389a0c152edbd21ca621cdc16b5dd2b5e0))
* :truck: added tag related files to common export ([2757155](https://github.com/adaptui/react-native-tailwind/commit/27571552547b08f7b24412a79bbc92d7b6cb1ffa))
* :truck: added test related packages and configuration ([4ae5216](https://github.com/adaptui/react-native-tailwind/commit/4ae5216a548aa2bb8e446da60a8397ab6ea83db7))
* :truck: added theme to default exporting in src ([44f3f74](https://github.com/adaptui/react-native-tailwind/commit/44f3f745d999061d8aeff775afd866b1d53201a6))
* :truck: changed import path to the specific file ([d493e97](https://github.com/adaptui/react-native-tailwind/commit/d493e97551a4c067fed1baaa53a00bc820fe9e21))
* :truck: moved Avatar Stories to a sub folder under stories ([8209fa9](https://github.com/adaptui/react-native-tailwind/commit/8209fa955353343c1c715e108990c5a3d88a5abd))
* :truck: moved progress and badge stories to components folder ([5baceee](https://github.com/adaptui/react-native-tailwind/commit/5baceeeaa6015097064f8af3235903310c24b8ec))
* :truck: renamed components folder to primitives ([54621c5](https://github.com/adaptui/react-native-tailwind/commit/54621c5c2d239c28ec289a429939255f1fc88073))
* :truck: renamed types file to avatarPropTypes ([3eb37f8](https://github.com/adaptui/react-native-tailwind/commit/3eb37f81b18f9aa6affbd3f9e430a9c552060480))
* :twisted_rightwards_arrows: moved AvatarGroup component to separate folder ([1efb18c](https://github.com/adaptui/react-native-tailwind/commit/1efb18cca75408a0c8aeb77cb21e39ff2a083f28))
* :white_check_mark: added Box primitive component tests ([ec22bc0](https://github.com/adaptui/react-native-tailwind/commit/ec22bc0407faddae685f3c0a1eb2d4c83088f3d8))
* :white_check_mark: added Text primitive component tests ([83a0158](https://github.com/adaptui/react-native-tailwind/commit/83a015850d56d0f994381db53b484205bfc00b22))
* :white_check_mark: added Touchable primitive component tests ([206e46d](https://github.com/adaptui/react-native-tailwind/commit/206e46d309c230b3d79bee4fe6d22fea8a445299))
* :white_check_mark: added TouchableWithoutFeedback primitive component tests ([b6f854e](https://github.com/adaptui/react-native-tailwind/commit/b6f854efee886355a68fe02533847b2065c92f12))
* :wrench: added eslint and prettier configuration ([00d7ea5](https://github.com/adaptui/react-native-tailwind/commit/00d7ea5e962b3893172b1bc0e41fac8e9d072376))
* :wrench: fixed import for IconProps ([f58e87f](https://github.com/adaptui/react-native-tailwind/commit/f58e87f8624e6989aa25461c108f40a40b0ee430))
* :zap: added a11y ([fa342c8](https://github.com/adaptui/react-native-tailwind/commit/fa342c8637b64fd952e6adfc0624ab901af05bc9))
* :zap: added Badge component different variations ([06f6344](https://github.com/adaptui/react-native-tailwind/commit/06f6344b0fd0939cca3d8188df632677ba3816be))
* :zap: added Badge story ([944d479](https://github.com/adaptui/react-native-tailwind/commit/944d47979346b73ed7ab612617b2adaf3ada6229))
* :zap: added Button component to storybook ([c5228a1](https://github.com/adaptui/react-native-tailwind/commit/c5228a1db05edf21357584ba25270687ecb00c59))
* :zap: added button options to hook ([4f79494](https://github.com/adaptui/react-native-tailwind/commit/4f794940ed2a4ab4afc62cbbf91d570f4f621d8c))
* :zap: added Button with prefix and suffix stories ([fc8f313](https://github.com/adaptui/react-native-tailwind/commit/fc8f313664b03dd3d52ee409838cd903027c7303))
* :zap: added Circular Progress component to Storybook ([7e835c0](https://github.com/adaptui/react-native-tailwind/commit/7e835c07ce3eda27381ca4b57cf7570d2c6d6e7f))
* :zap: added custom progres bars to storybook ([bd8b1f4](https://github.com/adaptui/react-native-tailwind/commit/bd8b1f43ca3391c304c39e520d7afe2143843db6))
* :zap: added default badge styles to the default theme ([7b54b85](https://github.com/adaptui/react-native-tailwind/commit/7b54b8513b70dd6db32fba41b9c4d61929b223ac))
* :zap: added iOS like Switch Component to storybook ([ad5111e](https://github.com/adaptui/react-native-tailwind/commit/ad5111e9ed9a58ec54b5666056385a5cd990115a))
* :zap: added jest testing for react native ([cd9b4a8](https://github.com/adaptui/react-native-tailwind/commit/cd9b4a883dd2b1600289440e6e6d8a4d9c35e5c7))
* :zap: added margin to pressed touchable style ([179db97](https://github.com/adaptui/react-native-tailwind/commit/179db9702a130215ffbe9d51a92f3c40f3866d17))
* :zap: added meter state hook ([383c316](https://github.com/adaptui/react-native-tailwind/commit/383c3164fcd9ef1825504362faab82122967c9f8))
* :zap: added optional iconSize param ([fd55aa1](https://github.com/adaptui/react-native-tailwind/commit/fd55aa127c0ce06b1d5ca25045a1807f09021fcb))
* :zap: added parentsBackground prop ([7c7cb00](https://github.com/adaptui/react-native-tailwind/commit/7c7cb0072f1712c8c53567532f709ccab0a7541b))
* :zap: added primitive component stories ([cefdbf2](https://github.com/adaptui/react-native-tailwind/commit/cefdbf22dd7bc3d98f72da39fba0b695e934b837))
* :zap: added prop control in switch storybook ([0db76aa](https://github.com/adaptui/react-native-tailwind/commit/0db76aa7b4962fb4f70d1d21d363d3c9a97a4a8a))
* :zap: added stories to storybook for the components created ([e220b0f](https://github.com/adaptui/react-native-tailwind/commit/e220b0f399ea7f4aa7ec21a34c444768c6549b87))
* :zap: added storybook to example project ([6f11f97](https://github.com/adaptui/react-native-tailwind/commit/6f11f973ac03fe9b41d24ae575f1033ef883ed6f))
* :zap: added Tag stories to storybook ([1afb237](https://github.com/adaptui/react-native-tailwind/commit/1afb23711fe70f82b49f46cc05165d28c41b5f80))
* :zap: added Tooltip Arrow ([ae91476](https://github.com/adaptui/react-native-tailwind/commit/ae914764cb75929af41920ab3c2ea7b6b56d8adc))
* :zap: added working expo app in root dir ([7fc1af4](https://github.com/adaptui/react-native-tailwind/commit/7fc1af4908905356697250a80033896d9d1cd99e))
* :zap: changed Box primitive component ([c6a41e4](https://github.com/adaptui/react-native-tailwind/commit/c6a41e4feba130676bd3fa71ca3d069eb827ad79))
* :zap: created and added Spinner Story component to Storybook UI ([ba3e738](https://github.com/adaptui/react-native-tailwind/commit/ba3e7386957b8a0bd92ad579901bd2fc1dc55891))
* :zap: created animated component using primitive Box component ([140e88d](https://github.com/adaptui/react-native-tailwind/commit/140e88d0bc1dc7276e74848f40aaa4a5d5d77b6e))
* :zap: created Badge story ([97579e9](https://github.com/adaptui/react-native-tailwind/commit/97579e90b2cd6281bd83f8d0531fd8fb65a4b2b5))
* :zap: example ios app run successfully ([5a9ef3e](https://github.com/adaptui/react-native-tailwind/commit/5a9ef3eee92dbf7711b95a8f3a9587de213aace0))
* :zap: fixed file imports and replaced createIcon in place of createButtonIcon ([bd730ef](https://github.com/adaptui/react-native-tailwind/commit/bd730ef1740d4928de7b746c5cff307d2e8d7743))
* :zap: fixed imports and turned off font scaling in Text ([4ac8626](https://github.com/adaptui/react-native-tailwind/commit/4ac8626aa3cb7fd2abd3664547c42479f025ed14))
* :zap: imported specific routes from avatar folder ([213ca0f](https://github.com/adaptui/react-native-tailwind/commit/213ca0f573b64072b40b790321e02cf8583bbfa5))
* :zap: integrated custom tailwind config/theme to work with system Provider ([d210771](https://github.com/adaptui/react-native-tailwind/commit/d2107718ed79a564e7f0e2f3d2f00b59a97ccffe))
* :zap: integrated meter with useMeterState hook ([ea37151](https://github.com/adaptui/react-native-tailwind/commit/ea37151dbf128c3784c9ca816ad917d9b13baf2f))
* :zap: moved aspect ratio value after the style property to avoid overiding ([d451003](https://github.com/adaptui/react-native-tailwind/commit/d4510034403ae6c733c6dae0ed680c5820d68c51))
* :zap: set default radio size to 'md' ([a080968](https://github.com/adaptui/react-native-tailwind/commit/a080968544deaf145117bf9ce2a1cc160068ffae))
* :zap: sorted default exports and added meter component ([ab6a4c6](https://github.com/adaptui/react-native-tailwind/commit/ab6a4c6c9b560a1113d6464e932ef5e8bf1289ed))
* :zap: updated avatar component storybook ([ab35e54](https://github.com/adaptui/react-native-tailwind/commit/ab35e540cd97703f24c591ea2448433cbb9ea38e))
* :zap: updated button stories ([fe09a3d](https://github.com/adaptui/react-native-tailwind/commit/fe09a3d6b536146543cde449fc77ef1ceb49e5a7))
* :zap: updated Circular Progress storybook ([01dc9e7](https://github.com/adaptui/react-native-tailwind/commit/01dc9e71c0cbf1c749529b41b9f742782fde39b7))
* :zap: updated stories of Box and Text ([648528e](https://github.com/adaptui/react-native-tailwind/commit/648528e9cdb9ba913b93830dbe004ffd85b4a4a1))
* :zap: updated Switch component storybookUI ([c51a789](https://github.com/adaptui/react-native-tailwind/commit/c51a789abfa18620a64d7d1630e4d6780ac5efaa))
* :zap: updated Tag stories ([a91ad22](https://github.com/adaptui/react-native-tailwind/commit/a91ad22fcafce40bf14577971ebdcf2f999badb7))
* :zap: updated tsconfig for build ([85000e3](https://github.com/adaptui/react-native-tailwind/commit/85000e321131ab114cf10ae1bc2d6f78270d19d0))
* :zap: updated types and react-native destination ([23cbe90](https://github.com/adaptui/react-native-tailwind/commit/23cbe9035548fd3e7b1e76716b5480e5cb9508b6))
* :zap: used box and text create element hooks to render stories ([e379645](https://github.com/adaptui/react-native-tailwind/commit/e379645e88d8d4d11697701025b119d00fcbf8b2))
* :zap: used tailwind context function to add styles to components ([d56ab10](https://github.com/adaptui/react-native-tailwind/commit/d56ab10316a4e694b24b8a65a9928143376b18c4))
* :zap: wrapped App insider GestureHandlerRootView ([f9b37b9](https://github.com/adaptui/react-native-tailwind/commit/f9b37b908ac250095fa90521bcaff05cf268c97f))
* :zap: wrapped StorybookUIRoot in View and fixed StatusBar issue in Android ([47e753a](https://github.com/adaptui/react-native-tailwind/commit/47e753a36fda7688bc268924c17caceb0919a9f6))
* ✨ set showRing to true in AvatarGroup ([#42](https://github.com/adaptui/react-native-tailwind/issues/42)) ([65b6d54](https://github.com/adaptui/react-native-tailwind/commit/65b6d544f600732f2c3ee3d837297d66f4cc7c3a))
* added common export file in src folder ([c6e602a](https://github.com/adaptui/react-native-tailwind/commit/c6e602a995ba13fbb178c928ed2eeb58b4996d24))
* added reanimated babel plugin ([2bec5e2](https://github.com/adaptui/react-native-tailwind/commit/2bec5e288d66bfdb6ce74d9ad76e97840a2df3a4))
* added Switch component common exports ([d3c9ff0](https://github.com/adaptui/react-native-tailwind/commit/d3c9ff01bb29aee022d7a0677d346c1c2a1f7fa8))
* added switch component to storybook ([b215fa3](https://github.com/adaptui/react-native-tailwind/commit/b215fa3e49b210542d1ed587e135574c25198f64))
* **deps:** pin dependencies ([#39](https://github.com/adaptui/react-native-tailwind/issues/39)) ([a51679d](https://github.com/adaptui/react-native-tailwind/commit/a51679dfc8129be116b1a4bc1bec5a69089a33ef))
* initial commit ([cc98a24](https://github.com/adaptui/react-native-tailwind/commit/cc98a247dbc52c5348d0236d020edc8527c466c0))
* **migration:** 🚚 separate example from core ([4059ebf](https://github.com/adaptui/react-native-tailwind/commit/4059ebfc8d462ff291872eaaaf526dc8e6fe5db7))
* **readme:** 📝 refactor ([#43](https://github.com/adaptui/react-native-tailwind/issues/43)) ([593a085](https://github.com/adaptui/react-native-tailwind/commit/593a085b07f2403834e7e4750f63d4dac08657cf))
* **release-it:** 👷 remove release tag check ([4b38fb5](https://github.com/adaptui/react-native-tailwind/commit/4b38fb5a279f79dcc6e894516503ba4562183e5a))
* **release-it:** 👷 remove yarn test check ([63eaa3e](https://github.com/adaptui/react-native-tailwind/commit/63eaa3e284b3d6028f1b198e9f416d4dafa1e090))