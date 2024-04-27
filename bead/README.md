# Háztartás jövedelme

## Formai követelmények

### Main form view

- képernyő bal oldalán helyezkedik el
- családtag neve
- bruttó bér
- százalékos módosítás csúszka és gombok
- adókedvezmények checkboxok
- alján összesítve a nettó bér
- a view jobb felső sarkában kuka ikon, amivel törölhetjük a családtagot

### Háztartás view

- képernyő jobb oldalán helyezkedik el
- összesített jövedelem táblázat
  - első oszlopban családtagok neve
  - második oszlopban családtag nettó jövedelme
  - utolsó sorban sum

### Tab sor

- a két view fölött helyezkedik el
- minden családtaghoz tartozik egy fül
- utolsó helyen egy + gomb, amivel új családtagot tudunk hozzáadni

## Funkcionális követelmények

### Bruttó-nettó kiszámítás

- gombokkal vagy csúszkával lehet változtatni az értéket (-5%, -1%, +1%, +5%)
- Személyi Jövedelem adó (SZJA) = 15%
- Társadalom Biztosítási adó = 18,5%
- bruttó = nettó + SZJA + TB

### Adókedvezmények

- 25 éven aluliak SZJA mentessége
  - 25 év alatt és bruttó max 499 952 Ft-ig érvényes
  - 499 952 feletti részre 15% SZJA számolódik
- Személyi adókedvezmény
  - a súlyos fogyatékosságról szóló orvosi igazolás vagy a rokkantsági járadékra, fogyatékossági támogatásra való jogosultságról szóló határozat alapján lehet igénybe venni
  - havi 77300 Ft-tal csökkenti az adóalapot SZJA számításnál, azaz az SZJA-t csökkenti 11 595 Ft-tal
- Első házasok kedvezménye
  - havi +5 000 Ft jövedelem a házasságkötés 2 évén belül
  - a házasságkötés hónapjától érvényes
  - ha bejelöljük, akkor felugrik egy modal ablak, itt lehessen dátumot megadni
  - a dátum megadása után megjelenik a checkbox sora mellett, hogy Jogosult / Nem jogosult
- Családi kedvezmény
  - az eltartottak és kedvezményezettek számát + - gombokkal lehet növelni
  - Eltartottak számát bármeddig növelhetjük
  - Kedvezményezett eltartottak számát maximum az eltartottak számáig, vagy 3-ig növelhetjük
  - Kiszámolása:
    - 1 kedvezményezett = 10 000 Ft / eltartott
    - 2 kedvezményezett = 20 000 Ft / eltartott
    - 3+ kedvezményezett = 33 000 Ft / eltartott

### Interaktivitás


- a form adatai - mint név, bruttó bér, kedvezmények - az alkalmazás állapotterében legyenek tárolva
- a nettó bér is az alkalmazás állapotterében legyen tárolva
- minden változáskor automatikusan jelenjen meg az új érték
- a háztartás összesítőben a családtagra kattintva hozza be a kitöltött form-jukat
