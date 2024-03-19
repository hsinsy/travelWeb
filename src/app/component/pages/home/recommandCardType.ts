export type recommandCardItem = {
  travelCommand: string;
  content: string;
  locationList: location[];
};

type location = {
  url: string;
  content: string;
};
