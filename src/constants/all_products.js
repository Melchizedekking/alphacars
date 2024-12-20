import sedan from '../assets/new/1bmw.jpg'
import chiron from '../assets/new/1bugattiChiron.webp'
import wagon  from '../assets/new/1merc.jpg'
import cayenne from '../assets/new/1porch.jpg'
import xdrive from '../assets/new/2bmw.jpg'
import mercedesamg from '../assets/new/2merc.jpg'
import coup from '../assets/new/2porsch.webp'
import sclass from '../assets/new/3merc.avif'
import gclass from '../assets/gclass.jpg'
import cybertruck from '../assets/cybertruck.webp'
import bmw from '../assets/bmw.jpg'
import formatic from '../assets/formatic.jpg'
import lamborgini from '../assets/lamborgini.jpg'
import audi from '../assets/audi.webp'
import amg from '../assets/all/amg.avif'
import amggt from '../assets/all/amggt.jpg'
import bmwi7 from '../assets/all/bmwi7.avif'
import bmwx1 from '../assets/all/bmwx1.avif'
import bmwxm from '../assets/all/bmwxm.jpg'
import bmwz4 from '../assets/all/bmwz4.avif'
import bolide from '../assets/all/bolide.webp'
import eclass from '../assets/all/eclass.jpg'
import gwagon from '../assets/all/gwagon.jpeg'
import maybach from '../assets/all/maybach.webp'
import benzAClass from '../assets/all/benzAClass.avif'
import cla from '../assets/all/cla.avif'
import naz from '../assets/all/naz.webp'
import rvt from '../assets/all/rvt.webp'
import veyron from '../assets/all/veyron.webp'





const allProducts = [{
  id: 1,
  name: 'Sedan',
  category: 'bmw',
  image: sedan,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 50000, 
  oldPrice: 60000
},{
  id: 2,
  name: 'Chiron',
  category: 'others',
  image: chiron,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 100000, 
  oldPrice: 110000
},{
  id: 3,
  name: 'Wagon',
  category: 'mercedes',
  image: wagon,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 70000, 
  oldPrice: 80000
},{
  id: 4,
  name: 'Cayenne',
  category: 'others',
  image: cayenne,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 40000, 
  oldPrice: 50000
},{
  id: 5,
  name: 'Xdrive',
  category: 'bmw',
  image: xdrive,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 200000, 
  oldPrice: 220000
},{
  id: 6,
  name: 'MercedesAmg',
  category: 'mercedes',
  image: mercedesamg,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 80000, 
  oldPrice: 95000
},{
  id: 7,
  name: 'Coup',
  category: 'others',
  image: coup,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 80000, 
  oldPrice: 95000
},{
  id: 8,
  name: 'Sclass',
  category: 'mercedes',
  image: sclass,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 80000, 
  oldPrice: 95000
},{
  id: 9,
  name: 'G-class',
  category: 'mercedes',
  image: gclass,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 50000, 
  oldPrice: 60000
},{
  id: 10,
  name: 'Cybertruck',
  category: 'others',
  image: cybertruck,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 100000, 
  oldPrice: 110000
},{
  id: 11,
  name: 'XM',
  category: 'bmw',
  image: bmw,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 70000, 
  oldPrice: 80000
},{
  id: 12,
  name: 'Formatic',
  category: 'mercedes',
  image: formatic,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 40000, 
  oldPrice: 50000
},{
  id: 13,
  name: 'Urus',
  category: 'others',
  image: lamborgini,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 200000, 
  oldPrice: 220000
},{
  id: 14,
  name: 'Audi',
  category: 'others',
  image: audi,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 80000, 
  oldPrice: 95000
},{
  id: 15,
  name: 'Amg',
  category: 'mercedes',
  image: amg,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 50000, 
  oldPrice: 60000
},{
  id: 16,
  name: 'AmgGt',
  category: 'mercedes',
  image: amggt,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 100000, 
  oldPrice: 110000
},{
  id: 17,
  name: 'BenzAClass',
  category: 'mercedes',
  image: benzAClass,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 70000, 
  oldPrice: 80000
},{
  id: 18,
  name: 'bmwi7',
  category: 'bmw',
  image: bmwi7,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 40000, 
  oldPrice: 50000
},{
  id: 19,
  name: 'BmwX1',
  category: 'bmw',
  image: bmwx1,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 200000, 
  oldPrice: 220000
},{
  id: 20,
  name: 'BmwXm',
  category: 'bmw',
  image: bmwxm,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 80000, 
  oldPrice: 95000
},{
  id: 21,
  name: 'BmwZ4',
  category: 'bmw',
  image: bmwz4,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 80000, 
  oldPrice: 95000
},{
  id: 22,
  name: 'Bolide',
  category: 'others',
  image: bolide,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 80000, 
  oldPrice: 95000
},{
  id: 23,
  name: 'mercedesCla',
  category: 'mercedes',
  image: cla,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 50000, 
  oldPrice: 60000
},{
  id: 24,
  name: 'Eclass',
  category: 'mercedes',
  image: eclass,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 100000, 
  oldPrice: 110000
},{
  id: 25,
  name: 'Gwagon',
  category: 'mercedes',
  image: gwagon,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 70000, 
  oldPrice: 80000
},{
  id: 26,
  name: 'Maybach',
  category: 'mercedes',
  image: maybach,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 40000, 
  oldPrice: 50000
},{
  id: 27,
  name: 'Nav',
  category: 'mercedes',
  image: naz,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 200000, 
  oldPrice: 220000
},{
  id: 28,
  name: 'Rvt',
  category: 'mercedes',
  image: rvt,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 80000, 
  oldPrice:95000
},{
  id: 29,
  name: 'Veyron',
  category: 'others',
  image: veyron,
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, corrupti ut! Totam corporis amet distinctio, laboriosam numquam repellendus minus. Beatae, reiciendis incidunt. Debitis inventore exercitationem voluptatibus adipisci nam architecto quasi?',
  newPrice: 80000, 
  oldPrice: 95000
}
];

export default allProducts;