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

_You can choose another version of java 11 but zulu is said to work well with ARM chips_

Then install bazel:

```
npm install -g @bazel/bazelisk
```

Finally for bazel to work correctly

```
export JAVA_HOME="$(dirname $(dirname $(realpath $(which javac))))"
```

_This takes the home path of the current Java version_

## Usage

You can test js and rust using the ./benchmark.sh script. By default the script tests with the following sizes:
100, 200, 300, 400 and 500

you can also specify one or a list of matrices' size to test by simply entering arguments

```
./benchmark 500 1000
```

This code will test the sizes 500 and 1000

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

## Previous results

Rust and JS tested using the benchmark.sh script. Java is tested manually for now.
The Equal results column is compared to JS. Java long and Rust i64 seem to have equal results.
You can find the value of the total sum in the npm-test-output.txt file which is an output from one of the tests.

| Size | JS time    | Rust Time | Equal results | Rust (i64) | Equal results | Java Time | Equal results |
| ---- | ---------- | --------- | ------------- | ---------- | ------------- | --------- | ------------- |
| 100  | 639.429ms  | 367.538ms | ✅            | 352.246ms  | ✅            | 331.600ms | ✅            |
| 200  | 5.075s     | 2.933s    | ✅            | 2.824s     | ✅            | 2.673s    | ✅            |
| 300  | 17.362s    | 9.892s    | ✅            | 9.697s     | ❌            | 9.127s    | ❌            |
| 400  | 42.209s    | 23.777s   | ✅            | 22.277s    | ❌            | 18.283s   | ❌            |
| 500  | 1m28.011s  | 47.864s   | ✅            | 42.948s    | ❌            | 38.124s   | ❌            |
| 1000 | 12m50.956s | 6m07.441s | ✅            | 6m32.828s  | ❌            | 5m30.662s | ❌            |

## Todo

- Make a script to benchmark in one place
- Cleanup the 3 benchmarks
- Benchmark rust by calling it from javascript wasm API
