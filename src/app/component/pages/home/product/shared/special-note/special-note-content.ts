export type noteContnetType = {
  note1: string;
  note2: string;
};

export type noteContnetListType = {
  japen: noteContnetType;
  korea: noteContnetType;
  europe: noteContnetType;
};

export const noteContnet = {
  japen: {
    note1: 'JPITINERARYINFO',
    note2: 'JPROOMTYPEINFO',
  },
  korea: {
    note1: 'KRITINERARYINFO',
    note2: 'KRFLIGHTINFO',
  },
  europe: {
    note1: 'EUITINERARYINFO1',
    note2: 'EUFLIGHTINFO1',
  },
};
