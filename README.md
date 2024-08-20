# Matrix WASM benchmark

## Setup

This project uses Javascript, Rust and J2CL. You'll need:

- Node and npm (preferably through volta)
- A rust installation (preferably rustup) and wasm-pack
- Java 11 and Bazel

### Rust installation

Install the [Rust toolchain](https://www.rust-lang.org/tools/install) and [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

### Java installation

If you have do not have Java 11 already you can either:
```
brew install openjdk@11
```
Or use sdkman as a version manager:
```
brew install sdkman
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install java 11.0.24-zulu 
sdk use java 11.0.24-zulu # If java 11 is not default
```
*You can choose another version of java 11 but zulu is said to work well with ARM chips*

Then install bazel:
```
npm install -g @bazel/bazelisk
```
Finally for bazel to work correctly
```
export JAVA_HOME="$(dirname $(dirname $(realpath $(which javac))))"
```
*This takes the home path of the current Java version*

## Usage

### To test js
```
cd js
npm run test-only
```

### To test rust (currently the Rust test is not called from javascript)
```
cd rust
wasm-pack build --target web
wasm-pack test --firefox --test web
```

### To test java (Seems to only work in chrome)
```
cd java
bazel build src/main/java/com/google/j2cl/samples/wasm:jsapp
bazel run src/main/java/com/google/j2cl/samples/wasm:jsapp_dev_server
```

## Todo

- Make a script to benchmark in one place
- Cleanup the 3 benchmarks
- Benchmark rust by calling it from javascript wasm API
