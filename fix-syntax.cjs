const fs = require('fs');
let content = fs.readFileSync('pages/topic4.md', 'utf8');

// Fix border values with spaces
content = content.replace(/border-2 solid ([\w/-]+)(>)/g, 'border="2 solid $1"$2');

// Fix all color/opacity combinations that use /
const colorAttrs = [
  ['border-white', 'border-white'],
  ['border-green-800', 'border-green-800'],
  ['border-red-800', 'border-red-800'],
  ['border-blue-800', 'border-blue-800'],
  ['border-purple-800', 'border-purple-800'],
  ['border-amber-800', 'border-amber-800'],
  ['border-gray-800', 'border-gray-800'],
  ['border-neutral-700', 'border-neutral-700'],
  ['bg-black', 'bg-black'],
  ['bg-white', 'bg-white'],
  ['bg-green-800', 'bg-green-800'],
  ['bg-green-900', 'bg-green-900'],
  ['bg-red-800', 'bg-red-800'],
  ['bg-red-900', 'bg-red-900'],
  ['bg-blue-800', 'bg-blue-800'],
  ['bg-purple-800', 'bg-purple-800'],
  ['bg-yellow-800', 'bg-yellow-800'],
  ['bg-amber-800', 'bg-amber-800'],
  ['bg-gray-800', 'bg-gray-800'],
  ['bg-neutral-700', 'bg-neutral-700'],
  ['bg-neutral-800', 'bg-neutral-800'],
  ['bg-neutral-900', 'bg-neutral-900'],
  ['text-green-300', 'text-green-300'],
  ['text-green-400', 'text-green-400'],
  ['text-red-300', 'text-red-300'],
  ['text-red-400', 'text-red-400'],
  ['text-blue-300', 'text-blue-300'],
  ['text-blue-400', 'text-blue-400'],
  ['text-purple-300', 'text-purple-300'],
  ['text-purple-400', 'text-purple-400'],
  ['text-yellow-300', 'text-yellow-300'],
  ['text-amber-300', 'text-amber-300'],
  ['text-white/50', 'text-white'],
  ['text-gray-300', 'text-gray-300'],
  ['text-gray-400', 'text-gray-400'],
  ['text-zinc-300', 'text-zinc-300'],
];

colorAttrs.forEach(([attr, className]) => {
  const regex = new RegExp(`${attr}/(\\d+)`, 'g');
  content = content.replace(regex, `${className}="$1"`);
});

// Fix bg-black/30 pattern
content = content.replace(/bg-black\/(\d+)/g, 'bg="black/$1"');
content = content.replace(/bg-white\/(\d+)/g, 'bg="white/$1"');

// Fix text colors with opacity that weren't covered
content = content.replace(/text-white\/(\d+)/g, 'text="white/$1"');

// Fix opacity values
content = content.replace(/opacity-([-\d]+)(>)/g, 'class="opacity-$1"$2');
content = content.replace(/opacity-([-\d]+)(\s)/g, 'class="opacity-$1"$2');

fs.writeFileSync('pages/topic4.md', content, 'utf8');
console.log('Fixed! Lines:', content.split('\n').length);
