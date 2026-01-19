export type Service = {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  price: string;
};

export const services: Service[] = [
  {
    slug: "am-thanh-anh-sang",
    name: "Âm thanh – Ánh sáng",
    shortDesc: "Hệ thống âm thanh cho tiệc cưới 50–500 khách",
    description:
      "Cung cấp loa, micro, mixer, đèn sân khấu chuyên nghiệp cho tiệc cưới, sự kiện.",
    price: "3 – 10 triệu",
  },
  {
    slug: "trang-tri-tiec-cuoi",
    name: "Trang trí tiệc cưới",
    shortDesc: "Trang trí sân khấu, cổng hoa, bàn tiệc",
    description:
      "Trang trí tiệc cưới theo phong cách truyền thống, hiện đại hoặc theo yêu cầu.",
    price: "5 – 20 triệu",
  },
  {
    slug: "mc-tiec-cuoi",
    name: "MC tiệc cưới",
    shortDesc: "MC dẫn chương trình chuyên nghiệp",
    description:
      "MC hoạt náo, dẫn dắt chương trình tiệc cưới trọn vẹn và cảm xúc.",
    price: "2 – 5 triệu",
  },
];
