export interface ModuleFields {
    moyField: string;
    creditField: string;
    scores: { [key: string]: string };
    credits?: { [key: string]: string };
    weights: number[];
    passingScore: number;
    defaultCredits: number;
}
  
export const Configuration_Module_BI5: ModuleFields[] = [
    {
    moyField: 'moyenvironement',
    creditField: 'creditonvironement',
    scores: { score1: 'moybigdata', score2: 'moydevmobile'},
    credits: { credit1: 'creditbigdata', credit2: 'creditdevmobile'},
    weights: [1.5, 1],
    passingScore: 10,
    defaultCredits: 5
    },
    {
    moyField: 'moytechinfo',
    creditField: 'credittechinfo',
    scores: { score1: 'moysecurite', score2: 'moytechit'},
    credits: { credit1: 'creditsecurite' , credit2: 'credittechit'},
    weights: [1,1.5],
    passingScore: 10,
    defaultCredits: 5
    },
    {
    moyField: 'moyanalyseavance',
    creditField: 'creditanalyseavance',
    scores: { score1: 'moypython', score2: 'moypowerbi' },
    credits: { credit1: 'creditpython', credit2: 'creditpowerbi' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moysciencedecision',
    creditField: 'creditsciencedecision',
    scores: { score1: 'moyprevision', score2: 'moydecision' },
    credits: { credit1: 'creditprevision', credit2: 'creditdecision' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moysoftskills5',
    creditField: 'creditsoftskills5',
    scores: { score1: 'moygestionprojet', score2: 'moyloi' },
    credits: { credit1: 'creditgestionprojet', credit2: 'creditloi' },
    weights: [2, 1],
    passingScore: 10,
    defaultCredits: 6
    },
    {
    moyField: 'moyUEOP5',
    creditField: 'creditUEOP5',
    scores: { score1: 'moyaos', score2: 'moyML' },
    credits: { credit1: 'creditaos', credit2: 'creditML' },
    weights: [2, 1],
    passingScore: 10,
    defaultCredits:6
    }
];

export const Subject_Coef_BI5 = {
    moybigdata: 1.5,
    moydevmobile: 1,
    moysecurite: 1,
    moytechit: 1.5,
    moypython: 1,
    moypowerbi: 1,
    moyprevision: 1,
    moydecision: 1,
    moygestionprojet: 2,
    moyloi: 1,
    moyaos: 2,
    moyML:1
};

export const Module_Credits_BI5 = [
    'creditonvironement',
    'credittechinfo',
    'creditanalyseavance',
    'creditsciencedecision',
    'creditsoftskills5',
    'creditUEOP5'
];

export const total= 15;
  