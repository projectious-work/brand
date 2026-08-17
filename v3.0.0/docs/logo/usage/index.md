# Usage

> Clear space, minimum sizes, monochrome variants, and placing the mark on colour and photography.


## Clear space

{{< demo label="Exclusion zone — 1x the icon height on every side" >}}
<span class="pj-clearspace"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:48px;height:48px"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg></span>
<span class="pj-cap">Nothing enters the dashed zone</span>
{{< /demo >}}

**Minimum clear space is 1× the icon height on all sides.** Nothing — text,
rules, image edges, other logos — enters that exclusion zone.

At a 40px mark, that is 40px of clear space in every direction. The zone scales
with the mark, so it never needs recalculating per context.

## Minimum sizes

{{< demo label="Minimum sizes — 48 / 32 / 24 / 16px" >}}
<div class="pj-demo-item"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:48px;height:48px"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-cap">48px</span></div>
<div class="pj-demo-item"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:32px;height:32px"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-cap">32px</span></div>
<div class="pj-demo-item">{{< mark size="16" >}}<span class="pj-cap">16px — minimum</span></div>
<div class="pj-demo-item"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:16px;height:16px"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-cap">16px — favicon only</span></div>
{{< /demo >}}

| Variant | Minimum |
|---|---|
| Mark (standalone) | 16px |
| Any lockup with wordmark | 24px |
| Stacked lockup | 60px |
| Two-line lockup | 120px |
| One-line lockup | 140px |
| Dot-replace lockup | 160px |

Below these sizes the petal cuts collapse into a smudge. If the space is smaller
than the minimum, use a smaller variant rather than scaling one down.

## Monochrome

Four monochrome treatments are approved, for print, fax, embossing, and any
single-colour reproduction:

{{< demo label="Monochrome variants" variant="grid" >}}
<div class="pj-surface pj-surface--light" style="flex-direction:column;gap:.5rem"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:48px;height:48px;--pj-mark-shell:#1d3352;--pj-mark-cut:#ffffff;--pj-mark-bud:#1d3352"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-cap">Midnight</span></div>
<div class="pj-surface pj-surface--light" style="flex-direction:column;gap:.5rem"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:48px;height:48px;--pj-mark-shell:#000000;--pj-mark-cut:#ffffff;--pj-mark-bud:#000000"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-cap">Black</span></div>
<div class="pj-surface pj-surface--midnight" style="flex-direction:column;gap:.5rem"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:48px;height:48px;--pj-mark-shell:#ffffff;--pj-mark-cut:#546a82;--pj-mark-bud:#ffffff"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-cap" style="color:#c5daf0">White reversed</span></div>
<div class="pj-surface pj-surface--light" style="flex-direction:column;gap:.5rem"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:48px;height:48px;--pj-mark-shell:#9299a4;--pj-mark-cut:#ffffff;--pj-mark-bud:#9299a4"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-cap">Grey</span></div>
{{< /demo >}}

| Variant | Mark | Inner lines | Surface |
|---|---|---|---|
| Midnight | `#1d3352` | White | Light |
| Black | `#000000` | White | Light |
| White reversed | `#ffffff` | Slate | Midnight |
| Grey | `#9299a4` | White | Light |

The white-reversed variant uses **slate** for its inner lines rather than the
background colour, so the petal structure stays visible. All petal structure
must remain legible in every monochrome variant — a solid silhouette is not an
approved treatment.

## On colour

