export interface Fruits {
  fruits: Fruit[]
}

export interface Fruit {
  name:          string
  color:         Color[]
  texture:       Texture
  flavor:        Flavor
  size:          Size
  shape:         Shape[]
  skin:          string
  seeds:         Seeds
  origin_region: OriginRegion
  aroma:         string[]
}

export enum Color {
  Amarilla = "Amarilla",
  Azul = "Azul",
  Blanca = "Blanca",
  Cafe = "Cafe",
  Dorada = "Dorada",
  Naranja = "Naranja",
  Negra = "Negra",
  Purpura = "Purpura",
  Roja = "Roja",
  Rosa = "Rosa",
  Verde = "Verde",
}

export enum Texture {
  Almidonada = "Almidonada",
  Cremosa = "Cremosa",
  Crujiente = "Crujiente",
  Dura = "Dura",
  Escamosa = "Escamosa",
  Fibrosa = "Fibrosa",
  Firme = "Firme",
  Gelatinoso = "Gelatinoso",
  Jugosa = "Jugosa",
  Pegajosa = "Pegajosa",
  Rugosa = "Rugosa",
  Suave = "Suave",
}

export enum Flavor {
  Agria = "Agria",
  Agridulce = "Agridulce",
  Amargo = "Amargo",
  Crujiente = "Crujiente",
  Dulce = "Dulce",
  Picante = "Picante",
  Suave = "Suave",
  Tropical = "Tropical",
}

export enum OriginRegion {
  Africa = "Africa",
  Asia = "Asia",
  CentroAmerica = "Centro America",
  Europa = "Europa",
  NorteAmerica = "Norte America",
  OrienteMedio = "Oriente Medio",
  Sudamérica = "Sudamérica",
  VariasRegionesDelMundo = "Varias regiones del mundo",
  NoEstoySeguro = "No estoy seguro",
}

export enum Seeds {
  Grandes = "Grandes",
  Medianas = "Medianas",
  Pequeñas = "Pequeñas",
}

export enum Shape {
  Alargada = "Alargada",
  Cilíndrica = "Cilíndrica",
  Cónica = "Cónica",
  EnFormaDeCorazón = "En forma de corazón",
  EnFormaDeEstrella = "En forma de estrella",
  Oblonga = "Oblonga",
  Ovalada = "Ovalada",
  Redonda = "Redonda",
}

export enum Skin {
  Abultada = "Abultada",
  Arrugada = "Arrugada",
  Delgada = "Delgada",
  Dura = "Dura",
  Escamosa = "Escamosa",
  Espinosa = "Espinosa",
  Gruesa = "Gruesa",
  Lisa = "Lisa",
  Peluda = "Peluda",
  Puntiaguda = "Puntiaguda",
  Rugosa = "Rugosa",
  Aspera = "Áspera",
}

export enum Size {
  Grande = "Grande",
  Mediana = "Mediana",
  Pequeña = "Pequeña",
}
