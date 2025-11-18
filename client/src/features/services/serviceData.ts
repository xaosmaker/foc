interface Service {
  title: string;
  description: string | undefined;
  services: string[];
  image?: string;
}
export const SERVICE_DATA: Service[] = [
  {
    title: "Μελέτη – Αυτοψία Χώρου",
    description: undefined,
    services: [
      "Έλεγχο πρόσβασης οπτικής ίνας (αέριος ή υπόγειος)",
      "Επιλογή κατάλληλου σημείου εισαγωγής στο κτίριο",
      "Προτάσεις για τοποθέτηση ONT, router, access points",
      "Αναλυτική οικονομική προσφορά χωρίς δεσμεύσεις",
    ],
    image: "/fiber_optic_worker.jpg",
  },
  {
    title: "Εγκατάσταση Οπτικής Ίνας έως το Σπίτι (FTTH)",
    description: undefined,
    services: [
      "Σύνδεση από το δίκτυο ΟΤΕ μέχρι το κτίριο",
      "Τοποθέτηση εξωτερικού τερματισμού ίνας (outdoor box)",
      "Διέλευση οπτικής ίνας εντός του χώρου σας",
      "Εγκατάσταση πρίζας οπτικής ίνας & ONT",
      "Ρύθμιση router & ενεργοποίηση γραμμής",
    ],
    image: "/fiber_optic_building.png",
  },
  {
    title: "Εναέρια (Αέριος) Διέλευση Οπτικής Ίνας",
    description: undefined,
    image: "/telephone-pole.png",
    services: [
      "Από στύλους κοινής ωφέλειας (κολώνες) μέχρι το κτίριο",
      "Τοποθέτηση στηριγμάτων & υλικών ανάρτησης",
      "Λύση για περιοχές χωρίς υπόγειες υποδομές",
    ],
  },

  {
    title: "Υπόγεια Διέλευση Οπτικής Ίνας",
    description: undefined,
    services: [
      "Χρήση υπαρχόντων σωληνώσεων / καναλιών",
      "Καθαρή και αόρατη εγκατάσταση",
      "Κατάλληλο για μονοκατοικίες & πολυκατοικίες",
    ],
    image: "/underground-cables.png",
  },
  {
    title: "Εσωτερική Καλωδίωση & Δικτύωση Ίνας",
    description: undefined,
    image: "/fiber_optic_rack.jpg",
    services: [
      "Τοποθέτηση πρίζας οπτικών ινών σε οποιοδήποτε δωμάτιο",
      "Διέλευση μέσα από τοίχους ή σοβατεπί",
      "Fiber-to-the-Room (FTTR) – ίνα σε όλα τα δωμάτια",
      "Τοποθέτηση Access Points για 100% κάλυψη Wi-Fi",
    ],
  },
  {
    title: "Συγκόλληση (Splicing) Οπτικών Ινών",
    description: undefined,
    services: [
      "Fusion splicing & μηχανική συγκόλληση",
      "Χωρίς απώλειες σήματος",
      "Άμεση επισκευή κομμένων ή κατεστραμμένων ινών",
    ],
    image: "/optic-fusion.png",
  },
  {
    title: "Έλεγχος – Πιστοποίηση Οπτικής Ίνας",
    description: undefined,
    services: [
      "OTDR έλεγχο για βλάβες & ποιότητα σήματος",
      "Μέτρηση απώλειας και ισχύος",
      "Παράδοση πιστοποιητικού μέτρησης κατόπιν αιτήματος",
    ],
    image: "/fiber_optic_measurement.png",
  },
  {
    title: "Συντήρηση & Επισκευή Δικτύων Ίνας",
    description: undefined,
    services: [
      "Εντοπισμός βλαβών",
      "Καθαρισμός συνδέσμων & επανατερματισμός",
      "Άμεση υποστήριξη σε αστοχίες καλωδίου",
    ],
    image: "/repair_fiber_optic_box.jpg",
  },
  {
    title: "if we want to add",
    description: undefined,
    services: [
      "✚ FTTR – Fiber to the Room (Ίνα σε κάθε δωμάτιο)",
      "✚ Εγκατάσταση δικτύου Ethernet (UTP σε συνδυασμό με ίνα)",
      "✚ Τοποθέτηση Rack, Switch, Patch Panels",
      "✚ Wi-Fi Mesh συστήματα παντού στο σπίτι",
      "✚ CCTV – IP κάμερες με οπτική ίνα backbone",
      "✚ Smart Home δικτύωση και αυτοματισμοί",
    ],
  },
];
