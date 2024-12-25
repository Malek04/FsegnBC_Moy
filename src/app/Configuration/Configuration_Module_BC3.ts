export interface ModuleFields {
    moyField: string;
    creditField: string;
    scores: { [key: string]: string };
    credits?: { [key: string]: string };
    weights: number[];
    passingScore: number;
    defaultCredits: number;
  }
  
export const Configuration_Module_BC3: ModuleFields[] = [
{
    moyField: 'moyconceptionetbd',
    creditField: 'creditconceptionetbd',
    scores: { score1: 'moycoosi', score2: 'moybd' },
    credits: { credit1: 'creditcoosi', credit2: 'creditbd' },
    weights: [1, 1.5],
    passingScore: 10,
    defaultCredits: 5
},
{
    moyField: 'moypa',
    creditField: 'creditpa',
    scores: { score1: 'moypoo', score2: 'moyweb' },
    credits: { credit1: 'creditpoo', credit2: 'creditweb' },
    weights: [1.5, 1],
    passingScore: 10,
    defaultCredits: 5
},
{
    moyField: 'moystatetia',
    creditField: 'creditstatetia',
    scores: { score1: 'moystat', score2: 'moyia' },
    credits: { credit1: 'creditstat', credit2: 'creditia' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moydegitalbusiness',
    creditField: 'creditdegitalbusiness',
    scores: { score1: 'moymd', score2: 'moyen' },
    credits: { credit1: 'creditmd', credit2: 'crediten' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moysoftskills3',
    creditField: 'creditsoftskills3',
    scores: { score1: 'moyloi', score2: 'moyppp' },
    credits: { credit1: 'creditloi', credit2: 'creditppp' },
    weights: [2, 1],
    passingScore: 10,
    defaultCredits: 6
    },
    {
    moyField: 'moyUEOP3',
    creditField: 'creditUEOP3',
    scores: { score1: 'moyreseau', score2: 'moycompilation' },
    credits: { credit1: 'creditreseau', credit2: 'creditcompilation' },
    weights: [2, 1],
    passingScore: 10,
    defaultCredits:6
    }
];

export const Subject_Coef_BC3 = {
moycoosi: 1,
moybd: 1.5,
moypoo: 1.5,
moyweb: 1,
moystat: 1,
moyia: 1,
moymd: 1,
moyen: 1,
moyloi: 2,
moyppp: 1,
moyreseau: 2,
moycompilation: 1
};

export const Module_Credits_BC3 = [
'creditconceptionetbd',
'creditpa',
'creditstatetia',
'creditdegitalbusiness',
'creditsoftskills3',
'creditUEOP3'
];

export const total= 15;
  