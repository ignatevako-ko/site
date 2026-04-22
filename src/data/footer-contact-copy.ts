import type { Language } from "@/data/site-content";

export type FooterContactCopy = {
  sectionLabel: string;
  title: string;
  description: string;
  labels: {
    email: string;
    phone: string;
    website?: string;
    brief: string;
  };
  placeholders: {
    email: string;
    phone: string;
    website?: string;
    brief: string;
  };
  submit: string;
  success: string;
  error: string;
  contactLabel: string;
};

export const footerContactCopy: Record<Language, FooterContactCopy> = {
  en: {
    sectionLabel: "",
    title: "Ready for more inbound leads?\nWrite to us.",
    description: "",
    labels: {
      email: "Email",
      phone: "Phone",
      website: "Do you have a website?",
      brief: "Describe your business, goals and desired outcome",
    },
    placeholders: {
      email: "hello@example.com",
      phone: "+372 56789087",
      website: "Yes, website link / no website yet",
      brief:
        "Describe your business, goals and desired result — we will propose a clear customer acquisition strategy.",
    },
    submit: "Start a conversation",
    success: "Request sent. We will contact you soon.",
    error: "Could not send the form right now. Please try again shortly.",
    contactLabel: "Direct contacts",
  },
  et: {
    sectionLabel: "",
    title: "Kas oled valmis rohkemateks päringuteks?\nKirjuta meile.",
    description: "",
    labels: {
      email: "Email",
      phone: "Telefon",
      website: "Kas teil on veebileht?",
      brief: "Kirjelda oma äri, eesmärke ja soovitud tulemust",
    },
    placeholders: {
      email: "hello@example.com",
      phone: "+372 56789087",
      website: "Jah, veebilehe link / veel ei ole",
      brief:
        "Kirjelda oma äri, eesmärke ja soovitud tulemust — pakume selge kliendihanke strateegia.",
    },
    submit: "Alusta vestlust",
    success: "Päring saadetud. Võtame peagi ühendust.",
    error: "Vormi saatmine ebaõnnestus. Proovi palun uuesti.",
    contactLabel: "Otsesed kontaktid",
  },
  ru: {
    sectionLabel: "",
    title: "Готовы к росту заявок?\nНапишите нам",
    description: "",
    labels: {
      email: "Email",
      phone: "Телефон",
      brief: "Опишите ваш бизнес, задачи и желаемый результат",
    },
    placeholders: {
      email: "hello@example.com",
      phone: "+372 56789087",
      brief:
        "Опишите ваш бизнес, задачи и желаемый результат — предложим понятную стратегию привлечения клиентов.",
    },
    submit: "Начать диалог",
    success: "Заявка отправлена. Скоро свяжемся с вами.",
    error: "Не удалось отправить форму. Попробуйте еще раз чуть позже.",
    contactLabel: "Прямые контакты",
  },
};
