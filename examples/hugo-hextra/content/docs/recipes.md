---
title: Recipes
weight: 20
---

# Recipes

## Callouts and buttons

{{< callout type="warning" >}}
Lorem ipsum dolor sit amet. Check the details before copying this recipe into
a production project.
{{< /callout >}}

{{< callout type="error" >}}
This is an intentionally visible error callout for visual testing.
{{< /callout >}}

[Primary action](https://example.com/){.hx-button .hx-button-primary}

## Code

```go
package main

import "fmt"

func main() {
	message := "lorem ipsum"
	fmt.Println(message)
}
```

```javascript {linenos=true}
const theme = window.matchMedia('(prefers-color-scheme: dark)')
console.log(`Current preference: ${theme.matches ? 'dark' : 'light'}`)
```
