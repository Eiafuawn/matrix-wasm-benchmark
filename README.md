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

Java isn't working for now

## Todo

- repair j2cl template to build it
- Make a script to benchmark in one place
- Benchmark rust by calling it from javascript wasm API
