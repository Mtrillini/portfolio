/* =========================================================
   PORTFOLIO — MARTINA TRILLINI
   JavaScript de interacción (sin dependencias)
   ---------------------------------------------------------
   01 · Tema claro / oscuro
   02 · Menú mobile
   03 · Header con scroll
   04 · Link activo de la navegación
   05 · Aparición de bloques al hacer scroll
   06 · Contenedores de imagen sin archivo todavía
   07 · Año del footer
   08 · Iconos de la franja resumen
   ========================================================= */

(function () {
    'use strict';

    var root = document.documentElement;
    var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


    /* =====================================================
       01 · TEMA CLARO / OSCURO
       El tema inicial se aplica en el <head> para evitar
       el parpadeo; acá sólo se maneja el cambio manual.
       ===================================================== */

    var botonTema = document.getElementById('theme-toggle');
    var iconoTema = botonTema ? botonTema.querySelector('.theme-icon') : null;
    var metaColor = document.querySelector('meta[name="theme-color"]');

    function pintarTema(tema) {
        root.setAttribute('data-theme', tema);

        if (botonTema) {
            botonTema.setAttribute('aria-pressed', tema === 'dark' ? 'true' : 'false');
        }

        if (iconoTema) {
            iconoTema.textContent = tema === 'dark' ? '☾' : '☼';
        }

        if (metaColor) {
            metaColor.setAttribute('content', tema === 'dark' ? '#101010' : '#f5f1e9');
        }
    }

    pintarTema(root.getAttribute('data-theme') || 'light');

    if (botonTema) {
        botonTema.addEventListener('click', function () {
            var nuevo = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

            pintarTema(nuevo);

            try {
                localStorage.setItem('mt-theme', nuevo);
            } catch (e) {
                /* Modo privado: el tema no se guarda, pero el sitio funciona igual. */
            }
        });
    }


    /* =====================================================
       02 · MENÚ MOBILE
       ===================================================== */

    var botonMenu = document.getElementById('nav-toggle');
    var nav = document.getElementById('nav');
    var enlacesNav = nav ? Array.prototype.slice.call(nav.querySelectorAll('a')) : [];

    function cerrarMenu() {
        if (!nav || !botonMenu) return;
        nav.classList.remove('is-open');
        botonMenu.setAttribute('aria-expanded', 'false');
    }

    if (botonMenu && nav) {

        botonMenu.addEventListener('click', function () {
            var abierto = nav.classList.toggle('is-open');
            botonMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        });

        enlacesNav.forEach(function (enlace) {
            enlace.addEventListener('click', cerrarMenu);
        });

        document.addEventListener('keydown', function (evento) {
            if (evento.key === 'Escape' && nav.classList.contains('is-open')) {
                cerrarMenu();
                botonMenu.focus();
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 900) cerrarMenu();
        });
    }


    /* =====================================================
       03 · HEADER CON SCROLL
       ===================================================== */

    var header = document.getElementById('header');

    if (header) {
        var marcarScroll = function () {
            header.classList.toggle('is-scrolled', window.scrollY > 12);
        };

        marcarScroll();
        window.addEventListener('scroll', marcarScroll, { passive: true });
    }


    /* =====================================================
       04 · LINK ACTIVO DE LA NAVEGACIÓN
       ===================================================== */

    var secciones = document.querySelectorAll('main section[id]');

    if (secciones.length && enlacesNav.length && 'IntersectionObserver' in window) {

        var observadorSecciones = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (!entrada.isIntersecting) return;

                enlacesNav.forEach(function (enlace) {
                    var activo = enlace.getAttribute('href') === '#' + entrada.target.id;

                    if (activo) {
                        enlace.setAttribute('aria-current', 'true');
                    } else {
                        enlace.removeAttribute('aria-current');
                    }
                });
            });
        }, { rootMargin: '-30% 0px -60% 0px' });

        secciones.forEach(function (seccion) {
            observadorSecciones.observe(seccion);
        });
    }


    /* =====================================================
       05 · APARICIÓN DE BLOQUES AL HACER SCROLL
       ===================================================== */

    var bloques = document.querySelectorAll('[data-reveal]');

    if (!bloques.length) {
        /* nada que animar */
    } else if (sinMovimiento || !('IntersectionObserver' in window)) {
        bloques.forEach(function (bloque) {
            bloque.classList.add('is-visible');
        });
    } else {
        var observadorReveal = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (!entrada.isIntersecting) return;

                entrada.target.classList.add('is-visible');
                observadorReveal.unobserve(entrada.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        bloques.forEach(function (bloque) {
            observadorReveal.observe(bloque);
        });
    }


    /* =====================================================
       06 · CONTENEDORES DE IMAGEN SIN ARCHIVO TODAVÍA
       Si la captura aún no existe en /assets, el contenedor
       conserva el espacio y muestra la ruta esperada.
       ===================================================== */

    function marcarVacio(imagen) {
        var contenedor = imagen.closest('.media-frame');
        if (contenedor) contenedor.classList.add('is-empty');
    }

    document.querySelectorAll('.media-frame img').forEach(function (imagen) {

        /* La imagen ya falló antes de que corriera este script */
        if (imagen.complete && imagen.naturalWidth === 0) {
            marcarVacio(imagen);
            return;
        }

        imagen.addEventListener('error', function () {
            marcarVacio(imagen);
        });

        imagen.addEventListener('load', function () {
            var contenedor = imagen.closest('.media-frame');
            if (contenedor) contenedor.classList.remove('is-empty');
        });
    });


    /* =====================================================
       07 · AÑO DEL FOOTER
       ===================================================== */

    var anio = document.getElementById('year');
    if (anio) anio.textContent = new Date().getFullYear();

    /* =====================================================
       08 · ICONOS DE LA FRANJA RESUMEN
       Si el PNG existe reemplaza al glifo; si no, el glifo
       se queda y no se ve ninguna imagen rota.
       ===================================================== */

    document.querySelectorAll('.summary-icon').forEach(function (icono) {

        function usarIcono() {
            icono.classList.add('is-ready');
            var glifo = icono.parentNode.querySelector('.summary-glyph');
            if (glifo) glifo.remove();
        }

        if (icono.complete && icono.naturalWidth > 0) {
            usarIcono();
            return;
        }

        icono.addEventListener('load', usarIcono);
        icono.addEventListener('error', function () {
            icono.remove();
        });
    });


})();
