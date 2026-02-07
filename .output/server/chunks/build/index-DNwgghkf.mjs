import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './v3-CLZNha9k.mjs';
import { b as useRuntimeConfig, d as useRoute } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0 = publicAssetsURL("/logo.png");
const _imports_1 = publicAssetsURL("/software-imagenes/image1.jpeg");
const _imports_2 = publicAssetsURL("/software-imagenes/image3.jpeg");
const _imports_3 = publicAssetsURL("/software-imagenes/image4.jpeg");
const _imports_4 = publicAssetsURL("/software-imagenes/image5.jpeg");
const _imports_5 = publicAssetsURL("/software-imagenes/image6.jpeg");
const _imports_6 = publicAssetsURL("/software-imagenes/image2.jpeg");
const _imports_7 = publicAssetsURL("/software-imagenes/image9.jpeg");
const _imports_8 = publicAssetsURL("/software-imagenes/image10.jpeg");
const _imports_9 = publicAssetsURL("/software-imagenes/image7.jpeg");
const _imports_10 = publicAssetsURL("/software-imagenes/image12.jpeg");
const _imports_11 = publicAssetsURL("/software-imagenes/image13.jpeg");
const _imports_12 = publicAssetsURL("/software-imagenes/image15.jpeg");
const _imports_13 = publicAssetsURL("/software-imagenes/config.jpeg");
const _imports_14 = publicAssetsURL("/software-imagenes/personal.jpeg");
function useSeo(options) {
  const config = useRuntimeConfig();
  const siteUrl = config.public && config.public.siteUrl || process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const route = useRoute();
  const path = options.path || route.path || "/";
  const url = siteUrl.replace(/\/$/, "") + (path.startsWith("/") ? path : `/${path}`);
  useHead({
    title: options.title,
    meta: [
      { name: "description", content: options.description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: options.title },
      { property: "og:description", content: options.description },
      { property: "og:image", content: options.image || `${siteUrl.replace(/\/$/, "")}/og-image.svg` },
      { property: "og:url", content: url },
      { property: "og:locale", content: "es_CU" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: options.title },
      { name: "twitter:description", content: options.description },
      { name: "twitter:image", content: options.image || `${siteUrl.replace(/\/$/, "")}/og-image.svg` }
    ],
    link: [{ rel: "canonical", href: url }],
    script: options.jsonLd ? [
      {
        type: "application/ld+json",
        children: JSON.stringify(options.jsonLd)
      }
    ] : []
  });
}
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileOpen = ref(false);
    const lightboxOpen = ref(false);
    const lightboxImage = ref("");
    const demoUsers = [
      { role: "Administrador", user: "administrador", pass: "Abcd.1234" },
      { role: "M\xE9dico", user: "medico", pass: "Abcd.1234" },
      { role: "T\xE9cnico", user: "tecnico", pass: "Abcd.1234" },
      { role: "Estilista", user: "estilista", pass: "Abcd.1234" }
    ];
    const copied = ref(demoUsers.map(() => false));
    useSeo({
      title: "Software de gesti\xF3n veterinaria en Cuba \u2014 V-Doctor",
      description: "V-Doctor System: software para cl\xEDnicas veterinarias en Cuba. Gesti\xF3n de historias cl\xEDnicas, inventario, agenda, facturaci\xF3n y acceso m\xF3vil.",
      image: "/og-image.svg",
      path: "/"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans text-slate-800 scroll-smooth" }, _attrs))}><header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b"><nav class="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between"><div class="flex items-center gap-3"><img${ssrRenderAttr("src", _imports_0)} alt="V-Doctor logo" class="h-8 w-auto"><span class="font-bold text-xl text-emerald-600">V-Doctor System</span></div><div class="flex items-center gap-4"><ul class="hidden md:flex gap-6 text-sm font-medium"><li><a href="#inicio" class="hover:text-emerald-600">Inicio</a></li><li><a href="#producto" class="hover:text-emerald-600">Producto</a></li><li><a href="#funcionalidades" class="hover:text-emerald-600">Funcionalidades</a></li><li><a href="#demo" class="hover:text-emerald-600">Demo</a></li><li><a href="#sobre-mi" class="hover:text-emerald-600">Sobre m\xED</a></li><li><a href="#contacto" class="hover:text-emerald-600">Contacto</a></li></ul><button class="md:hidden p-2 rounded-md hover:bg-slate-100" aria-label="Abrir navegaci\xF3n"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">`);
      if (!mobileOpen.value) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
      }
      _push(`</svg></button></div></nav><div class="md:hidden bg-white/95 backdrop-blur border-t" style="${ssrRenderStyle(mobileOpen.value ? null : { display: "none" })}"><div class="px-6 py-4 space-y-2"><a href="#inicio" class="block py-2 text-sm font-medium hover:text-emerald-600">Inicio</a><a href="#producto" class="block py-2 text-sm font-medium hover:text-emerald-600">Producto</a><a href="#funcionalidades" class="block py-2 text-sm font-medium hover:text-emerald-600">Funcionalidades</a><a href="#demo" class="block py-2 text-sm font-medium hover:text-emerald-600">Demo</a><a href="#sobre-mi" class="block py-2 text-sm font-medium hover:text-emerald-600">Sobre m\xED</a><a href="#contacto" class="block py-2 text-sm font-medium hover:text-emerald-600">Contacto</a></div></div></header><section id="inicio" class="pt-32 pb-24 bg-gradient-to-br from-emerald-50 to-white"><div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"><div><h1 class="text-4xl md:text-5xl font-extrabold leading-tight"> Software de gesti\xF3n veterinaria <span class="text-emerald-600">centralizado</span></h1><p class="mt-6 text-lg text-slate-600"> Sistema profesional para cl\xEDnicas veterinarias Cubanas que integra una API, base de datos centralizada y aplicaci\xF3n m\xF3vil para m\xE9dicos y t\xE9cnicos veterinarios. </p><p class="mt-4 text-slate-600"> Funciona tanto con conexi\xF3n a internet como de forma local mediante un servidor instalado en una PC dedicada dentro de la cl\xEDnica. Para m\xE1s informaci\xF3n al respecto contacte directamente. </p><div class="mt-8 flex gap-4"><a href="#demo" class="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">Probar demo</a><a href="#producto" class="px-6 py-3 rounded-xl border font-semibold hover:border-emerald-600 hover:text-emerald-600">Conocer el sistema</a></div></div><div class="h-[420px] rounded-3xl overflow-hidden flex items-center justify-center bg-slate-50"><img${ssrRenderAttr("src", _imports_1)} alt="Imagen principal del sistema" class="h-full w-full object-contain p-4 cursor-pointer"></div></div></section><div class="fixed inset-0 z-50 flex items-center justify-center bg-black/70" style="${ssrRenderStyle(lightboxOpen.value ? null : { display: "none" })}"><button class="absolute top-6 right-6 text-white bg-black/30 rounded-full p-2 hover:bg-black/40">\u2715</button><img${ssrRenderAttr("src", lightboxImage.value)} alt="Ampliada" class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"></div><section id="producto" class="py-24"><div class="max-w-7xl mx-auto px-6"><h2 class="text-3xl font-bold text-center">Plataforma integral para cl\xEDnicas veterinarias</h2><p class="mt-6 text-center text-slate-600 max-w-4xl mx-auto"> V-Doctor System es una soluci\xF3n completa dise\xF1ada para centralizar toda la informaci\xF3n cl\xEDnica, administrativa y contable de una cl\xEDnica veterinaria. Permite que m\xFAltiples m\xE9dicos y t\xE9cnicos trabajen simult\xE1neamente sobre una \xFAnica base de datos segura y consistente. </p><p class="mt-4 text-center text-slate-600 max-w-4xl mx-auto"> El sistema se compone de un servidor (API + base de datos) y una aplicaci\xF3n m\xF3vil desde la cual el personal accede a la informaci\xF3n en tiempo real. </p><p class="mt-4 text-center text-slate-600 max-w-4xl mx-auto"> Integra la gesti\xF3n de clientes, pacientes, historias cl\xEDnicas, inventario de medicamentos, ventas, contabilidad, calendario de eventos y usuarios con roles espec\xEDficos y permisos espec\xEDfcos en una plataforma unificada. </p></div></section><section id="funcionalidades" class="py-24 bg-slate-50"><div class="max-w-7xl mx-auto px-6"><h2 class="text-3xl font-bold text-center">Funcionalidades del sistema</h2><p class="mt-4 text-center text-slate-600 max-w-4xl mx-auto"> Cada m\xF3dulo est\xE1 pensado para cubrir una necesidad real del d\xEDa a d\xEDa veterinario, manteniendo trazabilidad cl\xEDnica y control administrativo. </p><div class="mt-16 grid md:grid-cols-2 gap-16"><div class="space-y-6"><h3 class="text-xl font-semibold">Gesti\xF3n cl\xEDnica centralizada</h3><p class="text-slate-600">Pacientes (mascotas), clientes (due\xF1os), historias cl\xEDnicas, vacunas, antiparasitarios, cirug\xEDas, servicios de est\xE9tica y ba\xF1o.</p><div class="h-[360px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50"><img${ssrRenderAttr("src", _imports_2)} alt="Gesti\xF3n de pacientes" class="h-full w-full object-contain p-4 cursor-pointer"></div></div><div class="space-y-6"><h3 class="text-xl font-semibold">Historial m\xE9dico detallado</h3><p class="text-slate-600">Registro completo de consultas, evoluci\xF3n, peso, tratamientos y documentos m\xE9dicos imprimibles.</p><div class="h-[360px] rounded-2xl overflow-hidden"><div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full"><div class="bg-slate-50 p-4 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_3)} alt="Historia cl\xEDnica 1" class="max-h-[320px] w-auto object-contain rounded-lg cursor-pointer"></div><div class="bg-slate-50 p-4 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_4)} alt="Historia cl\xEDnica 2" class="max-h-[320px] w-auto object-contain rounded-lg cursor-pointer"></div></div></div></div><div class="space-y-6"><h3 class="text-xl font-semibold">Inventario y medicamentos</h3><p class="text-slate-600">Control de stock de medicamentos y productos con impacto directo en las consultas y ventas.</p><div class="h-[360px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50"><img${ssrRenderAttr("src", _imports_5)} alt="Inventario" class="h-full w-full object-contain p-4 cursor-pointer"></div></div><div class="space-y-6"><h3 class="text-xl font-semibold">Ventas integradas</h3><p class="text-slate-600">Ventas directas y ventas asociadas a pacientes que forman parte de su historial cl\xEDnico.</p><div class="h-[360px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50"><img${ssrRenderAttr("src", _imports_6)} alt="Ventas" class="h-full w-full object-contain p-4 cursor-pointer"></div></div><div class="space-y-6"><h3 class="text-xl font-semibold">Contabilidad en dos monedas</h3><p class="text-slate-600">Gesti\xF3n contable en CUP y USD con conversi\xF3n autom\xE1tica para una contabilidad precisa.</p><div class="h-[360px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50"><img${ssrRenderAttr("src", _imports_7)} alt="Contabilidad" class="h-full w-full object-contain p-4"></div></div><div class="space-y-6"><h3 class="text-xl font-semibold">Calendario y recordatorios</h3><p class="text-slate-600">Eventos, vacunas, controles y recordatorios organizados para mejorar la atenci\xF3n al paciente.</p><div class="h-[360px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50"><img${ssrRenderAttr("src", _imports_8)} alt="Calendario" class="h-full w-full object-contain p-4"></div></div><div class="space-y-6"><h3 class="text-xl font-semibold">Gesti\xF3n de usuarios</h3><p class="text-slate-600">Administraci\xF3n de cuentas, permisos y roles para personal y t\xE9cnicos del centro.</p><div class="h-[360px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50"><img${ssrRenderAttr("src", _imports_9)} alt="Gesti\xF3n de usuarios" class="h-full w-full object-contain p-4 cursor-pointer"></div></div><div class="space-y-6"><h3 class="text-xl font-semibold">Perfil de Usuario</h3><p class="text-slate-600">Perfiles personalizados para m\xE9dicos, t\xE9cnicos y administradores con permisos por rol.</p><div class="h-[360px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50"><img${ssrRenderAttr("src", _imports_10)} alt="Perfil de usuario" class="h-full w-full object-contain p-4 cursor-pointer"></div></div><div class="space-y-6"><h3 class="text-xl font-semibold">M\xE9todo de Consulta</h3><p class="text-slate-600">Documento f\xEDsico para registro hist\xF3rico o para imprimircelo directamente a los clientes.</p><div class="h-[360px] rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50"><img${ssrRenderAttr("src", _imports_11)} alt="M\xE9todo de consulta" class="h-full w-full object-contain p-4 cursor-pointer"></div></div><div class="space-y-6"><h3 class="text-xl font-semibold">Consulta e Historia Cl\xEDnica</h3><p class="text-slate-600">Visualizaci\xF3n completa de consultas, evoluci\xF3n y documentos cl\xEDnicos relacionados por paciente.</p><div class="h-[360px] rounded-2xl overflow-hidden"><div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full items-center"><div class="bg-slate-50 p-4 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_12)} alt="Consulta" class="max-h-[320px] w-auto object-contain rounded-lg cursor-pointer"></div><div class="bg-slate-50 p-4 flex items-center justify-center"><img${ssrRenderAttr("src", _imports_3)} alt="Historia cl\xEDnica" class="max-h-[320px] w-auto object-contain rounded-lg cursor-pointer"></div></div></div></div></div></div></section><section id="demo" class="py-24"><div class="max-w-5xl mx-auto px-6"><h2 class="text-3xl font-bold text-center">Demo p\xFAblica del software veterinario</h2><p class="mt-4 text-slate-600 text-center"> Descarga la aplicaci\xF3n m\xF3vil y con\xE9ctate a un servidor de prueba para evaluar el sistema sin restricciones funcionales. </p><div class="mt-8 p-8 bg-slate-50 rounded-2xl"><p class="font-semibold">Pasos para usar la demo</p><ol class="mt-4 text-left list-decimal list-inside space-y-2 text-slate-600"><li>Descargar la aplicaci\xF3n V-Doctor (Solo disponible para Android por el momento).</li><li>(Opcional) Descargar <em>Epson IPrint</em> para imprimir f\xE1cilmente desde el celular.</li><li>Instalar la aplicaci\xF3n.</li><li>Al abrir la aplicaci\xF3n se mostrar\xE1 una p\xE1gina de configuraci\xF3n:</li><div class="mt-3 flex justify-center"><img${ssrRenderAttr("src", _imports_13)} alt="Configuraci\xF3n" class="max-w-full max-h-60 object-contain rounded-lg shadow"></div><li>Digitar en el campo la URL <strong>https://mi-api.com</strong> y presionar el bot\xF3n <strong>Guardar</strong>.</li><li>Luego de esto puede iniciar sesi\xF3n y usar la demo con conexi\xF3n a internet.</li></ol><div class="mt-6"><p class="font-semibold">Usuarios disponibles en la demo</p><div class="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"><!--[-->`);
      ssrRenderList(demoUsers, (u, i) => {
        _push(`<div class="bg-gradient-to-b from-white to-slate-50 rounded-xl shadow-md p-4 text-left"><div class="text-sm text-slate-500">Rol: ${ssrInterpolate(u.role)}</div><div class="mt-2 text-sm text-slate-600">Usuar: <span class="font-semibold text-emerald-600">${ssrInterpolate(u.user)}</span></div><div class="mt-2 flex items-center gap-3"><div class="text-sm text-slate-700 font-mono">Cont: ${ssrInterpolate(u.pass)}</div><button class="text-xs px-2 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700">`);
        if (!copied.value[i]) {
          _push(`<span>Copiar</span>`);
        } else {
          _push(`<span>Copiado</span>`);
        }
        _push(`</button></div></div>`);
      });
      _push(`<!--]--></div></div><div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"><a href="/apk/V-Doctor 1.0.apk" class="flex items-center justify-center gap-3 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"><img${ssrRenderAttr("src", _imports_0)} alt="V-Doctor" class="h-5 w-auto"><span class="font-medium">Descargar V-Doctor (APK)</span></a><a href="/apk/epson-iprint-7-13-2.apk" class="flex items-center justify-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><span class="font-medium">Descargar Epson IPrint (APK)</span></a></div><div class="mt-6 text-sm text-slate-500"><p>Nota: Si tu navegador bloquea la instalaci\xF3n de APKs, permite instalaciones desde or\xEDgenes desconocidos en la configuraci\xF3n del dispositivo.</p></div></div></div></section><section id="sobre-mi" class="py-24 bg-slate-50"><div class="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"><div class="h-[300px] rounded-full overflow-hidden mx-auto"><img${ssrRenderAttr("src", _imports_14)} alt="Foto personal" class="h-full w-full object-cover"></div><div><h2 class="text-3xl font-bold">Desarrollador del sistema</h2><p class="mt-4 text-slate-600"> Ingeniero inform\xE1tico y desarrollador de software especializado en sistemas de gesti\xF3n, APIs y arquitecturas modernas. </p><p class="mt-2 text-slate-600"> V-Doctor System nace a partir de necesidades reales del sector veterinario Cubano, enfocado en eficiencia, seguridad y control total de la informaci\xF3n. </p></div></div></section><section id="contacto" class="py-24 bg-slate-900 text-slate-100"><div class="max-w-5xl mx-auto px-6 text-center"><h2 class="text-3xl font-bold">Contacto profesional</h2><p class="mt-4 text-slate-400">Solicita informaci\xF3n, soporte t\xE9cnico, demo privada o instalaci\xF3n.</p><div class="mt-8 space-y-2"><p>Correo: davidquintanajob@gmail.com</p><p>WhatsApp / Tel\xE9fono: +53 56242671</p></div></div></section><footer class="py-6 text-center text-sm text-slate-500"> \xA9 2026 V-Doctor System \u2013 Software de gesti\xF3n veterinaria </footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DNwgghkf.mjs.map
