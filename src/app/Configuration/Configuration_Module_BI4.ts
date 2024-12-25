export interface ModuleFields {
    moyField: string;
    creditField: string;
    scores: { [key: string]: string };
    credits?: { [key: string]: string };
    weights: number[];
    passingScore: number;
    defaultCredits: number;
  }
  
export const Configuration_Module_BI4: ModuleFields[] = [
{
    moyField: 'moyaddpa1',
    creditField: 'creditaddpa1',
    scores: { score1: 'moydatamining', score2: 'moyweb2' },
    credits: { credit1: 'creditdatamining', credit2: 'creditweb2' },
    weights: [1, 1.5],
    passingScore: 10,
    defaultCredits: 5
},
{
    moyField: 'moymgraph',
    creditField: 'creditmgraph',
    scores: { score1: 'moygraph'},
    credits: { credit1: 'creditgraph'},
    weights: [2],
    passingScore: 10,
    defaultCredits: 4
},
{
    moyField: 'moyinglogiciel',
    creditField: 'creditinglogiciel',
    scores: { score1: 'moygenielogiciel', score2: 'moyarchilogiciel' },
    credits: { credit1: 'creditgenielogiciel', credit2: 'creditarchilogiciel' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moydb',
    creditField: 'creditdb',
    scores: { score1: 'moysgbd', score2: 'moydatawarehouse' },
    credits: { credit1: 'creditsgbd', credit2: 'creditdatawarehouse' },
    weights: [1, 1.5],
    passingScore: 10,
    defaultCredits: 5
    },
    {
    moyField: 'moysoftskills4',
    creditField: 'creditsoftskills4',
    scores: { score1: 'moyentrepreneuriat', score2: 'moyleadership',score3:'moypsolving' },
    credits: { credit1: 'creditentrepreneuriat', credit2: 'creditleadership', score3:'creditpsolving' },
    weights: [1, 1,1],
    passingScore: 10,
    defaultCredits: 6
    },
    {
    moyField: 'moyUEOP4',
    creditField: 'creditUEOP4',
    scores: { score1: 'moypoo', score2: 'moysiad' },
    credits: { credit1: 'creditpoo', credit2: 'creditsiad' },
    weights: [2, 1],
    passingScore: 10,
    defaultCredits:6
    }
];

export const Subject_Coef_BI4 = {
    moydatamining: 1,
    moyweb2: 1.5,
    moygraph: 2,
    moygenielogiciel: 1,
    moyarchilogiciel: 1,
    moysgbd: 1,
    moydatawarehouse: 1.5,
    moyentrepreneuriat: 1,
    moyleadership: 1,
    moypsolving: 1,
    moypoo: 2,
    moysiad: 1
};

export const Module_Credits_BI4 = [
'creditaddpa1',
'creditmgraph',
'creditinglogiciel',
'creditdb',
'creditsoftskills4',
'creditUEOP4'
];

export const total= 15;
  