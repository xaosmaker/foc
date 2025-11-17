import {
  Cable,
  Router,
  Wifi,
  Building,
  House,
  Settings,
  Wrench,
  Radio,
  Network,
  ScanSearch,
  CableCar,
  Layers,
  Bolt,
  Drill,
  SatelliteDish,
  Home,
  TowerControl,
  LandPlot,
} from "lucide-react";

export default function page() {
  return (
    <div className="p-10">
      <div className="flex gap-4 p-10">
        <Router />
        <Wifi />
        <Building />
        <House />
        <Settings />
        <Wrench />
        <Radio />
        <Network />
        <ScanSearch />
        <CableCar />
        <Layers />
        <Bolt />
        <Drill />
        <SatelliteDish />
      </div>
      <h1 className="text-center text-2xl font-bold">ΥΠΗΡΕΣΙΕΣ</h1>
      <div className="flex flex-col gap-10">
        <p>
          Αναλαμβάνουμε πλήρη εγκατάσταση οπτικής ίνας από το δίκτυο του ΟΤΕ έως
          το σπίτι ή την επιχείρησή σας. Είτε η γραμμή φτάνει από αέρα (κολώνες)
          είτε υπόγεια, η ομάδα μας εξασφαλίζει γρήγορη, καθαρή και αξιόπιστη
          σύνδεση.
        </p>
        <section className="">
          <Home />
          <h3 className="text-xl">
            Εγκατάσταση Οπτικής Ίνας έως το Σπίτι (FTTH)
          </h3>
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>Σύνδεση από το δίκτυο ΟΤΕ μέχρι το κτίριο</li>
            <li>Τοποθέτηση εξωτερικού τερματισμού ίνας (outdoor box)</li>
            <li>Διέλευση οπτικής ίνας εντός του χώρου σας</li>
            <li>Εγκατάσταση πρίζας οπτικής ίνας & ONT</li>
            <li>Ρύθμιση router & ενεργοποίηση γραμμής</li>
          </ul>
        </section>
        <section>
          <TowerControl />
          <h3>Εναέρια (Αέριος) Διέλευση Οπτικής Ίνας</h3>
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>Από στύλους κοινής ωφέλειας (κολώνες) μέχρι το κτίριο</li>
            <li>Τοποθέτηση στηριγμάτων & υλικών ανάρτησης</li>
            <li>Λύση για περιοχές χωρίς υπόγειες υποδομές</li>
          </ul>
        </section>
        <section>
          <LandPlot />
          <h3>Υπόγεια Διέλευση Οπτικής Ίνας</h3>
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>✔ Χρήση υπαρχόντων σωληνώσεων / καναλιών</li>
            <li>✔ Καθαρή και αόρατη εγκατάσταση</li>
            <li>✔ Κατάλληλο για μονοκατοικίες & πολυκατοικίες</li>
          </ul>
        </section>
        <div>
          <h3>
            Εσωτερική Καλωδίωση & Δικτύωση Ίνας Αναλαμβάνουμε τη μεταφορά της
            ίνας σε όποιο σημείο του χώρου χρειάζεται. Υπηρεσίες:
          </h3>
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>Τοποθέτηση πρίζας οπτικών ινών σε οποιοδήποτε δωμάτιο</li>
            <li>Διέλευση μέσα από τοίχους ή σοβατεπί</li>
            <li>Fiber-to-the-Room (FTTR) – ίνα σε όλα τα δωμάτια</li>
            <li>Τοποθέτηση Access Points για 100% κάλυψη Wi-Fi</li>
          </ul>
        </div>
        <div>
          <h3>Συγκόλληση (Splicing) Οπτικών Ινών</h3>
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>Fusion splicing & μηχανική συγκόλληση</li>
            <li>Χωρίς απώλειες σήματος</li>
            <li>Άμεση επισκευή κομμένων ή κατεστραμμένων ινών</li>
          </ul>
        </div>
        <div>
          <h3>
            Έλεγχος – Πιστοποίηση Οπτικής Ίνας Με επαγγελματικό εξοπλισμό όπως:
          </h3>
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>OTDR έλεγχο για βλάβες & ποιότητα σήματος</li>
            <li>Μέτρηση απώλειας και ισχύος</li>
            <li>Παράδοση πιστοποιητικού μέτρησης κατόπιν αιτήματος</li>
          </ul>
        </div>
        <div>
          <h3>Συντήρηση & Επισκευή Δικτύων Ίνας</h3>
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>Εντοπισμός βλαβών</li>
            <li>Καθαρισμός συνδέσμων & επανατερματισμός</li>
            <li>Άμεση υποστήριξη σε αστοχίες καλωδίου</li>
          </ul>
        </div>
        <div>
          <h3>
            Μελέτη – Αυτοψία Χώρου Πριν ξεκινήσει η εγκατάσταση πραγματοποιούμε:
          </h3>
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>Έλεγχο πρόσβασης οπτικής ίνας (αέριος ή υπόγειος)</li>
            <li>Επιλογή κατάλληλου σημείου εισαγωγής στο κτίριο</li>
            <li>Προτάσεις για τοποθέτηση ONT, router, access points</li>
            <li>Αναλυτική οικονομική προσφορά χωρίς δεσμεύσεις</li>
          </ul>
        </div>
        <div>
          <h3>Υπηρεσίες σε:</h3>
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>Μονοκατοικίες</li>
            <li>Πολυκατοικίες</li>
            <li>Επαγγελματικούς χώρους</li>
            <li>Νέες οικοδομές & ανακαινίσεις</li>
          </ul>
        </div>
        <div>
          <h3>Γιατί να μας επιλέξετε</h3>
          <ul className="list-inside pt-2 pl-10">
            <li>✔ Πιστοποιημένοι τεχνικοί οπτικών ινών</li>
            <li>✔ Εμπειρία σε δίκτυα ΟΤΕ / COSMOTE</li>
            <li>✔ Καθαρή & επαγγελματική εγκατάσταση</li>
            <li>✔ Εγγύηση ποιότητας & μετρήσεων</li>
            <li>✔ Γρήγορη ανταπόκριση & υποστήριξη</li>
          </ul>
        </div>
        <div>
          if we want to add
          <ul className="list-inside list-disc pt-2 pl-10">
            <li>✚ FTTR – Fiber to the Room (Ίνα σε κάθε δωμάτιο)</li>
            <li>✚ Εγκατάσταση δικτύου Ethernet (UTP σε συνδυασμό με ίνα)</li>
            <li>✚ Τοποθέτηση Rack, Switch, Patch Panels</li>
            <li>✚ Wi-Fi Mesh συστήματα παντού στο σπίτι</li>
            <li>✚ CCTV – IP κάμερες με οπτική ίνα backbone</li>
            <li>✚ Smart Home δικτύωση και αυτοματισμοί</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
