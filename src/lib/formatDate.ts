import { format as formatDateFns } from "date-fns";
import { enUS, vi } from "date-fns/locale";

type LocaleType = "en" | "vi";
type CommonFormat =
  | "short"
  | "long"
  | "full"
  | "time"
  | "datetime"
  | "relative";

const formatMap: Record<string, string> = {
  short: "dd/MM/yyyy",
  long: "dd MMMM yyyy",
  full: "PPPP",
  time: "HH:mm",
  datetime: "dd/MM/yyyy HH:mm",
};

const localeMap = {
  en: enUS,
  vi: vi,
};

const rtfMap = {
  en: new Intl.RelativeTimeFormat("en", { numeric: "auto" }),
  vi: new Intl.RelativeTimeFormat("vi", { numeric: "auto" }),
};

const getRelativeTime = (date: Date, locale: LocaleType): string => {
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);

  const thresholds = [
    { limit: 60, divisor: 1, unit: "second" },
    { limit: 3600, divisor: 60, unit: "minute" },
    { limit: 86400, divisor: 3600, unit: "hour" },
    { limit: 2592000, divisor: 86400, unit: "day" },
    { limit: 31536000, divisor: 2592000, unit: "month" },
    { limit: Infinity, divisor: 31536000, unit: "year" },
  ];

  const absDiff = Math.abs(diffSeconds);
  const threshold = thresholds.find((t) => absDiff < t.limit)!;
  const value = Math.round(diffSeconds / threshold.divisor);

  return rtfMap[locale].format(
    value,
    threshold.unit as Intl.RelativeTimeFormatUnit
  );
};

export const formatDate = (
  date: string | Date,
  formatStr: CommonFormat = "short",
  locale: LocaleType = "en"
): string => {
  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (formatStr === "relative") {
    return getRelativeTime(parsedDate, locale);
  }

  const resolvedFormat = formatMap[formatStr] || formatStr;

  return formatDateFns(parsedDate, resolvedFormat, {
    locale: localeMap[locale],
  });
};
