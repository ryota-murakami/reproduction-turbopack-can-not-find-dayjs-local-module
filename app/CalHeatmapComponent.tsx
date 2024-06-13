'use client'

import CalHeatmap from 'cal-heatmap'
// @ts-ignore Could not find a declaration file for module 'cal-heatmap/plugins/Tooltip'.
import Tooltip from 'cal-heatmap/plugins/Tooltip'
import 'cal-heatmap/cal-heatmap.css'

export function CalHeatmapComponent() {
  // @ts-ignore This expression is not constructable. Type 'typeof import("/Users/ryota.murakami/unfarely/node_modules/.pnpm/@types+cal-heatmap@3.5.39/node_modules/@types/cal-heatmap/index")' has no construct signatures.
  const cal = new CalHeatmap()
  cal.paint({ theme: 'dark' }, [[Tooltip]])

  return <div id="cal-heatmap"></div>
}