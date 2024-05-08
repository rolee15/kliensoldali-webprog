Ha Postman klienst használsz, akkor ezeket a gyűjteményeket be tudod importálni, és ki tudod őket próbálni:
       - [auth](https://www.getpostman.com/collections/c5105b1b03067fc471ca)
       - [puzzles](https://www.getpostman.com/collections/416cb5f1dfd0cc84a933)
       - [solutions](https://www.getpostman.com/collections/79f5c29291445e796db4)

11. Egészítsük ki az alkalmazást hitelesítéssel. Egyelőre oldjuk meg úgy ezt, hogy az egész lista és megfejtés csak hitelesített felhasználók számára legyen elérhető. (Később lehet ezt majd úgy variálni, hogy a lista mindenki számára elérhető, sőt a játék is, de belépett felhasználóval el lehet menteni a megfejtéseket.)

    1. Készítsük elő az állapotterünket a hitelesítésre! Ez gyakorlatban egy `user` objektum ürességét, illetve tárolását jelenti. Mivel a szerver JWT-t használ hitelesítésre, ezért azt is eltároljuk:
       ```js
       const initialState = { user: null, token: null };
       ```
    2. Készítsünk egy hitelesítő slice-ot (`authSlice`), aminek két akciója és reducere van:
       - `login`: beállítja a `user` és `token` értékeket
       - `logout`: törli a `user` és `token` értékeket
    3. Legyenek szelektorok a `user` és a `token` lekérdezésére (`selectLoggedInUser`, `selectAuthToken`)
    4. Készítsük elő a `Login` komponenst! Legyen benne egy email és egy jelszó mező! Ehhez lehet használni az ebben a feladattárban szereplő `mini-login` feladat `Login` komponensét!
    5. Használjunk feltételes renderelést a beléptető komponens megjelenítésére! Ha nincs bejelentkezett felhasználó (`selectLoggedInUser`), akkor a `Login` komponens jelenjen meg, különben a grafilogikai lista vagy feladat!
    6. A `Login` komponensben egyelőre ne hívjuk meg a szervert, hanem csak hívjuk meg a `login` akciót valamilyen fake user objektummal és tokennel! Ennek hatására be kell tudnunk lépni!
    7. Készítsünk egy `AuthStatus` komponenst, ami a belépés állapotát jelzi: ha nincs belépve felhasználó, akkor ezt írja ki, ha be van lépve, akkor egy kijelentkező gombot jelenít meg, amire kattintva hívjuk meg a `logout` akciót! Az
    8. Végezzük el a hitelesítést szerver segítségével! Ehhez készítsünk RTK Query-vel egy API slice-ot, benne egyetlen mutációval (`login`), ami a hitelesítési végpontra küld POST üzenetet a szükséges tartalommal. Használjuk az így kapott mutációt a bejelentkezésre!

12. Tegyük a bejelentkezést és a játékot külön végpontra, azaz készítsük elő az alkalmazásunkat több oldal megjelenítésére! Ehhez telepítsük a react-routert! Alakítsunk ki ehhez hasonló route-struktúrát:

    ```jsx
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <GraphiLogics />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
    ```

    - A `Layout` komponens az oldal alap elrendezéséért felel, pl navigációs sávot vagy az `AuthStatus` komponenst tartalmazza, no meg egy `Outlet` komponenst a gyerekroute-ok megjelenítésére.
    - A `RequireAuth` komponens azért felel, hogy ne engedje a `GraphiLogics` komponenst megjelenni bejelentkezés nélkül:

      ```js
      export const RequireAuth = ({ children }) => {
        let user = useSelector(selectLoggedInUser);

        if (!user) {
          return <Navigate to="/login" replace />;
        }

        return children;
      };
      ```

    - A `Login` komponensben siker esetén navigáljunk át a főoldalra:
      ```js
      const navigate = useNavigate();
      navigate("/", { replace: true });
      ```
