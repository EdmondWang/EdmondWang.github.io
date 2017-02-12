---
bg: "tools.jpg"
layout: post
title:  "CSS Box Sizing"
crawlertitle: "border-box VS content-box"
summary: "A demo to show the difference between border-box and content-box."
date:   2017-02-12 17:00:43 +0800
categories: posts
tags: ['front-end']
author: Edmond
---

最近工作中使用到css box-sizing属性，以一个简单的例子特此记录。

实验
===
css代码：
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

html代码：
{% highlight html %}
<div id="hp" class="monitor"></div>
{% endhighlight %}

效果
===

指定 box-sizing 为 content-box：
[![railroad]({{ site.images }}/content-box.png)]({{ site.images }}/content-box.png)
[![railroad]({{ site.images }}/content-box-inspector.png)]({{ site.images }}/content-box-inspector.png)
指定 box-sizing 为 border-box：
[![railroad]({{ site.images }}/border-box.png)]({{ site.images }}/border-box.png)
[![railroad]({{ site.images }}/border-box-inspector.png)]({{ site.images }}/border-box-inspector.png)

结论
===

1. 当指定 box-sizing 为 content-box：div 中 content 的 width 等于 css 中设置的 width
（100px ）
2. 当指定 box-sizing 为 border-box： div 中 content 的 width 等于 css 中设置的 width - padding width * 2 - border width * 2
（100 - 10 * 2 - 1 * 2 = 78px ）
3. 常见应用： 有时候设置子元素的padding或者border, 会把父元素撑破，为了避免这种情况，我们可以指定子元素的box-sizing为border-box。
