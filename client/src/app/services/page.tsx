import { SERVICE_DATA } from "@/features/services/serviceData";
import Image from "next/image";

export default function page() {
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl font-bold">ΥΠΗΡΕΣΙΕΣ</h1>
      <div className="flex flex-col gap-10">
        <p>
          Αναλαμβάνουμε πλήρη εγκατάσταση οπτικής ίνας από το δίκτυο του ΟΤΕ έως
          το σπίτι ή την επιχείρησή σας. Είτε η γραμμή φτάνει από αέρα (κολώνες)
          είτε υπόγεια, η ομάδα μας εξασφαλίζει γρήγορη, καθαρή και αξιόπιστη
          σύνδεση.
        </p>
        <div className="relative grid gap-6 text-neutral-50 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_DATA.map((service) => (
            <section
              key={service.title}
              className="relative rounded-md bg-neutral-900/75 px-5 pt-2 pb-6"
            >
              {service.image && (
                <div className="absolute top-0 left-0 -z-10 h-full w-full">
                  <Image
                    src={service.image}
                    fill
                    alt={service.image}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
              )}

              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="pt-2 pl-8">
                {service.services.map((str) => (
                  <li key={str}>
                    <span className="pr-3 text-green-500">✔</span> {str}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
