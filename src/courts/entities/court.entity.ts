export interface Court {
    id: string;            // identifiant unique, ex: "court-md-1"
    name: string;          // nom du court/centre
    city: string;          // ville
    imageUrl?: string;     // lien image si dispo (optionnel)
    surface?: string;      // type de surface : "clay" | "grass" | "hard"
    indoor?: boolean;      // true si indoor, false sinon
    latitude: number;      // coordonnée latitude
    longitude: number;     // coordonnée longitude
    summary: string;       // petite phrase descriptive
    favorite: boolean;     // flag géré dans ton API (par défaut false)
    details?: Record<string, any>; // infos complémentaires (nb de courts, lumières…)
  }
  