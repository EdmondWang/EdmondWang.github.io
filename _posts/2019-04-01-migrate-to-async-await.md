---
bg: "tools.jpg"
layout: post
title:  "Tips of Migrating to Async/Await"
crawlertitle: "Migrate to Async/Await"
summary: "Some tips of migrating to async/await of ES8(ES2017) in Javascript"
date:   2019-04-01 17:00:43 +0800
categories: posts
tags: ['front-end']
author: Edmond
---

There are serveal tips I concluded during the migration to Async/Await in the work. Hope them could help you.

1. Keep Original Logic
2. Keep Original Error Handling

Below showes some example of a vechile sell page.

# Keep Original Logic

For the serials API calls based on Promise:
{% highlight javascript %}
const findSimilarAuto = (id) => {
    return service.getData('getAuto', {
        id
    }).then((auto) => {
        return service.getData('findAuto', {
            category: auto.category
        }).then((autoArr) => {
            return autoArr;
        });
    })
};
{% endhighlight %}

Async/Await version:
{% highlight javascript %}
const = findSimilarAuto = async(id) => {
    let auto = await service.getData('getAutoDetail', {
        id
    });
    return await service.getData('findAuto', {
        category: auto.category
    });
};
{% endhighlight %}

For the parallel API calls based on Promise:
{% highlight javascript %}
const loadPageData = (id) => {
    return Promise.all([
        service.getData('getAutoDetail', {
            id
        }),
        service.getData('findTopSearch', {}),
        service.getData('findRankedAuto', {})
    ]).then(([auto, topSearchArr, rankedAutoArr]) => {
        // ... some business code
        return {
            auto,
            topSearchArr,
            rankedAutoArr
        }
    })
};
{% endhighlight %}

Async/Await version:
{% highlight javascript %}
const loadPageData = async (id) => {
    let {auto, topSearchArr, rankedAutoArr} = await Promise.all([
        service.getData('getAutoDetail', {
            id
        }),
        service.getData('findTopSearch', {}),
        service.getData('findRankedAuto', {})
    ]);
    // ... some business code
    return {
        auto,
        topSearchArr,
        rankedAutoArr
    }
};
{% endhighlight %}

# Keep Original Error Handling

Cache call back based on Promise:
{% highlight javascript %}
const findSimilarAuto = (id) => {
    return service.getData('getAuto', {
        id
    }).then((auto) => {
        return service.getData('findAuto', {
            category: auto.category
        }).then((autoArr) => {
            return autoArr;
        });
    }).catch((err) {
        console.error(err);
        throw err;
    })
};
{% endhighlight %}

Async/Await version:
{% highlight javascript %}
const = findSimilarAuto = async(id) => {
    try {
        let auto = await service.getData('getAutoDetail', {
            id
        });
        return await service.getData('findAuto', {
            category: auto.category
        });
    } catch (err) {
        console.error(err);
        throw err;
    }

};
{% endhighlight %}
