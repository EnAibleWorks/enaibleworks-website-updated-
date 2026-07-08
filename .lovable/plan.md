Task: Remove the orphan `enaibleworks-logo-header.png.asset.json` asset.

1. Run `lovable-assets delete --file src/assets/enaibleworks-logo-header.png.asset.json` to remove the CDN object and the local pointer file in one step.

No other files need changes — nothing in the codebase imports this asset.