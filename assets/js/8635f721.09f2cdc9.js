"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[128],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return l}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){return function(t){var n=d(t.components);return a.createElement(e,r({},t,{components:n}))}},d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),l=d(n),c=i,g=l["".concat(o,".").concat(c)]||l[c]||u[c]||r;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},32930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],s={id:"adjusting_sample_to_population",title:"Adjusting Sample to Population",description:"How to produce weights for a sample to represent the target population of interest",sidebar_position:2,keywords:["adjustment"]},m=void 0,p={unversionedId:"docs/general_framework/adjusting_sample_to_population",id:"docs/general_framework/adjusting_sample_to_population",title:"Adjusting Sample to Population",description:"How to produce weights for a sample to represent the target population of interest",source:"@site/docs/docs/general_framework/adjusting_sample_to_population.md",sourceDirName:"docs/general_framework",slug:"/docs/general_framework/adjusting_sample_to_population",permalink:"/docs/docs/general_framework/adjusting_sample_to_population",draft:!1,editUrl:"https://github.com/facebookresearch/balance/website/docs/docs/general_framework/adjusting_sample_to_population.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"adjusting_sample_to_population",title:"Adjusting Sample to Population",description:"How to produce weights for a sample to represent the target population of interest",sidebar_position:2,keywords:["adjustment"]},sidebar:"docsSidebar",previous:{title:"Pre-Adjustment Diagnostics",permalink:"/docs/docs/general_framework/pre_adjustment_diagnostics"},next:{title:"Evaluating and using the adjustment weights",permalink:"/docs/docs/general_framework/evaluation_of_results"}},l={},d=[{value:"Optional arguments",id:"optional-arguments",level:2}],c={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"To produce the balancing weights, use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Sample.adjust()")," method to adjust a sample to population:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"adjusted = sample.adjust()\n")),(0,r.mdx)("p",null,"The output of this method is an adjusted ",(0,r.mdx)("inlineCode",{parentName:"p"},"Sample")," class object of the form:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"    Adjusted balance Sample object with target set using ipw\n    1000 observations x 3 variables: gender,age_group,income\n    id_column: id, weight_column: weight,\n    outcome_columns: happiness\n\n        target:\n\n            balance Sample object\n            10000 observations x 3 variables: gender,age_group,income\n            id_column: id, weight_column: weight,\n            outcome_columns: None\n\n        3 common variables: income,gender,age_group\n")),(0,r.mdx)("p",null,"Note that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"adjust")," method in balance is performing three main steps:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Pre-processing")," of the data - getting data ready for adjustment using best practices in the field:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Handling missing values - balance handles missing values automatically by adding a column '_is_na' to any variable that contains missing values. The advantage of this is that these are then considered as a separate category for the adjustment."),(0,r.mdx)("li",{parentName:"ul"},"Feature engineering -  by default, balance applies feature engineering to be able to fit the covariate distribution better, and not only the first moment. Specifically, each continues variable is bucketed into 10 quantiles buckets. Furthermore, rare categories in categorical variables are grouped together so to avoid overfitting rare events."))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Fitting the model")," and calculating the weights: the model fitted depends on the ",(0,r.mdx)("inlineCode",{parentName:"li"},"method")," chosen by the user. Current options are ",(0,r.mdx)("a",{parentName:"li",href:"/docs/docs/statistical_methods/ipw"},"inverse propensity score weighting")," using regularized logistic regression (",(0,r.mdx)("inlineCode",{parentName:"li"},"ipw"),"), ",(0,r.mdx)("a",{parentName:"li",href:"/docs/docs/statistical_methods/cbps"},"covariate balancing propensity score")," (",(0,r.mdx)("inlineCode",{parentName:"li"},"cbps"),") and ",(0,r.mdx)("a",{parentName:"li",href:"/docs/docs/statistical_methods/poststratify"},"post-stratification")," (",(0,r.mdx)("inlineCode",{parentName:"li"},"poststratify"),")."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Post-processing")," of the weights:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Trimming weights - balance trims the weights in order to avoid over fitting of the model and unnecessary variance inflation."),(0,r.mdx)("li",{parentName:"ul"},"Normalizing weights to population size. The resulting weights of balance can be described as approximating the number of unit in the population this unit of the sample represents.")))),(0,r.mdx)("h2",{id:"optional-arguments"},"Optional arguments"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"method")),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"ipw"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"poststratify"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"cbps"),".  Default is ",(0,r.mdx)("inlineCode",{parentName:"p"},"ipw"),"."),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"ipw"),": stands for ",(0,r.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Inverse_probability_weighting"},"Inverse Propensity Weighting"),". The propensity scores are calculated with ",(0,r.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Lasso_(statistics)"},"LASSO")," ",(0,r.mdx)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Logistic_regression"},"logistic regression"),".  Details about the implementation can be found ",(0,r.mdx)("a",{parentName:"li",href:"../../statistical_methods/ipw/"},"here"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"cbps"),": stands for ",(0,r.mdx)("a",{parentName:"li",href:"https://imai.fas.harvard.edu/software/CBPS.html"},"Covariate Balancing Propensity Score"),". The CBPS algorithm estimates the propensity score in a way that optimizes prediction of the probability of sample inclusion as well as the covariates balance. Its main advantage is in cases when the researcher wants better balance on the covariates than traditional propensity score methods - because one believes the assignment model might be misspecified and would like to avoid an iterative procedure of balancing the covariates. Details about the implementation can be found ",(0,r.mdx)("a",{parentName:"li",href:"../../statistical_methods/cbps/"},"here"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"poststratify"),": stands for post-stratification. Details about the implementation can be found ",(0,r.mdx)("a",{parentName:"li",href:"../../statistical_methods/poststratify/"},"here"),"."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"variables")),": allows user to pass a list of the covariates that they want to adjust for; if variables argument is not specified, all joint variables in sample and target are used.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"transformations")),": which transformations to apply to data before fitting the model. Default is cutting numeric variables into 10 quantile buckets and lumping together infrequent levels with less than 5% prevalence into ",(0,r.mdx)("inlineCode",{parentName:"p"},"lumped_other")," category. The transformations are done on both the sample dataframe and the target dataframe together. User can also specify specific transformations in a dictionary format.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"max_de")),": (for ",(0,r.mdx)("inlineCode",{parentName:"p"},"ipw")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"cbps")," methods): The default value is 1.5. It limits the ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Design_effect"},(0,r.mdx)("strong",{parentName:"a"},"design effect"))," to be within 1.5. If set to None, the optimization is performed by cross-validation of the logistic model for ipw (see the ",(0,r.mdx)("inlineCode",{parentName:"p"},"choose_regularization")," function for more details) or without constrained optimization for cbps. Setting ",(0,r.mdx)("inlineCode",{parentName:"p"},"max_de")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"None")," can sometimes significantly improve the running time of the code.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"weight_trimming_mean_ratio"))," ",(0,r.mdx)("strong",{parentName:"p"},"or")," ",(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"weight_trimming_percentile")),": (only one of these arguments can be specified). ",(0,r.mdx)("inlineCode",{parentName:"p"},"weight_trimming_mean_ratio")," indicates the ratio from above according to which the weights are trimmed by mean(weights) * ratio. Default is 20. If ",(0,r.mdx)("inlineCode",{parentName:"p"},"weight_trimming_percentile")," is not none, ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Winsorizing"},"winsorization")," is applied. Default is None, i.e. trimming from above is applied. However, note that when ",(0,r.mdx)("inlineCode",{parentName:"p"},"max_de")," is not None (and default is 1.5), the trimming-ratio is optimized by ",(0,r.mdx)("inlineCode",{parentName:"p"},"ipw")," and these arguments are ignored.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"na_action"))," (for ",(0,r.mdx)("inlineCode",{parentName:"p"},"ipw")," method): how to handle missing values in the data (sample and target). Default is to replace NAs with 0's and add indicator for which observations were NA (this is done after applying the transformations). Another option is ",(0,r.mdx)("inlineCode",{parentName:"p"},"drop"),", which drops all observations with NA values."))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"formula"))," (for ",(0,r.mdx)("inlineCode",{parentName:"p"},"ipw")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"cbps")," methods): The formula according to which build the model matrix for the logistic regression. Default is a linear additive formula of all covariates.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("strong",{parentName:"p"},(0,r.mdx)("inlineCode",{parentName:"strong"},"penalty_factor"))," (for ",(0,r.mdx)("inlineCode",{parentName:"p"},"ipw")," method): the penalty used in the regularized logistic regression."))))}u.isMDXComponent=!0}}]);