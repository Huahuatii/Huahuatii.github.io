const s=JSON.parse('{"key":"v-53ead6e8","path":"/zh/posts/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/Loss%20Function.html","title":"Loss Function","lang":"zh-CN","frontmatter":{"title":"Loss Function","date":"2023-03-13T00:00:00.000Z","tag":["Deep Learning","Loss Function"],"category":["深度学习","损失函数"],"description":"Loss Function分类 1 均方误差(Mean Squared Error, MSE) MSE（均方误差）损失是机器学习中使用的数学函数，用于衡量预测输出与真实输出之间的平均平方差。它通常用作回归问题的损失函数，目标是预测连续的目标变量。 定义： MSE=n1​∑i=1n​(xi​−x^i​)2","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://Huahuatii.github.io/posts/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/Loss%20Function.html"}],["meta",{"property":"og:url","content":"https://Huahuatii.github.io/zh/posts/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/Loss%20Function.html"}],["meta",{"property":"og:site_name","content":"胡图图的垃圾站"}],["meta",{"property":"og:title","content":"Loss Function"}],["meta",{"property":"og:description","content":"Loss Function分类 1 均方误差(Mean Squared Error, MSE) MSE（均方误差）损失是机器学习中使用的数学函数，用于衡量预测输出与真实输出之间的平均平方差。它通常用作回归问题的损失函数，目标是预测连续的目标变量。 定义： MSE=n1​∑i=1n​(xi​−x^i​)2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-04-04T05:30:56.000Z"}],["meta",{"property":"article:tag","content":"Deep Learning"}],["meta",{"property":"article:tag","content":"Loss Function"}],["meta",{"property":"article:published_time","content":"2023-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-04T05:30:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Loss Function\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-04T05:30:56.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1 均方误差(Mean Squared Error, MSE)","slug":"_1-均方误差-mean-squared-error-mse","link":"#_1-均方误差-mean-squared-error-mse","children":[]},{"level":2,"title":"2 软子空间正交性约束(Soft Subspace Orthogonality Loss)","slug":"_2-软子空间正交性约束-soft-subspace-orthogonality-loss","link":"#_2-软子空间正交性约束-soft-subspace-orthogonality-loss","children":[]},{"level":2,"title":"3","slug":"_3","link":"#_3","children":[]}],"git":{"createdTime":1680586256000,"updatedTime":1680586256000,"contributors":[{"name":"Huahuatii","email":"2218653280@qq.com","commits":1}]},"readingTime":{"minutes":1.48,"words":444},"filePathRelative":"zh/posts/深度学习/Loss Function.md","localizedDate":"2023年3月13日","excerpt":"<h1> Loss Function分类</h1>\\n<h2> 1 均方误差(Mean Squared Error, MSE)</h2>\\n<p><em>MSE（均方误差）损失是机器学习中使用的数学函数，用于衡量预测输出与真实输出之间的平均平方差。它通常用作回归问题的损失函数，目标是预测连续的目标变量。</em></p>\\n<h5> 定义：</h5>\\n<p><span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">MSE</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.1901em;vertical-align:-0.345em;\\"></span><span class=\\"mord\\"><span class=\\"mopen nulldelimiter\\"></span><span class=\\"mfrac\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8451em;\\"><span style=\\"top:-2.655em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span><span style=\\"top:-3.23em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"frac-line\\" style=\\"border-bottom-width:0.04em;\\"></span></span><span style=\\"top:-3.394em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mtight\\">1</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.345em;\\"><span></span></span></span></span></span><span class=\\"mclose nulldelimiter\\"></span></span><span class=\\"mspace\\" style=\\"margin-right:0.1667em;\\"></span><span class=\\"mop\\"><span class=\\"mop op-symbol small-op\\" style=\\"position:relative;top:0em;\\">∑</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8043em;\\"><span style=\\"top:-2.4003em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">i</span><span class=\\"mrel mtight\\">=</span><span class=\\"mord mtight\\">1</span></span></span></span><span style=\\"top:-3.2029em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">n</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2997em;\\"><span></span></span></span></span></span></span><span class=\\"mopen\\">(</span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">x</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">−</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\"><span class=\\"mord accent\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.6944em;\\"><span style=\\"top:-3em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"mord mathnormal\\">x</span></span><span style=\\"top:-3em;\\"><span class=\\"pstrut\\" style=\\"height:3em;\\"></span><span class=\\"accent-body\\" style=\\"left:-0.2222em;\\"><span class=\\"mord\\">^</span></span></span></span></span></span></span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span><span class=\\"mclose\\"><span class=\\"mclose\\">)</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">2</span></span></span></span></span></span></span></span></span></span></span></p>","autoDesc":true}');export{s as data};
