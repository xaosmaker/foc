import Partners from "@/components/Partners";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "About us",
};

export default function AboutPage({}) {
  return (
    <main className="prose prose-invert lg:prose-lg mx-auto max-w-6xl py-12">
      <section className="flex flex-col gap-6 px-10">
        <div>
          <h1 className="text-center text-3xl font-extrabold">
            Σχετικά με εμάς
          </h1>
          <p className="mt-2 text-center">
            foc — Εξειδίκευση σε εγκαταστάσεις οπτικής ίνας FTTH & FTTR για
            κατοικίες και επιχειρήσεις.
          </p>
        </div>

        <article className="">
          <div className="relative mr-8 aspect-square h-full w-full sm:float-left sm:h-1/2 sm:w-1/2">
            <Image
              src="/fiber_optic_world.png"
              fill
              alt="fiber optic world"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 p-6">
            <h2 className="text-2xl font-semibold">Η αποστολή μας</h2>
            <p className="mt-3">
              Στόχος μας είναι να φέρουμε αξιόπιστη, υψηλών προδιαγραφών οπτική
              ίνα σε κάθε σπίτι και επιχείρηση. Αναλαμβάνουμε από την όδευση της
              γραμμής (αέρια ή υπόγεια) έως την εσωτερική διανομή και
              πιστοποίηση, παρέχοντας λύσεις που ακολουθούν διεθνή πρότυπα.
            </p>

            <h3 className="mt-6 text-lg font-medium">Ποιοι είμαστε</h3>
            <p className="mt-2">
              Είμαστε ομάδα τεχνικών εκπαιδευμένων σε εργασίες FTTH/FTTR, fusion
              splicing, OTDR μετρήσεις και εγκαταστάσεις ONT/router.
              Συνεργαζόμαστε με παρόχους δικτύου, συμπεριλαμβανομένου του
              ΟΤΕ/COSMOTE, και παρέχουμε end-to-end υπηρεσίες εγκατάστασης και
              υποστήριξης.
            </p>

            <h3 className="mt-6 text-lg font-medium">
              Πιστοποιήσεις & Πρότυπα
            </h3>
            <p className="mt-2">
              Τηρούμε διεθνή πρότυπα ποιότητας (ITU‑T G.652/G.657), ασφάλειας
              και ηλεκτρολογικών κανόνων. Όλος ο εξοπλισμός είναι πιστοποιημένος
              CE/ISO και οι τεχνικοί διαθέτουν επαγγελματική εκπαίδευση σε
              structured cabling και splicing.
            </p>
          </div>
        </article>
      </section>

      <section className="mt-10 bg-current/15 p-6 px-10 py-10">
        <div>
          <h3 className="text-xl font-semibold">Όραμα & Δέσμευση</h3>
          <p className="mt-2">
            Σκοπός μας είναι να στηρίξουμε την ψηφιακή αναβάθμιση της Ελλάδας,
            προσφέροντας σταθερή και ταχύτατη σύνδεση σε κάθε σπίτι και
            επιχείρηση. Η ποιότητα και η ασφάλεια της εγκατάστασης είναι πάντα
            πρώτιστο μέλημά μας.
          </p>
        </div>
      </section>

      <section className="mt-10 p-6 px-10">
        <div>
          <h3 className="text-xl font-semibold">{why.title}</h3>
          <ul className="mt-2 list-disc">
            {why.services.map((service) => (
              <li className="ml-10 p-2" key={service}>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Partners className="bg-current/15" />
    </main>
  );
}

const why = {
  title: "Γιατί να μας επιλέξετε",
  description: undefined,
  services: [
    "Πιστοποιημένοι τεχνικοί οπτικών ινών",
    "Εμπειρία σε δίκτυα ΟΤΕ / COSMOTE",
    "Καθαρή & επαγγελματική εγκατάσταση",
    "Εγγύηση ποιότητας & μετρήσεων",
    "Γρήγορη ανταπόκριση & υποστήριξη",
  ],
};
