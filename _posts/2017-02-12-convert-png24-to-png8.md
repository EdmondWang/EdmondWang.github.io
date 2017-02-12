---
bg: "tools.jpg"
layout: post
title:  "PNG24格式图片转换为PNG8"
crawlertitle: "获取PNG8格式图片"
summary: "获取PNG8格式图片"
date:   2017-02-12 17:10:43 +0800
categories: posts
tags: ['front-end']
author: Edmond
---
如果在psd源文件中无法导出背景全透明的png8格式的图片，
或者我们已经在psd中通过photoshop导出png24格式的图片，需要再转换到png8图片, 可以参考如下步骤：

  1. 请先确保安装有Firework4以上版本。
  2. 选取一张png24或png32的待转换图片, 选择右上角优化面板，可以看到图片原来的格式（如“PNG32”）。
  3. 在优化面板中，选择优化格式为“PNG 8”, 将透明度由“不透明”设为“索引色透明”，点击“重建”按钮，优化完成。
    [![railroad]({{ site.images }}/selectpng8.png)]({{ site.images }}/selectpng8.png)

  4. 选择左上角“文件”菜单，选择“导出”，点击“保存”即可。
  5. 导出完成后，若在firework中显示当前图片未保存（“文件名后带有*号”），可以另存为，但不要直接保存，这会覆盖之前导出的png哈。
