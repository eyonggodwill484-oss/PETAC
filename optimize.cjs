const fs = require('fs');
const path = require('path');
const dir = './src/app/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Optimize images (WebP format, lower quality for speed)
  content = content.replace(/fm=jpg&q=80/g, 'fm=webp&q=60');
  content = content.replace(/w=1920/g, 'w=1400'); // slightly smaller max width for huge speed gains

  // 2. Add lazy loading to images (except Hero image usually found early, but let's just add it where missing, actually standard img tags)
  // We'll replace <img with <img loading="lazy" if it doesn't already have it
  content = content.replace(/<img(?!.*?loading=)/g, '<img loading="lazy"');

  // 3. Improve animations globally
  // We replace viewport={{ once: true }} with the new one plus transition
  // We use regex to match viewport={{ once: true }} and add transition right after it if it doesn't already have a transition.
  content = content.replace(/viewport=\{\{\s*once:\s*true\s*\}\}(\s*transition=\{\{[^\}]+\}\})?/g, (match, p1) => {
    if (p1) return match; // already has transition
    return 'viewport={{ once: true, margin: "-50px" }}\n              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}';
  });

  fs.writeFileSync(filePath, content);
}
console.log('Optimizations applied successfully!');
