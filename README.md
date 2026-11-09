# @pierre/diffs: Safari crashes on drag-select with a custom gutter utility

Live: https://share.mark-life.com/pierre/issues/1184/webkit-slot-crash-xo08/

Open it in Safari, press on the code and drag down. The tab crashes ("This webpage was reloaded because a problem occurred").

| Page | Result |
| --- | --- |
| `?gutter=slot`: `FileDiff` with `renderGutterUtility` | Crashes |
| `?gutter=default`: default gutter button | No crash |
| `pure.html?move=slot`: no Pierre, a `<slot>` moved in `pointermove` | Crashes |
| `pure.html?move=raf-slot`: same move in `requestAnimationFrame` | No crash |
| `pure.html?move=plain`: a plain div moved instead | No crash |

Tested on macOS 27.2, Safari 27.2 (WebKit 22625.2.8.11.9), `@pierre/diffs` 1.6.4.

Run locally:

```sh
bun install   # or npm install
bun run dev
```
