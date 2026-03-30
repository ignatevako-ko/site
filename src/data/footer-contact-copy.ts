import type { Language } from "@/data/site-content";

export type FooterContactCopy = {
  sectionLabel: string;
  title: string;
  description: string;
  labels: {
    email: string;
    phone: string;
    brief: string;
  };
  placeholders: {
    email: string;
    phone: string;
    brief: string;
  };
  submit: string;
  success: string;
  error: string;
  contactLabel: string;
};

export const footerContactCopy: Record<Language, FooterContactCopy> = {
  en: {
    sectionLabel: "Contacts",
    title: "Ready for more inbound leads?\nWrite to us.",
    description: "",
    labels: {
      email: "Email",
      phone: "Phone",
      brief: "Describe your business, goals and desired outcome",
    },
    placeholders: {
      email: "hello@example.com",
      phone: "+372000000",
      brief:
        "Describe your business, goals and desired result - we will propose a clear customer acquisition strategy.",
    },
    submit: "Send request",
    success: "Request sent. We will contact you soon.",
    error: "Could not send the form right now. Please try again shortly.",
    contactLabel: "Direct contacts",
  },
  et: {
    sectionLabel: "Kontakt",
    title: "Kas oled valmis rohkemateks paringuteks?\nKirjuta meile.",
    description: "",
    labels: {
      email: "Email",
      phone: "Telefon",
      brief: "Kirjelda oma ari, eesmarke ja soovitud tulemust",
    },
    placeholders: {
      email: "hello@example.com",
      phone: "+372000000",
      brief:
        "Kirjelda oma ari, ulesandeid ja soovitud tulemust - pakume selge kliendihanke strateegia.",
    },
    submit: "Saada paring",
    success: "Paring saadetud. Votame peagi uhendust.",
    error: "Vormi saatmine ebaonnestus. Proovi palun uuesti.",
    contactLabel: "Otsesed kontaktid",
  },
  ru: {
    sectionLabel: "Контакты",
    title: "Готовы к росту заявок?\nНапишите нам",
    description: "",
    labels: {
      email: "Email",
      phone: "Телефон",
      brief: "Опишите ваш бизнес, задачи и желаемый результат",
    },
    placeholders: {
      email: "hello@example.com",
      phone: "+372000000",
      brief:
        "Опишите ваш бизнес, задачи и желаемый результат — предложим понятную стратегию привлечения клиентов",
    },
    submit: "Начать диалог",
    success: "Заявка отправлена. Скоро свяжемся с вами.",
    error: "Не удалось отправить форму. Попробуйте еще раз чуть позже.",
    contactLabel: "Прямые контакты",
  },
};
