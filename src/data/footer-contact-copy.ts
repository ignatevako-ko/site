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
    title: "Ready for more inbound leads? Write to us.",
    description:
      "Leave a short brief and we will get back with a clear acquisition strategy and next steps.",
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
    title: "Kas oled valmis rohkemateks päringuteks? Kirjuta meile.",
    description:
      "Jäta lühike kirjeldus ja vastame selge kliendihanke strateegia ning järgmiste sammudega.",
    labels: {
      email: "Email",
      phone: "Telefon",
      brief: "Kirjelda oma äri, eesmärke ja soovitud tulemust",
    },
    placeholders: {
      email: "hello@example.com",
      phone: "+372000000",
      brief:
        "Kirjelda oma äri, ülesandeid ja soovitud tulemust - pakume selge kliendihanke strateegia.",
    },
    submit: "Saada päring",
    success: "Päring saadetud. Võtame peagi ühendust.",
    error: "Vormi saatmine ebaõnnestus. Proovi palun uuesti.",
    contactLabel: "Otsesed kontaktid",
  },
  ru: {
    sectionLabel: "Контакты",
    title: "Готовы к росту заявок? Напишите нам",
    description:
      "Оставьте короткий бриф, и мы вернемся с понятной стратегией привлечения клиентов и следующим шагом.",
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
