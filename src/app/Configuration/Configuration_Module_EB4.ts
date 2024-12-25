export interface ModuleFields {
    moyField: string;
    creditField: string;
    scores: { [key: string]: string };
    credits?: { [key: string]: string };
    weights: number[];
    passingScore: number;
    defaultCredits: number;
  }
  
export const Configuration_Module_EB4: ModuleFields[] = [
{
    moyField: 'moysgbdetweb',
    creditField: 'creditsgbdetweb',
    scores: { score1: 'moysgbd', score2: 'moyweb2' },
    credits: { credit1: 'creditsgbd', credit2: 'creditweb2' },
    weights: [1.5, 1],
    passingScore: 10,
    defaultCredits: 5
},
{
    moyField: 'moytbetro',
    creditField: 'credittbetro',
    scores: { score1: 'moyscoring', score2:'moyro'},
    credits: { credit1: 'creditscoring', credit2:'creditro'},
    weights: [1,1],
    passingScore: 10,
    defaultCredits: 4
},
{
    moyField: 'moysysinfo',
    creditField: 'creditsysinfo',
    scores: { score1: 'moyitmanagement', score2: 'moyagl' },
    credits: { credit1: 'crediitmanagement', credit2: 'creditagl' },
    weights: [1, 1.5],
    passingScore: 10,
    defaultCredits: 5
    },
    {
    moyField: 'moydatawarehouseetcrm',
    creditField: 'creditdatawarehouseetcrm',
    scores: { score1: 'moydatawarehouse', score2: 'moycrm' },
    credits: { credit1: 'creditdatawarehouse', credit2: 'creditcrm' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moysoftskills4',
    creditField: 'creditsoftskills4',
    scores: { score1: 'moypsolving', score2: 'moybc', score3:'moyentrepreneuriat'},
    credits: { credit1: 'creditpsolving', credit2: 'creditbc', credit3:'creditentrepreneuriat'},
    weights: [1,1,1],
    passingScore: 10,
    defaultCredits: 6
    },
    {
    moyField: 'moyUEOP4',
    creditField: 'creditUEOP4',
    scores: { score1: 'moysecurite', score2: 'moypoo' },
    credits: { credit1: 'creditsecurite', credit2: 'creditpoo' },
    weights: [1, 2],
    passingScore: 10,
    defaultCredits:6
    }
];

export const Subject_Coef_EB4 = {
    moysgbd: 1.5,
    moyweb2: 1,
    moyscoring: 1,
    moyro: 1,
    moyitmanagement: 1,
    moyagl: 1.5,
    moydatawarehouse: 1,
    moycrm: 1,
    moypsolving: 1,
    moybc: 1,
    moyentrepreneuriat: 1,
    moysecurite: 1,
    moypoo: 2
};

export const Module_Credits_EB4 = [
'creditsgbdetweb',
'credittbetro',
'creditsysinfo',
'creditdatawarehouseetcrm',
'creditsoftskills4',
'creditUEOP4'
];

export const total= 15;
  