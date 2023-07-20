import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./CategoriesList.module.css";
import { notifyError } from "../../services/ToastNotificationService";
import APIService from "../../services/APIService";
import Burger from "../../assets/Burger";
import notehub from "../../assets/notehub.png";
import AddCategory from "../AddCategory/AddCategory";

export default function CategoriesList({ setSelectedCategory, fetchNotes }) {
  const navigate = useNavigate;
  // indique si le menu est ouvert ou fermé
  const [categories, setCategories] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // window.innerwidth permet d'obtenir la largeur de la fenêtre du navigateur, le state est défini sur la largeur actuelle de la fenêtre du navigateur
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // fonction pour mettre à jour le menu en fonction de la largeur de la fenêtre lorsque celle ci est redimensionnée
  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  // permet d'appeler updateDimensions dès que la fenêtre est redimensionnée
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    // supression de l'écouteur d'évenement au démontage du composant
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // permet d'inverser le state lorsque le bouton est cliqué
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // pour afficher toutes les notes
  const handleAllNotes = () => {
    setSelectedCategory(null);
  };

  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    setOpenModal(true);
  };

  const fetchCategories = async () => {
    try {
      const response = await APIService.get(`/categories`);
      setCategories(response.data);
    } catch (err) {
      if (err.request?.status === 403) {
        notifyError("Accès non autorisé");
        navigate("/login");
      } else if (err.request?.status === 500) {
        notifyError("La requete a échoué");
      }
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className={s.menuContainer}>
      {/* ouverture du menu au clic */}
      <button type="button" onClick={toggleMenu} className={s.open}>
        <Burger className={s.burger} />
      </button>
      {/* si l'utilisateur a cliqué sur le bouton ou si la fenêtre du navigateur est supérieure à 1300px le menu est affiché */}
      {(isMenuOpen || windowWidth > 1300) && (
        <div className={s.menu}>
          <img src={notehub} alt="logo" className={s.notehub} />
          {/* fermeture du menu */}
          <button type="button" onClick={toggleMenu} className={s.closeMenu}>
            X
          </button>
          <div className={s.buttoncontainer}>
            {/* pour afficher toutes les notes au clic */}
            <button
              type="button"
              className={s.buttonnotes}
              onClick={handleAllNotes}
            >
              Notes
            </button>
            <ul className={s.categoryList}>
              {/* pour trier les notes en fonction des catégories vérifie si categories existe et n'est pas nul */}
              {categories &&
                // retourne un élement pour chaque catégorie
                categories.map((category) => (
                  <li key={category.id} className={s.category}>
                    <button
                      type="button"
                      onClick={() => {
                        // mise à jour de la catégorie sélectionnée avec l'id de la catégorie
                        setSelectedCategory(category.id);
                        // le menu se ferme lorsque l'utilisateur a cliqué sur une catégorie
                        setIsMenuOpen(false);
                      }}
                      className={s.category}
                    >
                      {/* afficher le contenu de la catégorie */}
                      {category.list}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className={s.addContainer}>
            <button type="button" className={s.addButton} onClick={handleClick}>
              +
            </button>
            <div>
              {openModal && (
                <AddCategory
                  fetchCategories={fetchCategories}
                  setOpenModal={setOpenModal}
                  className={s.modalAdd}
                  fetchNotes={fetchNotes}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

CategoriesList.propTypes = {
  setSelectedCategory: PropTypes.string.isRequired,
  fetchNotes: PropTypes.func.isRequired,
};
