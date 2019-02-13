---
title:  "CSS Z-Index"
author: Edmond
---

CSS Z-index
1. Z-index only works on positioned element other than default value.
2. Z-index creates stack context.
3. Stack context is formed in html, position != static & z-index != auto, opacity < 1.
4. Transforms creates stack context as well.

Z-index Order:
1. Document Root
2. Positioned element with negative z-index value.
3. Non-positioned element
4. Positioned element with auto z-index value
5. Position element with positive z-index value.

Knowledege Reference:
1. What no one told you about z-index
https://philipwalton.com/articles/what-no-one-told-you-about-z-index/.
2. Better Solution managing z-index
https://www.w3cplus.com/preprocessor/better-solution-managing-z-index-sass.html.