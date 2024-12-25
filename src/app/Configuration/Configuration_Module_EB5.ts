export interface ModuleFields {
    moyField: string;
    creditField: string;
    scores: { [key: string]: string };
    credits?: { [key: string]: string };
    weights: number[];
    passingScore: number;
    defaultCredits: number;
  }
  
export const Configuration_Module_EB5: ModuleFields[] = [
{
    moyField: 'moydev',
    creditField: 'creditdev',
    scores: { score1: 'moydevmobile', score2: 'moyweb' },
    credits: { credit1: 'creditdevmobile', credit2: 'creditweb' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
},
{
    moyField: 'moyinfodecisionnelle',
    creditField: 'creditinfodecisionnelle',
    scores: { score1: 'moyAI', score2:'moydatamining'},
    credits: { credit1: 'creditAI', credit2:'creditdatamining'},
    weights: [1.5,1],
    passingScore: 10,
    defaultCredits: 5
},
{
    moyField: 'moyitsecuritygestionprojet',
    creditField: 'credititsecuritygestionprojet',
    scores: { score1: 'moygestionprojet', score2: 'moysecurity' },
    credits: { credit1: 'creditgestionprojet', credit2: 'creditsecurity' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moybigdatacloud',
    creditField: 'creditbigdatacloud',
    scores: { score1: 'moypython', score2: 'moybigdata' },
    credits: { credit1: 'creditpython', credit2: 'creditbigdata' },
    weights: [1.5, 1],
    passingScore: 10,
    defaultCredits: 5
    },
    {
    moyField: 'moysoftskills5',
    creditField: 'creditsoftskills5',
    scores: { score1: 'moybc', score2: 'moyloi'},
    credits: { credit1: 'creditbc', credit2: 'creditloi'},
    weights: [1.5,1.5],
    passingScore: 10,
    defaultCredits: 6
    },
    {
    moyField: 'moyUEOP5',
    creditField: 'creditUEOP5',
    scores: { score1: 'moyaos', score2: 'moype' },
    credits: { credit1: 'creditaos', credit2: 'creditpe' },
    weights: [1.5, 1.5],
    passingScore: 10,
    defaultCredits:6
    }
];

export const Subject_Coef_EB5 = {
    moydevmobile: 1,
    moyweb: 1,
    moyAI: 1.5,
    moydatamining: 1,
    moygestionprojet: 1,
    moysecurity: 1,
    moypython: 1.5,
    moybigdata: 1,
    moybc: 1.5,
    moyloi: 1.5,
    moyaos: 1.5,
    tppe: 1.5
};

export const Module_Credits_EB5 = [
'creditdev',
'creditinfodecisionnelle',
'credititsecuritygestionprojet',
'creditbigdatacloud',
'creditsoftskills5',
'creditUEOP5'
];

export const total= 15;
  