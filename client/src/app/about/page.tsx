"use client";
import {
  Cable,
  CheckCircle,
  Users,
  Globe,
  Activity,
  MapPin,
  Award,
  Clock,
  Cpu,
  Home,
} from "lucide-react";
import { motion } from "motion/react";

// AboutPage component - Greek About page for a fiber installation company
// Tailwind CSS classes are used. Drop this component into a React app (Next.js or CRA)
// lucide-react and framer-motion should be installed in the project.

export default function AboutPage({}) {
  const companyName = "Foc";
  const city = "Αθήνα";
  const phone = "69ΧΧ ΧΧΧ ΧΧΧ";
  const email = "info@yourcompany.gr";
  return (
    <main className="prose prose-invert lg:prose-lg mx-auto max-w-6xl px-6 py-12 text-gray-900 dark:text-gray-100">
      <section className="flex flex-col gap-6">
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h1 className="text-3xl font-extrabold">Σχετικά με εμάς</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {companyName} — Εξειδίκευση σε εγκαταστάσεις οπτικής ίνας FTTH &
              FTTR για κατοικίες και επιχειρήσεις.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-50 to-white p-3 shadow-sm dark:from-indigo-900 dark:to-transparent">
              <Cable className="h-6 w-6 text-indigo-600" />
              <div>
                <div className="text-sm font-medium">Υπηρεσίες</div>
                <div className="text-xs text-gray-500">
                  FTTH · FTTR · Συντήρηση
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-500">Επικοινωνία</div>
              <div className="text-base font-semibold">{phone}</div>
              <div className="text-sm text-gray-500">{email}</div>
            </div>
          </div>
        </motion.header>

        <article className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-2xl bg-white p-6 shadow lg:col-span-2 dark:bg-gray-800"
          >
            <h2 className="text-2xl font-semibold">Η αποστολή μας</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-200">
              Στόχος μας είναι να φέρουμε αξιόπιστη, υψηλών προδιαγραφών οπτική
              ίνα σε κάθε σπίτι και επιχείρηση. Αναλαμβάνουμε από την όδευση της
              γραμμής (αέρια ή υπόγεια) έως την εσωτερική διανομή και
              πιστοποίηση, παρέχοντας λύσεις που ακολουθούν διεθνή πρότυπα.
            </p>

            <h3 className="mt-6 text-lg font-medium">Ποιοι είμαστε</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Είμαστε ομάδα τεχνικών εκπαιδευμένων σε εργασίες FTTH/FTTR, fusion
              splicing, OTDR μετρήσεις και εγκαταστάσεις ONT/router.
              Συνεργαζόμαστε με παρόχους δικτύου, συμπεριλαμβανομένου του
              ΟΤΕ/COSMOTE, και παρέχουμε end-to-end υπηρεσίες εγκατάστασης και
              υποστήριξης.
            </p>

            <h3 className="mt-6 text-lg font-medium">Τεχνική εξειδίκευση</h3>
            <ul className="mt-3 ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-200">
              <li>Εναέρια & υπόγεια όδευση καλωδίων οπτικών ινών</li>
              <li>Fusion splicing & τερματισμοί ODF / ONT</li>
              <li>FTTR – ίνα σε κάθε δωμάτιο & σχεδιασμός Wi‑Fi backbone</li>
              <li>
                OTDR μετρήσεις, power meter tests και παράδοση πιστοποιητικού
              </li>
              <li>Συντήρηση, εντοπισμός βλαβών και ταχείες επισκευές</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium">
              Πιστοποιήσεις & Πρότυπα
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Τηρούμε διεθνή πρότυπα ποιότητας (ITU‑T G.652/G.657), ασφάλειας
              και ηλεκτρολογικών κανόνων. Όλος ο εξοπλισμός είναι πιστοποιημένος
              CE/ISO και οι τεχνικοί διαθέτουν επαγγελματική εκπαίδευση σε
              structured cabling και splicing.
            </p>

            <h3 className="mt-6 text-lg font-medium">Μεθοδολογία εργασίας</h3>
            <ol className="mt-3 ml-5 list-decimal space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                Δωρεάν αυτοψία & τεχνική μελέτη (δρόμος αέριος/υπόγειος, σημεία
                εισόδου).
              </li>
              <li>Σχεδιασμός όδευσης & προσφορά με σαφή κόστη.</li>
              <li>
                Εγκατάσταση εξωτερικού/εσωτερικού τερματισμού, ONT & router.
              </li>
              <li>Ελέγχοι OTDR & απώλειας ισχύος, παράδοση πιστοποιητικού.</li>
              <li>
                Πιστοποιημένη παράδοση & τεχνική υποστήριξη μετά εγκατάσταση.
              </li>
            </ol>

            <div className="mt-6 rounded-lg bg-indigo-50 p-4 dark:bg-indigo-900/30">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-indigo-600" />
                <div>
                  <div className="font-medium">Δέσμευση Ποιότητας</div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Ελαχιστοποιούμε τις απώλειες και εγγυόμαστε αξιόπιστο σήμα.
                    Κάθε εργασία συνοδεύεται από τεχνικό report και υποστήριξη.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow dark:bg-gray-800"
          >
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-emerald-500" />
              <div>
                <div className="text-sm text-gray-500">Έδρα</div>
                <div className="font-medium">{city}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-sky-500" />
              <div>
                <div className="text-sm text-gray-500">Διεύθυνση</div>
                <div className="font-medium">Κατόπιν αιτήματος / προσφοράς</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-orange-500" />
              <div>
                <div className="text-sm text-gray-500">Ώρες</div>
                <div className="font-medium">09:00 – 18:00 (Δευτ. – Παρ.)</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <PhoneContact phone={phone} email={email} />
            </div>

            <div className="mt-2 border-t border-gray-100 pt-2 dark:border-gray-700">
              <div className="text-sm text-gray-500">Πιστοποιήσεις</div>
              <div className="mt-2 flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-500" />
                <div className="text-sm">
                  FTTH Technician · CE / ISO compliant
                </div>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="#contact"
                className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2 text-center font-medium text-white shadow hover:bg-indigo-700"
              >
                Κλείστε ΔΩΡΕΑΝ Αυτοψία
              </a>
            </div>
          </motion.aside>
        </article>

        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow dark:bg-gray-800"
              whileHover={{ y: -4 }}
            >
              <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-800/30">
                <f.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <div className="font-semibold">{f.title}</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {f.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <section
          id="vision"
          className="mt-10 rounded-2xl bg-gradient-to-b from-white to-indigo-50 p-6 shadow dark:from-gray-900 dark:to-gray-800"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Όραμα & Δέσμευση</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-200">
                Σκοπός μας είναι να στηρίξουμε την ψηφιακή αναβάθμιση της
                Ελλάδας, προσφέροντας σταθερή και ταχύτατη σύνδεση σε κάθε σπίτι
                και επιχείρηση. Η ποιότητα και η ασφάλεια της εγκατάστασης είναι
                πάντα πρώτιστο μέλημά μας.
              </p>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-500">Θέλετε προσφορά;</div>
              <a
                href="#contact"
                className="mt-2 inline-block rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
              >
                Αίτημα Προσφοράς
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="text-xl font-semibold">Επικοινωνία</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Συμπλήρωσε τη φόρμα ή επικοινώνησε μαζί μας για ΔΩΡΕΑΝ αυτοψία και
              προσφορά.
            </p>

            <ContactForm defaultPhone={phone} defaultEmail={email} />
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="text-lg font-semibold">Στοιχεία</h3>
            <div className="text-sm text-gray-600">{companyName}</div>
            <div className="text-sm">
              {phone} · {email}
            </div>
            <div className="text-sm">{city}</div>

            <div className="mt-4">
              <div className="text-sm text-gray-500">Ωράριο</div>
              <div className="font-medium">Δευτ. – Παρ. · 09:00 – 18:00</div>
            </div>

            <div className="mt-4">
              <div className="text-sm text-gray-500">Υπηρεσίες (συνοπτικά)</div>
              <ul className="mt-2 ml-5 list-disc text-sm text-gray-700 dark:text-gray-300">
                <li>FTTH Installation</li>
                <li>Fusion Splicing</li>
                <li>FTTR & Wi‑Fi Design</li>
                <li>Maintenance & Repair</li>
              </ul>
            </div>

            <div className="mt-4">
              <a
                href="mailto:{email}"
                className="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white"
              >
                Στείλτε Email
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function PhoneContact({ phone, email }) {
  return (
    <>
      <div className="flex items-center gap-3">
        <div>
          <div className="text-sm text-gray-500">Τηλέφωνο</div>
          <div className="font-medium">{phone}</div>
        </div>
      </div>
    </>
  );
}

function ContactForm({ defaultPhone, defaultEmail }) {
  return (
    <form className="mt-4 grid grid-cols-1 gap-3">
      <input
        type="text"
        name="name"
        placeholder="Ονοματεπώνυμο"
        className="rounded-md border bg-white px-3 py-2 dark:bg-gray-900/30"
      />
      <input
        type="tel"
        name="phone"
        defaultValue={defaultPhone}
        placeholder="Τηλέφωνο"
        className="rounded-md border bg-white px-3 py-2 dark:bg-gray-900/30"
      />
      <input
        type="text"
        name="address"
        placeholder="Διεύθυνση Εγκατάστασης"
        className="rounded-md border bg-white px-3 py-2 dark:bg-gray-900/30"
      />
      <select
        name="type"
        className="rounded-md border bg-white px-3 py-2 dark:bg-gray-900/30"
      >
        <option>Τύπος χώρου: Σπίτι</option>
        <option>Πολυκατοικία</option>
        <option>Επιχείρηση</option>
      </select>
      <textarea
        name="message"
        rows={4}
        placeholder="Σχόλια / Σημειώσεις"
        className="rounded-md border bg-white px-3 py-2 dark:bg-gray-900/30"
      ></textarea>
      <button
        type="submit"
        className="mt-2 rounded-md bg-indigo-600 px-4 py-2 text-white"
      >
        Αποστολή Αιτήματος
      </button>
    </form>
  );
}

const features = [
  {
    title: "End-to-end εγκατάσταση",
    desc: "Σύνδεση από το δίκτυο ΟΤΕ έως το εσωτερικό του χώρου, με πλήρη παρακολούθηση.",
    icon: Cpu,
  },
  {
    title: "Πιστοποίηση & Μετρήσεις",
    desc: "OTDR, power meter tests και πιστοποιητικό παράδοσης.",
    icon: Activity,
  },
  {
    title: "Συντήρηση & Επισκευές",
    desc: "Άμεση αποκατάσταση βλαβών, fusion splicing & καθαρισμός συνδέσεων.",
    icon: Globe,
  },
];
// export default function Page() {
//   return (
//     <section>
//       <h1 className="text-center">About Us</h1>
//       <p>
//         Είμαστε μια εξειδικευμένη τεχνική εταιρεία εγκατάστασης οπτικών ινών, με
//         εμπειρία σε έργα FTTH, ιδιωτικές εγκαταστάσεις, πολυκατοικίες και
//         επαγγελματικούς χώρους. Στόχος μας είναι να προσφέρουμε ποιοτική σύνδεση
//         με απόλυτη αξιοπιστία.
//       </p>
//       <ul className="ml-6">
//         <li>✔ Πιστοποιημένοι τεχνικοί οπτικών ινών</li>
//         <li>✔ Εξειδίκευση σε δίκτυα ΟΤΕ / COSMOTE</li>
//         <li>
//           ✔ Πλήρης κάλυψη από την εξωτερική γραμμή έως το εσωτερικό του χώρου
//         </li>
//         <li>✔ Καθαρή & επαγγελματική εγκατάσταση</li>
//         <li>✔ Εγγύηση ποιότητας & μετρήσεων</li>
//         <li>✔ Γρήγορη ανταπόκριση & υποστήριξη</li>
//         <li>
//           ✔ Αναλυτικός τεχνικός έλεγχος και πιστοποίηση εγκατάστασης Δεν
//           είμαστε απλώς τεχνικοί – είμαστε συνεργάτες στην υποδομή του χώρου
//           σας.
//         </li>
//       </ul>
//     </section>
//   );
// }

// {
//   title: "Γιατί να μας επιλέξετε",
//   description: undefined,
//   services: [
//     "Πιστοποιημένοι τεχνικοί οπτικών ινών",
//     "Εμπειρία σε δίκτυα ΟΤΕ / COSMOTE",
//     "Καθαρή & επαγγελματική εγκατάσταση",
//     "Εγγύηση ποιότητας & μετρήσεων",
//     "Γρήγορη ανταπόκριση & υποστήριξη",
//   ],
// },
