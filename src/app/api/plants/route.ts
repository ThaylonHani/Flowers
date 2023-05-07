import { NextResponse } from "next/server"

export async function GET(request: Request) {
  return NextResponse.json(
    {
      plants: [
      
        {
          id: "1",
    name: "Sunflower",
    scientificName: "Helianthus annuus",
    family: "Asteraceae",
    description: "A tall annual plant with large yellow flowers and edible seeds.",
    primaryColor: "#FFCE00",
          secondaryColor: "#8B5A2B",
    img: "/sunflower.jpg"
},
  {
    id: "2",
    name: "Rose",
    scientificName: "Rosa",
    family: "Rosaceae",
    description: "A woody perennial flowering plant with thorny stems and fragrant flowers.",
    primaryColor: "#FF007F",
    secondaryColor: "#008000",
    img: "/rose.jpg"
  },
  {
    id: "3",
    name: "Lavender",
    scientificName: "Lavandula",
    family: "Lamiaceae",
    description: "An aromatic flowering plant with purple flowers, often used in perfumes and cosmetics.",
    primaryColor: "#6B3FA0",
    secondaryColor: "#789262",
    img: '/lavender.jpg'
  },
  {
    id: "4",
    name: "Basil",
    scientificName: "Ocimum basilicum",
    family: "Lamiaceae",
    description: "An annual herb with fragrant leaves, often used in cooking.",
    primaryColor: "#7BB661",
    secondaryColor: "#FFFFFF",
    img: "/basil.jpg"
  },
  {
    id: "5",
    name: "Fern",
    scientificName: "Polypodiopsida",
    family: "Polypodiaceae",
    description: "A group of non-flowering vascular plants that reproduce via spores.",
    primaryColor: "#3F704D",
    secondaryColor: "#8B4513",
    img: "/fern.jpg"
  },
  {
    id: "6",
    name: "Orchid",
    scientificName: "Orchidaceae",
    family: "Orchidaceae",
    description: "A diverse family of flowering plants, many of which are prized for their ornamental value.",
    primaryColor: "#DA70D6",
    secondaryColor: "#98FB98",
    img: "/orchid.jpg"
  },
  {
    id: "7",
    name: "Daffodil",
    scientificName: "Narcissus",
    family: "Amaryllidaceae",
    description: "A bulbous plant with yellow or white flowers, often used in landscaping.",
    primaryColor: "#FFFF00",
    secondaryColor: "#FFFFFF",
    img: "/daffodil.jpg"
  },
  {
    id: "8",
    name: "Cactus",
    scientificName: "Cactaceae",
    family: "Cactaceae",
    description: "A group of succulent plants with distinctive spines and often brightly colored flowers.",
    primaryColor: "#006400",
    secondaryColor: "#FFD700",
    img: "/cactus.jpg"
  },
  {
    id: "9",
    name: "Tulip",
    scientificName: "Tulipa",
    family: "Liliaceae",
    description: "A bulbous plant with showy flowers, often used in gardens and as cut flowers.",
    primaryColor: "#FF007F",
    secondaryColor: "#FFFFFF",
    img: "/tulip.jpg"
  },
  {
    id: "10",
    name: "Pine",
    scientificName: "Pinus",
    family: "Pinaceae",
    description: "A group of evergreen trees with needle-like leaves and woody cones.",
    primaryColor: "#1E6E5A",
    secondaryColor: "#8B4513",
    img: "/pine.jpg"
  },
      {
        id: "11",
          name: "Maple",
          scientificName: "Acer",
          family: "Sapindaceae",
          description: "A group of deciduous trees and shrubs with distinctive lobed leaves and colorful fall foliage.",
          primaryColor: "#FFA500",
        secondaryColor: "#F2F2F2",
          img: "/maple.jpg"
      }     
     
      ]

    }
  )

}
