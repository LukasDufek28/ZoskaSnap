// src/app/podmienky/page.tsx


import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Podmienky | ZoškaSnap" };

export default function TermsConditions() {
  
  return (
    <Container>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Podmienky používania
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        1. Úvod
      </Typography>
      <Typography paragraph>
        Tieto podmienky používania (ďalej len "Podmienky") upravujú prístup a používanie webovej stránky ZoškaSnap (ďalej len "Služba"). Používaním Služby súhlasíte s týmito Podmienkami.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        2. Používateľské práva a povinnosti
      </Typography>
      <Typography paragraph>
        Používateľ súhlasí s tým, že nebude používať Službu na nelegálne účely. Tiež sa zaväzuje dodržiavať všetky platné právne predpisy a rešpektovať práva iných používateľov.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        3. Prístup k službe
      </Typography>
      <Typography paragraph>
        Služba je poskytovaná "tak, ako je" a môže byť upravovaná alebo prerušená kedykoľvek. Prevádzkovateľ si vyhradzuje právo zmeniť, upravit alebo odstrániť obsah na stránke.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        4. Ochrana osobných údajov
      </Typography>
      <Typography paragraph>
        Vaše osobné údaje sú chránené v súlade s našimi Podmienkami ochrany osobných údajov (GDPR). Viac informácií nájdete v našich pravidlách ochrany osobných údajov.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        5. Zodpovednosť za obsah
      </Typography>
      <Typography paragraph>
        Služba nepreberá zodpovednosť za obsah, ktorý vytvárajú používatelia. Používatelia sú zodpovední za obsah, ktorý zdieľajú alebo zverejňujú.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        6. Zmeny podmienok
      </Typography>
      <Typography paragraph>
        Prevádzkovateľ si vyhradzuje právo kedykoľvek upravit tieto Podmienky. Ak dôjde k významným zmenám, budú používatelia o týchto zmenách informovaní.
      </Typography>

      <Typography variant="h6" sx={{ mb: 1 }}>
        7. Kontakt
      </Typography>
      <Typography paragraph>
        Pre akékoľvek otázky týkajúce sa týchto Podmienok nás kontaktujte na emailovej adrese [your contact email].
      </Typography>
    </Container>
  );
}