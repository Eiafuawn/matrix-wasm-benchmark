/*
 * Copyright 2021 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

goog.module("entry");

const j2wasm = goog.require("app.j2wasm");

j2wasm.instantiateStreaming("app_dev.wasm").then(
  (instance) => {
    const sizes = [100, 200, 300];
    for (const size of sizes) {
      document.body.innerHTML += "Total sum for" + size + " size: ";
      const start = performance.now();
      document.body.innerText += instance.exports.doMatrixOperations(size);
      const end = performance.now();
      document.body.innerText += ` in ${end - start}ms`;
      document.body.innerHTML += "<br>";
    }
  },
  (err) => {
    document.body.style.color = "red";
    document.body.innerText = `Failed to load wasm: ${err}`;
    // rethrow so it also bubbles up to the console.
    throw err;
  }
);
