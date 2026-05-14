import fs from 'node:fs';
import path from 'node:path';
import pkg from '../package.json' with { type: 'json' };

const expected = '16.2.6';
const declared = pkg.dependencies?.next;
if (declared !== expected) {
  console.error(`Expected package.json next=${expected} but found ${declared}`);
  process.exit(1);
}

const installedPkgPath = path.resolve('node_modules/next/package.json');
if (!fs.existsSync(installedPkgPath)) {
  console.error('next is not installed in node_modules. Run npm install.');
  process.exit(1);
}

const installed = JSON.parse(fs.readFileSync(installedPkgPath, 'utf8')).version;
if (installed !== expected) {
  console.error(`Installed next version mismatch. Expected ${expected}, found ${installed}`);
  process.exit(1);
}

console.log(`Next.js dependency and installed version are pinned and valid: ${installed}`);
