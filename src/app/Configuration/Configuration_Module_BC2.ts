export interface ModuleFields {
    moyField: string;
    creditField: string;
    scores: { [key: string]: string };
    credits?: { [key: string]: string };
    weights: number[];
    passingScore: number;
    defaultCredits: number;
}
  
export const Configuration_Module_BC2: ModuleFields[] = [
{
    moyField: 'moysoftskills2',
    creditField: 'creditsoftskills2',
    scores: { score1: 'tdc2moy', score2: 'bc2moy' },
    credits: { credit1: 'tdc2credit', credit2: 'bc2credit' },
    weights: [1, 2],
    passingScore: 10,
    defaultCredits: 6
},
{
    moyField: 'moyalgo2',
    creditField: 'creditalgo2',
    scores: { score1: 'algo2moy'},
    credits: { credit1: 'algo2credit' },
    weights: [3],
    passingScore: 10,
    defaultCredits: 6
},
{
    moyField: 'moysysteme2',
    creditField: 'creditsysteme2',
    scores: { score1: 'moysystemedinformation', score2: 'moyreseau' },
    credits: { credit1: 'creditsystemedinformation', credit2: 'creditreseau' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moymath2',
    creditField: 'creditmath2',
    scores: { score1: 'moyalgebre', score2: 'moylogiquemath' },
    credits: { credit1: 'creditalgebre', credit2: 'creditlogiquemath' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moygestion2',
    creditField: 'creditgestion2',
    scores: { score1: 'moysic', score2: 'moygf' },
    credits: { credit1: 'creditsic', credit2: 'creditgf' },
    weights: [1, 1],
    passingScore: 10,
    defaultCredits: 4
    },
    {
    moyField: 'moyUEOP2',
    creditField: 'creditUEOP2',
    scores: { score1: 'moyos2', score2: 'bdmoy' },
    credits: { credit1: 'creditos2', credit2: 'creditbd' },
    weights: [2, 1],
    passingScore: 10,
    defaultCredits:6
    }
];

export const Subject_Coef_BC2 = {
    tdc2moy: 1,
    bc2moy: 2,
    algo2moy: 3,
    moysystemedinformation: 1,
    moyreseau: 1,
    moyalgebre: 1,
    moylogiquemath: 1,
    moysic: 1,
    moygf: 1,
    moyos2: 2,
    bdmoy: 1,
};

export const Module_Credits_BC2 = [
    'creditsoftskills2',
    'algo2credit',
    'creditsysteme2',
    'creditmath2',
    'creditgestion2',
    'creditUEOP2'
];

export const total= 15;
  