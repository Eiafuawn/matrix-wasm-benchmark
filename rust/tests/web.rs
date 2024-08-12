//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;
use matrix_wasm_rust::measure_performance;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    let duration = measure_performance();
    assert!(duration > 0.0, "Duration should be greater than 0");
}