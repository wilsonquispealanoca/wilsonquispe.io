import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="first-letter:capitalize text-[12px]">
      {format(date, "LLL	d, yyyy", { locale: es })}
    </time>
  );
}
