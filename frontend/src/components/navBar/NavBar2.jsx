import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./NavBar2.module.css";

export default function NavBar2() {
  const [toggled, setToggled] = React.useState(false);

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar
        backgroundColor="#fff"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="always"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/1600px-L%27Or%C3%A9al_logo.svg.png"
          alt="loreal"
          className={styles.lorealSVG}
        />
        <Menu>
          <SubMenu label="Nos offres">
            <MenuItem
              component={
                <Link to="https://www.loreal-paris.fr/offres-speciales.html" />
              }
            >
              <p>Offres</p>
            </MenuItem>
            <MenuItem
              component={
                <Link to="https://www.loreal-paris.fr/nos-offres/a-decouvrir/best-sellers/" />
              }
            >
              <p>À découvrir</p>
            </MenuItem>
            <MenuItem
              component={
                <Link to="https://www.loreal-paris.fr/nos-offres/idees-cadeaux/nos-coffrets/" />
              }
            >
              <p>Idées cadeaux</p>
            </MenuItem>
            <MenuItem>
              <p>Marques invitées</p>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Maquillage">
            <MenuItem>
              <p>Teint</p>
            </MenuItem>
            <MenuItem>
              <p>Yeux</p>
            </MenuItem>
            <MenuItem>
              <p>Lèvres</p>
            </MenuItem>
            <MenuItem>
              <p>Ongles</p>
            </MenuItem>
            <MenuItem>
              <p>Maquillage à l'affiche</p>
            </MenuItem>
            <MenuItem>
              <p>Accessoires</p>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Soin">
            <MenuItem>
              <p>Soin : Par catégorie</p>
            </MenuItem>
            <MenuItem>
              <p>Soin : Par bénéfice</p>
            </MenuItem>
            <MenuItem>
              <p>Soin : Par gamme</p>
            </MenuItem>
            <MenuItem>
              <p>Soin à l'affiche</p>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Coloration">
            <MenuItem>
              <p>Par couleur</p>
            </MenuItem>
            <MenuItem>
              <p>Par durée</p>
            </MenuItem>
            <MenuItem>
              <p>Coloration : Par gamme</p>
            </MenuItem>
            <MenuItem>
              <p>Coloration : À l'affiche</p>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Cheveux">
            <MenuItem>
              <p>Cheveux : Par catégorie</p>
            </MenuItem>
            <MenuItem>
              <p>Cheveux : Par type</p>
            </MenuItem>
            <MenuItem>
              <p>Cheveux : Par gamme</p>
            </MenuItem>
            <MenuItem>
              <p>Cheveux : À l'affiche</p>
            </MenuItem>
          </SubMenu>
          <SubMenu label="Homme">
            <MenuItem>
              <p>Homme : Par catégorie</p>
            </MenuItem>
            <MenuItem>
              <p>Cheveux : Par bénéfice</p>
            </MenuItem>
            <MenuItem>
              <p>Cheveux : Par gamme</p>
            </MenuItem>
            <MenuItem>
              <p>Cheveux : À l'affiche</p>
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main style={{ display: "flex", padding: 10 }}>
        <div className={styles.buttonDiv}>
          <button
            type="button"
            label
            htmlFor="image"
            className={styles.sbButton}
            onClick={() => setToggled(!toggled)}
            border="none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
