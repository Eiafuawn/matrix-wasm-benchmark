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
./benchmark.sh 500 1000
```

_This code will test the sizes 500 and 1000_

You'll find the results of this command in [js/benchmark-results.md](js/benchmark-results.md)

_You can also test separately:_

### To test js and rust

```
cd js
node src/index.js
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

## Latest results

Rust and JS tested using the benchmark.sh script. Java is tested manually for now.
The Equal results column is compared to JS. Java long and Rust i64 seem to have equal results.
You can find the value of the total sum in the npm-test-output.txt file which is an output from one of the tests for i64.

| Size | JS time   | Rust Time | Java Time | Equal results | Rust (i64) | Equal results | Rust (i64 w/ modulo) | Equal results | Java (i64) | Equal results |
| ---- | --------- | --------- | --------- | ------------- | ---------- | ------------- | -------------------- | ------------- | ---------- | ------------- |
| 100  | 368.82ms  | 365.452ms | 368.699ms | ✅            | 346.132ms  | ✅            | 645.272ms            | ✅            | 276.799ms  | ✅            |
| 200  | 2.966s    | 2.929s    | 2.894s    | ✅            | 2.775s     | ✅            | 5.206s               | ✅            | 2.052s     | ✅            |
| 300  | 9.938s    | 10.194s   | 9.822s    | ✅            | 9.746s     | ❌            | 17.868s              | ❌            | 7.096s     | ❌            |
| 400  | 24.200s   | 23.345s   | 23.781s   | ✅            | 22.332s    | ❌            | 42.692s              | ❌            | 16.899s    | ❌            |
| 500  | 51.247s   | 46.097s   | 46.865s   | ✅            | 42.721s    | ❌            | 1m24.284s            | ❌            | 36.510s    | ❌            |
| 1000 | 7m15.247s | 6m10.613s | 6m19.586s | ✅            | 5m52.322s  | ❌            | 22m43.398s           | ❌            | 4m47.035s  | ❌            |

## Previous results

> [!WARNING]  
> The next results were made using vitest which had significant impact on Javascript performance

| Size | JS time    | Rust Time | Java Time | Equal results | Rust (i64) | Equal results | Java (i64) | Equal results |
| ---- | ---------- | --------- | --------- | ------------- | ---------- | ------------- | ---------- | ------------- |
| 100  | 639.429ms  | 367.538ms | 379.899ms | ✅            | 352.246ms  | ✅            | 331.600ms  | ✅            |
| 200  | 5.075s     | 2.933s    | 2.904s    | ✅            | 2.824s     | ✅            | 2.673s     | ✅            |
| 300  | 17.362s    | 9.892s    | 9.826s    | ✅            | 9.697s     | ❌            | 9.127s     | ❌            |
| 400  | 42.209s    | 23.777s   | 24.211s   | ✅            | 22.277s    | ❌            | 18.283s    | ❌            |
| 500  | 1m28.011s  | 47.864s   | 48.787s   | ✅            | 42.948s    | ❌            | 38.124s    | ❌            |
| 1000 | 12m50.956s | 6m07.441s | 6m19.304s | ✅            | 6m32.828s  | ❌            | 5m30.662s  | ❌            |

## Todo

- Make a script to benchmark in one place
- Cleanup the 3 benchmarks
- Benchmark rust by calling it from javascript wasm API
