(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t){},109:function(e,t){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(66),r=a.n(i),c=(a(72),a(3)),o=a(4),l=a(6),m=a(5),u=a(2),d=a(7),h=(a(73),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={showMenu:!1,content:a.props.content},a.toggleMenu=a.toggleMenu.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"changeContent",value:function(e,t){this.props.changeContent(t)}},{key:"toggleMenu",value:function(){var e=!this.state.showMenu;this.setState({showMenu:e})}},{key:"render",value:function(){var e=this,t=this.state.showMenu?"show":"hidden";s.a.createElement("nav",null,s.a.createElement("button",{id:"toggleMenu",onClick:this.toggleMenu},"Menu"),s.a.createElement("ul",{className:"menu "+t},s.a.createElement("li",{class:"selected"},"JSON"),s.a.createElement("li",null,"XML")));return s.a.createElement("header",null,s.a.createElement("div",{className:"header-container"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",null,"Investigadores"))),s.a.createElement("nav",null,s.a.createElement("div",{className:"container nav-container"},s.a.createElement("ul",{className:"menu "+t},s.a.createElement("li",{className:"local"===this.props.content?"selected":"",onClick:function(t){return e.changeContent(t,"local")}},"Investigadores JSON/XML"),s.a.createElement("li",{className:"wiki"===this.props.content?"selected":"",onClick:function(t){return e.changeContent(t,"wiki")}},"Wiki Query")),s.a.createElement("a",{href:"https://github.com/carlabalbontin/MTI-476-Sistemas-y-Aplicaciones-Web/tree/master/1-XML-y-JSON",target:"_blank",rel:"noopener noreferrer"},"Ver Docs"))))}}]),t}(n.Component)),v=a(14),g=a.n(v),p=a(17),f=a.n(p),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,format:a.props.format,investigadoresJson:[],jsonData:{},investigadoresXml:[],view:"list",investigadorSelected:{}},a.selectInvestigador=a.selectInvestigador.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"selectInvestigador",value:function(e,t){this.props.selectInvestigador("",t)}},{key:"render",value:function(){var e=this,t=this.props.investigadores;return s.a.createElement("div",{className:"investigadores-container"},s.a.createElement("div",{className:"investigadores"},t.map((function(t,a){return s.a.createElement("div",{key:a,className:"investigador-container",onClick:function(t){return e.selectInvestigador(t,a)}},s.a.createElement("div",{className:"foto"},s.a.createElement("img",{src:t.foto,alt:"Imagen de "+t.nombre+" "+t.apellidos})),s.a.createElement("div",{className:"info"},s.a.createElement("h2",null,t.nombre," ",t.apellidos),s.a.createElement("p",null,t.campo)))}))))}}]),t}(n.Component),E=(a(92),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,investigador:{}},a.changeView=a.changeView.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"changeView",value:function(){this.props.changeView("list")}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.person.educacion[0].titulo,t=this.props.person.publicaciones[0].publicacion;return s.a.createElement("div",null,s.a.createElement("div",{className:"back-arrow",onClick:this.changeView},s.a.createElement("i",{className:"material-icons"},"arrow_back"),s.a.createElement("span",null,"Volver atr\xe1s")),s.a.createElement("div",{className:"investigador"},s.a.createElement("div",{key:this.props.person.foto,className:"card investigador-header"},s.a.createElement("div",{className:"foto"},s.a.createElement("img",{src:this.props.person.foto,alt:"Imagen de "+this.props.person.nombre+" "+this.props.person.apellidos})),s.a.createElement("div",{className:"info"},s.a.createElement("h2",null,this.props.person.nombre," ",this.props.person.apellidos),s.a.createElement("p",null,this.props.person.campo))),s.a.createElement("section",{className:"card"},s.a.createElement("h3",null,"Educaci\xf3n"),e.map((function(e,t){return s.a.createElement("article",{key:e.campo+t},s.a.createElement("p",{className:"grado"},s.a.createElement("b",null,e.grado)),s.a.createElement("p",{className:"institucion grey"},e.institucion),s.a.createElement("p",{className:"ano grey small"},e.a\u00f1o),s.a.createElement("p",{className:"pais grey small"},e.pais))}))),s.a.createElement("div",{className:"card"},s.a.createElement("h3",null,"Publicaciones"),t.map((function(e,t){return s.a.createElement("article",{key:e.titulo+t},s.a.createElement("p",{className:"titulo"},s.a.createElement("b",null,e.titulo)),s.a.createElement("p",{className:"ano grey small"},e.a\u00f1o),s.a.createElement("p",{className:"publisher grey small"},e.publisherName),e.link?s.a.createElement("p",{className:"link small"},s.a.createElement("a",{href:e.link,target:"_blank"},"Ver m\xe1s")):"")})))))}}]),t}(n.Component)),k=a(23),w=a.n(k),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,format:"json",investigadoresJson:[],investigadoresXml:[],investigadores:[],view:"list",investigadorSelected:{}},a.changeView=a.changeView.bind(Object(u.a)(a)),a.changeFormat=a.changeFormat.bind(Object(u.a)(a)),a.getJson=a.getJson.bind(Object(u.a)(a)),a.getXml=a.getXml.bind(Object(u.a)(a)),a.parseXml=a.parseXml.bind(Object(u.a)(a)),a.selectInvestigador=a.selectInvestigador.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getJson(),this.getXml()}},{key:"changeFormat",value:function(e,t){var a="json"===t?this.state.investigadoresJson:this.state.investigadoresXml;this.setState({format:t,view:"list",investigadores:a})}},{key:"changeView",value:function(e){this.setState({view:e})}},{key:"getJson",value:function(){var e=this;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:f.a.get("info/investigadores.json").then((function(t){setTimeout((function(){e.setState({loading:!1,investigadoresJson:t.data.investigadores,investigadores:t.data.investigadores})}),1e3)}));case 1:case"end":return t.stop()}}))}},{key:"getXml",value:function(){var e,t,n=this;return g.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,g.a.awrap(f.a.get("info/investigadores.xml"));case 2:t=s.sent,(0,a(52).parseString)(t.data,{trim:!0},(function(t,a){e=a.investigadores.investigador})),setTimeout((function(){n.setState({loading:!1,investigadoresXml:e})}),1e3);case 6:case"end":return s.stop()}}))}},{key:"parseXml",value:function(e){(0,a(52).parseString)(e,{trim:!0},(function(e,t){return t.investigadores.investigador}))}},{key:"selectInvestigador",value:function(e,t){var a="json"===this.props.format?this.state.investigadoresJson:this.state.investigadoresXml;this.setState({investigadorSelected:a[t],view:"person"}),this.changeView("person")}},{key:"render",value:function(){var e=this,t=this.state.investigadores,a=this.state.investigadorSelected,n="list"===this.state.view?s.a.createElement(b,{investigadores:t,selectInvestigador:this.selectInvestigador}):s.a.createElement(E,{person:a,changeView:this.changeView,format:this.state.format});return s.a.createElement("main",null,s.a.createElement("div",{className:"format-btns"},s.a.createElement("button",{className:"json"===this.state.format?"btn selected":"btn",onClick:function(t){return e.changeFormat(t,"json")}},"JSON"),s.a.createElement("button",{className:"xml"===this.state.format?"btn selected":"btn",onClick:function(t){return e.changeFormat(t,"xml")}},"XML")),this.state.loading?s.a.createElement("div",{className:"preloader-container"},s.a.createElement("img",{src:w.a,alt:"loading",className:"preloader"})):n)}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,data:[]},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getWikiData()}},{key:"getWikiData",value:function(){var e=this;return g.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:f.a.get("https://query.wikidata.org/sparql?query=SELECT%20%3Fpersona%20%3FpersonaLabel%20WHERE%20%7B%0A%20%20%3Fpersona%20wdt%3AP106%20wd%3AQ1650915%3B%0A%20%20%20%20wdt%3AP21%20wd%3AQ6581072%3B%0A%20%20%20%20wdt%3AP27%20wd%3AQ298.%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_%20LANGUAGE%5D%2Ces%22.%20%7D%0A%7D&format=json").then((function(t){e.setState({loading:!1,data:t.data.results.bindings})}));case 1:case"end":return t.stop()}}))}},{key:"render",value:function(){var e=this.state.data,t=s.a.createElement("div",null,"hola");t=s.a.createElement("div",{className:"investigadores wiki"},e.map((function(e,t){return s.a.createElement("div",{key:t,className:"investigador-container"},s.a.createElement("div",{className:"info"},s.a.createElement("h2",null,e.personaLabel.value),s.a.createElement("a",{href:e.persona.value,target:"_blank"},"Ver en WikiData")))})));return s.a.createElement("div",{className:"wikiQuery"},this.state.loading?s.a.createElement("div",{className:"preloader-container"},s.a.createElement("img",{src:w.a,alt:"loading",className:"preloader"})):t)}}]),t}(n.Component),y=function(e){function t(e){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e;return e="local"===this.props.content?s.a.createElement(j,null):s.a.createElement(O,null),s.a.createElement("main",{className:"appContent"},e)}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={format:"json",content:"local",view:"list"},a.changeContent=a.changeContent.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"changeContent",value:function(e){this.setState({content:e})}},{key:"changeView",value:function(e){this.setState({view:e})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(h,{content:this.state.content,changeContent:function(t){return e.changeContent(t)}}),s.a.createElement(y,{content:this.state.content,format:this.state.format,view:this.state.view,changeView:function(t){return e.changeView(t)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},23:function(e,t,a){e.exports=a.p+"static/media/loader.3e803924.gif"},67:function(e,t,a){e.exports=a(119)},72:function(e,t,a){},73:function(e,t,a){},92:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.686f36b7.chunk.js.map