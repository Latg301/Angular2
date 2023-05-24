import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miproyecto';

  animales = [
    {
        "id": 1,
        "nombre": "pez bailarina",
        "lugar" : {
            "departamento":"Antioquia",
            "municipio":" Municipio de Jardín"
        },
        "peso" : 0.90,
        "color" : "azul y rojo",
        "consume" : {
            "nombre":"papitas",
            "color":"rojo y blanco"
        },
        "desplazamiento": "Agua",
        "Imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0jx3-KhfMCloeu_QWtdYrJJ850hpIbXhg2v7YDzkdPcYSItI22PVRvGtMK5d4FafOHs&usqp=CAU"
        
    },
    {
        "id": 2,
        "nombre": "Mono araña",
        "lugar" : {
            "departamento":" Boyacá y Santander",
            "municipio":"Puerto Boyacá, Bolívar y Cimitarra"
        },
        "peso" : 15000,
        "color" : "Cafe",
        "consume" : {
            "nombre":"Moras",
            "color":"Purpura"
        },
        "desplazamiento": "Aire",
        "Imagen":"https://blog.xcaret.com/es/wp-content/uploads/2021/12/mono-arana-bebe-cria-1024x1024.png"
    },
    {
        "id": 3,
        "nombre": "Tarantula",
        "lugar" : {
            "departamento":" Santander.",
            "municipio":"Barrancabermeja."
        },
        "peso" : 0.3,
        "color" : "Negro con cafe",
        "consume" : {
            "nombre":"insectos",
            "color":"Gris"
        },
        "desplazamiento": "Tierra",
        "Imagen": "https://www.lifeder.com/wp-content/uploads/2019/08/tarantula-1416354_640-1-1-1.jpg"
        },
    {
        "id": 4,
        "nombre": "Lagartija",
        "lugar" : {
            "departamento":" Valle del Cauca",
            "municipio":"isla Gorgona"
        },
        "peso" : 10000,
        "color" : "verde",
        "consume" : {
            "nombre":"insectos",
            "color":"Gris"
        },
        "desplazamiento": "Tierra",
        "Imagen": "https://laverdadnoticias.com/__export/1596911267531/sites/laverdad/img/2020/08/08/significado_espiritual_lagartijas.jpg_554688468.jpg"
    },
    {
        "id": 5,
        "nombre": "mariquta",
        "lugar" : {
            "departamento":"Antioquia",
            "municipio":"Yarumal y Amalfi"
        },
        "peso" : 0.02,
        "color" : "rojo, amarillo, verde con manchas negras",
        "consume" : {
            "nombre": "insectos",
            "color": "café"
        },
        "desplazamiento": "Tierra",
        "Imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Thea.vigintiduopunctata.7232.jpg/1200px-Thea.vigintiduopunctata.7232.jpg"

    },
    {
        "id": 6,
        "nombre": "Cóndor de los Andes",
        "lugar" : {
            "departamento":"La Guajira, Cesar y Magdalena",
            "municipio":"Santa Marta"
        },
        "peso" : 15000,
        "color" : "Beige y negro",
        "consume" : {
            "nombre":"animales muertos de gran tamaño",
            "color":"Café y Gris"
        },
        "desplazamiento": "Aire",
        "Imagen" : "https://i.ytimg.com/vi/PznurRUcD3Q/sddefault.jpg"
    },
    {
        "id": 7,
        "nombre": "raton",
        "lugar" : {
            "departamento":" Cundinamarca",
            "municipio":"Sesquilé, Machetá, Guatavita, La Calera, Pasca, Cabrera y San Bernardo"
        },
        "peso" : 0.5,
        "color" : "Negro y gris",
        "consume" : {
            "nombre":"arañas",
            "color":"negro"
        },
        "desplazamiento": "Tierra",
        "Imagen": "https://media.istockphoto.com/photos/rats-black-on-white-bg-picture-id1281211427?k=20&m=1281211427&s=612x612&w=0&h=VKuJLgUG0oh-Oz5TuI_hb1v6IJCEEPoj7xo1JqQ-FbA="
    },
    {
        "id": 8,
        "nombre": "cuy",
        "lugar" : {
            "departamento":"Boyacá",
            "municipio":"Arcabuco"
        },
        "peso" : 10.8,
        "color" : "Negro y cafe",
        "consume" : {
            "nombre":"ratones",
            "color":"Gris"
        },
        "desplazamiento": "Tierra",
        "Imagen" : "http://www.republicaanimal.cl/wp-content/uploads/2015/07/sabias_cuy.jpg"
    },
    {
        "id": 9,
        "nombre": "Ranita venenosa",
        "lugar" : {
            "departamento":"Antioquia.",
            "municipio":"Risaralda y Quindío."
        },
        "peso" : 0.3,
        "color" : "Negro y rojo",
        "consume" : {
            "nombre":"insectos",
            "color":"Gris"
        },
        "desplazamiento": "Agua y tierra",
        "Imagen" : "https://static.inaturalist.org/photos/56314/large.jpg"

    },
    {
        "id": 10,
        "nombre": "cocodrilo",
        "lugar" : {
            "departamento":"Valle del Cauca",
            "municipio":"Isla de Malpelo"
        },
        "peso" : 20000,
        "color" : "Negro, y verde",
        "consume" : {
            "nombre":"peces",
            "color":"negros"
        },
        "desplazamiento": "Agua y tierra",
        "Imagen": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/American_Alligator.jpg/768px-American_Alligator.jpg"
    },

];
}
