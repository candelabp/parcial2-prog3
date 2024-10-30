import { renderCategories } from "./src/services/categories";
import { handleGetProductLocalStorage, setInLocalStorage } from "./src/persistence/localStorage";
import './style.css'
import { handleGetProductsToStore } from "./src/view/store";


//aplicacion
handleGetProductsToStore();

renderCategories();
/* product*/
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click',()=>{
openModal();
});

/* POP UP */



const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click',()=>{
handleCancelButton();
})
const handleCancelButton = ()=>{
  closeModal();
}
//funciones abrir y cerrar el modal
const openModal = ()=>{
  const modal = document.getElementById("modalPopUP");
  modal.style.display = "flex";
};

const closeModal = ()=>{
  const modal = document.getElementById("modalPopUP");
  modal.style.display = "none";
};

/*guardar o modificar elementos*/
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click',()=>{
  handleSaveOrModifyElements();
});
const handleSaveOrModifyElements = () => {
  const nombre = document.getElementById("nombre").value,
  imagen = document.getElementById("img").value,
  precio = document.getElementById("precio").value,
  categories = document.getElementById("categoria").value;

  let object = {
    id: new Date().toISOString(),
    nombre,
    imagen,
    precio,
    categories
  };
 setInLocalStorage(object);
  closeModal();
}; 