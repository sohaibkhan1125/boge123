export default [
    {
        name:'Blog Title',
        desc:'AI tool that will help you to generate your blog title according to your niche.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4180/4180996.png',
        aiPrompt:'Give me 5 blog topic idea to easily understand your niche and provide best result.',
        slug:'blog-title-generator',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'Blog Content',
        desc:'This tool will help you to generate content for your blog according to your niche.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/2593/2593549.png',
        aiPrompt:'Generate blog content according to user prompt.',
        slug:'blog-content-generator',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog Outline here',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'Blog Topic Ideas',
        desc:'Generate easily daily blog topic ideas with the help of this ai tool for your niche.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt:'Generate blog topic ideas according to user prompt.',
        slug:'blog-topic-ideas',
        form:[
            {
                label:'Enter your niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog Outline here',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'YouTube Description Writing',
        desc:'This ai tool will generate youtube description according to your given video title.',
        category:'YouTube',
        icon:'https://cdn-icons-png.flaticon.com/128/174/174883.png',
        aiPrompt:'Generate youtube video description according to user given prompt or given their youtube video title and keywords and generate at least 1000 words description.',
        slug:'youtube-description-generator',
        form:[
            {
                label:'Enter your video title',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter your target keywords',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'Article Rewriter with AI',
        desc:'Rewrite your article easily with the help of our AI Article Rewriter tool.',
        category:'Article',
        icon:'https://cdn-icons-png.flaticon.com/128/14029/14029439.png',
        aiPrompt:'Rewrite user article and improve article quality according to user article title and given article.',
        slug:'ai-article-rewriter',
        form:[
            {
                label:'Enter your article title',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter your article here',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'Code Generator',
        desc:'Generate code of any programming language according to your need with this ai tool.',
        category:'Coding',
        icon:'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        aiPrompt:'Write coding according to user input and provide accurate result.',
        slug:'ai-code-generator',
        form:[
            {
                label:'Enter your prompt',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter more details here',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'Hashtag Generator',
        desc:'Generate hastags easily with the help of this powerful ai tool according to your need.',
        category:'Hashtags',
        icon:'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
        aiPrompt:'Generate hashtags only according to user prompt and given more data.',
        slug:'hashtags-generator',
        form:[
            {
                label:'Enter your prompt',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter more details here',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'Grammar Checker',
        desc:'Check your paragraph grammar easily with the help this ai grammar checker tool.',
        category:'Grammar',
        icon:'https://cdn-icons-png.flaticon.com/128/10890/10890351.png',
        aiPrompt:'Check user given article, data grammar and return their own text with without grammar mistakes and also in end of result high lights grammar mistakes.',
        slug:'grammar-checker',
        form:[
            
            {
                label:'Enter your text here',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'YouTube Tags Generator',
        desc:'Generate youtube tags easily by provide your video title and description.',
        category:'YouTube',
        icon:'https://cdn-icons-png.flaticon.com/128/10884/10884882.png',
        aiPrompt:'Generate youtube video tags according to user given video title and description.',
        slug:'youtube-tags-generator',
        form:[
            {
                label:'Enter your video title',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter your video description',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'Article Summarizer',
        desc:'Easily summarize your article with the help of this ai article summarizer tool.',
        category:'Article',
        icon:'https://cdn-icons-png.flaticon.com/128/7635/7635873.png',
        aiPrompt:'Summarize user given article and provide accurate result.',
        slug:'ai-article-summarizer',
        form:[
            
            {
                label:'Enter your article',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'Language Detector',
        desc:'This ai tool will easily detect any type of language. Enter language and get result.',
        category:'Article',
        icon:'https://cdn-icons-png.flaticon.com/128/3898/3898082.png',
        aiPrompt:'Detect user enter language and show the language name in result.',
        slug:'ai-language-detector',
        form:[
            
            {
                label:'Enter your language',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name:'Language Converter',
        desc:'This ai tool will easily conver any type of language into your required language.',
        category:'Article',
        icon:'https://cdn-icons-png.flaticon.com/128/2014/2014826.png',
        aiPrompt:'Convert user given text language into other language according to user given prompt.',
        slug:'ai-language-converter',
        form:[
            
            {
                label:'Enter your prompt',
                field:'input',
                name:'niche',
                required:true
            },
           
        ]
    },
    
    
]