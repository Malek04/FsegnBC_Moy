export interface ModuleFields {
    moyField: string;
    creditField: string;
    scores: { [key: string]: string };
    credits?: { [key: string]: string };
    weights: number[];
    passingScore: number;
    defaultCredits: number;
  }
  
export const Configuration_Module_BIS4: ModuleFields[] = [
{
    moyField: 'moyprocesssi',
    creditField: 'creditprocesssi',
    scores: { score1: 'moygol', score2: 'moybpm' },
    credits: { credit1: 'creditgol', credit2: 'creditbpm' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
},
{
    moyField: 'moydevelopment',
    creditField: 'creditdevelopment',
    scores: { score1: 'moyweb2', score2:'moynet'},
    credits: { credit1: 'creditweb2', credit2:'creditnet'},
    weights: [1.5,1],
    passingScore: 10,
    defaultCredits: 5
},
{
    moyField: 'moysgbdetad',
    creditField: 'creditsgbdetad',
    scores: { score1: 'moysgbd', score2: 'moybigdata' },
    credits: { credit1: 'creditsgbd', credit2: 'creditbigdata' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moymanagement',
    creditField: 'creditmanagement',
    scores: { score1: 'moysecuritesi', score2: 'moygouvernancesi' },
    credits: { credit1: 'creditsecuritesi', credit2: 'creditgouvernancesi' },
    weights: [1, 1.5],
    passingScore: 10,
    defaultCredits: 5
    },
    {
    moyField: 'moysoftskills4',
    creditField: 'creditsoftskills4',
    scores: { score1: 'moypsolving', score2: 'moyanglais'},
    credits: { credit1: 'creditpsolving', credit2: 'creditanglais'},
    weights: [2, 1],
    passingScore: 10,
    defaultCredits: 6
    },
    {
    moyField: 'moyUEOP4',
    creditField: 'creditUEOP4',
    scores: { score1: 'moyarchisi', score2: 'moypoo' },
    credits: { credit1: 'creditarchisi', credit2: 'creditpoo' },
    weights: [1, 2],
    passingScore: 10,
    defaultCredits:6
    }
];

export const Subject_Coef_BIS4 = {
    moygol: 1,
    moybpm: 1,
    moyweb2: 1.5,
    moynet: 1,
    moysgbd: 1,
    moybigdata: 1,
    moysecuritesi: 1,
    moygouvernancesi: 1.5,
    moypsolving: 2,
    moyanglais: 1,
    moyarchisi: 1,
    moypoo: 2
};

export const Module_Credits_BIS4 = [
'creditprocesssi',
'creditdevelopment',
'creditsgbdetad',
'creditmanagement',
'creditsoftskills4',
'creditUEOP4'
];

export const total= 15;
  