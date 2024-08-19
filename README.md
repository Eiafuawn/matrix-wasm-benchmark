# Matrix WASM benchmark

## Usage

To test js

```
cd js
npm run test-only
```

To test rust

```
cd rust
wasm-pack build --target web
wasm-pack test --firefox --test web
```

To test java

```
cd java
bazel build src/main/java/com/google/j2cl/samples/wasm:jsapp
bazel run src/main/java/com/google/j2cl/samples/wasm:jsapp_dev_server
```

## Todo

- Make a script to benchmark in one place
- Cleanup the 3 benchmarks
- Benchmark rust by calling it from javascript wasm API
