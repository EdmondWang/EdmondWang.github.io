---
bg: "tools.jpg"
layout: post
title:  "Box Sizing in CSS"
crawlertitle: "border-box VS content-box in CSS"
summary: "A demo to show the difference between border-box and content-box in CSS."
date:   2017-02-12 17:00:43 +0800
categories: posts
tags: ['front-end', 'css']
author: Edmond
---
Recenlty I am facing the issue caused by wrong value of box sizing in CSS.
Thus I make a demo below to remind myself.

Expirement
===
CSS Code：
{% highlight css %}
.monitor {
    font-size: 16px;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 1px solid black;
    box-sizing: content-box;
}
{% endhighlight %}

HTML Code:
{% highlight html %}
<div id="hp" class="monitor"></div>
{% endhighlight %}

Result
===

when specify box-sizing as content-box：
[![railroad]({{ site.images }}/content-box.png)]({{ site.images }}/content-box.png)
[![railroad]({{ site.images }}/content-box-inspector.png)]({{ site.images }}/content-box-inspector.png)
when specify box-sizing as border-box：
[![railroad]({{ site.images }}/border-box.png)]({{ site.images }}/border-box.png)
[![railroad]({{ site.images }}/border-box-inspector.png)]({{ site.images }}/border-box-inspector.png)

Summary
===

1. The width of node content is equal to the width specifed in CSS code when the `box-sizing` is set to `content-box`. (100px )
2. The width of node content is equal to the
    "width - padding width * 2 - border width * 2" => "100 - 10 * 2 - 1 * 2 = 78px" when the `box-sizing` is set to `border-box`.
