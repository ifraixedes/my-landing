import{o as t,c as l,k as n,q as e,s as r,A as a,e as i,a9 as s}from"./modules/vue-BIzUUY1N.js";import{I as p}from"./slidev/default-ue8MrvIJ.js";import{u as d,f as g}from"./slidev/context-Cx50jHKP.js";import"./index-C9vGqMrF.js";import"./modules/shiki-coOVvh6_.js";const y=i("h1",null,"uplink - implementation",-1),A=i("p",null,"Helpers",-1),o=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-rust"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"/// creates a CString from a function &str function argument and if there is an")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"/// error it returns an Error::InvalidArguments with the passed argument's")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"/// name.")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"pub"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," fn"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," cstring_from_str_fn_arg"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"arg_name"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," &"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"str"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," arg_val"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},":"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," &"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"str"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," ->"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Result"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"CString"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Error"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"    match"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," CString"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"arg_val"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"        Ok"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"cs"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," =>"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Ok"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"cs"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"        Err"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"e"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," =>"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Err"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Error"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"::"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"new_invalid_arguments"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"            arg_name"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"            &"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"format!"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'                "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"cannot contains null bytes (0 byte). Null byte found at "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{}"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"                e"),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"nul_position"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"            ),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"        )),")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1),c={__name:"slides.md__slidev_17",setup(B){const{$slidev:D,$nav:_,$clicksContext:h,$clicks:m,$page:u,$renderContext:f,$frontmatter:k}=d();return h.setup(),(C,E)=>(t(),l(p,e(r(a(g)(a(k),16))),{default:n(()=>[y,A,o]),_:1},16))}},w=c;export{w as default};
