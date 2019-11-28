/*
 * Copyright 2010-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
const fs = require("fs");
const child_process = require("child_process");

// Run TSC
child_process.execSync("node node_modules/.bin/tsc -p tsconfig.json");
child_process.execSync("node node_modules/.bin/tsc -p tsconfig.browser.json");

// Copy the binding declaration file over verbatim
fs.copyFileSync('lib/native/binding.d.ts', 'dist/native/binding.d.ts');