export interface ModuleFields {
    moyField: string;
    creditField: string;
    scores: { [key: string]: string };
    credits?: { [key: string]: string };
    weights: number[];
    passingScore: number;
    defaultCredits: number;
}
  
export const Configuration_Module_BC1: ModuleFields[] = [
    {
    moyField: 'moysoftskills',
    creditField: 'creditsoftskills',
    scores: { score1: 'tdcmoy', score2: 'cnmoy' ,score3: 'bcmoy'},
    credits: { credit1: 'tdccredit', credit2: 'cncredit' , credit3: 'bccredit'},
    weights: [1, 1, 1],
    passingScore: 10,
    defaultCredits: 6
    },
    {
    moyField: 'moyalgo',
    creditField: 'creditalgo',
    scores: { score1: 'algomoy'},
    credits: { credit1: 'algocredit' },
    weights: [3],
    passingScore: 10,
    defaultCredits: 6
    },
    {
    moyField: 'moysysteme',
    creditField: 'creditsysteme',
    scores: { score1: 'moyarchi', score2: 'moyos' },
    credits: { credit1: 'creditarchi', credit2: 'creditos' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moymath',
    creditField: 'creditmath',
    scores: { score1: 'moyanalyse', score2: 'moystat' },
    credits: { credit1: 'creditanalyse', credit2: 'creditstat' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moygestion',
    creditField: 'creditgestion',
    scores: { score1: 'moycompta', score2: 'moypg' },
    credits: { credit1: 'creditcompta', credit2: 'creditpg' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moyUEOP',
    creditField: 'creditUEOP',
    scores: { score1: 'multimediamoy', score2: 'webmoy' },
    credits: { credit1: 'creditmultimedia', credit2: 'webcredit' },
    weights: [2, 1],
    passingScore: 10,
    defaultCredits:6
    }
];

export const Subject_Coef_BC1 = {
    tdcmoy: 1,
    cnmoy: 1,
    bcmoy: 1,
    algomoy: 3,
    moyarchi: 1,
    moyos: 1,
    moycompta: 1,
    moypg: 1,
    moystat: 1,
    moyanalyse: 1,
    multimediamoy: 2,
    webmoy:1
};

export const Module_Credits_BC1 = [
    'creditsoftskills',
    'algocredit',
    'creditsysteme',
    'creditgestion',
    'creditmath',
    'creditUEOP'
];

export const total= 15;
  