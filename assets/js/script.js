const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Apartamento acogedor en la montaña con vistas increíbles.',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Penthouse de lujo con vistas espectaculares.',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Parcela en Puerto Varas',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/124579421.jpg?k=e87d6f65d6a23b1a291f7227c5ff0292365fdf881d762c0f8ac7607b2b01daeb&o=&hp=1',
        descripcion: 'Parcela de 5000m² con vista al lago Llanquihue.',
        ubicacion: 'Puerto Varas, Los Lagos',
        habitaciones: 4,
        costo: 2500,
        smoke: true,
        pets: true
    },
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento está ubicado en el corazón de la ciudad.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Apartamento con vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Condominio moderno está ubicado en una tranquila zona residencial.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Departamento en Las Condes',
        src: 'https://i0.wp.com/chocale.cl/wp-content/uploads/2019/03/loft-departamento.jpg?fit=1000%2C666&ssl=1',
        descripcion: 'Amplio departamento con vista a la ciudad.',
        ubicacion: 'Las Condes, Santiago',
        habitaciones: 3,
        costo: 7500,
        smoke: false,
        pets: true
    },
];
function cargarPropiedades(propiedades) {
    const contenedor = document.getElementById("contenedor-propiedades");
    contenedor.innerHTML = ""; 

    for (const propiedad of propiedades) {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${propiedad.src}" alt="${propiedad.nombre}">
                <div class="card-body">
                    <h5>${propiedad.nombre}</h5>
                    <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
                    <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
                    <p><strong>Precio:</strong> $${propiedad.costo.toLocaleString()} USD</p>
                    <p>${propiedad.smoke ? '✅ <span class="text-success">Permitido fumar</span>' : '❌ <span class="text-danger">No se permite fumar</span>'}</p>
                    <p>${propiedad.pets ? '🐶 <span class="text-success">Mascotas permitidas</span>' : '🚫 <span class="text-danger">No se permiten mascotas</span>'}</p>
                </div>
            </div>
        `;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    if (document.body.classList.contains("alquiler")) {
        cargarPropiedades(propiedades_alquiler);
    } else if (document.body.classList.contains("venta")) {
        cargarPropiedades(propiedades_venta);
    }
});