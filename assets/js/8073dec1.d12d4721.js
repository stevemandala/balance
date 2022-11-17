"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[506],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return d},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return p}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){return function(t){var a=m(t.components);return n.createElement(e,i({},t,{components:a}))}},m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(a),c=r,g=p["".concat(o,".").concat(c)]||p[c]||u[c]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6915:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={id:"pre_adjustment_diagnostics",title:"Pre-Adjustment Diagnostics",description:"Diagnostics for an unadjusted Sample",sidebar_position:1,keywords:["unadjusted sample","diagnostics"]},s=void 0,d={unversionedId:"docs/general_framework/pre_adjustment_diagnostics",id:"docs/general_framework/pre_adjustment_diagnostics",title:"Pre-Adjustment Diagnostics",description:"Diagnostics for an unadjusted Sample",source:"@site/docs/docs/general_framework/pre_adjustment_diagnostics.md",sourceDirName:"docs/general_framework",slug:"/docs/general_framework/pre_adjustment_diagnostics",permalink:"/docs/docs/general_framework/pre_adjustment_diagnostics",draft:!1,editUrl:"https://github.com/facebookresearch/balance/website/docs/docs/general_framework/pre_adjustment_diagnostics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"pre_adjustment_diagnostics",title:"Pre-Adjustment Diagnostics",description:"Diagnostics for an unadjusted Sample",sidebar_position:1,keywords:["unadjusted sample","diagnostics"]},sidebar:"docsSidebar",previous:{title:"General Framework",permalink:"/docs/docs/general_framework/"},next:{title:"Adjusting Sample to Population",permalink:"/docs/docs/general_framework/adjusting_sample_to_population"}},p={},m=[{value:"Covariate balance",id:"covariate-balance",level:2},{value:"Summary statistics",id:"summary-statistics",level:2},{value:"Means and ASMD (Absolute Standardized Mean Difference)",id:"means-and-asmd-absolute-standardized-mean-difference",level:3},{value:"Visualizations",id:"visualizations",level:2},{value:"Q-Q Plot (plotly)",id:"q-q-plot-plotly",level:3},{value:"Barplots",id:"barplots",level:3},{value:"Plotting all varibales",id:"plotting-all-varibales",level:3}],c={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"covariate-balance"},"Covariate balance"),(0,i.mdx)("p",null,"A way to check if adjustments are needed is looking at covariate balance by comparing the distribution of covariates in our sample (the respondents before any adjustment), to the distribution of covariates of the population. The same methods will be later used to evaluate the quality of the adjustment in ",(0,i.mdx)("a",{parentName:"p",href:"/docs/docs/general_framework/evaluation_of_results"},"evaluating the results"),"."),(0,i.mdx)("p",null,"There are various methods for comparing covariate balance, either via summary statistics, or through visualizations. The visualizations are implemented either via ",(0,i.mdx)("a",{parentName:"p",href:"https://plotly.com/python/"},"plotly")," (offering an interactive interface) or ",(0,i.mdx)("a",{parentName:"p",href:"https://seaborn.pydata.org/"},"seaborn")," (leading to a static image)."),(0,i.mdx)("p",null,"The methods implemented in balance include:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Summary statistics",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"Means"),(0,i.mdx)("li",{parentName:"ol"},"ASMD (Absolute Standardized Mean Difference)"))),(0,i.mdx)("li",{parentName:"ol"},"Visualizations",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"Numerical variables",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"QQ-plots (interactive)"),(0,i.mdx)("li",{parentName:"ol"},"Kernel density estimation (static)"),(0,i.mdx)("li",{parentName:"ol"},"Empirical Cumulative Distribution Function (static)"),(0,i.mdx)("li",{parentName:"ol"},"Histogram (static)"))),(0,i.mdx)("li",{parentName:"ol"},"Categorical variables",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"Barplots (interactive or static)"),(0,i.mdx)("li",{parentName:"ol"},"Probability scatter plot (static)")))))),(0,i.mdx)("h2",{id:"summary-statistics"},"Summary statistics"),(0,i.mdx)("h3",{id:"means-and-asmd-absolute-standardized-mean-difference"},"Means and ASMD (Absolute Standardized Mean Difference)"),(0,i.mdx)("p",null,"The mean of the covariates in the sample versus the target is a basic measure to evaluate the distance of the sample from the target population of interest."),(0,i.mdx)("p",null,"For categorical variables the means are calculated to each of the ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/One-hot"},"one-hot encoding")," of the categories of the variable. This is basically the proportion of observations in that bucket."),(0,i.mdx)("p",null,"It can be calculated simply by running:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"sample_with_target.covars().mean().T\n")),(0,i.mdx)("p",null,"An example of the output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"source                    self     target\n_is_na_gender[T.True]  0.08800   0.089800\nage_group[T.25-34]     0.30900   0.297400\nage_group[T.35-44]     0.17200   0.299200\nage_group[T.45+]       0.04600   0.206300\ngender[Female]         0.26800   0.455100\ngender[Male]           0.64400   0.455100\ngender[_NA]            0.08800   0.089800\nincome                 5.99102  12.737608\n")),(0,i.mdx)("p",null,"(TODO: the one hot encoding acts a bit differently for different variables - this will be resolved in future releases)"),(0,i.mdx)("p",null,"The limitation of the mean is that it is not easily comparable between different variables since they may have different variances. The simplest attempt in addressing this issue is using the ASMD."),(0,i.mdx)("p",null,"The ASMD (Absolute Standardized Mean Deviation) measures the difference per covariate between the sample and target. It uses weighted average and std for the calculations (e.g.: to take design weights into account).\nThis measure is the same as taking the absolute value of ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Effect_size#Cohen's_d"},"Cohen's d statistic")," (also related to ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Strictly_standardized_mean_difference"},"SSMD"),"), when using the (weighted) standard deviation of the target population. Other options that occur in the literature includes using the standard deviation based on the sample, or some average of the std of the sample and the target. In order to allow this to be compared across different samples and adjustments, we opted to use the std of the target as the default."),(0,i.mdx)("p",null,"It can be calculated simply by running:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"sample_with_target.covars().asmd().T\n")),(0,i.mdx)("p",null,"An example of the output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"source                  self\nage_group[T.25-34]  0.025375\nage_group[T.35-44]  0.277771\nage_group[T.45+]    0.396127\ngender[Female]      0.375699\ngender[Male]        0.379314\ngender[_NA]         0.006296\nincome              0.517721\nmean(asmd)          0.334860\n")),(0,i.mdx)("p",null,"For categorical variables the ASMD can be calculated as the average of the ASMD applied to each of the ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/One-hot"},"one-hot encoding")," of the categories of the variable by using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"aggregate_by_main_covar")," argument:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"sample_with_target.covars().asmd(aggregate_by_main_covar = True).T\n")),(0,i.mdx)("p",null,"The output:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"source          self\nage_group   0.233091\ngender      0.253769\nincome      0.517721\nmean(asmd)  0.334860\n")),(0,i.mdx)("p",null,"An average ASMD is calculated for all covariates. It is a simple average of the ASMD for each covariate.  Each ASMD value of categorical variable is used once after aggregated the ASMD from all the ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dummy_variable_(statistics)"},"dummy variables"),"."),(0,i.mdx)("h2",{id:"visualizations"},"Visualizations"),(0,i.mdx)("h3",{id:"q-q-plot-plotly"},"Q-Q Plot (plotly)"),(0,i.mdx)("p",null,"We provide ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Q%E2%80%93Q_plot"},"Q-Q Plots")," as a visual to compare two distributions to one another."),(0,i.mdx)("p",null,"For example, the plot below is a Q-Q plot for the income covariate for the sample against a straight line of the target population:"),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:a(76363).Z,width:"1803",height:"450"})),(0,i.mdx)("p",null,"The closer the line is to the 45-degree-line the better (i.e.: the less bias is observed in the sample as compared to the target population)."),(0,i.mdx)("p",null,"To make a QQ-plot for a specific variable, simply use the following method (the default uses QQ plot with the plotly engine):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"sample_with_target.covars().plot(variables = ['income',])\n")),(0,i.mdx)("h3",{id:"barplots"},"Barplots"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bar_chart"},"Barplots")," provides a way to visually compare the sample and target for categorical covariates."),(0,i.mdx)("p",null,"Here is an example of the plot for age_group and gender before adjustment:"),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:a(20486).Z,width:"1803",height:"450"})),(0,i.mdx)("p",null,(0,i.mdx)("img",{src:a(51146).Z,width:"1803",height:"450"})),(0,i.mdx)("p",null,"To make these plots, simply use the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"sample_with_target.covars().plot(variables = ['age_group', 'gender', ])\n")),(0,i.mdx)("h3",{id:"plotting-all-varibales"},"Plotting all varibales"),(0,i.mdx)("p",null,"If you do not specify a variables list in the plot method, all covariates of you sample object will be plotted:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"sample_with_target.covars().plot()\n")))}u.isMDXComponent=!0},76363:function(e,t,a){t.Z=a.p+"assets/images/fig_01_qqplot_income_before-c532ea3cc75158415efa53d599bc32a6.png"},20486:function(e,t,a){t.Z=a.p+"assets/images/fig_02_barplot_age_before-42914780e173b923ab99aa90738ae159.png"},51146:function(e,t,a){t.Z=a.p+"assets/images/fig_03_barplot_gender_before-f931f9dcfd435159a8c0e3449e25543b.png"}}]);