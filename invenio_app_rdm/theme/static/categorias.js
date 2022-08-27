var busqueda = "/search?q=";
var variable = 1 
    function cargarSubcategoriasCards(subCategoria){
        document.getElementById("SubcategoriaSeleccionada").textContent = subCategoria
        var div = document.getElementById('subCategorias')

        div.innerHTML = ""

        switch(subCategoria){
            case 'Medios/Formatos':
                div.appendChild(crearCard('Cine'))
                div.appendChild(crearCard('Televisión'))
                div.appendChild(crearCard('Publicidad'))
                div.appendChild(crearCard('Medios digitales'))
                break;
            case 'Fomento y cultura':
                div.appendChild(crearCard('Fomento y protección', 'fomento'))
                div.appendChild(crearCard('Distribución y difusión', 'difusión'))
                div.appendChild(crearCard('Cultura y tradiciones', 'tradiciones'))
                break;
            case 'Administración y financiamiento':
                div.appendChild(crearCard('Emprendimiento e innovación', "emprendimiento"))
                div.appendChild(crearCard('Financiamiento'))
                break;
            case 'Propiedad intelectual':
                div.appendChild(crearCard('Contenido / Temáticas', 'contenidos'))
                div.appendChild(crearCard('Copyright'))
                break;
            case 'Fases de producción':
                break;
        }

    }

    function crearCard(nombre, param = nombre){
        var enlace = document.createElement('a')
        enlace.href = busqueda + param
        var card = document.createElement('div')

        enlace.classList.add('enlace-categoria')
        card.classList.add('subcategoria')

        card.textContent = nombre

        enlace.appendChild(card)

        return enlace
    }

    function sidebarController(nombre){
        const url = window.location.pathname
        console.log(url)
        
        if(url.localeCompare('/')==0){
            cargarSubcategoriasCards(nombre)
        }else{
            window.location = `/?sub=${nombre}`
        }
    }


    window.onload = () => {
        const param = new URLSearchParams(window.location.search)

        const subCategoria = param.get('sub')
        console.log(subCategoria)

        if(subCategoria){
            cargarSubcategoriasCards(subCategoria)
        }
    }