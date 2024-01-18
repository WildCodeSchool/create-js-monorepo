import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./NavBar2.module.css";

export default function NavBar2() {
  const [toggled, setToggled] = React.useState(false);

  return (
    <section className={styles.containerGlobal}>
      <div className={styles.burgerMenu}>
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
                <MenuItem
                  component={
                    <Link to="https://loreal-paris.fr/les-marques-invitees/essie/" />
                  }
                >
                  <p>Marques invitées</p>{" "}
                </MenuItem>
              </SubMenu>
              <SubMenu label="Maquillage">
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/maquillage/teint/" />
                  }
                >
                  <p>Teint</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/maquillage/yeux/" />
                  }
                >
                  <p>Yeux</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/maquillage/levres/" />
                  }
                >
                  <p>Lèvres</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/maquillage/levres/" />
                  }
                >
                  <p>Ongles</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/maquillage/maquillage-a-l-affiche/coffrets-lots-a--20-/" />
                  }
                >
                  <p>Maquillage à l'affiche</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/maquillage/accessoires/" />
                  }
                >
                  <p>Accessoires</p>
                </MenuItem>
              </SubMenu>
              <SubMenu label="Soin">
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/soin/soin-par-categorie/" />
                  }
                >
                  <p>Soin : Par catégorie</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/soin/soin-par-benefice/" />
                  }
                >
                  <p>Soin : Par bénéfice</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/soin/soin-par-gamme/" />
                  }
                >
                  <p>Soin : Par gamme</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/soin/soin-a-l-affiche/coffrets-lots-a--20-/" />
                  }
                >
                  <p>Soin à l'affiche</p>
                </MenuItem>
              </SubMenu>
              <SubMenu label="Coloration">
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/coloration/par-couleur/" />
                  }
                >
                  <p>Par couleur</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/coloration/par-duree/" />
                  }
                >
                  <p>Par durée</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/coloration/coloration-par-gamme/" />
                  }
                >
                  <p>Coloration : Par gamme</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/coloration/coloration-a-l-affiche/le-meilleur-de-la-coloration/" />
                  }
                >
                  <p>Coloration : À l'affiche</p>
                </MenuItem>
              </SubMenu>
              <SubMenu label="Cheveux">
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/cheveux/cheveux-par-categorie/" />
                  }
                >
                  <p>Cheveux : Par catégorie</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/cheveux/cheveux-par-type/" />
                  }
                >
                  <p>Cheveux : Par type</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/cheveux/cheveux-par-gamme/" />
                  }
                >
                  <p>Cheveux : Par gamme</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/cheveux/cheveux-a-l-affiche/routines-lots-a--20-/" />
                  }
                >
                  <p>Cheveux : À l'affiche</p>
                </MenuItem>
              </SubMenu>
              <SubMenu label="Homme">
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/homme/homme-par-categorie/" />
                  }
                >
                  <p>Homme : Par catégorie</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/homme/homme-par-benefice/" />
                  }
                >
                  <p>Cheveux : Par bénéfice</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/homme/homme-par-gamme/" />
                  }
                >
                  <p>Cheveux : Par gamme</p>
                </MenuItem>
                <MenuItem
                  component={
                    <Link to="https://www.loreal-paris.fr/homme/homme-a-l-affiche/coffrets-lots-a--20-/" />
                  }
                >
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
                  <path
                    fill="#ffffff"
                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                  />
                </svg>
              </button>
            </div>
          </main>
        </div>
      </div>
      <div className={styles.logo}>
        <Link to="https://www.loreal-paris.fr/">
          <img
            src="https://companieslogo.com/img/orig/OR.PA_BIG.D-c91814a8.png?t=1633208952.png"
            alt="loreal logo"
            width={150}
          />
        </Link>
      </div>
      <div className={styles.panier}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="25"
          width="30"
          viewBox="0 0 576 512"
        >
          <path
            fill="#ffffff"
            d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z"
          />
        </svg>
      </div>
    </section>
  );
}
