import { FileDiff } from '@pierre/diffs';

// ?lines=1500  ?gutter=slot|default|none
const params = new URLSearchParams(location.search);
const lines = Number(params.get('lines') ?? 1500);
const gutter = params.get('gutter') ?? 'slot';
document.getElementById('mode').textContent = `(lines=${lines}, gutter=${gutter})`;

const newContents =
  Array.from({ length: lines }, (_, i) => `export const value${i} = "line ${i} of a generated file";`).join('\n') +
  '\n';

const diff = new FileDiff({
  disableFileHeader: true,
  enableGutterUtility: gutter !== 'none',
  // A custom gutter utility makes Pierre put a <slot> in the node it moves between line cells.
  ...(gutter === 'slot'
    ? {
        renderGutterUtility: () => {
          const button = document.createElement('button');
          button.textContent = '+';
          return button;
        },
      }
    : {}),
});

diff.render({
  oldFile: { name: 'big.ts', contents: '' },
  newFile: { name: 'big.ts', contents: newContents },
  containerWrapper: document.getElementById('scroller'),
});
