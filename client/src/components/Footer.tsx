import { SERVICE_DATA } from "@/features/services/serviceData";
import { Award, Clock, PhoneCall, MapPin, Users, Mail } from "lucide-react";
import Link from "next/link";

function ContactInfoRow({
  name,

  value,
  Icon,
  forwordTo,
}: {
  name: string;
  value: string;
  Icon: React.ReactElement;
  forwordTo: string | undefined;
}) {
  if (forwordTo) {
    return (
      <a href={`${forwordTo}:${value}`} className="flex items-center gap-3">
        {Icon}
        <div>
          <div className="text-sm text-gray-500">{name}</div>
          <div className="font-medium">{value}</div>
        </div>
      </a>
    );
  }
  return (
    <div className="flex items-center gap-3">
      {Icon}
      <div>
        <div className="text-sm text-gray-500">{name}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}

const ContactInfoData = [
  {
    name: "Έδρα",
    value: "Θεσσαλονίκη",
    Icon: <Users className="h-6 w-6 text-emerald-500" />,
  },
  {
    Icon: <MapPin className="h-6 w-6 text-sky-500" />,
    name: "Κάλυψη",
    value: "Θεσσαλονίκη / Μυτιλήνη",
  },
  {
    name: "Ώρες Λειτουργίας",
    value: "08:00 – 18:00 (Δευτ. – Παρ.)",
    Icon: <Clock className="h-6 w-6 text-orange-500" />,
  },
  {
    name: "Τηλέφωνο",
    value: "6984882957",
    Icon: <PhoneCall className="h-6 w-6" />,
    forwordTo: "tel",
  },
  {
    name: "Email",
    value: "Some real Mail",
    Icon: <Mail className="h-6 w-6" />,
    forwordTo: "mailto",
  },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col justify-between p-10 inset-shadow-2xs inset-shadow-current/20 sm:flex-row">
      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-lg font-semibold">Στοιχεία</h3>
        {ContactInfoData.map(({ name, value, Icon, forwordTo }) => (
          <ContactInfoRow
            key={name}
            name={name}
            value={value}
            Icon={Icon}
            forwordTo={forwordTo || undefined}
          />
        ))}

        <div className="mt-2 border-t border-gray-100 pt-2 dark:border-gray-700">
          <div className="text-sm text-gray-500">Πιστοποιήσεις</div>
          <div className="mt-2 flex items-center gap-2">
            <Award className="h-5 w-5 text-amber-500" />
            <div className="text-sm">FTTH Technician · CE / ISO compliant</div>
          </div>
        </div>

        <div className="mt-4">
          <a
            href="#contact"
            className="inline-block w-full rounded-lg bg-linear-to-r from-lime-400 to-green-500 px-4 py-2 text-center font-medium text-neutral-950 shadow transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-lime-400"
          >
            Κλείστε ΔΩΡΕΑΝ Αυτοψία
          </a>
        </div>
      </div>
      <Link href="/services">
        <ul>
          <li className="mb-4 text-2xl font-bold">Services</li>
          {SERVICE_DATA.map((service) => (
            <li key={service.title} className="ml-4 p-1">
              {service.title}
            </li>
          ))}
        </ul>
      </Link>
    </footer>
  );
}
