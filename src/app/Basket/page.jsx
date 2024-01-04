import BasketContent from "@/components/BasketContent";

export const metadata = {
  title: "Basket",
  description: "Foofest is a 7 day festival with around the clock amazing music and events, delicious food and concious camping options.",
  type: "website",
  image: process.env.NEXT_PUBLIC_HOST + "/_next/image?url=%2Fpartypeople.png&w=1920&q=75",
  url: process.env.NEXT_PUBLIC_HOST + "/Basket",
};

export default function page() {
  return (
    <div>
      <BasketContent></BasketContent>
    </div>
  );
}