{{< demo label="Placing the mark on colour" variant="grid" >}}
<div class="pj-surface pj-surface--white" style="flex-direction:column;gap:.5rem"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:40px;height:40px;--pj-mark-shell:#1d3352;--pj-mark-cut:#ffffff;--pj-mark-bud:#E05232"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-cap">Lighter than slate-5 -> light mark</span></div>
<div class="pj-surface pj-surface--midnight-dark" style="flex-direction:column;gap:.5rem"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:40px;height:40px;--pj-mark-shell:#6b8db2;--pj-mark-cut:#132440;--pj-mark-bud:#E05232"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-cap" style="color:#97a8b8">Darker -> dark mark</span></div>
<div class="pj-surface pj-surface--accent" style="flex-direction:column;gap:.5rem"><span style="border:2px solid #fff;border-radius:50%;padding:4px;display:inline-flex"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:36px;height:36px;--pj-mark-shell:#ffffff;--pj-mark-cut:#E05232;--pj-mark-bud:#ffffff"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg></span><span class="pj-cap">On accent → white ring</span></div>
<div class="pj-surface" style="flex-direction:column;gap:.5rem;background:linear-gradient(135deg,#5c6f82,#8a9aa8)"><span style="background:rgba(19,36,64,.72);border-radius:9px;padding:8px;display:inline-flex"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:36px;height:36px;--pj-mark-shell:#6b8db2;--pj-mark-cut:#132440;--pj-mark-bud:#E05232"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg></span><span class="pj-cap" style="color:#fff">On photography -> midnight backing</span></div>
{{< /demo >}}

| Background | Treatment |
|---|---|
| Lighter than slate-5 | Light-surface mark |
| Darker than slate-5 | Dark-surface mark |
| Accent (`#E05232`) | Mark with a **white ring border** |
| Photography | Semi-transparent midnight backing behind the mark |

The slate-5 threshold is the decision rule: measure the background, pick the
side it falls on. On the accent, neither variant has enough separation on its
own, which is why the ring exists.

## On photography

Never place the mark directly on an unmodified photograph. Apply a
semi-transparent midnight backing — a shape, a scrim, or a gradient — so the
mark sits on a controlled surface. The backing is part of the logo treatment,
not an optional enhancement.

## Watermark

{{< demo label="Watermark — uniform wash, no accent" variant="grid" >}}
<div class="pj-surface pj-surface--white" style="opacity:1"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:80px;height:80px;--pj-mark-shell:#1d3352;--pj-mark-cut:#ffffff;--pj-mark-bud:#1d3352"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span style="display:none"></span></div>
<div class="pj-surface pj-surface--midnight-dark"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:80px;height:80px;--pj-mark-shell:#6b8db2;--pj-mark-cut:#132440;--pj-mark-bud:#6b8db2"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg></div>
{{< /demo >}}

For background use, the mark may run as a watermark at **8–15% opacity**. It
renders as a uniform wash: **no accent colour in watermark mode**, since a
single coloured element at low opacity reads as a printing error.

## Favicons

Icon-only, on a midnight tile, with **12% padding**. Corner radius scales with
size:

{{< demo label="Favicon tiles — 12% padding, radius scales with size" >}}
<div class="pj-demo-item"><span style="background:#1d3352;border-radius:8px;width:48px;height:48px;padding:6px;display:inline-flex;align-items:center;justify-content:center"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:36px;height:36px;--pj-mark-shell:#6b8db2;--pj-mark-cut:#1d3352;--pj-mark-bud:#E05232"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg></span><span class="pj-cap">48px / r8</span></div>
<div class="pj-demo-item"><span style="background:#1d3352;border-radius:4px;width:32px;height:32px;padding:4px;display:inline-flex;align-items:center;justify-content:center"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:24px;height:24px;--pj-mark-shell:#6b8db2;--pj-mark-cut:#1d3352;--pj-mark-bud:#E05232"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg></span><span class="pj-cap">32px / r4</span></div>
<div class="pj-demo-item"><span style="background:#1d3352;border-radius:2px;width:16px;height:16px;padding:2px;display:inline-flex;align-items:center;justify-content:center"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:12px;height:12px;--pj-mark-shell:#6b8db2;--pj-mark-cut:#1d3352;--pj-mark-bud:#E05232"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg></span><span class="pj-cap">16px / r2</span></div>
{{< /demo >}}

| Size | Radius |
|---|---|
| 16px | 2px |
| 32px | 4px |
| 48px | 8px |
| 180px | 36px |

{{< rules >}}
{{% do %}}
Measure the background against slate-5 before choosing a variant. Keep the full
clear-space zone even when layout is tight.
{{% /do %}}
{{% dont %}}
Recolour the mark outside the approved variants, add effects (shadow, glow,
outline, gradient), rotate or skew it, or place it on a busy photograph without
a backing.
{{% /dont %}}
{{< /rules >}}


---
Source: https://projectious-work.github.io/brand/v3.0.0/docs/logo/usage/index.md
