import { HoverImage } from "../components/galeria/HoverImage";

const gallery = [
  {src: 'images/1.png', hover: 'images/10.png', description: 'Imagen 1'},
  {src: 'images/2.png', hover: 'images/9.png', description: 'Imagen 2'},
  {src: 'images/3.png', hover: 'images/8.png', description: 'Imagen 3'},
  {src: 'images/4.png', hover: 'images/7.png', description: 'Imagen 4'},
  {src: 'images/5.png', hover: 'images/6.png', description: 'Imagen 5'},
  {src: 'images/6.png', hover: 'images/5.png', description: 'Imagen 6'},
  {src: 'images/7.png', hover: 'images/4.png', description: 'Imagen 7'},
  {src: 'images/8.png', hover: 'images/3.png', description: 'Imagen 8'},
  {src: 'images/9.png', hover: 'images/2.png', description: 'Imagen 9'},
  {src: 'images/10.png', hover: 'images/1.png', description: 'Imagen 10'},
];

/**
 * El componente Artshop representa el contenido principal de la página ART SHOP
 * Con un array de datos (gallery), crea las imágenes con efectos especiales usando cada uno de los elementos del array
 */
export const Artshop = () => {
  return (
    <section className="gallery">
      {gallery.map( (img, i) => <HoverImage key={"hover-image-"+i} src={img.src} alt={img.description} hover={img.hover} />)}
    </section>
  );
};
