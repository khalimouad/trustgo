import pkg from '../package.json' with { type: 'json' };

const nextVersion = pkg.dependencies?.next || '';
if (nextVersion !== '16.2.6') {
  console.error(`Expected next version 16.2.6 but found: ${nextVersion}`);
  process.exit(1);
}
console.log(`Next.js version check passed: ${nextVersion}`);
