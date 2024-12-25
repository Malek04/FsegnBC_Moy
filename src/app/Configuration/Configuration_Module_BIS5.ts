export interface ModuleFields {
    moyField: string;
    creditField: string;
    scores: { [key: string]: string };
    credits?: { [key: string]: string };
    weights: number[];
    passingScore: number;
    defaultCredits: number;
  }
  
export const Configuration_Module_BIS5: ModuleFields[] = [
    {
    moyField: 'moySintegre',
    creditField: 'creditSintegre',
    scores: { score1: 'moySI', score2: 'moyERP' },
    credits: { credit1: 'creditSI', credit2: 'creditERP' },
    weights: [1, 1.5],
    passingScore: 10,
    defaultCredits: 5
    },
    {
    moyField: 'moygletgp',
    creditField: 'creditgletgp',
    scores: { score1: 'moygestionprojet', score2:'moygenielogiciel'},
    credits: { credit1: 'creditgestionprojet', credit2:'creditgenielogiciel'},
    weights: [1,1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moydev',
    creditField: 'creditdev',
    scores: { score1: 'moydevmobile', score2: 'moyjee' },
    credits: { credit1: 'creditdevmobile', credit2: 'creditjee' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moydecision',
    creditField: 'creditdecision',
    scores: { score1: 'moybi', score2: 'moysae' },
    credits: { credit1: 'creditbi', credit2: 'creditsae' },
    weights: [1.5, 1],
    passingScore: 10,
    defaultCredits: 5
    },
    {
    moyField: 'moysoftskills5',
    creditField: 'creditsoftskills5',
    scores: { score1: 'moygc', score2: 'moyanglais'},
    credits: { credit1: 'creditgc', credit2: 'creditanglais'},
    weights: [1.5, 1.5],
    passingScore: 10,
    defaultCredits: 6
    },
    {
    moyField: 'moyUEOP5',
    creditField: 'creditUEOP5',
    scores: { score1: 'moyaos', score2: 'moyML' },
    credits: { credit1: 'creditaos', credit2: 'creditML' },
    weights: [1.5, 1.5],
    passingScore: 10,
    defaultCredits:6
    }
];

export const Subject_Coef_BIS5 = {
    moySI: 1,
    moyERP: 1.5,
    moygestionprojet: 1,
    moygenielogiciel: 1,
    moydevmobile: 1,
    moyjee: 1,
    moybi: 1.5,
    moysae: 1,
    moygc: 1.5,
    moyanglais: 1.5,
    moyaos: 1.5,
    moyML: 1.5
};

export const Module_Credits_BIS5 = [
'creditSintegre',
'creditgletgp',
'creditdev',
'creditdecision',
'creditsoftskills5',
'creditUEOP5'
];

export const total= 15;
  