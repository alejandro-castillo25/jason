import { createContext, useState } from "react";

type Lang = "en" | "es";

type AppContextProp<T> = [T, React.Dispatch<React.SetStateAction<T>>];

type AppContextProps = {
  lang: AppContextProp<Lang>;
  jason: AppContextProp<Record<string, any> | Array<any>>;
};

export const AppContext = createContext<AppContextProps | null>(null);

export function AppContextProvider({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  const [lang, setLang] = useState<Lang>("en");
  const [jason, setJason] = useState<any>({
    categories: {
      id: "rootCategory",
      title: "Commerce Root",
      href: "",
      items: [
        {
          id: "500006",
          title: "Home & Garden",
          href: "/home-garden/c500006",
          items: [
            {
              id: "6000860463",
              title: "Offers: Selected Lines",
              href: "/home-garden/offers-selected-lines/c6000860463",
              items: [
                {
                  id: "20000800485",
                  title: "All Home & Garden Offers",
                  href: "/special-offers/home-garden-offers/c7000280713",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "10260380836",
              title: "Shop by Room",
              href: "/home-garden/shop-by-room/c10260380836",
              items: [
                {
                  id: "20000170145",
                  title: "Living Room",
                  href: "/furniture-lights/living-room/c60000554",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000090550",
                  title: "Dining Room ",
                  href: "/furniture-lights/dining-room/c60000144",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000090018",
                  title: "Bedroom",
                  href: "/furniture-lights/bedroom/c6000074",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000090016",
                  title: "Kitchen ",
                  href: "/furniture-lights/kitchen/c60000557",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000090017",
                  title: "Bathroom",
                  href: "/furniture-lights/bathroom/c6000073",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000290787",
                  title: "Garden ",
                  href: "/furniture-lights/garden/c600002138",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "1902896",
              title: "Home Furnishings & Accessories",
              href: "/home-garden/home-furnishings/c1902896",
              items: [
                {
                  id: "60000246",
                  title: "Bedding",
                  href: "/home-garden/bedding/c60000246",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000920377",
                  title: "Duvets",
                  href: "/browse/home-garden/bedding/duvets/_/N-5ube",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000920378",
                  title: "Pillows",
                  href: "/browse/home-garden/bedding/pillows/_/N-5ubi",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835490022",
                  title: "Throws, Blankets & Bedspreads",
                  href: "/browse/home-garden/bedding/throws-blankets-bedspreads/_/N-crb",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000920379",
                  title: "Mattresses",
                  href: "/furniture-lights/bedroom/mattresses/c20000450150",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700005235",
                  title: "Towels",
                  href: "/browse/home-garden/bath-linen/towels/_/N-cpw",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700002085",
                  title: "Bathroom Accessories",
                  href: "/home-garden/bathroom-accessories/c700002085",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "700004268",
                  title: "Bath & Shower Mats",
                  href: "/browse/home-garden/bath-linen/bath-shower-mats/_/N-cpe",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000250",
                  title: "Curtains",
                  href: "/home-garden/curtains/c60000250",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001639",
                  title: "Blinds",
                  href: "/home-garden/blinds/c600001639",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "700001698",
                  title: "Curtain Poles, Tracks & Accessories",
                  href: "/home-garden/curtain-poles-tracks-accessories/c700001698",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002210",
                  title: "Fabrics",
                  href: "/home-garden/fabrics/c600002210",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001080939",
                  title: "Cushions",
                  href: "/browse/home-garden/cushions-bean-bags/cushions/_/N-cr9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260380347",
                  title: "Rugs",
                  href: "/browse/home-garden/carpets-flooring/rugs/_/N-6vh2",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700008863",
                  title: "Carpets & Flooring",
                  href: "/home-garden/carpets-flooring/c700008863",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000247",
                  title: "Decorative Accessories",
                  href: "/home-garden/decorative-accessories/c60000247",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260380344",
                  title: "Ceiling Lighting",
                  href: "/browse/furniture-lights/ceiling-lighting/_/N-7cq4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000622",
                  title: "Mirrors",
                  href: "/browse/home-garden/mirrors/_/N-cjy",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000017375",
                  title: "Pictures",
                  href: "/browse/home-garden/pictures/view-all-pictures/_/N-5rj4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060120062",
                  title: "Photo Frames & Accessories",
                  href: "/browse/home-garden/photo-frames-accessories/_/N-7kws",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002850",
                  title: "Candles & Home Fragrance",
                  href: "/home-garden/candles-home-fragrance/c600002850",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834820010",
                  title: "Wallpaper",
                  href: "/browse/home-garden/diy/wallpaper/_/N-d0e",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "1900156",
              title: "Cooking & Dining",
              href: "/home-garden/cooking-dining/c1900156",
              items: [
                {
                  id: "9834870074",
                  title: "Pots & Pans",
                  href: "/browse/home-garden/cooking-baking/view-all-pots-pans/_/N-7d3b",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780211059",
                  title: "Food Preparation",
                  href: "/home-garden/food-preparation/c9780211059",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139660523",
                  title: "Utensils",
                  href: "/browse/home-garden/view-all-kitchen-utensils/_/N-dvb",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001134",
                  title: "Cooking & Baking",
                  href: "/home-garden/cooking-baking/c600001134",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000013093",
                  title: "Kitchen Linens",
                  href: "/home-garden/kitchen-linens/c7000013093",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000249",
                  title: "Tableware",
                  href: "/home-garden/tableware/c60000249",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600003263",
                  title: "Drinkware",
                  href: "/home-garden/drinkware/c600003263",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200810060",
                  title: "Cutlery",
                  href: "/browse/home-garden/cutlery/_/N-7cuv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500020081",
                  title: "Barware & Drinks Accessories",
                  href: "/browse/home-garden/barware/_/N-7dh6",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001622",
                  title: "Table Linens, Placemats & Coasters",
                  href: "/home-garden/table-linens/c600001622",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670064",
                  title: "Picnicware",
                  href: "/browse/home-garden/picnicware/view-all-picnicware/_/N-7eta",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834820178",
                  title: "Food Processors, Mixers, Blenders & Juicers",
                  href: "/electricals/food-processors-mixers-blenders/c600001697?rdr=1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                  linkedCategoryId: "600001697",
                  fetchLinkedCategory: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9780211121",
              title: "Laundry, Cleaning & Storage",
              href: "/browse/home-garden/_/N-7go1",
              items: [
                {
                  id: "6000054",
                  title: "Laundry & Ironing",
                  href: "/home-garden/laundry-ironing/c6000054",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780211128",
                  title: "Cleaning & Washing Up",
                  href: "/home-garden/cleaning-washing-up/c9780211128",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834820034",
                  title: "Kitchen Storage",
                  href: "/browse/home-garden/home-storage/kitchen-storage/_/N-7ema",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000256",
                  title: "Home Storage",
                  href: "/home-garden/home-storage/c60000256",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "800004718",
                  title: "Clothes Care & Moth Proofing",
                  href: "/browse/home-garden/utility-room/clothescare/_/N-e98",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000755",
                  title: "Kitchen Bins",
                  href: "/browse/home-garden/kitchen/kitchen-bins/_/N-dwc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000851",
                  title: "Wastepaper Bins",
                  href: "/browse/home-garden/storage-drawers-shelves/wastepaper-bins/_/N-cbj",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800009168",
                  title: "Bin Liners",
                  href: "/browse/home-garden/kitchen/kitchen-cleaning/bin-liners/_/N-dwf",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001070833",
                  title: "Vacuum Cleaners",
                  href: "/electricals/vacuum-cleaners/c6000045",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000017004",
                  title: "Shoe Care",
                  href: "/browse/home-garden/shoe-care/_/N-e9d?hop=febd2b26dfee43cc8e9bfa45e8499d62",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000670065",
                  title: "Pet Care",
                  href: "/browse/home-garden/pet-care/_/N-7dec",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000400343",
                  title: "Suitcases, Travel Bags and Accessories",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/view-all-suitcases-travel-bags-accessories/_/N-7ix0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9780211140",
              title: "Garden & DIY",
              href: "/browse/home-garden/_/N-7gn5",
              items: [
                {
                  id: "9835130108",
                  title: "Garden & Conservatory",
                  href: "/furniture-lights/garden/c600002138",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000190014",
                  title: "BBQs",
                  href: "/browse/home-garden/bbqs-outdoor-heating/bbqs/_/N-5upb",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834820047",
                  title: "Garden Furniture Sets",
                  href: "/browse/furniture-lights/garden/garden-furniture-sets/_/N-5uns",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000190015",
                  title: "Garden Seating",
                  href: "/browse/furniture-lights/garden/garden-seating/_/N-5up0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670062",
                  title: "Garden Tables",
                  href: "/browse/furniture-lights/garden/garden-tables/_/N-5up1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670061",
                  title: "Parasols & Base Weights",
                  href: "/browse/furniture-lights/garden/parasols-base-weights/_/N-5uot",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139120775",
                  title: "Decorative Garden Accessories",
                  href: "/browse/home-garden/decorative-garden-accessories/_/N-5uqk",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834820049",
                  title: "Garden & Outdoor Lighting",
                  href: "/browse/furniture-lights/garden-outdoor-lighting/_/N-5rsv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780211163",
                  title: "Gardening Tools & Equipment",
                  href: "/home-garden/gardening-tools-equipment/c9780211163",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670063",
                  title: "Pots & Planters",
                  href: "/browse/home-garden/plants-planting/plants-planting/pots-planters/_/N-5urc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000914",
                  title: "DIY",
                  href: "/home-garden/diy/c60000914",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000827",
                  title: "Weather Stations, Thermometers & Hygrometers",
                  href: "/browse/home-garden/decorative-accessories/weather-clocks-thermometers/_/N-6t9y",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "700008505",
                  title: "Wild Bird Care",
                  href: "/browse/home-garden/garden-conservatory/wild-bird-care/_/N-5uqt",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9780211149",
                  title: "BBQs & Outdoor Heating",
                  href: "/home-garden/bbqs-outdoor-heating/c9780211149",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: false,
                },
                {
                  id: "9780211155",
                  title: "Garden Buildings & Storage",
                  href: "/home-garden/garden-buildings-storage/c9780211155",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139241277",
                  title: "Picnicware",
                  href: "/browse/home-garden/picnicware/view-all-picnicware/_/N-7eta",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9201000117",
                  title: "Pet Care",
                  href: "/browse/home-garden/pet-care-gifts/_/N-7dec",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000991678",
                  title: "Outdoor Toys",
                  href: "/browse/baby-child/outdoor-toys-games/view-all-outdoor-toys-games/_/N-7jje",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "6000370048",
              title: "Offers: Selected Lines",
              href: "/home-garden/offers-selected-lines/c6000370048",
              items: [
                {
                  id: "10139330004",
                  title: "50% off Lighting ",
                  href: "/browse/special-offers/home-garden-offers/lighting-offers/_/N-ej4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260280059",
                  title: "50% off Decorative Accessories",
                  href: "/browse/special-offers/home-garden-offers/decorative-accessories-offers/_/N-eif",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200310216",
                  title: "50% off Rugs",
                  href: "/browse/special-offers/home-furnishings-offers/rugs-door-mats/_/N-eir",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200310222",
                  title: "50% off Cushions",
                  href: "/browse/special-offers/home-garden-offers/cushion-beanbag-throw-offers/_/N-5vre",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260280060",
                  title: "50% off Tableware",
                  href: "/browse/special-offers/home-garden-offers/tableware-offers/_/N-ej3",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139293829",
                  title: "50% off Bedding",
                  href: "/browse/special-offers/home-garden-offers/_/N-5vt0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200310230",
                  title: "40% off Garden Furniture & Accessories",
                  href: "/browse/special-offers/furniture-offers/garden-furniture-bbq-offers/_/N-7f17",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260300152",
                  title: "30% off Mattresses",
                  href: "/browse/special-offers/furniture-offers/beds-bedroom-furniture-offers/mattresses/_/N-5vrqZ1z0wxct",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260280056",
                  title: "25% off Sophie Conran for Portmeirion",
                  href: "/brand/sophie-conran-for-portmeirion/_/N-1z140qt",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200310224",
                  title: "20% off Le Creuset",
                  href: "/brand/le-creuset/all-offers/_/N-1z141fyZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "6000370050",
              title: "Buying Guides & Services",
              href: "/home-garden/buying-guides-services/c6000370050",
              items: [
                {
                  id: "10139150760",
                  title: "Buying Guides",
                  href: "https://www.johnlewis.com/buying-guides",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139150761",
                  title: "Home Design Service",
                  href: "https://www.johnlewis.com/our-services/home-design",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139150762",
                  title: "Home Services",
                  href: "https://www.johnlewis.com/our-services#home",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139150765",
                  title: "Interest Free Credit",
                  href: "https://www.johnlewis.com/our-services/interest-free-credit",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10260360245",
                  title:
                    "Added Care - Accidental damage cover for your furniture",
                  href: "https://www.johnlewis.com/our-services/added-care",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "6000370046",
              title: "Collections",
              href: "/home-garden/collections/c6000370046",
              items: [
                {
                  id: "20000170135",
                  title: "Complementing Nature",
                  href: "/browse/home-garden/complementing-nature/_/N-7n2l",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000170139",
                  title: "Inky Blues",
                  href: "/browse/home-garden/inky-blues/_/N-7n2m",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000170137",
                  title: "Rose Quartz",
                  href: "/browse/home-garden/rose-quartz/_/N-7n2n",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000170136",
                  title: "Warm Spice",
                  href: "/browse/home-garden/warm-spice/_/N-7n1z",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139140413",
                  title: "Croft Collection",
                  href: "/brand/croft-collection/_/N-1yzwp5g",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9834010021",
                  title: "Design Project by John Lewis",
                  href: "/brand/design-project-by-john-lewis/_/N-1z0aka3",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9600480041",
                  title: "House by John Lewis",
                  href: "/brand/house-by-john-lewis/_/N-1z14045",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139140411",
                  title: "little home at John Lewis",
                  href: "/brand/little-home-at-john-lewis/_/N-1z13zte",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "9780211221",
          title: "Furniture & Lights",
          href: "/furniture-lights/c9780211221",
          items: [
            {
              id: "9834820186",
              title: "Offers: Selected Lines",
              href: "/furniture-lights/offers-selected-lines/c9834820186",
              items: [
                {
                  id: "20000710152",
                  title: "All Furniture & Lighting Offers",
                  href: "/special-offers/furniture-offers/c6000270310",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "1904616",
              title: "Furniture by Room",
              href: "/furniture-lights/furniture-by-room/c1904616",
              items: [
                {
                  id: "6000074",
                  title: "Bedroom",
                  href: "/furniture-lights/bedroom/c6000074",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000554",
                  title: "Living Room",
                  href: "/furniture-lights/living-room/c60000554",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000144",
                  title: "Dining Room",
                  href: "/furniture-lights/dining-room/c60000144",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000557",
                  title: "Kitchen",
                  href: "/furniture-lights/kitchen/c60000557",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000073",
                  title: "Bathroom",
                  href: "/furniture-lights/bathroom/c6000073",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000658",
                  title: "Children's",
                  href: "/furniture-lights/children's/c60000658",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200041",
                  title: "Nursery",
                  href: "/baby-child/nursery-furniture/c6000062?rdr=1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                  linkedCategoryId: "6000062",
                  fetchLinkedCategory: true,
                },
                {
                  id: "60000737",
                  title: "Home Office",
                  href: "/furniture-lights/home-office/c60000737",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500600066",
                  title: "Hallway",
                  href: "/furniture-lights/hallway/c9500600066",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002138",
                  title: "Garden",
                  href: "/furniture-lights/garden/c600002138",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9780211280",
              title: "Furniture by Type",
              href: "/furniture-lights/furniture-by-type/c9780211280",
              items: [
                {
                  id: "198348200078",
                  title: "Beds",
                  href: "/browse/furniture-lights/bedroom/beds/_/N-c7o",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200079",
                  title: "Mattresses",
                  href: "/furniture-lights/bedroom/mattresses/c20000450150",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200080",
                  title: "Wardrobes",
                  href: "/browse/furniture-lights/bedroom/wardrobes/_/N-cbu",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200082",
                  title: "Bedside Tables",
                  href: "/browse/furniture-lights/bedroom/bedside-cabinets-tables/_/N-c3e",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200081",
                  title: "Chests of Drawers",
                  href: "/browse/furniture-lights/bedroom/chests-of-drawers/_/N-c3h",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060210064",
                  title: "Dressing Tables",
                  href: "/browse/furniture-lights/bedroom/dressing-tables/_/N-2r8j",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200083",
                  title: "Headboards",
                  href: "/browse/furniture-lights/bedroom/headboards/_/N-6ur4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000011055",
                  title: "Bookcases, Shelving Units & Shelves",
                  href: "/browse/home-garden/all-furniture/office-furniture/bookcases-shelving-units/_/N-c68",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200095",
                  title: "Office Desks",
                  href: "/browse/furniture-lights/home-office/office-desks/_/N-c6c",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200096",
                  title: "Office Chairs",
                  href: "/browse/furniture-lights/home-office/office-chairs/_/N-c6b",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200098",
                  title: "Garden Furniture",
                  href: "/browse/furniture-lights/garden/garden-furniture-sets/_/N-5uns",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600003674",
                  title: "Sofas & Armchairs",
                  href: "/furniture-lights/sofas-armchairs/c600003674",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834820249",
                  title: "Sofa Beds",
                  href: "/browse/furniture-lights/sofas-armchairs/sofas-sofa-beds/sofa-beds/_/N-7hfwZ1z13xc8",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200085",
                  title: "Coffee Tables",
                  href: "/browse/furniture-lights/living-room/coffee-tables/_/N-c4w",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200086",
                  title: "Side Tables",
                  href: "/browse/furniture-lights/living-room/side-tables/_/N-7hg4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060210065",
                  title: "Console Tables ",
                  href: "/browse/furniture-lights/living-room/console-tables/_/N-c4x",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200087",
                  title: "TV Stands",
                  href: "/browse/furniture-lights/living-room/tv-stands/_/N-5pa5",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000188",
                  title: "Cabinets & Sideboards",
                  href: "/browse/home-garden/all-furniture/living-room-furniture/sideboards/_/N-c52",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200088",
                  title: "Dining Tables",
                  href: "/browse/furniture-lights/dining-room/dining-tables/_/N-dok",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200089",
                  title: "Dining Chairs",
                  href: "/browse/furniture-lights/dining-room/dining-chairs/_/N-c49",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071412",
                  title: "Home Storage",
                  href: "/home-garden/home-storage/c60000256",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "198348200090",
                  title: "Bar Chairs & Stools",
                  href: "/browse/furniture-lights/kitchen/bar-chairs-stools/_/N-c45",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9780211282",
              title: "Lighting",
              href: "/furniture-lights/lighting/c9780211282",
              items: [
                {
                  id: "9780211283",
                  title: "View all Lighting",
                  href: "/furniture-lights/shop-lighting/c9780211283",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200800024",
                  title: "Ceiling Lighting",
                  href: "/browse/home-garden/lighting/ceiling-lighting/_/N-7cq4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9600290006",
                  title: "Wall Lighting",
                  href: "/browse/home-garden/lighting/wall-lighting/_/N-7f5e",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000511",
                  title: "Desk & Table Lamps",
                  href: "/browse/home-garden/lighting/table-lamps/view-all-table-lamps/_/N-cjw",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700008713",
                  title: "Floor Lamps",
                  href: "/browse/home-garden/lighting/floor-lamps/_/N-cjd",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700001929",
                  title: "Ceiling & Lamp Shades",
                  href: "/browse/home-garden/lighting/ceiling-lamp-shades/_/N-cj9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001070829",
                  title: "Chandelier Lighting",
                  href: "/browse/furniture-lights/ceiling-lighting/chandelier/_/N-7cq4Z1z0i4z5",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000010923",
                  title: "Line, Fairy & Novelty Lights",
                  href: "/browse/home-garden/lighting/line-fairy-novelty-lights/_/N-5ris",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700007316",
                  title: "SAD & Wake Up Lighting",
                  href: "/browse/home-garden/lighting/sad-wake-up-lights/_/N-cjg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000010899",
                  title: "Cabinet Lighting",
                  href: "/browse/home-garden/kitchen/cabinet-lighting/_/N-dvj",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "700006520",
                  title: "Light Bulbs",
                  href: "/browse/home-garden/lighting/light-bulbs/view-all-light-bulbs/_/N-5rim",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060151027",
                  title: "Lighting & Electrical Accessories",
                  href: "/browse/furniture-lights/lighting-electrical-accessories/_/N-7kyp",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "20000670045",
              title: "Garden Furniture & Lighting",
              href: "/furniture-lights/garden-furniture-lighting/c20000670045",
              items: [
                {
                  id: "20000670050",
                  title: "Garden Furniture Sets",
                  href: "/browse/furniture-lights/garden/garden-furniture-sets/_/N-5uns",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670051",
                  title: "Garden Seating",
                  href: "/browse/furniture-lights/garden/garden-seating/_/N-5up0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670052",
                  title: "Garden Tables",
                  href: "/browse/furniture-lights/garden/garden-tables/_/N-5up1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670055",
                  title: "Garden Furniture Ranges",
                  href: "/browse/furniture-lights/garden/garden-furniture-ranges/_/N-5uoz",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670054",
                  title: "Sun Loungers",
                  href: "/browse/furniture-lights/garden/garden-seating/sunlounger/_/N-5up0Z1z0e94s",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670053",
                  title: "Parasols & Base Weights",
                  href: "/browse/furniture-lights/garden/parasols-base-weights/_/N-5uot",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670056",
                  title: "Outdoor Storage & Sheds",
                  href: "/browse/home-garden/garden-buildings-storage/outdoor-storage/_/N-5unf",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670057",
                  title: "Summerhouses",
                  href: "/browse/home-garden/garden-buildings-storage/summerhouses/_/N-7h2k",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670058",
                  title: "Garden & Outdoor Lighting",
                  href: "/browse/furniture-lights/garden-outdoor-lighting/_/N-5rsv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670059",
                  title: "Outdoor Wall Lights",
                  href: "/browse/furniture-lights/garden-outdoor-lighting/wall-lights/_/N-5rsvZ1z0rnic",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000670060",
                  title: "Solar Lighting",
                  href: "/browse/furniture-lights/garden-outdoor-lighting/solar-powered/_/N-5rsvZ1yzpl1k",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9780211297",
              title: "Lighting By Room",
              href: "/furniture-lights/lighting-by-room/c9780211297",
              items: [
                {
                  id: "8000027746",
                  title: "Garden & Outdoor Lighting",
                  href: "/browse/home-garden/diy-home-decorating/outdoor-lighting/view-all-outdoor-lighting/_/N-5rsv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9600460036",
                  title: "Bathroom Lighting",
                  href: "/browse/home-garden/bathroom/bathroom-lighting/view-all-bathroom-lighting/_/N-7ffc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "8000017049",
                  title: "Kitchen Lighting",
                  href: "/browse/home-garden/lighting/kitchen-lighting/view-all-kitchen-lighting/_/N-cix",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "700002840",
                  title: "Children's Lighting",
                  href: "/browse/home-garden/lighting/childrens-lighting/_/N-ciq",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "10260261157",
              title: "Offers: Selected Lines",
              href: "/furniture-lights/offers-selected-lines/c10260261157",
              items: [
                {
                  id: "10260382228",
                  title: "50% off Lighting ",
                  href: "/browse/special-offers/view-all-home-offers/lighting-offers/_/N-ej4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260382231",
                  title: "40% off Garden Furniture & Accessories",
                  href: "/browse/special-offers/furniture-offers/garden-furniture-bbq-offers/_/N-7f17",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710640",
                  title: "30% off Mattresses",
                  href: "/browse/special-offers/furniture-offers/beds-bedroom-furniture-offers/mattresses/_/N-5vrqZ1z0wxct",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001010585",
                  title: "20% off BBQs & Accessories",
                  href: "/browse/special-offers/furniture-offers/garden-furniture-bbq-offers/barbecue-accessories/barbecues/_/N-7f17Z1z0doxvZ1z0dqep",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10260382233",
                  title: "20% off Sofas & Armchairs",
                  href: "/browse/special-offers/furniture-offers/sofa-armchair-offers/_/N-5vs1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260382235",
                  title: "20% off Living & Dining Room Furniture",
                  href: "/browse/special-offers/furniture-offers/living-dining-room-furniture-offers/_/N-7azh",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000811307",
                  title: "20% off Home Office Furniture",
                  href: "/browse/special-offers/furniture-offers/office-furniture-offers/_/N-7azi",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "6000370050",
              title: "Buying Guides & Services",
              href: "/furniture-lights/buying-guides-services/c6000370050",
              items: [
                {
                  id: "10139150760",
                  title: "Buying Guides",
                  href: "https://www.johnlewis.com/buying-guides",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139150761",
                  title: "Home Design Service",
                  href: "https://www.johnlewis.com/our-services/home-design",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139150762",
                  title: "Home Services",
                  href: "https://www.johnlewis.com/our-services#home",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139150765",
                  title: "Interest Free Credit",
                  href: "https://www.johnlewis.com/our-services/interest-free-credit",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10260360245",
                  title:
                    "Added Care - Accidental damage cover for your furniture",
                  href: "https://www.johnlewis.com/our-services/added-care",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "500001",
          title: "Electricals",
          href: "/electricals/c500001",
          items: [
            {
              id: "20000450145",
              title: "Electrical Offers",
              href: "/electricals/electrical-offers/c20000450145",
              items: [
                {
                  id: "20000490016",
                  title: "Shop all Electrical offers",
                  href: "/special-offers/electrical-offers/c9500190102",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "1902851",
              title: "Home Appliances",
              href: "/electricals/home-appliances/c1902851",
              items: [
                {
                  id: "600002446",
                  title: "Washing Machines & Tumble Dryers",
                  href: "/electricals/washing-machines-tumble-dryers/c600002446",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000052",
                  title: "Fridges & Freezers",
                  href: "/electricals/fridges-freezers/c6000052",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000046",
                  title: "Cookers & Ovens",
                  href: "/electricals/cooking/c6000046",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001689",
                  title: "Microwaves & Small Cooking Appliances",
                  href: "/electricals/microwaves-cooking-appliances/c600001689",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000047",
                  title: "Dishwashers",
                  href: "/browse/electricals/dishwashers/_/N-ado",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001697",
                  title: "Food Processors, Mixers, Blenders & Juicers",
                  href: "/electricals/food-processors-mixers-blenders/c600001697",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001691",
                  title: "Coffee Machines",
                  href: "/electricals/coffee-machines/c600001691",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001693",
                  title: "Kettles",
                  href: "/browse/electricals/kettles/_/N-aht",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001695",
                  title: "Toasters",
                  href: "/browse/electricals/toasters/_/N-aic",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000400008",
                  title: "Lighting & Lamps",
                  href: "/furniture-lights/shop-lighting/c9780211283",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001699",
                  title: "Ironing",
                  href: "/electricals/ironing/c600001699",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000045",
                  title: "Vacuum Cleaners",
                  href: "/electricals/vacuum-cleaners/c6000045",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001667",
                  title: "Fans, Heaters & Dehumidifiers",
                  href: "/electricals/heaters-fans-dehumidifiers/c600001667",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000050",
                  title: "Lawnmowers & Garden Tools",
                  href: "/browse/home-garden/gardening-tools-equipment/lawnmowers-garden-power-tools/_/N-7kys",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000047",
                  title: "Power Tools",
                  href: "/browse/home-garden/diy/power-tools/_/N-7kyq",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001703",
                  title: "Beauty & Grooming",
                  href: "/electricals/beauty-grooming/c600001703",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000058",
                  title: "Dental Care",
                  href: "/browse/beauty/dental-care/electric-toothbrushes-flossers-accessories/_/N-2pzg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000610",
                  title: "Hostess Trolleys, Hotplates & Warmers",
                  href: "/browse/electricals/food-processors-mixers-blenders/hostess-trolleys/_/N-2pz6",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002512",
                  title: "John Lewis & Partners Home Appliances",
                  href: "/electricals/john-lewis-partners-home-appliances/c600002512",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "1901311",
              title: "Computing",
              href: "/electricals/computing/c1901311",
              items: [
                {
                  id: "600002154",
                  title: "iPad & Tablets",
                  href: "/electricals/ipad-tablets/c600002154",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000876",
                  title: "Laptops & MacBooks",
                  href: "/electricals/laptops-macbooks/c60000876",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9600620002",
                  title: "Desktop PCs & iMacs",
                  href: "/electricals/desktop-pcs-imacs/c9600620002",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000042",
                  title: "Computer & Tablet Accessories",
                  href: "/electricals/computer-tablet-accessories/c6000042",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000043",
                  title: "Printing & Scanning",
                  href: "/electricals/printing-scanning/c6000043",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000041",
                  title: "Gaming",
                  href: "/electricals/gaming/c6000041",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002760",
                  title: "Monitors & Projectors",
                  href: "/browse/electricals/monitors-projectors/_/N-2pf0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700003317",
                  title: "Data Storage",
                  href: "/electricals/data-storage/c700003317",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002762",
                  title: "Networking & Broadband",
                  href: "/electricals/networking-broadband/c600002762",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000010829",
                  title: "eReaders, Cases & Accessories",
                  href: "/browse/electricals/ereaders/_/N-5aia",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700009111",
                  title: "Shredders",
                  href: "/browse/electricals/printers-ink/shredders/_/N-a92",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9200010055",
                  title: "Software",
                  href: "/browse/electricals/software/view-all-software/_/N-6vfo",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "1904821",
              title: "Sound & Vision",
              href: "/electricals/sound-vision/c1904821",
              items: [
                {
                  id: "6000084",
                  title: "Televisions",
                  href: "/electricals/televisions/c6000084",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600009",
                  title: "TV Stands, Wall Mounts & Accessories",
                  href: "/electricals/tv-stands-wall-mounts-accessories/c600009",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600007",
                  title: "Soundbars, Home Cinema, DVD & Blu-ray",
                  href: "/electricals/dvd-blu-ray-home-cinema-soundbars/c600007",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002645",
                  title:
                    "Freeview, FreeSat, Digital Recorders & Streaming Devices",
                  href: "/browse/electricals/freeview-freesat-freetime-boxes/_/N-al6",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600005",
                  title: "Hi-Fi, Audio & Speakers",
                  href: "/electricals/hi-fi-audio-speakers/c600005",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002279",
                  title: "Headphones",
                  href: "/electricals/headphones/c600002279",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600006",
                  title: "Cameras & Camcorders",
                  href: "/electricals/cameras-camcorders/c600006",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000530060",
                  title: "Radios",
                  href: "/browse/electricals/hi-fi-audio-speakers/radios/_/N-5ajx",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "8000013919",
                  title: "Telescopes",
                  href: "/browse/electricals/cameras-camcorders/telescopes/_/N-ajw",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000063",
                  title: "Binoculars",
                  href: "/browse/electricals/cameras-camcorders/binoculars/_/N-ajv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "6000720004",
              title: "Smart Tech & Phones",
              href: "/electricals/smart-tech-phones/c6000720004",
              items: [
                {
                  id: "60000469",
                  title: "Mobile Phones & Accessories",
                  href: "/electricals/mobile-phones-accessories/c60000469",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000270232",
                  title: "Smartwatches & Wearable Tech",
                  href: "/electricals/smart-watches-wearable-tech/c7000270232",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000919691",
                  title: "Apple Watch",
                  href: "/browse/electricals/smart-watches-wearable-tech/view-all-smart-watches/apple/_/N-5nmcZ1z13zz4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000070016",
                  title: "Smart Home",
                  href: "/electricals/smart-home/c7000070016",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260360251",
                  title: "Smart Heating",
                  href: "/browse/electricals/smart-home/smart-heating/_/N-7f1m",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000060290",
                  title: "Smart Lighting",
                  href: "/browse/electricals/smart-home/smart-lighting/_/N-7f1n",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000919692",
                  title: "Smart Speakers",
                  href: "/browse/electricals/hi-fi-audio-speakers/speakers/voice-activated/_/N-5dgyZ1yzvt6r",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260070009",
                  title: "Smart Wellbeing",
                  href: "/browse/electricals/smart-home/smart-wellbeing/_/N-7fly",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000060291",
                  title: "Smart Home Monitoring",
                  href: "/browse/electricals/smart-home/smart-home-monitoring/_/N-7f1o",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9600620013",
                  title: "Drones",
                  href: "/browse/electricals/drones/_/N-7flx",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500250213",
                  title: "Gadgets",
                  href: "/browse/electricals/gadgets/_/N-7e3i",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700008777",
                  title: "Home Telephones",
                  href: "/browse/electricals/telephones/all-telephones/_/N-a9h",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000400",
                  title: "Dash Cams & Sat Navs",
                  href: "/browse/electricals/sat-nav-gps-navigation-systems/view-all-sat-nav-systems/_/N-alj",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001707",
                  title: "Home Monitoring & Security",
                  href: "/electricals/home-monitoring-security/c600001707",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "6000240734",
              title: "Don't Miss",
              href: "/electricals/don't-miss/c6000240734",
              items: [
                {
                  id: "20000060002",
                  title: "All Electrical Offers",
                  href: "/special-offers/electrical-offers/c9500190102",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000060006",
                  title: "Television Offers",
                  href: "/browse/special-offers/electrical-offers/tv-offers/_/N-efb",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000040002",
                  title: "Computing & Tablet Offers",
                  href: "/browse/special-offers/electrical-offers/computing-offers/_/N-5vqs",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000060003",
                  title: "Laundry Appliance Offers",
                  href: "/browse/special-offers/electrical-offers/laundry-appliance-offers/_/N-eev",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000040006",
                  title: "Small Kitchen Appliance Offers",
                  href: "/browse/special-offers/electrical-offers/food-preparation-offers/_/N-eez",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000490005",
                  title: "Speaker and Headphone Offers",
                  href: "/browse/special-offers/electrical-offers/audio-hi-fi-offers/_/N-ef9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090468",
                  title: "3 year guarantee on Apple iPad",
                  href: "/browse/electricals/ipad-tablets/view-all-tablets/apple/_/N-5nlvZ1z13zz4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001080952",
                  title: "Interest Free Credit on Apple Watch and Mac",
                  href: "/browse/special-offers/electrical-offers/0-finance-available-on-selected-electricals/apple/_/N-7madZ1z13zz4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001061609",
                  title: "Off to University",
                  href: "/electricals/university-essentials/c10139390023",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001010593",
                  title: "Top travel gadgets",
                  href: "https://www.johnlewis.com/content/electricals-tech/best-travel-accessories",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001687",
                  title: "Next Day Delivery ",
                  href: "/electricals/next-day-delivery/c600001687",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: false,
                },
                {
                  id: "9600320002",
                  title: "Find out more about Smart Home",
                  href: "/inspiration-and-advice/electricals/smart-home",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "8000100350",
              title: "Information and Ideas",
              href: "/electricals/information-and-ideas/c8000100350",
              items: [
                {
                  id: "10106170580",
                  title: "Track your fitness",
                  href: "/content/wellbeing-wearable-tech",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9600900045",
                  title: "Smart Home",
                  href: "/inspiration-and-advice/electricals/smart-home",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9835130006",
                  title: "Super smoothie recipes",
                  href: "/content/super-smoothies",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9600900051",
                  title: "Tech to travel with",
                  href: "/inspiration-and-advice/technology/tech-to-travel-with",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9600900049",
                  title: "What is HDR TV?",
                  href: "/inspiration-and-advice/technology/what-is-hdr-tv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9200320019",
                  title: "Choosing the right garden power tools ",
                  href: "/inspiration-and-advice/electricals/choosing-the-right-garden-power-tools",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "50000298",
          title: "Women",
          href: "/women/c50000298",
          items: [
            {
              id: "10060040059",
              title: "Offers: selected lines",
              href: "/women/clearance-nch/c10060040059",
              items: [
                {
                  id: "10260280048",
                  title: "Shop all Womenswear Offers",
                  href: "/clearance/womenswear-offers/c6000270136",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "190118298",
              title: "Clothing",
              href: "/women/women's-clothing-nch/c190118298",
              items: [
                {
                  id: "9835000072",
                  title: "New In Clothing, Shoes & Accessories",
                  href: "/browse/women/new-in-womens-clothing-shoes-accessories/_/N-flr",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001506",
                  title: "Dresses",
                  href: "/browse/women/womens-dresses/_/N-flw",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001558",
                  title: "Shirts & Tops",
                  href: "/browse/women/womens-tops/_/N-fm4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001530",
                  title: "Coats & Jackets",
                  href: "/browse/women/womens-coats-jackets/_/N-flv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001538",
                  title: "Jumpers & Knitwear",
                  href: "/browse/women/womens-knitwear/_/N-flz",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500470008",
                  title: "Cashmere",
                  href: "/browse/women/cashmere/_/N-6shb",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001568",
                  title: "Trousers & Leggings",
                  href: "/browse/women/womens-trousers-leggings/_/N-fm5",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834990046",
                  title: "Jeans",
                  href: "/browse/women/womens-jeans/_/N-7j5h",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001776",
                  title: "Jumpsuits",
                  href: "/browse/women/womens-jumpsuits-playsuits/_/N-fly",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001526",
                  title: "Skirts",
                  href: "/browse/women/womens-skirts/_/N-fm2",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002148",
                  title: "Shorts",
                  href: "/browse/women/womens-shorts/_/N-fm1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9600170122",
                  title: "Workwear",
                  href: "/browse/women/workwear/_/N-6uuq",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000922",
                  title: "Swimwear & Beachwear",
                  href: "/browse/women/womens-swimwear-beachwear/_/N-fm3",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000059",
                  title: "DD+ Swimwear",
                  href: "/browse/women/womens-swimwear-beachwear/size=dd+/_/N-fm3Z7n07",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001812",
                  title: "Lingerie & Underwear",
                  href: "/women/women's-lingerie-underwear/c600001812",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001740",
                  title: "Nightwear & Robes",
                  href: "/browse/women/womens-nightwear/_/N-fm0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834830060",
                  title: "Tights",
                  href: "/browse/women/tights/_/N-7ix1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780510174",
                  title: "Socks",
                  href: "/browse/women/socks/_/N-7hmr",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002397",
                  title: "Plus Size",
                  href: "/browse/women/plus-size/_/N-flt",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002008",
                  title: "Petite",
                  href: "/browse/women/petite/_/N-fls",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780510175",
                  title: "Maternity Clothes",
                  href: "/women/maternity-clothes/c9780510175",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000190002",
                  title: "Sports Clothes",
                  href: "/browse/sport-leisure/womens-clothing/all-womens-sportswear-brands/_/N-5w3p",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9780510192",
              title: "Shoes",
              href: "/browse/women/_/N-7hms",
              items: [
                {
                  id: "60000836",
                  title: "View All Shoes",
                  href: "/browse/women/womens-shoes-boots/_/N-fk6",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060210072",
                  title: "Sandals",
                  href: "/browse/women/womens-shoes-boots-trainers/sandals/_/N-fk6Z1z0row1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139104553",
                  title: "Flip-Flops & Espadrilles",
                  href: "/browse/women/womens-shoes-boots-trainers/espadrilles/flip-flops/_/N-fk6Z1z0ronuZ1z0rofr",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060210023",
                  title: "Trainers & Plimsolls",
                  href: "/browse/women/womens-shoes-boots-trainers/trainers-plimsolls/_/N-fk6Z1z0romv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10106241171",
                  title: "Boots",
                  href: "/browse/women/womens-shoes-boots-trainers/ankle-boots/calf-boots/knee-boots/over-the-knee-boot/shoe-boots/wellingtons/_/N-fk6Z1z0rnvaZ1z0rk84Z1z0rl5yZ1z0hey4Z1z0rnz3Z1z0rn02",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000041",
                  title: "Court Shoes",
                  href: "/browse/women/womens-shoes-boots-trainers/court-shoes/_/N-fk6Z1z0ron6",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139011087",
                  title: "Occasion Shoes",
                  href: "/browse/gifts/wedding/womens-wedding-fashion/occasion-shoes/_/N-6us1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000044",
                  title: "Pumps",
                  href: "/browse/women/womens-shoes-boots-trainers/pumps/_/N-fk6Z1z0roon",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000043",
                  title: "Loafers & Brogues",
                  href: "/browse/women/womens-shoes-boots-trainers/brogues/loafers/_/N-fk6Z1z04iqhZ1z04iqk",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002852",
                  title: "Slippers",
                  href: "/browse/women/womens-slippers/_/N-fk7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000062",
                  title: "Sports Footwear",
                  href: "/browse/sport-leisure/womens-sports-footwear/_/N-f0v",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9835000065",
                  title: "Hiking & Walking Boots",
                  href: "/browse/sport-leisure/womens-sports-footwear/womens-hiking-walking-shoes/_/N-f0x",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "190001298",
              title: "Accessories",
              href: "/women/women's-accessories-nch/c190001298",
              items: [
                {
                  id: "60000778",
                  title: "View All Handbags",
                  href: "/browse/women/handbags/_/N-fjg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10106010048",
                  title: "Purses",
                  href: "/browse/women/handbags-bags-purses/purses/_/N-fjgZ1z13xns",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001990",
                  title: "Jewellery",
                  href: "/women/women's-jewellery/c600001990",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000283",
                  title: "Watches",
                  href: "/browse/women/jewellery-watches/womens-watches/_/N-2ubt",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780510213",
                  title: "Sunglasses",
                  href: "/browse/women/womens-sunglasses/_/N-7hm9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139123330",
                  title: "Scarves",
                  href: "/browse/women/womens-hats-gloves-scarves/scarves/_/N-7hm8Z1z13y9r",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139123383",
                  title: "Hats",
                  href: "/browse/women/womens-hats-gloves-scarves/hats/_/N-7hm8Z1z1413m",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780510208",
                  title: "Occasion Hats & Fascinators",
                  href: "/browse/women/occasion-hats-fascinators/_/N-7hm4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139523762",
                  title: "Gloves",
                  href: "/browse/women/womens-hats-gloves-scarves/gloves/_/N-7hm8Z1z13yza",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800001621",
                  title: "Belts",
                  href: "/browse/women/womens-belts/_/N-fk3",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000281",
                  title: "Umbrellas",
                  href: "/browse/women/womens-umbrellas/_/N-2ubx",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600003866",
                  title: "Ear Muffs",
                  href: "/browse/c600003866",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139628193",
                  title: "Travel & Luggage",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/view-all-suitcases-travel-bags-accessories/_/N-7ix0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "600003898",
                  title: "Keyrings",
                  href: "/browse/women/keyrings/_/N-2ubu",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "600003874",
                  title: "Handkerchiefs",
                  href: "/browse/women/handkerchiefs/_/N-2uar",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "600003872",
                  title: "Reading Glasses",
                  href: "/browse/women/reading-glasses/_/N-6tq8",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "6001080105",
                  title: "Glasses Cases",
                  href: "/browse/women/glasses-cases/_/N-5w54",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9835010037",
                  title: "Clothes Care",
                  href: "/browse/home-garden/clothes-care/_/N-e98",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9835010038",
                  title: "Shoe Care",
                  href: "/browse/home-garden/shoe-care/_/N-e9d",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9835010039",
                  title: "Clothes Storage & Organisers",
                  href: "/browse/home-garden/home-storage/clothes-storage-organisers/_/N-d1p",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "20000190075",
              title: "Don't Miss",
              href: "/women/clearance-offers-nch/c20000190075",
              items: [
                {
                  id: "20001090488",
                  title: "Only Here: Exclusive to John Lewis & Partners",
                  href: "/browse/women/exclusives/_/N-7hwv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090500",
                  title: "Festival Outfits",
                  href: "/browse/women/festival-outfits/_/N-7fix",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090489",
                  title: "Holiday Shop",
                  href: "/browse/women/womens-holiday-shop/_/N-7ljz",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090491",
                  title: "Showerproof Coats & Jackets",
                  href: "/browse/women/womens-coats-jackets/showerproof/water-resistant/waterproof/_/N-flvZ1yzm12fZ1z0ros0Z1z0roub",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090497",
                  title: "The Sustainability Edit",
                  href: "/browse/women/the-sustainability-edit/women/_/N-7n2dZ53f3",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090490",
                  title: "Wedding Boutique",
                  href: "/gifts/wedding/women's-wedding-fashion/c9600140092",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090493",
                  title: "New Season: Dune",
                  href: "/browse/women/womens-shoes-boots-trainers/dune/_/N-fk6Z1z13xoi",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090492",
                  title: "New Season: hush",
                  href: "/brand/hush/_/N-1z0818i",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090498",
                  title: "New Season: Whistles",
                  href: "/brand/whistles/_/N-1z13tcg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090495",
                  title: "Book a Free Personal Styling Appointment",
                  href: "https://www.johnlewis.com/our-services/personal-styling",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090496",
                  title: "Book a Free Bra Fitting Appointment",
                  href: "https://www.johnlewis.com/our-services/lingerie-advice",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "10060060008",
              title: "Offers: selected lines",
              href: "/women/clearance-offers-selected-lines/c10060060008",
              items: [
                {
                  id: "20001090477",
                  title: "Shop all Womenswear Offers",
                  href: "/special-offers/womenswear-offers/c600001283",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090478",
                  title: "50% off Coats & Jackets",
                  href: "/browse/women/womens-coats-jackets/all-offers/_/N-flvZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090479",
                  title: "50% off Dresses",
                  href: "/browse/women/womens-dresses/all-offers/_/N-flwZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090480",
                  title: "50% off Handbags",
                  href: "/browse/women/handbags-bags-purses/all-offers/_/N-fjgZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090482",
                  title: "50% off  Lingerie",
                  href: "/browse/women/womens-lingerie-underwear/view-all-womens-lingerie-underwear/all-offers/_/N-fkfZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090483",
                  title: "50% off Shirts & Tops",
                  href: "/browse/women/womens-shirts-tops/all-offers/_/N-fm4Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090484",
                  title: "50% off Shoes",
                  href: "/browse/women/womens-shoes-boots-trainers/all-offers/_/N-fk6Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001111069",
                  title: "20% off Phase Eight",
                  href: "/brand/phase-eight/all-offers/_/N-1z13tm6Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090485",
                  title: "50% off John Lewis & Partners",
                  href: "/brand/women/john-lewis-partners/all-offers/_/N-53f3Z1yzsz8dZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090486",
                  title: "50% off Kin",
                  href: "/brand/women/kin/all-offers/_/N-53f3Z1z0vl67Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090487",
                  title: "50% off Modern Rarity",
                  href: "/brand/modern-rarity/all-offers/_/N-1z086j8Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "10139131168",
              title: "Spring Trends",
              href: "/women/trends-nch/c10139131168",
              items: [
                {
                  id: "20000510012",
                  title: "Animal Print",
                  href: "/browse/women/animal-print/_/N-7lzy",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000981264",
                  title: "Brights",
                  href: "/browse/women/bright-colours/_/N-7lfc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000510013",
                  title: "Denim",
                  href: "/browse/women/womens-denim/_/N-7lwk",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000190185",
                  title: "Florals",
                  href: "/browse/women/florals/_/N-7lfd",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000510011",
                  title: "Pastels",
                  href: "/browse/women/pastels/_/N-7lfe",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000320143",
                  title: "Pink Hues",
                  href: "/browse/women/pink-hues/pink/_/N-7iyeZ1z14176",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000190188",
                  title: "Ruffles ",
                  href: "/browse/women/ruffles/_/N-7ipu",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "20000090119",
              title: "Brands",
              href: "/women/shop-all-brands-nch/c20000090119",
              items: [
                {
                  id: "20000090120",
                  title: "Shop all Women's Brands",
                  href: "https://www.johnlewis.com/brands?deptId=fje",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "50000300",
          title: "Men",
          href: "/men/c50000300",
          items: [
            {
              id: "10106060613",
              title: "Our Services",
              href: "/men/clearance-offers-pm-nch/c10106060613",
              items: [
                {
                  id: "10260240523",
                  title: "Book a Personal Styling Appointment",
                  href: "/our-services/personal-styling-men",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20001030603",
                  title: "All Services",
                  href: "/our-services",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "190118300",
              title: "Clothing",
              href: "/men/clothing-nch/c190118300",
              items: [
                {
                  id: "600001949",
                  title: "New In Clothing & Accessories",
                  href: "/browse/men/new-in-clothing/_/N-ebk",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001512",
                  title: "Coats & Jackets",
                  href: "/browse/men/mens-coats-jackets/_/N-ea9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500080004",
                  title: "Suits ",
                  href: "/browse/men/all-mens-suits/_/N-7dnq",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000050563",
                  title: "Blazers",
                  href: "/browse/men/mens-blazers/_/N-1djs",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834830056",
                  title: "Waistcoats",
                  href: "/browse/men/mens-waistcoats/_/N-7iwy",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200940034",
                  title: "Cashmere",
                  href: "/browse/men/mens-cashmere/_/N-7d6s",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001534",
                  title: "Sweatshirts & Hoodies",
                  href: "/browse/men/mens-sweatshirts-hoodies/_/N-ebh",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001516",
                  title: "Jumpers & Cardigans",
                  href: "/browse/men/mens-jumpers-cardigans/_/N-eab",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001554",
                  title: "Shirts",
                  href: "/browse/men/mens-shirts/_/N-eaf",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600003360",
                  title: "T-Shirts",
                  href: "/browse/men/mens-t-shirts/_/N-ebg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600003356",
                  title: "Polo Shirts & Rugby Shirts",
                  href: "/browse/men/mens-polo-shirts/_/N-eae",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001514",
                  title: "Jeans",
                  href: "/browse/men/mens-jeans/_/N-eaa",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001540",
                  title: "Trousers",
                  href: "/browse/men/mens-trousers/_/N-ebi",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001556",
                  title: "Shorts",
                  href: "/browse/men/mens-shorts/_/N-eag",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000200070",
                  title: "Sports Clothes",
                  href: "/sport-leisure/men's-clothing/c600001659",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001887",
                  title: "Swimwear",
                  href: "/browse/men/mens-swimwear/_/N-ebf",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001520",
                  title: "Pyjamas & Nightwear",
                  href: "/browse/men/mens-nightwear/_/N-ead",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780410150",
                  title: "Robes & Dressing Gowns",
                  href: "/browse/men/mens-robes-dressing-gowns/_/N-7hll",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001542",
                  title: "Underwear",
                  href: "/browse/men/mens-underwear/_/N-ebj",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001528",
                  title: "Socks",
                  href: "/browse/men/mens-socks/_/N-eah",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6001050222",
                  title: "Linen",
                  href: "/browse/men/mens-linen/_/N-eac",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000030094",
                  title: "Big & Tall",
                  href: "/men/big-tall/c7000030094",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9600340010",
              title: "Shoes",
              href: "/men/men's-shoes-nch/c9600340010",
              items: [
                {
                  id: "9600910007",
                  title: "New In Shoes",
                  href: "/browse/men/new-in-mens-shoes/_/N-7fv2",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000834",
                  title: "View all Shoes, Boots & Trainers",
                  href: "/browse/men/mens-shoes-boots/_/N-ea5",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060210025",
                  title: "Trainers & Plimsolls",
                  href: "/browse/men/mens-shoes-boots-trainers/trainers-plimsolls/_/N-ea5Z1z0ron9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10106010007",
                  title: "Boat",
                  href: "/browse/men/mens-shoes-boots-trainers/boat-shoes/_/N-ea5Z1z0rhmq",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060080185",
                  title: "Brogues",
                  href: "/browse/men/view-all-mens-shoes/brogues/_/N-ea5Z1z0ropo",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139600017",
                  title: "Derby",
                  href: "/browse/men/mens-shoes-boots-trainers/derby/_/N-ea5Z1z0rop9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060080186",
                  title: "Loafers",
                  href: "/browse/men/view-all-mens-shoes/loafers/_/N-ea5Z1z0roiy",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060210026",
                  title: "Oxford",
                  href: "/browse/men/mens-shoes-boots-trainers/oxford/_/N-ea5Z1z0rok8",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139600665",
                  title: "Slippers",
                  href: "/browse/men/mens-shoes-boots-trainers/slippers/_/N-ea5Z1z0rohz",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000071",
                  title: "Walking & Hiking Shoes",
                  href: "/browse/men/mens-shoes-boots-trainers/walking/_/N-ea5Z1z0ro7b",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000067",
                  title: "Sports Footwear",
                  href: "/browse/sport-leisure/mens-sports-footwear/_/N-exr",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "190001300",
              title: "Accessories",
              href: "/men/men's-accessories/c190001300",
              items: [
                {
                  id: "60000731",
                  title: "View All Accessories",
                  href: "/men/all-men's-accessories/c60000731",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001080947",
                  title: "Ties & Bow Ties",
                  href: "/browse/men/ties-bow-ties/_/N-7lie",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001550",
                  title: "Watches",
                  href: "/browse/men/all-mens-accessories/mens-watches/_/N-e9x",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000024051",
                  title: "Jewellery",
                  href: "/browse/men/all-mens-accessories/mens-jewellery/_/N-2tuk",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780410169",
                  title: "Cufflinks",
                  href: "/browse/men/mens-cufflinks/_/N-7hle",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780410170",
                  title: "Tie Pins, Collar Stays & Shirt Studs",
                  href: "/browse/men/mens-tie-pins-collar-stays-shirt-studs/_/N-7hlf",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9780410171",
                  title: "Braces, Cummerbunds & Armbands",
                  href: "/browse/men/mens-braces-cummerbunds-armbands/_/N-7hld",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "800004506",
                  title: "Handkerchiefs & Pocket Squares",
                  href: "/browse/men/all-mens-accessories/mens-handkerchiefs/_/N-e9u",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "600001552",
                  title: "Wallets",
                  href: "/browse/men/mens-wallets-keyrings/_/N-ea7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001544",
                  title: "Bags",
                  href: "/browse/men/mens-bags/_/N-ea3",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001546",
                  title: "Belts",
                  href: "/browse/men/mens-belts/_/N-ea4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060200001",
                  title: "Hats, Gloves & Scarves",
                  href: "/browse/men/mens-hats-gloves-scarves/_/N-7l1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834830058",
                  title: "Sunglasses",
                  href: "/browse/men/mens-sunglasses/_/N-7iwx",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700002521",
                  title: "Umbrellas",
                  href: "/browse/men/all-mens-accessories/mens-umbrellas/_/N-2tuo",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139628194",
                  title: "Travel & Luggage",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/view-all-suitcases-travel-bags-accessories/_/N-7ix0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9780410172",
                  title: "Keyrings",
                  href: "/browse/men/keyrings/_/N-7hlg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9780410173",
                  title: "Reading Glasses",
                  href: "/browse/men/reading-glasses/_/N-7hlk",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9780610220",
                  title: "Glasses Cases",
                  href: "/browse/men/glasses-cases/_/N-7iy7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9835000144",
                  title: "Shoe Care",
                  href: "/browse/home-garden/shoe-care/_/N-e9d",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9835000145",
                  title: "Clothes Storage & Organisers",
                  href: "/browse/home-garden/home-storage/clothes-storage-organisers/_/N-d1p",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "8000350100",
              title: "Don't Miss",
              href: "/men/don't-miss/c8000350100",
              items: [
                {
                  id: "20000980587",
                  title: "Shop all Menswear Offers",
                  href: "/special-offers/menswear-offers/c600001285",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001050373",
                  title: "John Lewis & Partners + Folk Exclusive Collaboration",
                  href: "/brand/its-all-good-folk/_/N-1yzlaxf",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000900006",
                  title: "Holiday Shop",
                  href: "/browse/men/mens-holiday-shop/_/N-7lk9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000900007",
                  title: "Summer Shoes",
                  href: "/browse/men/mens-holiday-shop/shoes/_/N-7lk9Z1z1409c",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000910005",
                  title: "Occasionwear",
                  href: "/browse/men/occasion-shop/_/N-7lm6",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000900014",
                  title: "New Shoe Brand: CLAE",
                  href: "/brand/clae/_/N-1yzllbp",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000900012",
                  title: "New in: Barbour",
                  href: "https://www.johnlewis.com/brand/men/barbour/new-in/_/N-50esZ1z13zxsZ7lhg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001010005",
                  title: "New In: Ralph Lauren",
                  href: "/browse/men/new-in-clothing-accessories/ralph-lauren/_/N-ebkZ1z140o3",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001030605",
                  title: "Independent Brands",
                  href: "/browse/men/independent-brands/_/N-7huv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000900010",
                  title: "Book a Free Personal Styling Appointment",
                  href: "/our-services/personal-styling-men",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9200850078",
              title: "Offers: selected lines",
              href: "/men/offers-selected-lines/c9200850078",
              items: [
                {
                  id: "9835210030",
                  title: "Shop all Menswear Offers",
                  href: "/special-offers/menswear-offers/c600001285",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835210129",
                  title: "70% off Suits",
                  href: "/browse/men/all-mens-suits/all-offers/_/N-7dnqZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835210031",
                  title: "50% off Shirts",
                  href: "/browse/men/mens-shirts/all-offers/_/N-eafZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835210131",
                  title: "50% off Hats",
                  href: "/browse/men/mens-hats-gloves-scarves/all-offers/_/N-7l1qZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835210033",
                  title: "50% off Swimwear",
                  href: "/browse/men/mens-swimwear/all-offers/_/N-ebfZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835210034",
                  title: "50% off Shorts",
                  href: "/browse/men/mens-shorts/all-offers/_/N-eagZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835210130",
                  title: "70% off JOHN LEWIS & Co.",
                  href: "/brand/john-lewis-co./_/N-1z13wn0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835210132",
                  title: "70% off John Lewis & Partners",
                  href: "/brand/men/john-lewis-partners/all-offers/_/N-50esZ1yzsz8dZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090474",
                  title: "70% off Hackett",
                  href: "/brand/hackett-london/all-offers/_/N-1z13xd6Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090475",
                  title: "70% off Paul Smith",
                  href: "/brand/men/paul-smith/all-offers/_/N-50esZ1z13qvyZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090476",
                  title: "70% off Tiger of Sweden",
                  href: "/brand/tiger-of-sweden/all-offers/_/N-1yzoucbZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "50000296",
          title: "Beauty",
          href: "/beauty/c50000296",
          items: [
            {
              id: "10260390716",
              title: "Offers",
              href: "/beauty/offers-selected-lines/c10260390716",
              items: [
                {
                  id: "20001090503",
                  title: "15% off Fragrance",
                  href: "/browse/special-offers/beauty-fragrance-offers/fragrance/_/N-eg5Z1z0l50n",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000980589",
                  title: "15% off Skincare",
                  href: "/browse/special-offers/beauty-fragrance-offers/skincare/_/N-eg5Z1z13vwq",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10260390717",
                  title: "Shop all Beauty & Fragrance Offers",
                  href: "https://www.johnlewis.com/browse/special-offers/beauty-fragrance-offers/_/N-eg5",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "9200390166",
              title: "Offers: selected lines",
              href: "/beauty/offers-selected-lines/c9200390166",
              items: [
                {
                  id: "9200430043",
                  title: "Shop all Offers",
                  href: "/browse/special-offers/beauty-fragrance-offers/_/N-eg5",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710791",
                  title: "15% off Fragrance",
                  href: "/browse/special-offers/beauty-fragrance-offers/fragrance/_/N-eg5Z1z0l50n",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090499",
                  title: "15% off Skincare",
                  href: "/browse/special-offers/beauty-fragrance-offers/skincare/_/N-eg5Z1z13vwq",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090501",
                  title: "15% off Make Up",
                  href: "/browse/special-offers/beauty-fragrance-offers/make-up/_/N-eg5Z1z0l5cg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710787",
                  title: "15% off AVEDA",
                  href: "/brand/aveda/all-offers/_/N-1z13n4xZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000720208",
                  title: "15% off bareMinerals",
                  href: "/brand/bareminerals/all-offers/_/N-1z13y5tZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710783",
                  title: "15% off Benefit",
                  href: "/brand/beauty/benefit/all-offers/_/N-a30Z1z13y1eZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835380011",
                  title: "15% off Bobbi Brown",
                  href: "/brand/bobbi-brown/all-offers/_/N-1z13yxdZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710784",
                  title: "15% off Clarins",
                  href: "/brand/clarins/all-offers/_/N-1z13ywdZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710785",
                  title: "15% off Clinique",
                  href: "/brand/clinique/all-offers/_/N-1z13ywmZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200430047",
                  title: "15% off Dior",
                  href: "/brand/dior/all-offers/_/N-1z13ybrZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000590215",
                  title: "15% off Elemis",
                  href: "/brand/elemis/all-offers/_/N-1z140ccZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710786",
                  title: "15% off Estée Lauder",
                  href: "/brand/estée-lauder/all-offers/_/N-1z13yahZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200390138",
                  title: "15% off Giorgio Armani",
                  href: "/brand/giorgio-armani/all-offers/_/N-1z13zbpZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090502",
                  title: "15% off Guerlain",
                  href: "/brand/guerlain/all-offers/_/N-1z13y54Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710792",
                  title: "15% off Lancôme",
                  href: "/brand/lancôme/all-offers/_/N-1z13yu3Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000580031",
                  title: "15% off Liz Earle",
                  href: "/brand/liz-earle/all-offers/_/N-1z13zv2Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200160051",
                  title: "15% off NARS",
                  href: "/brand/nars/all-offers/_/N-1z13yfaZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710788",
                  title: "15% off Sisley",
                  href: "/brand/sisley/all-offers/_/N-1z13xnzZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9600300039",
                  title: "15% off TOM FORD",
                  href: "/brand/tom-ford/all-offers/_/N-1z13wa3Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710790",
                  title: "15% off Urban Decay",
                  href: "/brand/urban-decay/all-offers/_/N-1z0wr1bZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835380009",
                  title: "15% off Yves Saint Laurent",
                  href: "/brand/yves-saint-laurent/all-offers/_/N-1z13yulZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "190328296",
              title: "Make-Up & Fragrance",
              href: "/beauty/make-up-fragrance-nch/c190328296",
              items: [
                {
                  id: "600001924",
                  title: "New In",
                  href: "/browse/beauty/new-in-beauty/_/N-a5f",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600003858",
                  title: "Women's Perfume",
                  href: "/browse/beauty/womens-fragrance/_/N-a63",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9200930081",
                  title: "Beauty & Fragrance Gift Sets",
                  href: "/browse/beauty/beauty-fragrance-gift-sets/_/N-7d54",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000470429",
                  title: "Face",
                  href: "/browse/beauty/face-makeup/_/N-a5l",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000670060",
                  title: "Eyes",
                  href: "/browse/beauty/eye-makeup/_/N-a5k",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000480114",
                  title: "Lips",
                  href: "/browse/beauty/lip-makeup/_/N-a5n",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000440229",
                  title: "Nails",
                  href: "/browse/beauty/nail-makeup/_/N-a62",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9781400021",
                  title: "Make-Up Sets",
                  href: "/browse/beauty/make-up-sets/_/N-7hi8",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "600001480",
                  title: "Make-Up Accessories",
                  href: "/beauty/make-up-accessories/c600001480",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139531303",
                  title: "Make-Up Bags",
                  href: "/browse/beauty/make-up-accessories/make-up-bags/_/N-a5t",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600003860",
                  title: "Men's Aftershave",
                  href: "/browse/beauty/mens-aftershave/_/N-a61",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9781400022",
                  title: "Hand & Nail Sets",
                  href: "/browse/beauty/hand-nail-sets/_/N-7hi7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9200140037",
              title: "Skin & Body Care",
              href: "/beauty/skin-body-care-nch/c9200140037",
              items: [
                {
                  id: "9200140041",
                  title: "Skin Care, Treatments & Supplements",
                  href: "/beauty/skin-care-treatments-supplements/c9200140041",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000550265",
                  title: "Moisturisers",
                  href: "/browse/beauty/skin-care/moisturisers/_/N-a4w",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000550251",
                  title: "Anti-Ageing",
                  href: "/browse/beauty/skin-care-treatments-supplements/anti-ageing/_/N-a53",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000550263",
                  title: "Cleansers & Toners",
                  href: "/browse/beauty/skin-care/cleansers-toners/_/N-a4r",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000550267",
                  title: "Skin Care Sets",
                  href: "/browse/beauty/skin-care-sets/_/N-7hia",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001482",
                  title: "Bath & Shower",
                  href: "/beauty/bath-shower/c600001482",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "800005993",
                  title: "Hand & Foot Care",
                  href: "/browse/beauty/bath-body/hand-foot-care/_/N-a39",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800004471",
                  title: "Body Care",
                  href: "/browse/beauty/bath-body/body-care/_/N-a36",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000023212",
                  title: "Body Firming & Toning",
                  href: "/browse/beauty/bath-body/body-firming-toning/_/N-a37",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000024832",
                  title: "Cloths, Pads & Facial Brushes",
                  href: "/browse/beauty/skin-care/skin-care-accessories/_/N-a51",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "8000025958",
                  title: "Beauty Cleansing Devices",
                  href: "/browse/electricals/personal-care-shavers-dental/beauty-cleansing-devices/_/N-ahx",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "600001472",
                  title: "Tanning & Suncare",
                  href: "/browse/beauty/tanning-suncare/_/N-a5a",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835270127",
                  title: "Men's Grooming",
                  href: "/browse/beauty/view-all-mens-grooming/_/N-7j2o",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000702",
                  title: "Women's Hair Removal",
                  href: "/browse/electricals/personal-care-shavers-dental/womens-hair-removal/_/N-aib",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9835000207",
                  title: "Men's Skin Care",
                  href: "/browse/beauty/mens-skin-care/_/N-a4l",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9835000208",
                  title: "Men's Bath & Body",
                  href: "/browse/beauty/mens-bath-body/_/N-2okc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "800001979",
                  title: "Electric Toothbrushes, Flossers & Accessories",
                  href: "/browse/electricals/personal-care-shavers-dental/_/N-2pzg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9781400027",
              title: "Hair Care & Styling",
              href: "/browse/beauty/_/N-7hi3",
              items: [
                {
                  id: "9834900034",
                  title: "Hair Care",
                  href: "/beauty/hair-care/c9834900034",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001050353",
                  title: "Shampoo",
                  href: "/browse/beauty/hair-care/shampoo/_/N-7nnc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001050354",
                  title: "Conditioner",
                  href: "/browse/beauty/hair-care/conditioner/_/N-7nn8",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001050358",
                  title: "Hair Treatments",
                  href: "/browse/beauty/hair-care/hair-treatments/_/N-7nnb",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001050355",
                  title: "Hair Styling",
                  href: "/browse/beauty/hair-care/hair-styling/_/N-7nnd",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001050359",
                  title: "Hair Care Gift Sets",
                  href: "/browse/beauty/hair-care/hair-care-gift-sets/_/N-7nof",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001050357",
                  title: "Hair Brushes",
                  href: "/browse/beauty/hair-care/hair-brushes/_/N-7nna",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000688",
                  title: "Hair Dryers",
                  href: "/browse/beauty/ghd-hair-styling/hair-dryers/_/N-a3f",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000350277",
                  title: "Hair Curlers",
                  href: "/browse/beauty/ghd-hair-styling/hair-curlers/_/N-54y0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800001975",
                  title: "Hair Straighteners",
                  href: "/browse/beauty/ghd-hair-styling/hair-straighteners/_/N-a3g",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800001974",
                  title: "Hair Stylers",
                  href: "/browse/beauty/ghd-hair-styling/hair-stylers/_/N-a3h",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9500230272",
              title: "Don't Miss",
              href: "/beauty/don't-miss/c9500230272",
              items: [
                {
                  id: "10060020058",
                  title: "CHANEL",
                  href: "/beauty/chanel/c7000370531",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060020061",
                  title: "HERMÈS",
                  href: "/brand/hermès/_/N-1z0guaa",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500600123",
                  title: "Travel Size Beauty",
                  href: "/browse/beauty/travel-size-beauty/_/N-a5b",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000770421",
                  title: "New: Gucci Mémoire d'une Odeur",
                  href: "/gucci-memoire-d'une-odeur-eau-de-parfum/p4249397",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000140024",
                  title: "New: TOM FORD Métallique",
                  href: "/tom-ford-metallique-eau-de-parfum/p4265049",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000800488",
                  title: "Exclusive: Shiseido Benefiance",
                  href: "/browse/beauty/beauty-exclusives/shiseido/_/N-7hr8Z1z13zy3",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260400436",
                  title: "Exclusive: Guerlain Abeille Royale",
                  href: "/browse/beauty/beauty-exclusives/guerlain/_/N-7hr8Z1z13y54",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000700202",
                  title: "Exclusive: Philip Kingsley Pure Blonde Booster",
                  href: "/browse/beauty/beauty-exclusives/philip-kingsley/_/N-7hr8Z1z1404k",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500200134",
                  title: "All Beauty Exclusives",
                  href: "/browse/beauty/beauty-exclusives/_/N-7hr8",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000170057",
                  title: "Beauty & Fragrance Offers",
                  href: "/browse/special-offers/beauty-fragrance-offers/all-offers/_/N-eg5Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139131175",
                  title: "Retinol Skincare",
                  href: "/browse/beauty/retinol/_/N-7lqa",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139100106",
                  title: "Vegan Beauty",
                  href: "/browse/beauty/vegan-beauty/_/N-7lej",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10060200205",
                  title: "Guide to Vegan Beauty",
                  href: "https://www.johnlewis.com/content/beauty-hair/about-vegan-beauty",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10139091464",
                  title: "Toiletries for New Mums",
                  href: "/browse/beauty/toiletries-for-new-mums/_/N-7jk0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9200890063",
                  title: "Natural Skin Care Guide",
                  href: "https://www.johnlewis.com/content/beauty-hair/natural-skin-care-guide",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10260351535",
                  title: "Why Beauty Editors Love Korean Skin Care",
                  href: "https://www.johnlewis.com/content/beauty-hair/korean-skin-care-routine",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10260180037",
                  title: "Matte Lipstick Trends",
                  href: "https://www.johnlewis.com/content/beauty-hair/matte-lipstick-make-up-trends",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10106090930",
                  title: "Book a Beauty Appointment",
                  href: "https://www.johnlewis.com/our-services/beauty-treatments",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "5000010",
          title: "Baby & Child",
          href: "/baby-child/c5000010",
          items: [
            {
              id: "19027710",
              title: "Back to School",
              href: "/baby-child/legacy-don't-miss-nch/c19027710",
              items: [
                {
                  id: "20001010586",
                  title: "Shop Schoolwear",
                  href: "/baby-child/school-uniform-shop/c6000034",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "19004210",
              title: "Nursery & Baby",
              href: "/baby-child/nursery-baby-nch/c19004210",
              items: [
                {
                  id: "6000058",
                  title: "Feeding & Healthcare",
                  href: "/baby-child/feeding-healthcare/c6000058",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001778",
                  title: "Bathing & Changing",
                  href: "/baby-child/bathing-changing/c600001778",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000057",
                  title: "Buggies & Travel",
                  href: "/baby-child/buggies-travel/c6000057",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000062",
                  title: "Nursery Furniture & Furnishings",
                  href: "/baby-child/nursery-furniture-furnishings/c6000062",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139090544",
                  title: "Nursery Bedding",
                  href: "/browse/baby-child/nursery-furniture-furnishings/_/N-8g7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835030048",
                  title: "Maternity Clothes",
                  href: "/women/maternity-clothes/c9780510175?rdr=1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                  linkedCategoryId: "9780510175",
                  fetchLinkedCategory: true,
                },
                {
                  id: "800001005",
                  title: "Parenting & Baby Books",
                  href: "/browse/baby-child/pregnancy-maternity/parent-baby-books/_/N-8ft",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000059",
                  title: "Baby Gifts",
                  href: "/baby-child/baby-gifts/c6000059",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000360452",
                  title: "Christening",
                  href: "/baby-child/christening/c6000360452",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "19011110",
              title: "Clothes & Shoes",
              href: "/baby-child/clothes-shoes-nch/c19011110",
              items: [
                {
                  id: "6000030",
                  title: "Baby & Toddler (0-3 yrs)",
                  href: "/baby-child/baby-toddlerwear-0-3-yrs/c6000030",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139090546",
                  title: "Baby Boy Clothes",
                  href: "/browse/baby-child/baby-toddlerwear-0-3-yrs/view-all-baby-boy-clothes/_/N-7jp5",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139090545",
                  title: "Baby Girl Clothes",
                  href: "/browse/baby-child/baby-toddlerwear-0-3-yrs/view-all-baby-girl-clothes/_/N-7jp6",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001345",
                  title: "Boys' Clothes (2+ yrs)",
                  href: "/baby-child/boys'-clothes-2-yrs/c600001345",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001343",
                  title: "Girls' Clothes (2+ yrs)",
                  href: "/baby-child/girls'-clothes-2-yrs/c600001343",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "700008719",
                  title: "Children's Shoes",
                  href: "/baby-child/children's-shoes/c700008719",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000034",
                  title: "School Uniform Shop",
                  href: "/baby-child/school-uniform-shop/c6000034",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "600002381",
                  title: "Uniform by School",
                  href: "/baby-child/uniform-by-school/c600002381",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000948847",
                  title: "Sports PE Kit",
                  href: "/sport-leisure/children's-clothing-footwear-equipment/c6000150170",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700002382",
                  title: "Scouts, Cubs & Beavers",
                  href: "/browse/baby-child/school-uniform-shop/scouts-cubs-beavers/_/N-8nd",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "700001530",
                  title: "Guides, Brownies & Rainbows",
                  href: "/browse/baby-child/school-uniform-shop/guides-brownies-rainbows/_/N-8st",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9780110126",
              title: "Toys",
              href: "/baby-child/toys/c9780110126",
              items: [
                {
                  id: "19051712",
                  title: "All Toys",
                  href: "/baby-child/shop-toys/c19051712",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780110133",
                  title: "Outdoor Toys & Games",
                  href: "/baby-child/outdoor-toys-games/c9780110133",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "800004574",
                  title: "Action Figures & Playsets",
                  href: "/browse/baby-child/action-toys/action-figures/_/N-1doj",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9780110127",
                  title: "Animal Figures & Sets",
                  href: "/browse/baby-child/animal-figures-sets/_/N-7gf9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "800006748",
                  title: "Arts & Crafts",
                  href: "/browse/baby-child/arts-crafts/_/N-fgg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000018",
                  title: "Baby & Preschool Toys",
                  href: "/baby-child/baby-preschool-toys/c6000018",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "700001482",
                  title: "Cars, Trains, Boats & Planes",
                  href: "/browse/baby-child/cars-trains-boats-planes/_/N-fg2",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9600140002",
                  title: "Children's Books",
                  href: "/browse/baby-child/childrens-books/_/N-7ewv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800009294",
                  title: "Construction Toys",
                  href: "/browse/baby-child/construction-toys/_/N-44gf",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060151028",
                  title: "Dolls & Doll Houses",
                  href: "/browse/baby-child/dolls-doll-houses-doll-prams/_/N-7kyi",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000230695",
                  title: "Gaming",
                  href: "/electricals/gaming/c6000041",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "700001506",
                  title: "Science & Discovery",
                  href: "/browse/baby-child/science-discovery/_/N-fj8",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800008730",
                  title: "Electronic Toys",
                  href: "/browse/baby-child/electronic-toys/_/N-fib",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260200021",
                  title: "Games & Puzzles",
                  href: "/browse/baby-child/games-puzzles/view-all-games-puzzles/_/N-6hxe",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "700007021",
                  title: "Pocket Money Toys",
                  href: "/browse/baby-child/pocket-money-toys/_/N-2ual",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "700001508",
                  title: "Soft Toys",
                  href: "/browse/baby-child/soft-toys/_/N-fjb",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "700007572",
                  title: "Puppets",
                  href: "/browse/baby-child/puppets/_/N-fj3",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "700001512",
                  title: "Wooden Toys",
                  href: "/browse/baby-child/wooden-toys/_/N-fjd",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10060151030",
                  title: "Dressing up & Playsets",
                  href: "/browse/baby-child/dressing-up-playsets/_/N-7kyj",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835550009",
                  title: "STEM Toys",
                  href: "/browse/baby-child/stem-toys/_/N-7k56",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "6000380170",
              title: "Featured Brands",
              href: "/baby-child/featured-brands/c6000380170",
              items: [
                {
                  id: "9834760001",
                  title: "LEGO",
                  href: "/brand/lego/_/N-1z140g1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834760004",
                  title: "Micro Scooters",
                  href: "/brand/micro/_/N-1z0bilq",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834760003",
                  title: "John Lewis & Partners Toys",
                  href: "/browse/baby-child/view-all-toys/john-lewis/_/N-feuZ1z141il",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834760002",
                  title: "Playmobil ",
                  href: "/brand/playmobil/_/N-1z13z81",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835030003",
                  title: "Sylvanian Families",
                  href: "/brand/sylvanian-families/_/N-1z13z85",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260190234",
                  title: "Pottery Barn Kids",
                  href: "/brand/pottery-barn-kids/_/N-1yzs6de",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835030010",
                  title: "Silver Cross",
                  href: "/brand/silver-cross/_/N-1z13xqo",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9600120004",
                  title: "Bugaboo",
                  href: "/brand/bugaboo/_/N-1z14078",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780350008",
                  title: "iCandy",
                  href: "/brand/icandy/_/N-1z13wfy",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780350007",
                  title: "Maxi-Cosi",
                  href: "/brand/maxi-cosi/_/N-1z13zwp",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10106202457",
                  title: "Clarks",
                  href: "/brand/baby-child/clarks/_/N-8b0Z1z13y1a",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139101397",
                  title: "Mini Boden",
                  href: "/brand/mini-boden/_/N-1yzxibs",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "6000330348",
              title: "Back to School",
              href: "/baby-child/back-to-school/c6000330348",
              items: [
                {
                  id: "20001071427",
                  title: "View all Boys' School Uniform",
                  href: "/browse/baby-child/school-uniform-shop/view-all-boys-school-uniform/_/N-7c5m",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071428",
                  title: "View all Girls' School Uniform",
                  href: "/browse/baby-child/school-uniform-shop/view-all-girls-school-uniform/_/N-7c5n",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071429",
                  title: "Uniform by School",
                  href: "/baby-child/uniform-by-school/c600002381",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071430",
                  title: "Boys' School Shoes",
                  href: "/browse/baby-child/school-uniform-shop/boys-school-uniform/boys-school-shoes/_/N-8sk",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071431",
                  title: "Girls' School Shoes",
                  href: "/browse/baby-child/shop-school-uniform/girls-school-uniform/girls-school-shoes/_/N-8sl",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071432",
                  title: "Boys' Polo Shirts",
                  href: "/browse/baby-child/school-uniform/boys-school-uniform/boys-school-polo-shirts/_/N-8u4",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071433",
                  title: "Girls' Shirts & Blouses",
                  href: "/browse/baby-child/school-uniform-shop/girls-school-shirts-blouses/_/N-8um",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071434",
                  title: "Boys' Trousers & Shorts",
                  href: "/browse/baby-child/school-uniform-shop/boys-school-trousers-shorts/_/N-8u7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071435",
                  title: "Girls' Skirts",
                  href: "/browse/baby-child/school-uniform-shop/girls-school-skirts/_/N-8up",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071436",
                  title: "School PE Kit",
                  href: "/browse/sport-leisure/childrens-clothing-footwear-equipment/school-pe-kit/_/N-2u4i",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071438",
                  title: "Backpacks & Bags",
                  href: "/browse/baby-child/shop-school-uniform/school-essentials/backpacks-bags/_/N-8tc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "10106050079",
              title: "Offers: selected lines",
              href: "/baby-child/clearance-lhn/c10106050079",
              items: [
                {
                  id: "20001110540",
                  title: "Shop all Nursery Offers",
                  href: "/browse/special-offers/nursery-offers/_/N-ejc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001110541",
                  title: "Shop all Toys Offers",
                  href: "/browse/special-offers/toys-special-offers/_/N-ei7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001110545",
                  title: "Save £150 on the Silver Cross Pioneer Monomarque",
                  href: "/silver-cross-pioneer-exclusive-package-pushchair-monomarque/p3597314",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001110546",
                  title: "Save £60 on the Motorola MBP35XLC",
                  href: "/motorola-mbp35xlc-digital-audio-and-video-baby-monitor-white/p4073665",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001110547",
                  title: "£30 off Furreal Tyler the Playful Tiger",
                  href: "/furreal-roarin-tyler-the-playful-tiger/p3282372",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001110548",
                  title: "20% off John Lewis & Partners Toys",
                  href: "/browse/special-offers/toys-special-offers/john-lewis-partners/_/N-ei7Z1yzsz8d",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001110549",
                  title: "20% off Outdoor Toy & Games ",
                  href: "/browse/special-offers/toys-special-offers/outdoor-toys-games/_/N-ei7Z1z0rko7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001110551",
                  title: "10% off iCandy",
                  href: "/brand/icandy/all-offers/_/N-1z13wfyZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001110552",
                  title: "Anki Cozmo Robot & Book Offer",
                  href: "/anki-cozmo-robot-plus-create-with-cozmo-book-and-tread-pack-bundle/p237821927",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001110553",
                  title: "LEGO Offers",
                  href: "/browse/special-offers/toys-special-offers/lego/_/N-ei7Z1z140g1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "130438",
              title: "Buying Guides",
              href: "/baby-child/buying-guides/c130438",
              items: [
                {
                  id: "1401090",
                  title: "Schoolwear Size Guide",
                  href: "/buying-guides/schoolwear-sizing-guide",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "1401086",
                  title: "Childrenswear Size Guide",
                  href: "/buying-guides/childrenswear-size-guide",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "5000011",
          title: "Sport & Leisure",
          href: "/sport-leisure/c5000011",
          items: [
            {
              id: "10260260094",
              title: "Dont Miss",
              href: "/sport-leisure/offers-selected-lines/c10260260094",
              items: [
                {
                  id: "20000900003",
                  title: "Up to 50% off Womens Sports Clothing & Footwear",
                  href: "/browse/special-offers/sports-fitness-offers/womens-sports-clothing-footwear-offers/_/N-eh2",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000900004",
                  title: "Up to 50% off Mens Sports Clothing & Footwear",
                  href: "/browse/special-offers/sports-fitness-offers/mens-sports-clothing-footwear-offers/_/N-egz",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000900005",
                  title: "Shop all Travel & Luggage Offers",
                  href: "/browse/special-offers/luggage-travel-offers/view-all-luggage-offers/_/N-7euy",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "20000190190",
                  title: "Shop all off Sports & Leisure Offers",
                  href: "/special-offers/sports-leisure-offers/c600001331",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
            {
              id: "19048611",
              title: "Sports & Fitness",
              href: "/sport-leisure/sports-fitness-nch/c19048611",
              items: [
                {
                  id: "600001657",
                  title: "Women's Clothing",
                  href: "/sport-leisure/women's-clothing/c600001657",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000150121",
                  title: "Women's Sports Footwear",
                  href: "/browse/sport-leisure/womens-sports-clothing-footwear/view-all-womens-sports-footwear/_/N-f0v",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "600001659",
                  title: "Men's Clothing",
                  href: "/sport-leisure/men's-clothing/c600001659",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000150123",
                  title: "Men's Sports Footwear",
                  href: "/browse/sport-leisure/mens-sports-clothing-footwear/view-all-mens-sports-footwear/_/N-exr",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000066",
                  title: "Fitness Machines & Technology",
                  href: "/sport-leisure/fitness-machines-technology/c6000066",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139628257",
                  title: "Equipment by Sport",
                  href: "/browse/sport-leisure/equipment-by-sport/_/N-7f81",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800002070",
                  title: "Gym Accessories",
                  href: "/browse/sport-leisure/sports-accessories-bags/gym-accessories/_/N-eyu",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800002069",
                  title: "Weights",
                  href: "/browse/sport-leisure/fitness-equipment/weights/_/N-eug",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834670006",
                  title: "Kit & Duffel Bags",
                  href: "/browse/sport-leisure/kit-duffel-bags/_/N-7iko",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834670007",
                  title: "Hats",
                  href: "/browse/sport-leisure/hats/_/N-7ikn",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "9834670009",
                  title: "Gloves",
                  href: "/browse/sport-leisure/gloves/_/N-7ikm",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "6000150170",
                  title: "Children's Clothing, Footwear & Equipment",
                  href: "/sport-leisure/children's-clothing-footwear-equipment/c6000150170",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "19001711",
              title: "Travel & Luggage",
              href: "/sport-leisure/travel-luggage-nch/c19001711",
              items: [
                {
                  id: "9835260006",
                  title: "View All Suitcases, Travel Bags & Accessories",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/view-all-suitcases-bags-and-accs/_/N-7ix0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800004067",
                  title: "Suitcases",
                  href: "/browse/sport-leisure/suitcases/_/N-etc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000020411",
                  title: "Holdalls",
                  href: "/browse/sport-leisure/luggage/holdalls/_/N-et8",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000099",
                  title: "Backpacks",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/backpacks/_/N-et6",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260380345",
                  title: "Cabin Cases",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/suitcases/size=cabin-up-to-56cm/_/N-etcZ1z08w6u",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "80000706",
                  title: "Children's Luggage",
                  href: "/browse/sport-leisure/luggage/childrens-luggage/_/N-eqi",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "800006481",
                  title: "Shopper Bags & Shopping Trolleys",
                  href: "/browse/sport-leisure/luggage/shopping-trolleys-bags/_/N-2u2x",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "6000067",
                  title: "Travel & Luggage Accessories",
                  href: "/browse/sport-leisure/holiday-travel-accessories/_/N-eop",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "60000538",
                  title: "Camping & Camping Accessories",
                  href: "/sport-leisure/camping-camping-accessories/c60000538",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "19001011",
              title: "Hobbies & Crafts",
              href: "/sport-leisure/hobbies-crafts-nch/c19001011",
              items: [
                {
                  id: "9200110070",
                  title: "Haberdashery",
                  href: "/sport-leisure/haberdashery/c9200110070",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834670016",
                  title: "Crafts",
                  href: "/sport-leisure/crafts/c9834670016",
                  items: [],
                  fetchChildren: true,
                  displayInDesktopNav: true,
                },
                {
                  id: "9834350013",
                  title: "Sewing Machines ",
                  href: "/browse/sport-leisure/haberdashery/sewing-machines/_/N-enx",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "8000040250",
                  title: "Games & Puzzles",
                  href: "/browse/baby-child/games-puzzles/view-all-games-puzzles/_/N-6hxe",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "6000065",
                  title: "Books",
                  href: "/browse/c6000065",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9000010004",
                  title: "Stationery",
                  href: "/home-garden/stationery/c60000455?rdr=1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                  linkedCategoryId: "60000455",
                  fetchLinkedCategory: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9835000073",
              title: "Featured Brands",
              href: "/sport-leisure/brands/c9835000073",
              items: [
                {
                  id: "9835000181",
                  title: "Samsonite",
                  href: "/brand/samsonite/_/N-1z13xfx",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000151",
                  title: "Nike",
                  href: "/brand/nike/_/N-1z13yo0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000180",
                  title: "John Lewis & Partners",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/view-all-suitcases-travel-bags-accessories/john-lewis-partners/_/N-7ix0Z1yzsz8d",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000146",
                  title: "adidas",
                  href: "/brand/adidas/_/N-1z0nbgj",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000152",
                  title: "NordicTrack",
                  href: "/brand/nordictrack/_/N-1z13thp",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139520507",
                  title: "Antler",
                  href: "/brand/antler/_/N-1z13xbd",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000158",
                  title: "Under Armour",
                  href: "/brand/under-armour/_/N-1z13q9f",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139520508",
                  title: "WaterRower",
                  href: "/brand/waterrower/_/N-1yzpxov",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000185",
                  title: "Eastpak",
                  href: "/brand/eastpak/_/N-1z13ysn",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000150",
                  title: "Life Fitness",
                  href: "/brand/life-fitness/_/N-1z1414k",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835000184",
                  title: "Briggs & Riley",
                  href: "/brand/briggs-riley/_/N-1z13ypl",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "9835000160",
              title: "Don't Miss",
              href: "/sport-leisure/don't-miss/c9835000160",
              items: [
                {
                  id: "20001071424",
                  title: "New in: Herschel",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/view-all-suitcases-travel-bags-accessories/herschel-supply-co./new-in/_/N-7ix0Z1z0okimZ7lhg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000250008",
                  title: "New in: Backpacks",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/backpacks/new-in/_/N-et6Z7lhg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000980024",
                  title: "New Brand: Horizn Studios Luggage",
                  href: "/brand/horizn-studios/_/N-1yzmc91",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835350356",
                  title: "New in: Women's Sports Clothing",
                  href: "/browse/sport-leisure/womens-clothing/new-in-womens-clothing/_/N-f0e",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139628245",
                  title: "Women's Running Wear",
                  href: "/browse/sport-leisure/womens-clothing/womens-running-wear/_/N-f0n",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000190005",
                  title: "Women's Sports Swimwear",
                  href: "/browse/sport-leisure/womens-clothing/womens-sports-swimwear/_/N-f0q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10106132640",
                  title: "Women's Yoga & Pilates Clothing",
                  href: "/browse/sport-leisure/womens-clothing/womens-yoga-pilates-wear/_/N-f0t",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9835030092",
                  title: "New in: Men's Sports Clothing",
                  href: "/browse/sport-leisure/mens-clothing/new-in-mens-clothing/_/N-5w36",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139628247",
                  title: "Men's Running Wear",
                  href: "/browse/sport-leisure/mens-clothing/mens-running-wear/_/N-exb",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000190006",
                  title: "Men's Sports Swimwear",
                  href: "/browse/sport-leisure/mens-clothing/mens-sports-swimwear/_/N-exe",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000260003",
                  title: "Sports Headphones",
                  href: "/browse/electricals/headphones/headphones/sports/_/N-al9Z1z13wxz",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000250007",
                  title: "New in: Travel & Luggage",
                  href: "/browse/sport-leisure/suitcases-bags-accessories/view-all-suitcases-travel-bags-accessories/new-in/_/N-7ix0Z7lhg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "10260260471",
              title: "Offers: Selected lines",
              href: "/sport-leisure/offers-price-match-selected-lines/c10260260471",
              items: [
                {
                  id: "20001090510",
                  title: "30% off Nike",
                  href: "/brand/nike/all-offers/_/N-1z13yo0Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710168",
                  title: "30% off adidas",
                  href: "/brand/adidas/all-offers/_/N-1z0nbgjZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090509",
                  title: "30% off Under Armour",
                  href: "/brand/under-armour/all-offers/_/N-1z13q9fZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090513",
                  title: "20% off Eastpak",
                  href: "/browse/special-offers/view-all-luggage-offers/eastpak/_/N-7euyZ1z13ysn",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090514",
                  title: "20% off Samsonite",
                  href: "/browse/special-offers/view-all-luggage-offers/samsonite/size=cabin-up-to-56cm/_/N-7euyZ1z13xfxZ1z08w6u",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710166",
                  title:
                    "Up to 50% off Women's Sports Clothing & Footwear Offers",
                  href: "/browse/special-offers/sports-leisure-offers/womens-sports-clothing-footwear-offers/_/N-eh2",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710167",
                  title:
                    "Up to 50% off Men's Sports Clothing & Footwear Offers",
                  href: "/browse/special-offers/sports-fitness-offers/mens-sports-clothing-footwear-offers/_/N-egz",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710176",
                  title: "Fitness Machine Offers",
                  href: "/browse/special-offers/sports-leisure-offers/fitness-equipment-offers/_/N-6v8m",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090512",
                  title: "Travel & Luggage Offers",
                  href: "/browse/special-offers/luggage-travel-offers/view-all-luggage-offers/_/N-7euy",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000710165",
                  title: "Shop All Sports & Leisure Offers",
                  href: "/sport-leisure/shop-all-sports-leisure-offers/c600001331",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001090511",
                  title: "Shop all Sewing Machine Offers",
                  href: "/browse/special-offers/sewing-knitting-crafts-offers/_/N-1dlv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "500009",
          title: "Gifts",
          href: "/gifts/c500009",
          items: [
            {
              id: "10060110011",
              title: "Gifts for Them",
              href: "/gifts/gifts-for-them/c10060110011",
              items: [
                {
                  id: "10139628783",
                  title: "Top gifts for her",
                  href: "/browse/gifts/top-gift-ideas-for-her/_/N-b16",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139628784",
                  title: "Top gifts for him",
                  href: "/browse/gifts/top-gift-ideas-for-him/_/N-b49",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139628788",
                  title: "Fashion and beauty for her",
                  href: "/browse/gifts/fashion-accessories-for-her/_/N-7ktl",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139628787",
                  title: "Fashion and grooming for him",
                  href: "/browse/gifts/gifts-for-him/fashion-accessories-for-him/_/N-7ktq",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110012",
                  title: "Couples",
                  href: "/browse/gifts/for-couples/_/N-ays",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110013",
                  title: "Grandparents",
                  href: "/browse/gifts/for-grandparents/_/N-azc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110014",
                  title: "Children",
                  href: "/browse/gifts/for-children/_/N-7fx0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110017",
                  title: "Babies",
                  href: "/browse/baby-child/baby-gifts/top-gifts-for-babies/_/N-7g6z",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110018",
                  title: "Pets",
                  href: "/browse/home-garden/pet-care/_/N-7dec",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "10060110030",
              title: "Popular Gifts",
              href: "/gifts/popular-gifts/c10060110030",
              items: [
                {
                  id: "9500100102",
                  title: "Luxury gifts",
                  href: "/browse/gifts/luxury-gift-ideas/_/N-7dpl",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060130026",
                  title: "Gift Collections",
                  href: "/browse/gifts/gift-collections/_/N-bew",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060130031",
                  title: "Games & Puzzles",
                  href: "/browse/baby-child/games-puzzles/view-all-games-puzzles/_/N-6hxe",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110033",
                  title: "Novelty",
                  href: "/browse/gifts/novelty-gadget-gifts/_/N-2qre",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060130032",
                  title: "Silver gifts",
                  href: "/gifts/silver-gifts/c600002212",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260050062",
                  title: "Stationery",
                  href: "/home-garden/stationery/c60000455",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071416",
                  title: "Gifts under £50",
                  href: "/browse/gifts/gifts-for-under-£50/_/N-7m56",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060130029",
                  title: "Gift Experiences",
                  href: "/browse/gifts/gift-experiences/_/N-bev",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10106011897",
                  title: "Personalised Gifts",
                  href: "/browse/gifts/personalised-gifts/_/N-2qrm",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060210078",
                  title: "Gift Wrap, Cards & Party Shop",
                  href: "/home-garden/gift-wrap-cards-party-shop/c9780410008",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260360475",
                  title: "In-store Experience Gifts",
                  href: "https://johnlewisgiftcard.com/JohnLewisWaitrose/ByEmail/JohnLewisWaitrose/ChooseProduct?productGroup=Experience",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139192583",
                  title: "Gift Cards",
                  href: "https://www.johnlewis.com/customer-services/prices-and-payment/gift-cards",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000830756",
                  title: "Beauty & Fragrance Gift Sets",
                  href: "/browse/beauty/view-all-beauty-fragrance-gift-sets/_/N-7d54",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000830757",
                  title: "Gifts for Gin lovers",
                  href: "/browse/gifts/gin-gifts/_/N-7jl5",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000830758",
                  title: "Unusual Gifts",
                  href: "/browse/gifts/unusual-gifts/_/N-7ndy",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000830760",
                  title: "John Lewis FIND, KEEP, GIVE Gifting Collection",
                  href: "/browse/gifts/find-keep-give/_/N-7lzj",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000830761",
                  title: "Only Here: Exclusives at John Lewis & Partners",
                  href: "/browse/gifts/only-here-exclusives-at-john-lewis-partners/_/N-7m48",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000830762",
                  title: "Waitrose Florist",
                  href: "https://www.waitroseflorist.com/",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "1902309",
              title: "Gift Food & Alcohol",
              href: "/gifts/gift-food-alcohol/c1902309",
              items: [
                {
                  id: "20001090001",
                  title: "View All Gift Food & Alcohol",
                  href: "/browse/gifts/gift-food-alcohol/_/N-2q3p",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001080951",
                  title: "Hampers",
                  href: "/browse/gifts/gift-food-wine-champagne/view-all-hampers/_/N-amr",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500020045",
                  title: "Alcohol",
                  href: "/browse/gifts/gift-food-alcohol/alcohol/_/N-2q3pZ1yzv5a8",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000540196",
                  title: "Chocolate",
                  href: "/browse/gifts/gift-food-alcohol/chocolate-boxes-of-chocolate/_/N-2q3pZ1yzv5a9",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780380033",
                  title: "Condiments & Preserves",
                  href: "/browse/gifts/gift-food-alcohol/condiments-preserves/_/N-2q3pZ1z0wu17",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780380034",
                  title: "Tea, Coffee & Hot Chocolate",
                  href: "/browse/gifts/gift-food-alcohol/tea-coffee-hot-chocolate/_/N-2q3pZ1z0wvwg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "7000370035",
                  title: "Sweets & Fudge",
                  href: "/browse/gifts/gift-food-alcohol/sweets-fudge/_/N-2q3pZ1yzv5a7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9780380035",
                  title: "Cakes & Biscuits",
                  href: "/browse/gifts/gift-food-alcohol/cakes-biscuits/_/N-2q3pZ1z0wu0m",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "10060110041",
              title: "Occasion",
              href: "/gifts/occasion/c10060110041",
              items: [
                {
                  id: "10060110044",
                  title: "Wedding",
                  href: "/gifts/wedding/c60000897",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139101376",
                  title: "Summer Party",
                  href: "/browse/home-garden/gift-wrap-cards-party-shop/summer-party/_/N-7jet",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071417",
                  title: "Birthday",
                  href: "/browse/gifts/birthday/_/N-7m18",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110045",
                  title: "British Themed Gifts",
                  href: "/browse/gifts/british-themed-gifts/_/N-amt",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110046",
                  title: "Anniversary",
                  href: "/browse/gifts/anniversary/_/N-2q3w",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110047",
                  title: "Engagement",
                  href: "/browse/gifts/engagement/_/N-2q5p",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110048",
                  title: "New Home",
                  href: "/browse/gifts/new-home/_/N-aob",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110049",
                  title: "Christening Gifts",
                  href: "/browse/baby-child/christening/christening-gifts/_/N-5pho",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060110050",
                  title: "Retirement",
                  href: "/browse/gifts/retirement/_/N-2q8t",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10060090173",
                  title: "Thank You",
                  href: "/browse/gifts/thank-you-gifts/_/N-7kti",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
                {
                  id: "10060090174",
                  title: "Get Well",
                  href: "/browse/gifts/get-well-soon-gifts/_/N-7kth",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: false,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "10139260003",
              title: "Don't Miss",
              href: "/gifts/dont-miss/c10139260003",
              items: [
                {
                  id: "20001071414",
                  title: "New: Games & Puzzles",
                  href: "/browse/baby-child/games-puzzles/view-all-games-puzzles/new-in/_/N-6hxeZ7lhg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001071413",
                  title: "New: Candles",
                  href: "/browse/home-garden/candles-home-fragrance/candles/new-in/_/N-ccbZ7lhg",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20001010003",
                  title: "Outdoor Toys & Games",
                  href: "/browse/baby-child/outdoor-toys-games/view-all-outdoor-toys-games/_/N-7jje",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260170055",
                  title: "Corporate Gifts",
                  href: "https://www.johnlewis.com/business",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "20000811297",
                  title: "20% off selected pens & pencils",
                  href: "/browse/home-garden/stationery/view-all-pens-pencils/all-offers/_/N-2tqiZ1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
            {
              id: "10060210070",
              title: "Gifts by Interest",
              href: "/gifts/gifts-by-interest/c10060210070",
              items: [
                {
                  id: "10060210073",
                  title: "Food and Cookery gifts",
                  href: "/browse/gifts/foodie-gifts/_/N-7gv0",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060210074",
                  title: "Tech gifts",
                  href: "/browse/gifts/techie-gifts/_/N-7gv1",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060210076",
                  title: "Gardening gifts",
                  href: "/browse/gifts/gardening-gifts/_/N-7ivv",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060090168",
                  title: "Travel and adventure gifts",
                  href: "/browse/gifts/travel-gifts/_/N-7ktx",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260080313",
                  title: "Sport and Fitness Gifts",
                  href: "/browse/gifts/fitness-wellbeing-gifts/_/N-7guz",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060090167",
                  title: "Craft and stationery gifts",
                  href: "/browse/gifts/stationery-gifts/_/N-7ktw",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10060090171",
                  title: "Cocktails and mixology gifts",
                  href: "/browse/gifts/cocktail-and-drinking-gifts/_/N-7ktu",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: false,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "50000110",
          title: "Offers",
          href: "/special-offers/c50000110",
          items: [
            {
              id: "9500210118",
              title: "Shop Offers",
              href: "/special-offers/shop-offers/c9500210118",
              items: [
                {
                  id: "9834510002",
                  title: "Furniture & Lighting offers",
                  href: "/special-offers/furniture-offers/c6000270310",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500210128",
                  title: "Home & Garden offers",
                  href: "/special-offers/home-garden-offers/c7000280713",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500210124",
                  title: "Baby & Child offers",
                  href: "/special-offers/baby-childrenswear-offers/c600001289",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500210120",
                  title: "Womenswear offers",
                  href: "/special-offers/womenswear-offers/c600001283",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500210122",
                  title: "Menswear offers",
                  href: "/special-offers/menswear-offers/c600001285",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500220157",
                  title: "Electrical offers",
                  href: "/special-offers/electrical-offers/c9500190102",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "9500210131",
                  title: "Sports & Leisure offers",
                  href: "/special-offers/sports-fitness-offers/c600001331",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10260310268",
                  title: "Beauty & Fragrance offers",
                  href: "/browse/special-offers/beauty-fragrance-offers/all-offers/_/N-eg5Z1yzvw1q",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139220706",
                  title: "Nursery offers",
                  href: "/browse/special-offers/nursery-offers/_/N-ejc",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
                {
                  id: "10139105480",
                  title: "Toys offers",
                  href: "/browse/special-offers/toys-special-offers/_/N-ei7",
                  items: [],
                  fetchChildren: false,
                  displayInDesktopNav: true,
                },
              ],
              fetchChildren: false,
              displayInDesktopNav: true,
            },
          ],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
        {
          id: "50000186",
          title: "Brands",
          href: "https://www.johnlewis.com/brands",
          items: [],
          fetchChildren: false,
          displayInDesktopNav: true,
        },
      ],
      fetchChildren: false,
      displayInDesktopNav: true,
    },
    aemNavigation: {
      "500001": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Electricals",
          "cq:template": "/apps/onejl/templates/contentpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Electricals-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [],
                  },
                ],
              },
              {
                type: "onejl/components/image",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  imageHref:
                    "/special-offers/electrical-offers/c9500190102?intcmp=cp_elec_flyout_fuwi1_top_augbhoffers_x200819",
                  imageAlt: "Electrical Bank Holiday Offers",
                  imageSrc:
                    "//johnlewis.scene7.com/is/image/johnlewis/desktop-flyout-banner-electricals-140819?resMode=sharp&qlt=90",
                  parallaxImageHeight: "100",
                  imageCaptionAlignment: "left",
                  imageCaptionType: "bottom-outside",
                },
                nodes: [],
              },
            ],
          },
        ],
      },
      "500006": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Home & Garden",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Home-Garden-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [],
                  },
                ],
              },
              {
                type: "onejl/components/image",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  imageHref: "/special-offers/home-garden-offers/c7000280713",
                  imageAlt: "Home & Garden Bank Holiday Offers",
                  imageSrc:
                    "//johnlewis.scene7.com/is/image/johnlewis/desktop-flyout-banner-home-garden-140819?resMode=sharp&qlt=90",
                  parallaxImageHeight: "100",
                  imageCaptionAlignment: "left",
                  imageCaptionType: "bottom-outside",
                },
                nodes: [],
              },
            ],
          },
        ],
      },
      "500009": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Gifts",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Gifts-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [
                      {
                        type: "onejl/components/image",
                        properties: {
                          "jcr:primaryType": "nt:unstructured",
                          imageHref:
                            "/browse/gifts/find-keep-give/_/N-7lzj?intcmp=cp_gif_giftsflyout_fuwi1_top_fkg_x050819",
                          imageAlt: "FIND, KEEP, GIVE",
                          imageSrc:
                            "//johnlewis.scene7.com/is/image/JohnLewis/gifts-flyout-070819-v2_03?resMode=sharp",
                          parallaxImageHeight: "100",
                          imageCaptionAlignment: "left",
                          imageCaptionType: "bottom-outside",
                        },
                        nodes: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      "5000010": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Baby & Child",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Baby-Child-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [
                      {
                        type: "onejl/components/image",
                        properties: {
                          "jcr:primaryType": "nt:unstructured",
                          imageHref:
                            "/browse/special-offers/nursery-offers/_/N-ejc",
                          imageAlt: "Baby & Child Bank Holiday Offers",
                          imageSrc:
                            "//johnlewis.scene7.com/is/image/johnlewis/desktop-flyout-banner-nursery-140819?resMode=sharp&qlt=90",
                          parallaxImageHeight: "100",
                          imageCaptionAlignment: "left",
                          imageCaptionType: "bottom-outside",
                        },
                        nodes: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      "5000011": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Sports & Leisure",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/image",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  imageHref: "/special-offers/sports-fitness-offers/c600001331",
                  imageAlt: "Sports & Leisure Bank Holiday Offers",
                  imageSrc:
                    "//johnlewis.scene7.com/is/image/johnlewis/desktop-flyout-banner-sport-travel-140819?resMode=sharp&qlt=90",
                  parallaxImageHeight: "100",
                  imageCaptionAlignment: "left",
                  imageCaptionType: "bottom-outside",
                },
                nodes: [],
              },
            ],
          },
        ],
      },
      "5000025": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Christmas",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/image",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  imageCaptionTextColour: "#00474E",
                  imageHref:
                    "https://www.johnlewis.com/beauty/dior/c600002684?rdr=1&intcmp=gp_bea_newinbeauty_hero1_top_dior_x220818",
                  imageAlt: "Dior JOY",
                  imageSrc:
                    "//johnlewis.scene7.com/is/image/JohnLewis/dior-flyout-280818?resMode=sharp",
                  imageCaptionAlignment: "left",
                  imageCaptionType: "top-inside",
                  "cq:responsive": {
                    "jcr:primaryType": "nt:unstructured",
                    default: {
                      "jcr:primaryType": "nt:unstructured",
                      behavior: "hide",
                    },
                  },
                },
                nodes: [],
              },
            ],
          },
        ],
      },
      "50000101": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Hotel chocolat offers",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/image",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  imageHref:
                    "/brand/hotel-chocolat/_/N-1z13yqj?intcmp=cp_gif_topgiftsforher_fuwi1_top_hotelchocolat_x040419",
                  imageAlt: "Hotel chocolat ",
                  imageSrc:
                    "//johnlewis.scene7.com/is/image/JohnLewis/flyout_hotel_chocolat_050419_1?resMode=sharp",
                  imageCaptionAlignment: "left",
                  imageCaptionType: "bottom-outside",
                },
                nodes: [],
              },
            ],
          },
        ],
      },
      "50000110": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Offers",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Offers-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      "50000296": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Beauty",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Beauty-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [
                      {
                        type: "onejl/components/image",
                        properties: {
                          "jcr:primaryType": "nt:unstructured",
                          imageHref:
                            "/browse/special-offers/beauty-fragrance-offers/all-offers/_/N-eg5Z1yzvw1q?intcmp=cp_bea_Flyout_fuwi1_top_augoffers_x200819",
                          imageAlt: "Sports & Leisure Bank Holiday Offers",
                          imageSrc:
                            "//johnlewis.scene7.com/is/image/johnlewis/desktop-flyout-banner-beauty-140819?resMode=sharp&qlt=90",
                          parallaxImageHeight: "100",
                          imageCaptionAlignment: "left",
                          imageCaptionType: "bottom-outside",
                        },
                        nodes: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      "50000298": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Womens",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Women-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [
                      {
                        type: "onejl/components/image",
                        properties: {
                          "jcr:primaryType": "nt:unstructured",
                          imageHref:
                            "/special-offers/womenswear-offers/c600001283",
                          imageAlt: "Womenwear Bank Holiday Offers",
                          imageSrc:
                            "//johnlewis.scene7.com/is/image/johnlewis/desktop-flyout-banner-womenswear-140819?resMode=sharp&qlt=90",
                          parallaxImageHeight: "100",
                          imageCaptionAlignment: "left",
                          imageCaptionType: "bottom-outside",
                        },
                        nodes: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      "50000300": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Mens",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Men-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      "500002962": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Christmas",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/image",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  imageCaptionTextColour: "#00474E",
                  imageHref:
                    "https://www.johnlewis.com/beauty/dior/c600002684?rdr=1&intcmp=gp_bea_newinbeauty_hero1_top_dior_x220818",
                  imageAlt: "Dior JOY",
                  imageSrc:
                    "//johnlewis.scene7.com/is/image/JohnLewis/dior-flyout-280818?resMode=sharp",
                  imageCaptionAlignment: "left",
                  imageCaptionType: "top-inside",
                  "cq:responsive": {
                    "jcr:primaryType": "nt:unstructured",
                    default: {
                      "jcr:primaryType": "nt:unstructured",
                      behavior: "hide",
                    },
                  },
                },
                nodes: [],
              },
              {
                type: "onejl/components/image",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  imageCaptionTextColour: "#00474E",
                  imageHref:
                    "/browse/christmas/baubles-tree-decorations/_/N-54yc?intcmp=sp_chr_flyout_fuwi1_top_shopalldecs_x240918",
                  imageAlt: "For the moments that make your Christmas",
                  imageSrc:
                    "//johnlewis.scene7.com/is/image/JohnLewis/flyout_christmas_210918?resMode=sharp",
                  imageCaptionAlignment: "left",
                  imageCaptionType: "top-inside",
                },
                nodes: [],
              },
            ],
          },
        ],
      },
      "500002965": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Beauty - Lancome",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Beauty-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [
                      {
                        type: "onejl/components/image",
                        properties: {
                          "jcr:primaryType": "nt:unstructured",
                          imageHref:
                            "/brand/lanc%C3%B4me/lanc%C3%B4me-x-chiara-ferragni/_/N-1z13yu3Z1yzlpuu?intcmp=cp_bea_beautyflyout_fuwi1_top_lancome_x290719",
                          imageAlt: "Lancome",
                          imageSrc:
                            "//johnlewis.scene7.com/is/image/JohnLewis/180419-lancome3?resMode=sharp",
                          parallaxImageHeight: "100",
                          imageCaptionAlignment: "left",
                          imageCaptionType: "bottom-outside",
                        },
                        nodes: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      "50000110-tedbakeroffer": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Offers",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [],
          },
        ],
      },
      "50000296-clearance": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Beauty",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/image",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  imageHref:
                    "/brand/dior/_/N-1z13ybr?intcmp=cp_bea_beautyflyout_fuwi_top_diorbeautyflyout_x071218",
                  imageAlt: "Dior",
                  imageSrc:
                    "//johnlewis.scene7.com/is/image/JohnLewis/flyout_beauty_201118?resMode=sharp",
                  imageCaptionAlignment: "left",
                  imageCaptionType: "bottom-outside",
                },
                nodes: [],
              },
            ],
          },
        ],
      },
      "9780211221": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Furniture & Lights",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [
              {
                type: "onejl/components/personalisedContainer",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  id: "AB-Furniture-Lights-flyout",
                },
                nodes: [
                  {
                    type: "wcm/foundation/components/responsivegrid",
                    properties: {
                      "jcr:primaryType": "nt:unstructured",
                    },
                    nodes: [],
                  },
                ],
              },
              {
                type: "onejl/components/image",
                properties: {
                  "jcr:primaryType": "nt:unstructured",
                  imageHref:
                    "/special-offers/home-furniture-offers/c6000270310",
                  imageAlt: "Furniture & Lights Bank Holiday Offers",
                  imageSrc:
                    "//johnlewis.scene7.com/is/image/johnlewis/desktop-flyout-banner-furn-lights-140819?resMode=sharp&qlt=90",
                  parallaxImageHeight: "100",
                  imageCaptionAlignment: "left",
                  imageCaptionType: "bottom-outside",
                },
                nodes: [],
              },
            ],
          },
        ],
      },
      "6000270062": {
        type: "onejl/components/pages/navigationpage",
        properties: {
          "jcr:primaryType": "cq:PageContent",
          "jcr:title": "Clearance",
          "cq:template": "/apps/onejl/templates/navigationpage",
        },
        nodes: [
          {
            type: "wcm/foundation/components/responsivegrid",
            properties: {
              "jcr:primaryType": "nt:unstructured",
            },
            nodes: [],
          },
        ],
      },
    },
    deliveries: {
      countries: {
        Austria: "AT",
        Belgium: "BE",
        Canada: "CA",
        Denmark: "DK",
        Estonia: "EE",
        Finland: "FI",
        France: "FR",
        Germany: "DE",
        "Hong Kong": "HK",
        Hungary: "HU",
        Italy: "IT",
        "Korea, Republic of": "KR",
        Luxembourg: "LU",
        Malaysia: "MY",
        Netherlands: "NL",
        Norway: "NO",
        Philippines: "PH",
        Poland: "PL",
        Portugal: "PT",
        Qatar: "QA",
        "Ireland, Republic of": "IE",
        Romania: "RO",
        Singapore: "SG",
        Slovenia: "SI",
        Spain: "ES",
        Sweden: "SE",
        Switzerland: "CH",
        "United Arab Emirates": "AE",
        "United Kingdom": "GB",
        "United States": "US",
      },
      countryDeliveryData: [
        {
          code: "au",
          name: "Australia",
          adjective: "Australian",
          deliveryCopy: "Deliver worldwide for just",
          deliveryTimeFrame: "4 - 10",
          deliveryCost: "£10",
          currency: "AUD",
        },
        {
          code: "at",
          name: "Austria",
          adjective: "Austrian",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "3 - 5",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "be",
          name: "Belgium",
          adjective: "Belgian",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "2 - 4",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "ca",
          name: "Canada",
          adjective: "Canadian",
          deliveryCopy: "Deliver worldwide for just",
          deliveryTimeFrame: "3 - 9",
          deliveryCost: "£10",
          currency: "CAD",
        },
        {
          code: "cy",
          name: "Cyprus",
          adjective: "Cypriot",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "3 - 7",
          deliveryCost: "£10",
          currency: "EUR",
        },
        {
          code: "dk",
          name: "Denmark",
          adjective: "Danish",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "3 - 6",
          deliveryCost: "£7.50",
          currency: "DKK",
        },
        {
          code: "ee",
          name: "Estonia",
          adjective: "Estonian",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "4 - 7",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "fi",
          name: "Finland",
          adjective: "Finnish",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "5 - 7",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "fr",
          name: "France",
          adjective: "French",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "2 - 5",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "de",
          name: "Germany",
          adjective: "German",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "2 - 5",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "gr",
          name: "Greece",
          adjective: "Greek",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "4 - 9",
          deliveryCost: "£10",
          currency: "EUR",
        },
        {
          code: "hk",
          name: "Hong Kong",
          adjective: "Hong Kong",
          deliveryCopy: "Deliver worldwide from just",
          deliveryTimeFrame: "3 - 6",
          deliveryCost: "£10",
          currency: "HKD",
        },
        {
          code: "hu",
          name: "Hungary",
          adjective: "Hungarian",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "4 - 7",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "ie",
          name: "Ireland, Republic of",
          adjective: "Irish",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "2 - 3",
          deliveryCost: "Free",
          currency: "EUR",
        },
        {
          code: "it",
          name: "Italy",
          adjective: "Italian",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "2 - 6",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "lu",
          name: "Luxembourg",
          adjective: "Luxembourg",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "2 - 4",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "my",
          name: "Malaysia",
          adjective: "Malaysian",
          deliveryCopy: "Deliver worldwide from just",
          deliveryTimeFrame: "3 - 7",
          deliveryCost: "£10",
          currency: "USD",
        },
        {
          code: "mt",
          name: "Malta",
          adjective: "Maltese",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "5 - 7",
          deliveryCost: "£10",
          currency: "EUR",
        },
        {
          code: "nl",
          name: "Netherlands",
          adjective: "Dutch",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "2 - 4",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "nz",
          name: "New Zealand",
          adjective: "New Zealand",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "5 - 9",
          deliveryCost: "£10",
          currency: "NZD",
        },
        {
          code: "no",
          name: "Norway",
          adjective: "\tNorwegian",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "4 - 8",
          deliveryCost: "£10",
          currency: "NOK",
        },
        {
          code: "ph",
          name: "Philippines",
          adjective: "Philippine",
          deliveryCopy: "Deliver worldwide from just",
          deliveryTimeFrame: "6 - 10",
          deliveryCost: "£10",
          currency: "USD",
        },
        {
          code: "pl",
          name: "Poland",
          adjective: "Polish",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "4 - 6",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "pt",
          name: "Portugal",
          adjective: "Portuguese",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "3 - 7",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "qa",
          name: "Qatar",
          adjective: "Qatari",
          deliveryCopy: "Deliver worldwide from just",
          deliveryTimeFrame: "3 - 9",
          deliveryCost: "£10",
          currency: "USD",
        },
        {
          code: "sg",
          name: "Singapore",
          adjective: "Singapore",
          deliveryCopy: "Deliver worldwide for just",
          deliveryTimeFrame: "3 - 7",
          deliveryCost: "£10",
          currency: "SGD",
        },
        {
          code: "si",
          name: "Slovenia",
          adjective: "Slovenian",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "4 - 7",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "za",
          name: "South Africa",
          adjective: "South African",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "5 - 9",
          deliveryCost: "£10",
          currency: "ZAR",
        },
        {
          code: "kr",
          name: "South Korea",
          adjective: "South Korean",
          deliveryCopy: "Deliver worldwide from just",
          deliveryTimeFrame: "3 - 8",
          deliveryCost: "£10",
          currency: "USD",
        },
        {
          code: "es",
          name: "Spain",
          adjective: "Spanish",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "3 - 6",
          deliveryCost: "£7.50",
          currency: "EUR",
        },
        {
          code: "se",
          name: "Sweden",
          adjective: "Swedish",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "4 - 7",
          deliveryCost: "£7.50",
          currency: "SEK",
        },
        {
          code: "ch",
          name: "Switzerland",
          adjective: "Swiss",
          deliveryCopy: "Deliver worldwide from just",
          deliveryTimeFrame: "3 - 6",
          deliveryCost: "£7.50",
          currency: "CHF",
        },
        {
          code: "ae",
          name: "UAE",
          adjective: "Emirati",
          deliveryCopy: "Deliver worldwide from just",
          deliveryTimeFrame: "3 - 8",
          deliveryCost: "£10",
          currency: "USD",
        },
        {
          code: "gb",
          name: "United Kingdom",
          adjective: "UK",
          deliveryCopy: "Low delivery prices from",
          deliveryTimeFrame: "3 - 5",
          deliveryCost: "£3.50",
          currency: "GBP",
        },
        {
          code: "us",
          name: "United States",
          adjective: "American",
          deliveryCopy: "Deliver worldwide for just",
          deliveryTimeFrame: "3 - 10",
          deliveryCost: "£10",
          currency: "USD",
        },
      ],
    },
    aemData: {
      type: "onejl/components/pages/contentpage",
      properties: {
        "jcr:primaryType": "cq:PageContent",
        "jcr:title": "homepage",
        "cq:template": "/apps/onejl/templates/contentpage",
        "cq:contextHubSegmentsPath": "/etc/segmentation/contexthub",
        "jcr:description":
          "Shop for Sofas, Beds, TVs, iPads & Fashion online. Free Delivery on orders over £50",
        pageTitle: "John Lewis | iPads, TVs, Furniture, Fashion & More",
        dynamicMainMargins: "dynamicMainWithMargins",
        "cq:contextHubPath": "/etc/cloudsettings/default/contexthub",
        dynamicPageCanonicalUrl: "http://www.johnlewis.com",
        gridWidthFactor: {
          default: "1.000",
          medium: "1.000",
          small: "1.000",
          isFullBleed: false,
        },
      },
      nodes: [
        {
          type: "wcm/foundation/components/responsivegrid",
          properties: {
            "jcr:primaryType": "nt:unstructured",
            gridWidthFactor: {
              default: "1.000",
              medium: "1.000",
              small: "1.000",
              isFullBleed: false,
            },
          },
          nodes: [
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                flexDirection: "row",
                isFullBleed: "true",
                isFullWidth: "true",
                backgroundOption: "colour",
                flexAlignment: "start",
                containerHref:
                  "/special-offers/c50000110?intcmp=ic_20190820_augustbhshopalloffers_he_spe_",
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: true,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: true,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/overlayContainer",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        verticalPosition: "center",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          small: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "none",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: true,
                        },
                      },
                      nodes: [
                        {
                          type: "onejl/components/innerContainer",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "1.000",
                              medium: "1.000",
                              small: "1.000",
                              isFullBleed: true,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/overlayContainer/foregroundContainer",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                gridWidthFactor: {
                                  default: "1.000",
                                  medium: "1.000",
                                  small: "1.000",
                                  isFullBleed: true,
                                },
                              },
                              nodes: [
                                {
                                  type: "wcm/foundation/components/responsivegrid",
                                  properties: {
                                    "jcr:primaryType": "nt:unstructured",
                                    gridWidthFactor: {
                                      default: "1.000",
                                      medium: "1.000",
                                      small: "1.000",
                                      isFullBleed: true,
                                    },
                                  },
                                  nodes: [
                                    {
                                      type: "onejl/components/divider",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        dividerType: "whitespace-large",
                                        gridWidthFactor: {
                                          default: "1.000",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: true,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/container",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          default: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "3",
                                            width: "6",
                                          },
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "7",
                                            width: "5",
                                            behavior: "none",
                                          },
                                          medium: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "1",
                                            width: "10",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.500",
                                          medium: "0.833",
                                          small: "0.417",
                                          isFullBleed: true,
                                        },
                                      },
                                      nodes: [
                                        {
                                          type: "wcm/foundation/components/responsivegrid",
                                          properties: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            gridWidthFactor: {
                                              default: "0.500",
                                              medium: "0.833",
                                              small: "0.417",
                                              isFullBleed: true,
                                            },
                                          },
                                          nodes: [
                                            {
                                              type: "onejl/components/image",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                cmsImageDesktopSrc:
                                                  "//johnlewis.scene7.com/is/image/JohnLewis/offers-hero-h2-200819?$alpha$",
                                                cmsImageWithMultipleSources:
                                                  "true",
                                                cmsImageTabletSrc:
                                                  "//johnlewis.scene7.com/is/image/JohnLewis/offers-hero-h2-200819?$alpha$",
                                                imageHref:
                                                  "/special-offers/c50000110?intcmp=ic_20190820_augustbhshopalloffers_he_spe_",
                                                imageAlt:
                                                  "Up to 50% off reduced to clear",
                                                imageSrc:
                                                  "//johnlewis.scene7.com/is/image/JohnLewis/offers-hero-h2-200819?$alpha$",
                                                parallaxImageHeight: "100",
                                                imageCaptionAlignment: "left",
                                                imageCaptionType:
                                                  "bottom-outside",
                                                cmsImageMobileSrc:
                                                  "//johnlewis.scene7.com/is/image/JohnLewis/offers-hero-h2-mob-200819?$alpha$",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "3",
                                                    width: "6",
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "4",
                                                    width: "4",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "1",
                                                    width: "9",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.250",
                                                  medium: "0.278",
                                                  small: "0.313",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 1,
                                                    width: 10,
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.417",
                                                  medium: "0.833",
                                                  small: "0.417",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 1,
                                                    width: 10,
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "none",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.417",
                                                  medium: "0.833",
                                                  small: "0.417",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "onejl/components/container",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        flexDirection: "row",
                                        backgroundOption: "colour",
                                        flexAlignment: "stretch",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          default: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: 1,
                                            width: 10,
                                          },
                                          medium: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "0",
                                            width: 12,
                                          },
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "hide",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.833",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: true,
                                        },
                                      },
                                      nodes: [
                                        {
                                          type: "wcm/foundation/components/responsivegrid",
                                          properties: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            gridWidthFactor: {
                                              default: "0.833",
                                              medium: "1.000",
                                              small: "1.000",
                                              isFullBleed: true,
                                            },
                                          },
                                          nodes: [
                                            {
                                              type: "onejl/components/container",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                flexDirection: "column",
                                                backgroundColor: "#D40000",
                                                backgroundOption: "colour",
                                                flexAlignment: "centre",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.278",
                                                  medium: "0.333",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [
                                                {
                                                  type: "wcm/foundation/components/responsivegrid",
                                                  properties: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    gridWidthFactor: {
                                                      default: "0.278",
                                                      medium: "0.333",
                                                      small: "1.000",
                                                      isFullBleed: true,
                                                    },
                                                  },
                                                  nodes: [
                                                    {
                                                      type: "onejl/components/divider",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        dividerType:
                                                          "whitespace-medium",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                    {
                                                      type: "onejl/components/copy",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        text: '<p style="text-align: center;"><a href="/browse/special-offers/beauty-fragrance-offers/all-offers/_/N-eg5Z1yzvw1q?intcmp=ic_20190820_augustbhoffersbeauty_he_spe_"><b>15% off selected Beauty &amp; Fragrance</b></a><br>\r\n</p>\r\n',
                                                        color: "#ffffff",
                                                        textIsRich: "true",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.833",
                                                  medium: "1.000",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/container",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                flexDirection: "column",
                                                backgroundColor: "#D40000",
                                                backgroundOption: "colour",
                                                flexAlignment: "centre",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.278",
                                                  medium: "0.333",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [
                                                {
                                                  type: "wcm/foundation/components/responsivegrid",
                                                  properties: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    gridWidthFactor: {
                                                      default: "0.278",
                                                      medium: "0.333",
                                                      small: "1.000",
                                                      isFullBleed: true,
                                                    },
                                                  },
                                                  nodes: [
                                                    {
                                                      type: "onejl/components/divider",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        dividerType:
                                                          "whitespace-medium",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                    {
                                                      type: "onejl/components/copy",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        text: '<p style="text-align: center;"><b><a href="/special-offers/womenswear-offers/c600001283?intcmp=ic_20190820_augustbhoffersww_he_spe_">50% off selected Womenswear</a></b><br />\r\n</p>\r\n',
                                                        color: "#ffffff",
                                                        textIsRich: "true",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.833",
                                                  medium: "1.000",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/container",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                flexDirection: "column",
                                                backgroundColor: "#D40000",
                                                backgroundOption: "colour",
                                                flexAlignment: "centre",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.278",
                                                  medium: "0.333",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [
                                                {
                                                  type: "wcm/foundation/components/responsivegrid",
                                                  properties: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    gridWidthFactor: {
                                                      default: "0.278",
                                                      medium: "0.333",
                                                      small: "1.000",
                                                      isFullBleed: true,
                                                    },
                                                  },
                                                  nodes: [
                                                    {
                                                      type: "onejl/components/divider",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        dividerType:
                                                          "whitespace-medium",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                    {
                                                      type: "onejl/components/copy",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        text: '<p style="text-align: center;"><a href="/special-offers/home-garden-offers/c7000280713?intcmp=ic_20190820_augustbhoffershg_he_spe_"><b>50% off selected Home &amp; Garden</b></a><br>\r\n</p>\r\n',
                                                        color: "#ffffff",
                                                        textIsRich: "true",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "0",
                                                    width: "12",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.833",
                                                  medium: "1.000",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.833",
                                                  medium: "1.000",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/container",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                flexDirection: "column",
                                                backgroundColor: "#D40000",
                                                backgroundOption: "colour",
                                                flexAlignment: "centre",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.278",
                                                  medium: "0.333",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [
                                                {
                                                  type: "wcm/foundation/components/responsivegrid",
                                                  properties: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    gridWidthFactor: {
                                                      default: "0.278",
                                                      medium: "0.333",
                                                      small: "1.000",
                                                      isFullBleed: true,
                                                    },
                                                  },
                                                  nodes: [
                                                    {
                                                      type: "onejl/components/divider",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        dividerType:
                                                          "whitespace-medium",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                    {
                                                      type: "onejl/components/copy",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        text: '<p style="text-align: center;"><b><a href="/special-offers/electrical-offers/c9500190102?intcmp=ic_20190820_augustbhofferselec_he_spe_">Electrical Offers</a></b><br>\r\n</p>\r\n',
                                                        color: "#ffffff",
                                                        textIsRich: "true",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.833",
                                                  medium: "1.000",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/container",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                flexDirection: "column",
                                                backgroundColor: "#D40000",
                                                backgroundOption: "colour",
                                                flexAlignment: "centre",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.278",
                                                  medium: "0.333",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [
                                                {
                                                  type: "wcm/foundation/components/responsivegrid",
                                                  properties: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    gridWidthFactor: {
                                                      default: "0.278",
                                                      medium: "0.333",
                                                      small: "1.000",
                                                      isFullBleed: true,
                                                    },
                                                  },
                                                  nodes: [
                                                    {
                                                      type: "onejl/components/divider",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        dividerType:
                                                          "whitespace-medium",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                    {
                                                      type: "onejl/components/copy",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        text: '<p style="text-align: center;"><a href="/special-offers/menswear-offers/c600001285?intcmp=ic_20190820_augustbhoffersmw_he_spe_"><b>50% off selected Menswear</b></a><br>\r\n</p>\r\n',
                                                        color: "#ffffff",
                                                        textIsRich: "true",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.833",
                                                  medium: "1.000",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/container",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                flexDirection: "column",
                                                backgroundColor: "#D40000",
                                                backgroundOption: "colour",
                                                flexAlignment: "centre",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: 0,
                                                    width: 4,
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.278",
                                                  medium: "0.333",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [
                                                {
                                                  type: "wcm/foundation/components/responsivegrid",
                                                  properties: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    gridWidthFactor: {
                                                      default: "0.278",
                                                      medium: "0.333",
                                                      small: "1.000",
                                                      isFullBleed: true,
                                                    },
                                                  },
                                                  nodes: [
                                                    {
                                                      type: "onejl/components/divider",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        dividerType:
                                                          "whitespace-medium",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                    {
                                                      type: "onejl/components/copy",
                                                      properties: {
                                                        "jcr:primaryType":
                                                          "nt:unstructured",
                                                        text: '<p style="text-align: center;"><b><a href="/special-offers/home-furniture-offers/c6000270310?intcmp=ic_20190820_augustbhoffershome_he_spe_">30% off selected Furniture &amp; Lights</a></b><br>\r\n</p>\r\n',
                                                        color: "#ffffff",
                                                        textIsRich: "true",
                                                        gridWidthFactor: {
                                                          default: "0.278",
                                                          medium: "0.333",
                                                          small: "1.000",
                                                          isFullBleed: true,
                                                        },
                                                      },
                                                      nodes: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                    {
                                      type: "onejl/components/container",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "7",
                                            width: "5",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "1.000",
                                          medium: "1.000",
                                          small: "0.417",
                                          isFullBleed: true,
                                        },
                                      },
                                      nodes: [
                                        {
                                          type: "wcm/foundation/components/responsivegrid",
                                          properties: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            gridWidthFactor: {
                                              default: "1.000",
                                              medium: "1.000",
                                              small: "0.417",
                                              isFullBleed: true,
                                            },
                                          },
                                          nodes: [
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "1.000",
                                                  medium: "1.000",
                                                  small: "0.417",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                gridWidthFactor: {
                                                  default: "1.000",
                                                  medium: "1.000",
                                                  small: "0.417",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/copy",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                text: '<p style="text-align: center;"><b><a href="/special-offers/c50000110?intcmp=ic_20190820_augustbhshopalloffers_he_spe_">Shop all Offers</a></b></p>\r\n',
                                                color: "D40000",
                                                textIsRich: "true",
                                                gridWidthFactor: {
                                                  default: "1.000",
                                                  medium: "1.000",
                                                  small: "0.417",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "onejl/components/container",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                gridWidthFactor: {
                                  default: "1.000",
                                  medium: "1.000",
                                  small: "1.000",
                                  isFullBleed: true,
                                },
                              },
                              nodes: [
                                {
                                  type: "wcm/foundation/components/responsivegrid",
                                  properties: {
                                    "jcr:primaryType": "nt:unstructured",
                                    gridWidthFactor: {
                                      default: "1.000",
                                      medium: "1.000",
                                      small: "1.000",
                                      isFullBleed: true,
                                    },
                                  },
                                  nodes: [
                                    {
                                      type: "onejl/components/image",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        cmsImageDesktopSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/offers-hero-200819?$rsp-home-hero-lg$&resMode=sharp",
                                        cmsImageWithMultipleSources: "true",
                                        cmsImageTabletSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/offers-hero-tablet-200819a?$rsp-home-hero-lg$&resMode=sharp",
                                        imageHref:
                                          "/special-offers/c50000110?intcmp=ic_20190820_augustbhshopalloffers_he_spe_",
                                        imageAlt:
                                          "Up to 50% off reduced to clear",
                                        imageSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/offers-hero-200819?$rsp-home-hero-lg$&resMode=sharp",
                                        parallaxImageHeight: 100,
                                        isImageFullBleed: "true",
                                        imageCaptionAlignment: "left",
                                        imageCaptionType: "bottom-outside",
                                        cmsImageMobileSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/offers-hero-mob-200819?$rsp-home-hero-lg$&resMode=sharp",
                                        gridWidthFactor: {
                                          default: "1.000",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: true,
                                        },
                                      },
                                      nodes: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  medium: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                  default: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                },
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: false,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-medium",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "column",
                        backgroundColor: "#D40000",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                        },
                        gridWidthFactor: {
                          default: "0.333",
                          medium: "0.333",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.333",
                              medium: "0.333",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-medium",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/browse/special-offers/beauty-fragrance-offers/all-offers/_/N-eg5Z1yzvw1q?intcmp=ic_20190820_augustbhoffersbeauty_he_spe_">15% off selected Beauty &amp; Fragrance</a></b><br>\r\n</p>\r\n',
                                color: "#ffffff",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-medium",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "column",
                        backgroundColor: "#D40000",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                        },
                        gridWidthFactor: {
                          default: "0.333",
                          medium: "0.333",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.333",
                              medium: "0.333",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-medium",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/special-offers/womenswear-offers/c600001283?intcmp=ic_20190820_augustbhoffersww_he_spe_">50% off selected Womenswear</a></b><br />\r\n</p>\r\n',
                                color: "#ffffff",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-medium",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "column",
                        backgroundColor: "#D40000",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                        },
                        gridWidthFactor: {
                          default: "0.333",
                          medium: "0.333",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.333",
                              medium: "0.333",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-medium",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/special-offers/home-garden-offers/c7000280713?intcmp=ic_20190820_augustbhoffershg_he_spe_">50% off selected Home &amp; Garden</a></b><br>\r\n</p>\r\n',
                                color: "#ffffff",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-medium",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "column",
                        backgroundColor: "#D40000",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                        },
                        gridWidthFactor: {
                          default: "0.333",
                          medium: "0.333",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.333",
                              medium: "0.333",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-medium",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/special-offers/electrical-offers/c9500190102?intcmp=ic_20190820_augustbhofferselec_he_spe_">Electrical Offers</a></b><br>\r\n</p>\r\n',
                                color: "#ffffff",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-medium",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "column",
                        backgroundColor: "#D40000",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                        },
                        gridWidthFactor: {
                          default: "0.333",
                          medium: "0.333",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.333",
                              medium: "0.333",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-medium",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/special-offers/menswear-offers/c600001285?intcmp=ic_20190820_augustbhoffersmw_he_spe_">50% off selected Menswear</a></b><br>\r\n</p>\r\n',
                                color: "#ffffff",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-medium",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "column",
                        backgroundColor: "#D40000",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: 0,
                            width: 4,
                          },
                        },
                        gridWidthFactor: {
                          default: "0.333",
                          medium: "0.333",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.333",
                              medium: "0.333",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-medium",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/special-offers/home-furniture-offers/c6000270310?intcmp=ic_20190820_augustbhoffershome_he_spe_">30% off selected Furniture &amp; Lights</a></b><br>\r\n</p>\r\n',
                                color: "#ffffff",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.333",
                                  medium: "0.333",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                flexDirection: "row",
                backgroundOption: "colour",
                flexAlignment: "stretch",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  default: {
                    "jcr:primaryType": "nt:unstructured",
                    offset: "0",
                    width: "12",
                  },
                  medium: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                  small: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                },
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: false,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "solid",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xsmall",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-large",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "row",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: "0",
                            width: "3",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: "0",
                            width: "6",
                          },
                        },
                        gridWidthFactor: {
                          default: "0.250",
                          medium: "0.500",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.250",
                              medium: "0.500",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b>Next &amp; Named Day Delivery<br />\r\n </b><a href="https://www.johnlewis.com/customer-services/delivery-information/faster-and-timed-deliveries?intcmp=hp_tl_a_delivery_next_day_delivery_x210118">Starting from £6.95</a><br />\r\n</p>\r\n',
                                color: "#000000",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.250",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "row",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: "0",
                            width: "3",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: "0",
                            width: "6",
                          },
                        },
                        gridWidthFactor: {
                          default: "0.250",
                          medium: "0.500",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.250",
                              medium: "0.500",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b>Free Click &amp; Collect<br />\r\n </b><a href="https://www.johnlewis.com/customer-services/delivery-information/click-and-collect?intcmp=hp_tl_bc_delivery_x210119" style="background-color: rgb(255,255,255);">Order £30 and over</a></p>\r\n',
                                color: "#000000",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.250",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-medium",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "row",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "3",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                        },
                        gridWidthFactor: {
                          default: "0.250",
                          medium: "0.500",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.250",
                              medium: "0.500",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b>Free Standard Delivery<br />\r\n </b><a href="https://www.johnlewis.com/customer-services/delivery-information/uk-delivery?intcmp=hp_tl_c_delivery_x210119" style="background-color: rgb(255,255,255);">Order £50 and over</a><br />\r\n</p>\r\n',
                                color: "#000000",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.250",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "row",
                        backgroundOption: "colour",
                        flexAlignment: "centre",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "3",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                        },
                        gridWidthFactor: {
                          default: "0.250",
                          medium: "0.500",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.250",
                              medium: "0.500",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b>International Delivery<br />\r\n </b><a href="https://www.johnlewis.com/customer-services/delivery-information/international-delivery?intcmp=hp_tl_d_delivery_x210119" style="background-color: rgb(255,255,255);">38 countries, starting from £7.50 </a><br />\r\n</p>\r\n',
                                color: "#000000",
                                textIsRich: "true",
                                gridWidthFactor: {
                                  default: "0.250",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-medium",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "solid",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  default: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                },
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: false,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          small: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                          small: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/homepageTidbits",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        tidbit1: {
                          "jcr:primaryType": "nt:unstructured",
                          copy: "Orders £30 and over",
                          href: "https://www.johnlewis.com/customer-services/delivery-information/click-and-collect?intcmp=hp_tl_bc_delivery_x210119",
                          title: "Free Click & Collect",
                        },
                        tidbit2: {
                          "jcr:primaryType": "nt:unstructured",
                          copy: "Orders £50 and over",
                          href: "https://www.johnlewis.com/customer-services/delivery-information/uk-delivery?intcmp=hp_tl_c_delivery_x210119",
                          title: "Free standard delivery",
                        },
                        tidbit3: {
                          "jcr:primaryType": "nt:unstructured",
                          copy: "38 countries, starting from £7.50",
                          href: "https://www.johnlewis.com/customer-services/delivery-information/international-delivery?intcmp=hp_tl_d_delivery_x210119",
                          title: "International delivery",
                        },
                        tidbit4: {
                          "jcr:primaryType": "nt:unstructured",
                          copy: "Starting from £6.95",
                          href: "https://www.johnlewis.com/customer-services/delivery-information/faster-and-timed-deliveries?intcmp=hp_tl_a_delivery_next_day_delivery_x210118",
                          title: "Next & Named Day Delivery",
                        },
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "12",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  small: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "none",
                  },
                },
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: false,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-large",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/title",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        color: "#111111",
                        title: "The new term",
                        position: "customisedDynamicHeaderCenter",
                        headingLevel: "h3",
                        headingStyle: "h3",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                flexDirection: "row",
                isFullWidth: "true",
                backgroundOption: "colour",
                flexAlignment: "start",
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: false,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "row",
                        backgroundOption: "colour",
                        flexAlignment: "start",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                        },
                        gridWidthFactor: {
                          default: "0.500",
                          medium: "0.500",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.500",
                              medium: "0.500",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/image",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                imageHref:
                                  "/baby-child/school-uniform-shop/c6000034?intcmp=ic_20190823_backtoschool_hp_bab_",
                                imageAlt: "Back to school ",
                                imageSrc:
                                  "//johnlewis.scene7.com/is/image/JohnLewis/hp-block-01-200819?resMode=sharp",
                                parallaxImageHeight: "100",
                                imageCaptionAlignment: "left",
                                imageCaptionType: "bottom-outside",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    width: "12",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-large",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/title",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                title: "For every new chapter",
                                position: "customisedDynamicHeaderCenter",
                                headingLevel: "h3",
                                headingStyle: "h3",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;">Crafted from durable fabrics, our clever school uniforms are designed to last<br>\r\n</p>\r\n',
                                textIsRich: "true",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "0",
                                    width: "12",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/baby-child/school-uniform-shop/c6000034?intcmp=ic_20190823_backtoschool_hp_bab_">School Uniform Shop</a>&nbsp; |&nbsp;&nbsp;<a href="/buying-guides/school-uniform-buying-guide?intcmp=ic_20190820_schooluniformbuyingguide_hp_bab_">School Uniform Buying Guide</a></b><br>\r\n</p>\r\n',
                                textIsRich: "true",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                  },
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                    behavior: "none",
                                  },
                                  small: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "none",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.417",
                                  medium: "0.417",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "row",
                        backgroundOption: "colour",
                        flexAlignment: "start",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                        },
                        gridWidthFactor: {
                          default: "0.500",
                          medium: "0.500",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.500",
                              medium: "0.500",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/image",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                imageHref:
                                  "/electricals/university-essentials/c10139390023?intcmp=ic_20190816_otu_hp_hom_",
                                imageAlt: "Off to university",
                                imageSrc:
                                  "//johnlewis.scene7.com/is/image/JohnLewis/hp-block-02-160819?resMode=sharp",
                                parallaxImageHeight: "100",
                                imageCaptionAlignment: "left",
                                imageCaptionType: "bottom-outside",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-large",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/title",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                title: "Off to university",
                                position: "customisedDynamicHeaderCenter",
                                headingLevel: "h3",
                                headingStyle: "h3",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;">Create a calm and focused space for studying<br>\r\n</p>\r\n',
                                textIsRich: "true",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.417",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/electricals/university-essentials/c10139390023?intcmp=ic_20190816_otu_hp_hom_">Shop University Essentials</a>&nbsp; |&nbsp;&nbsp;<a href="/browse/electricals/university-essentials/top-picks-for-university/_/N-7nmt?intcmp=ic_20190816_otutoppicks_hp_hom_">Top Picks for University</a></b><br>\r\n</p>\r\n',
                                textIsRich: "true",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                  },
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                    behavior: "none",
                                  },
                                  small: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "none",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.417",
                                  medium: "0.417",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/divider",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                dividerType: "whitespace-xlarge",
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                flexDirection: "row",
                isFullBleed: "true",
                backgroundOption: "colour",
                flexAlignment: "start",
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: true,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: true,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/overlayContainer",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        verticalPosition: "bottom",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: true,
                        },
                      },
                      nodes: [
                        {
                          type: "onejl/components/innerContainer",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "1.000",
                              medium: "1.000",
                              small: "1.000",
                              isFullBleed: true,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/overlayContainer/foregroundContainer",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                gridWidthFactor: {
                                  default: "1.000",
                                  medium: "1.000",
                                  small: "1.000",
                                  isFullBleed: true,
                                },
                              },
                              nodes: [
                                {
                                  type: "wcm/foundation/components/responsivegrid",
                                  properties: {
                                    "jcr:primaryType": "nt:unstructured",
                                    gridWidthFactor: {
                                      default: "1.000",
                                      medium: "1.000",
                                      small: "1.000",
                                      isFullBleed: true,
                                    },
                                  },
                                  nodes: [
                                    {
                                      type: "onejl/components/container",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "none",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "1.000",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: true,
                                        },
                                      },
                                      nodes: [
                                        {
                                          type: "wcm/foundation/components/responsivegrid",
                                          properties: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            gridWidthFactor: {
                                              default: "1.000",
                                              medium: "1.000",
                                              small: "1.000",
                                              isFullBleed: true,
                                            },
                                          },
                                          nodes: [
                                            {
                                              type: "onejl/components/copy",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                text: '<p style="text-align: center;">Featuring intuitive controls and voice assistant capabilities, Windows 10 laptops are designed to work as hard as you do<br>\r\n</p>\r\n',
                                                textIsRich: "true",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "2",
                                                    width: "8",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "3",
                                                    width: "6",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "none",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.500",
                                                  medium: "0.667",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/copy",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                text: '<p style="text-align: center;"><b><a href="/browse/electricals/laptops-macbooks/view-all-laptops-macbooks/windows-10/_/N-a8fZ1z0i0qv?intcmp=ic_20190816_windowslaptops_hp_ele_">Shop now</a></b></p>\r\n',
                                                textIsRich: "true",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "none",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "1.000",
                                                  medium: "1.000",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType: "whitespace-large",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "1.000",
                                                  medium: "1.000",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "1.000",
                                                  medium: "1.000",
                                                  small: "1.000",
                                                  isFullBleed: true,
                                                },
                                              },
                                              nodes: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "onejl/components/container",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                flexDirection: "row",
                                isFullBleed: "true",
                                backgroundOption: "colour",
                                flexAlignment: "start",
                                gridWidthFactor: {
                                  default: "1.000",
                                  medium: "1.000",
                                  small: "1.000",
                                  isFullBleed: true,
                                },
                              },
                              nodes: [
                                {
                                  type: "wcm/foundation/components/responsivegrid",
                                  properties: {
                                    "jcr:primaryType": "nt:unstructured",
                                    gridWidthFactor: {
                                      default: "1.000",
                                      medium: "1.000",
                                      small: "1.000",
                                      isFullBleed: true,
                                    },
                                  },
                                  nodes: [
                                    {
                                      type: "onejl/components/image",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        cmsImageDesktopSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-block-03-combined-170819?$rsp-home-hero-lg$&resMode=sharp",
                                        cmsImageWithMultipleSources: "true",
                                        cmsImageTabletSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-block-03-combined-170819?$rsp-home-hero-lg$&resMode=sharp",
                                        imageHref:
                                          "/browse/electricals/laptops-macbooks/view-all-laptops-macbooks/windows-10/_/N-a8fZ1z0i0qv?intcmp=ic_20190816_windowslaptops_hp_ele_",
                                        imageAlt: "New-In Laptops",
                                        imageSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-block-03-combined-170819?$rsp-home-hero-lg$&resMode=sharp",
                                        parallaxImageHeight: "70",
                                        imageCaptionAlignment: "left",
                                        imageCaptionType: "bottom-outside",
                                        cmsImageMobileSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-mobile-combined-200819a?$rsp-home-hero-lg$&resMode=sharp",
                                        gridWidthFactor: {
                                          default: "1.000",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: true,
                                        },
                                      },
                                      nodes: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  small: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "none",
                  },
                },
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: false,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-large",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/title",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        color: "#fe6d01",
                        title: "ONLY HERE",
                        position: "customisedDynamicHeaderCenter",
                        headingLevel: "h2",
                        headingStyle: "h2",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/title",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        color: "#111111",
                        title: "Exclusives at John Lewis & Partners",
                        position: "customisedDynamicHeaderCenter",
                        headingLevel: "h3",
                        headingStyle: "h3",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                flexDirection: "row",
                isFullWidth: "true",
                backgroundOption: "colour",
                flexAlignment: "start",
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: false,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "row",
                        backgroundOption: "colour",
                        flexAlignment: "start",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                        },
                        gridWidthFactor: {
                          default: "0.500",
                          medium: "0.500",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.500",
                              medium: "0.500",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/image",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                imageHref:
                                  "/brand/women/kin/_/N-53f3Z1z0vl67?intcmp=ic_20190816_kinwomens_hp_wom_",
                                imageAlt: "Kin Womenswear",
                                imageSrc:
                                  "//johnlewis.scene7.com/is/image/JohnLewis/hp-block-04-160819a?resMode=sharp",
                                parallaxImageHeight: "100",
                                imageCaptionAlignment: "left",
                                imageCaptionType: "bottom-outside",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    width: "12",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-large",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/title",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                title: "Contemporary cool",
                                position: "customisedDynamicHeaderCenter",
                                headingLevel: "h3",
                                headingStyle: "h3",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;">The AW19 collection sees a new focus on simplicity and balance. Shapes are sculpted or asymmetric, and every detail is important.<br />\r\n</p>\r\n',
                                textIsRich: "true",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.417",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/brand/women/kin/_/N-53f3Z1z0vl67?intcmp=ic_20190816_kinwomens_hp_wom_">Shop Kin Womenswear</a>&nbsp; |&nbsp; <a href="/our-services/personal-styling?intcmp=ic_20190816_womenspersonalstyling_hp_wom_">Book a Personal Styling&nbsp;appointment</a></b></p>\r\n',
                                textIsRich: "true",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                  },
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                    behavior: "none",
                                  },
                                  small: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "none",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.417",
                                  medium: "0.417",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        flexDirection: "row",
                        backgroundOption: "colour",
                        flexAlignment: "start",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            width: "6",
                          },
                        },
                        gridWidthFactor: {
                          default: "0.500",
                          medium: "0.500",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.500",
                              medium: "0.500",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/image",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                imageHref:
                                  "/brand/men/kin/_/N-50esZ1z0vl67?intcmp=ic_20190816_kinmens_hp_men_",
                                imageAlt: "Kin Menswear",
                                imageSrc:
                                  "//johnlewis.scene7.com/is/image/JohnLewis/hp-block-05-160819?resMode=sharp",
                                parallaxImageHeight: "100",
                                imageCaptionAlignment: "left",
                                imageCaptionType: "bottom-outside",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-large",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/title",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                title: "A modern approach",
                                position: "customisedDynamicHeaderCenter",
                                headingLevel: "h3",
                                headingStyle: "h3",
                                gridWidthFactor: {
                                  default: "0.500",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;">Wardrobe staples are revived with fresh cuts and graphic prints. Monochrome is key, while vibrant red and blue adds a pop of colour.<br>\r\n</p>\r\n',
                                textIsRich: "true",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.417",
                                  medium: "0.500",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/copy",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                text: '<p style="text-align: center;"><b><a href="/brand/men/kin/_/N-50esZ1z0vl67?intcmp=ic_20190816_kinmens_hp_men_">Shop Kin Menswear</a></b></p>\r\n',
                                textIsRich: "true",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                  },
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "1",
                                    width: "10",
                                    behavior: "none",
                                  },
                                  small: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "none",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.417",
                                  medium: "0.417",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  small: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "none",
                  },
                },
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "1.000",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: false,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                          small: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/divider",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        dividerType: "whitespace-xlarge",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                          small: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "hide",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          small: {
                            "jcr:primaryType": "nt:unstructured",
                            behavior: "none",
                          },
                        },
                        gridWidthFactor: {
                          default: "1.000",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "1.000",
                              medium: "1.000",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-xlarge",
                                gridWidthFactor: {
                                  default: "1.000",
                                  medium: "1.000",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/title",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                color: "#111111",
                                title: "Don't miss",
                                position: "customisedDynamicHeaderCenter",
                                headingLevel: "h3",
                                headingStyle: "h3",
                                gridWidthFactor: {
                                  default: "1.000",
                                  medium: "1.000",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-xlarge",
                                gridWidthFactor: {
                                  default: "1.000",
                                  medium: "1.000",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      type: "onejl/components/container",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        "cq:responsive": {
                          "jcr:primaryType": "nt:unstructured",
                          default: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: "1",
                            width: "10",
                          },
                          medium: {
                            "jcr:primaryType": "nt:unstructured",
                            offset: "1",
                            width: "10",
                          },
                        },
                        gridWidthFactor: {
                          default: "0.833",
                          medium: "0.833",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "wcm/foundation/components/responsivegrid",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.833",
                              medium: "0.833",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/container",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "0",
                                    width: "6",
                                  },
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    width: "6",
                                  },
                                  small: {
                                    "jcr:primaryType": "nt:unstructured",
                                    width: "12",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.416",
                                  medium: "0.416",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [
                                {
                                  type: "wcm/foundation/components/responsivegrid",
                                  properties: {
                                    "jcr:primaryType": "nt:unstructured",
                                    gridWidthFactor: {
                                      default: "0.416",
                                      medium: "0.416",
                                      small: "1.000",
                                      isFullBleed: false,
                                    },
                                  },
                                  nodes: [
                                    {
                                      type: "onejl/components/image",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        imageHref:
                                          "/john-lewis-partners-polka-portable-bluetooth-speaker/teal/p3360844?intcmp=ic_20190816_jlspeaker_hp_ele_",
                                        imageAlt:
                                          "John Lewis & Partners Polka Portable Bluetooth Speaker",
                                        imageSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-block-06-160819c?resMode=sharp",
                                        parallaxImageHeight: "100",
                                        imageCaptionAlignment: "centre",
                                        imageCaptionType: "bottom-outside",
                                        gridWidthFactor: {
                                          default: "0.416",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/divider",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        dividerType: "whitespace-large",
                                        gridWidthFactor: {
                                          default: "0.416",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/title",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        title: "Listen anywhere",
                                        position:
                                          "customisedDynamicHeaderCenter",
                                        headingLevel: "h3",
                                        headingStyle: "h3",
                                        gridWidthFactor: {
                                          default: "0.416",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/copy",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        text: '<p style="text-align: center;">Seamlessly connect to your smartphone or tablet and play the songs you love with the John Lewis &amp; Partners Polka Portable Speaker</p>\r\n',
                                        textIsRich: "true",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          default: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "1",
                                            width: "10",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.347",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/copy",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        text: '<p style="text-align: center;"><b><a href="/john-lewis-partners-polka-portable-bluetooth-speaker/teal/p3360844?intcmp=ic_20190816_jlspeaker_hp_ele_">Shop now</a></b></p>\r\n',
                                        textIsRich: "true",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "none",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.416",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-xlarge",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "hide",
                                  },
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "hide",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.833",
                                  medium: "0.833",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/container",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "0",
                                    width: "6",
                                  },
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    offset: "0",
                                    width: "6",
                                  },
                                  small: {
                                    "jcr:primaryType": "nt:unstructured",
                                    width: "12",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.416",
                                  medium: "0.416",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [
                                {
                                  type: "wcm/foundation/components/responsivegrid",
                                  properties: {
                                    "jcr:primaryType": "nt:unstructured",
                                    gridWidthFactor: {
                                      default: "0.416",
                                      medium: "0.416",
                                      small: "1.000",
                                      isFullBleed: false,
                                    },
                                  },
                                  nodes: [
                                    {
                                      type: "onejl/components/image",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        imageHref:
                                          "/house-by-john-lewis-quick-dry-towels/steel/p3165947?intcmp=ic_20190816_housetowels_hp_hom_",
                                        imageAlt:
                                          "House by John Lewis Quick Dry Towels",
                                        imageSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-block-07-160819?resMode=sharp",
                                        parallaxImageHeight: "100",
                                        imageCaptionAlignment: "centre",
                                        imageCaptionType: "bottom-outside",
                                        gridWidthFactor: {
                                          default: "0.416",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/divider",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        dividerType: "whitespace-large",
                                        gridWidthFactor: {
                                          default: "0.416",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/title",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        title: "Everyday favourite",
                                        position:
                                          "customisedDynamicHeaderCenter",
                                        headingLevel: "h3",
                                        headingStyle: "h3",
                                        gridWidthFactor: {
                                          default: "0.416",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/copy",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        text: '<p style="text-align: center;">Perfect for the gym or on the go, our Quick Dry Towels are crafted from a unique combination of fibres which offer fast absorbency and ultimate softness<br>\r\n</p>\r\n',
                                        textIsRich: "true",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          default: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "1",
                                            width: "10",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.347",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/copy",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        text: '<p style="text-align: center;"><b><a href="/house-by-john-lewis-quick-dry-towels/steel/p3165947?intcmp=ic_20190816_housetowels_hp_hom_">Shop now</a></b></p>\r\n',
                                        textIsRich: "true",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "none",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.416",
                                          medium: "0.416",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-xlarge",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  small: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "none",
                                  },
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "hide",
                                  },
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "hide",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.833",
                                  medium: "0.833",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                            {
                              type: "onejl/components/divider",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                dividerType: "whitespace-xlarge",
                                "cq:responsive": {
                                  "jcr:primaryType": "nt:unstructured",
                                  default: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "hide",
                                  },
                                  medium: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "hide",
                                  },
                                  small: {
                                    "jcr:primaryType": "nt:unstructured",
                                    behavior: "hide",
                                  },
                                },
                                gridWidthFactor: {
                                  default: "0.833",
                                  medium: "0.833",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/divider",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                dividerType: "whitespace-large",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  default: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                  small: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                  medium: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                },
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [],
            },
            {
              type: "onejl/components/divider",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                dividerType: "whitespace-xlarge",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  default: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                  medium: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                  small: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                },
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [],
            },
            {
              type: "onejl/components/divider",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                dividerType: "whitespace-xlarge",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  small: {
                    "jcr:primaryType": "nt:unstructured",
                    behavior: "hide",
                  },
                },
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [],
            },
            {
              type: "onejl/components/container",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                flexDirection: "row",
                backgroundOption: "colour",
                flexAlignment: "start",
                containerHref:
                  "/john-lewis-partners-4-inch-foldable-fan/oak/p4047047?intcmp=ic_20190819_twwlfan_hp_ele_",
                "cq:responsive": {
                  "jcr:primaryType": "nt:unstructured",
                  default: {
                    "jcr:primaryType": "nt:unstructured",
                    offset: "1",
                    width: "10",
                  },
                },
                gridWidthFactor: {
                  default: "0.833",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [
                {
                  type: "wcm/foundation/components/responsivegrid",
                  properties: {
                    "jcr:primaryType": "nt:unstructured",
                    gridWidthFactor: {
                      default: "0.833",
                      medium: "1.000",
                      small: "1.000",
                      isFullBleed: false,
                    },
                  },
                  nodes: [
                    {
                      type: "onejl/components/overlayContainer",
                      properties: {
                        "jcr:primaryType": "nt:unstructured",
                        verticalPosition: "center",
                        gridWidthFactor: {
                          default: "0.833",
                          medium: "1.000",
                          small: "1.000",
                          isFullBleed: false,
                        },
                      },
                      nodes: [
                        {
                          type: "onejl/components/innerContainer",
                          properties: {
                            "jcr:primaryType": "nt:unstructured",
                            gridWidthFactor: {
                              default: "0.833",
                              medium: "1.000",
                              small: "1.000",
                              isFullBleed: false,
                            },
                          },
                          nodes: [
                            {
                              type: "onejl/components/overlayContainer/foregroundContainer",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                gridWidthFactor: {
                                  default: "0.833",
                                  medium: "1.000",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [
                                {
                                  type: "wcm/foundation/components/responsivegrid",
                                  properties: {
                                    "jcr:primaryType": "nt:unstructured",
                                    gridWidthFactor: {
                                      default: "0.833",
                                      medium: "1.000",
                                      small: "1.000",
                                      isFullBleed: false,
                                    },
                                  },
                                  nodes: [
                                    {
                                      type: "onejl/components/divider",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        dividerType: "whitespace-xlarge",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          medium: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "hide",
                                          },
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "hide",
                                          },
                                          default: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "hide",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.833",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/divider",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        dividerType: "whitespace-large",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          default: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "hide",
                                          },
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "hide",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.833",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/container",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        flexDirection: "row",
                                        backgroundOption: "colour",
                                        flexAlignment: "start",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          default: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "1",
                                            width: "6",
                                          },
                                          medium: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "1",
                                            width: "6",
                                          },
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "1",
                                            width: "5",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.416",
                                          medium: "0.500",
                                          small: "0.417",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [
                                        {
                                          type: "wcm/foundation/components/responsivegrid",
                                          properties: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            gridWidthFactor: {
                                              default: "0.416",
                                              medium: "0.500",
                                              small: "0.417",
                                              isFullBleed: false,
                                            },
                                          },
                                          nodes: [
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/image",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                cmsImageDesktopSrc:
                                                  "//johnlewis.scene7.com/is/image/JohnLewis/twwl_180319?$alpha$",
                                                cmsImageWithMultipleSources:
                                                  "true",
                                                cmsImageTabletSrc:
                                                  "//johnlewis.scene7.com/is/image/JohnLewis/twwl_180319?$alpha$",
                                                imageAlt: "This Week We Love",
                                                imageSrc:
                                                  "//johnlewis.scene7.com/is/image/JohnLewis/twwl_180319?$alpha$",
                                                parallaxImageHeight: "100",
                                                imageCaptionAlignment: "left",
                                                imageCaptionType:
                                                  "bottom-outside",
                                                cmsImageMobileSrc:
                                                  "//johnlewis.scene7.com/is/image/JohnLewis/hp-twwl-mob-h2-b-260419?$alpha$",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "3",
                                                    width: "6",
                                                  },
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "3",
                                                    width: "6",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "0",
                                                    width: "9",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.208",
                                                  medium: "0.250",
                                                  small: "0.313",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-medium",
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/copy",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                text: '<p style="text-align: center;">With three speed settings and an adjustable stand, the John Lewis &amp; Partners 4” Foldable Fan is perfect for keeping cool in the office or on the go<br>\r\n</p>\r\n<p style="text-align: center;"><b><u>Shop now</u></b><br>\r\n</p>\r\n',
                                                textIsRich: "true",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    offset: "0",
                                                    width: "12",
                                                  },
                                                  small: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                            {
                                              type: "onejl/components/divider",
                                              properties: {
                                                "jcr:primaryType":
                                                  "nt:unstructured",
                                                dividerType:
                                                  "whitespace-xlarge",
                                                "cq:responsive": {
                                                  "jcr:primaryType":
                                                    "nt:unstructured",
                                                  medium: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                  default: {
                                                    "jcr:primaryType":
                                                      "nt:unstructured",
                                                    behavior: "hide",
                                                  },
                                                },
                                                gridWidthFactor: {
                                                  default: "0.416",
                                                  medium: "0.500",
                                                  small: "0.417",
                                                  isFullBleed: false,
                                                },
                                              },
                                              nodes: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              type: "onejl/components/container",
                              properties: {
                                "jcr:primaryType": "nt:unstructured",
                                flexDirection: "row",
                                backgroundOption: "colour",
                                flexAlignment: "start",
                                gridWidthFactor: {
                                  default: "0.833",
                                  medium: "1.000",
                                  small: "1.000",
                                  isFullBleed: false,
                                },
                              },
                              nodes: [
                                {
                                  type: "wcm/foundation/components/responsivegrid",
                                  properties: {
                                    "jcr:primaryType": "nt:unstructured",
                                    gridWidthFactor: {
                                      default: "0.833",
                                      medium: "1.000",
                                      small: "1.000",
                                      isFullBleed: false,
                                    },
                                  },
                                  nodes: [
                                    {
                                      type: "onejl/components/image",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        cmsImageDesktopSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-twwl-desktop-160819a?$rsp-home-hero-lg$&resMode=sharp",
                                        cmsImageWithMultipleSources: "true",
                                        cmsImageTabletSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-twwl-desktop-160819a?$rsp-home-hero-lg$&resMode=sharp",
                                        imageAlt: "This week we love",
                                        imageSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-twwl-desktop-160819a?$rsp-home-hero-lg$&resMode=sharp",
                                        parallaxImageHeight: "100",
                                        imageCaptionAlignment: "left",
                                        imageCaptionType: "bottom-outside",
                                        cmsImageMobileSrc:
                                          "//johnlewis.scene7.com/is/image/JohnLewis/hp-twwl-mob-160819?$rsp-home-hero-lg$&resMode=sharp",
                                        gridWidthFactor: {
                                          default: "0.833",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/divider",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        dividerType: "whitespace-medium",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          default: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "hide",
                                          },
                                          medium: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "hide",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.833",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                    {
                                      type: "onejl/components/copy",
                                      properties: {
                                        "jcr:primaryType": "nt:unstructured",
                                        text: '<p style="text-align: center;">With three speed settings and an adjustable stand, the John Lewis &amp; Partners 4” Foldable Fan is perfect for keeping cool in the office or on the go<br>\r\n</p>\r\n<p style="text-align: center;"><b><u>Shop now</u><br>\r\n </b></p>\r\n',
                                        textIsRich: "true",
                                        "cq:responsive": {
                                          "jcr:primaryType": "nt:unstructured",
                                          default: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            offset: "2",
                                            width: "8",
                                            behavior: "hide",
                                          },
                                          small: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "none",
                                          },
                                          medium: {
                                            "jcr:primaryType":
                                              "nt:unstructured",
                                            behavior: "hide",
                                          },
                                        },
                                        gridWidthFactor: {
                                          default: "0.555",
                                          medium: "1.000",
                                          small: "1.000",
                                          isFullBleed: false,
                                        },
                                      },
                                      nodes: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: "onejl/components/divider",
              properties: {
                "jcr:primaryType": "nt:unstructured",
                dividerType: "whitespace-xlarge",
                gridWidthFactor: {
                  default: "1.000",
                  medium: "1.000",
                  small: "1.000",
                  isFullBleed: false,
                },
              },
              nodes: [],
            },
          ],
        },
      ],
    },
    renderMissingAEMComponents: false,
    analytics: {
      pathname: "/:country?",
    },
    user: {
      basket: {
        items: 0,
      },
      greeting: "",
      signedIn: false,
      isPrivacyAccepted: true,
      shopperId: "",
      selectedCountry: {
        code: "GB",
        currency: "GBP",
        isUK: true,
      },
      isInTheUK: true,
      delivery: {
        userAtHome: true,
        showReminder: false,
      },
      countryByGeoLocation: "GB",
    },
    features: {
      persistentSearch: true,
      peepHeader: true,
      esiFooter: true,
    },
    envVars: {
      permissionsEndpoint:
        "https://api.johnlewis.com/permissions/permissions-service/api/v2/permissions",
      permissionsApiKey: "C7D6C125-7C10-4380-8C24-D1256DD1B723",
      typeaheadDelay: "500",
      typeaheadCharacterLimit: "3",
    },
  });

  return (
    <AppContext.Provider
      value={{
        lang: [lang, setLang],
        jason: [jason, setJason]
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
