import{_ as p}from"./slidev/VClick-BYd3KzEt.js";import{_ as d}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DP0nN5Tp.js";import{o as g,c as y,k as h,l as k,m as l,q as A,s as o,A as t,e as i,a9 as s}from"./modules/vue-BIzUUY1N.js";import{I as c}from"./slidev/default-ue8MrvIJ.js";import{u as B,f as D}from"./slidev/context-Cx50jHKP.js";import"./index-C9vGqMrF.js";import"./modules/shiki-coOVvh6_.js";import"./slidev/VClicks-DVVmdefI.js";import"./modules/unplugin-icons-m9KdAdMl.js";const C=i("h1",null,"uplink - issue docs.rs",-1),u=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Don't compile the uplink-c libraries when building the docs for not requiring Go to be")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// installed in the Docker image for building them used by docs.rs")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"if"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," env"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"var"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"DOCS_RS"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"is_err"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // Build uplink-c generates ....")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"    Command"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"make"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"        ."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"arg"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"build"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"        ."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"current_dir"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"&"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"uplink_c_src"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"        ."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"status"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"        ."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"expect"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Failed to run make command from build.rs."),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"if"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," env"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"var"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"DOCS_RS"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"is_ok"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"    // Use the precompiled uplink-c libraries for building the docs by docs.rs.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"    Command"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"cp"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"        ."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"args"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"&"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"[")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'            "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"-R"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"            &"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"PathBuf"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"from"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},".docs-rs"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"to_string_lossy"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"            &"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"uplink_c_dir"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"join"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},".build"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"to_string_lossy"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"        ])")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"        ."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"status"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"        ."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"expect"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Failed to copy docs-rs precompiled uplink-c lib binaries"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1),_=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-toml"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"["),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"package"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"metadata"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"docs"),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"rs"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"]")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"default-target"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"x86_64-unknown-linux-gnu"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"targets"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," []"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," # Do not build the doc with any other target than the default.")])])],-1),m={__name:"slides.md__slidev_20",setup(f){const{$slidev:b,$nav:v,$clicksContext:e,$clicks:x,$page:E,$renderContext:$,$frontmatter:n}=B();return e.setup(),(w,F)=>{const a=d,r=p;return g(),y(c,A(o(t(D)(t(n),19))),{default:h(()=>[C,k(a,l({lines:!0,maxHeight:"70%"},{ranges:["3,12","5-9,14-21"]}),{default:h(()=>[u]),_:1},16),k(r,null,{default:h(()=>[k(a,l({},{ranges:[]}),{default:h(()=>[_]),_:1},16)]),_:1})]),_:1},16)}}},T=m;export{T as default};
